import { NextRequest } from "next/server";
import { GET, POST, PUT, DELETE } from "@/app/api/admin/articles/[id]/route";
import {
  GET as GetAllArticles,
  POST as CreateArticle,
} from "@/app/api/admin/articles/route";

// Mock the database models
jest.mock("@/lib/db/models/Article", () => ({
  find: jest.fn(),
  findById: jest.fn(),
  findByIdAndUpdate: jest.fn(),
  findByIdAndDelete: jest.fn(),
  create: jest.fn(),
  save: jest.fn(),
}));

// Mock authentication
jest.mock("@/lib/auth", () => ({
  authenticateAdmin: jest.fn(() =>
    Promise.resolve({ id: "admin1", email: "admin@test.com" }),
  ),
}));

describe("/api/admin/articles API", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe("GET /api/admin/articles", () => {
    it("should return all articles for authenticated admin", async () => {
      const mockArticles = [
        { _id: "1", title: "Test Article 1", published: true },
        { _id: "2", title: "Test Article 2", published: false },
      ];

      const Article = require("@/lib/db/models/Article");
      Article.find.mockResolvedValue(mockArticles);

      const request = new NextRequest(
        "http://localhost:3000/api/admin/articles",
      );
      const response = await GetAllArticles(request);

      expect(response.status).toBe(200);
      const data = await response.json();
      expect(data.articles).toEqual(mockArticles);
    });

    it("should return 401 for unauthenticated requests", async () => {
      const { authenticateAdmin } = require("@/lib/auth");
      authenticateAdmin.mockRejectedValue(new Error("Unauthorized"));

      const request = new NextRequest(
        "http://localhost:3000/api/admin/articles",
      );
      const response = await GetAllArticles(request);

      expect(response.status).toBe(401);
    });

    it("should handle database errors", async () => {
      const Article = require("@/lib/db/models/Article");
      Article.find.mockRejectedValue(new Error("Database error"));

      const request = new NextRequest(
        "http://localhost:3000/api/admin/articles",
      );
      const response = await GetAllArticles(request);

      expect(response.status).toBe(500);
    });
  });

  describe("POST /api/admin/articles", () => {
    it("should create a new article", async () => {
      const newArticle = {
        title: "New Article",
        slug: "new-article",
        content: "Article content",
        excerpt: "Article excerpt",
        author: "Test Author",
        published: true,
      };

      const Article = require("@/lib/db/models/Article");
      Article.create.mockResolvedValue({ _id: "3", ...newArticle });

      const request = new NextRequest(
        "http://localhost:3000/api/admin/articles",
        {
          method: "POST",
          body: JSON.stringify(newArticle),
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

      const response = await CreateArticle(request);

      expect(response.status).toBe(201);
      const data = await response.json();
      expect(data.article).toEqual({ _id: "3", ...newArticle });
      expect(Article.create).toHaveBeenCalledWith(newArticle);
    });

    it("should validate required fields", async () => {
      const incompleteArticle = {
        title: "Incomplete Article",
        // Missing required fields
      };

      const request = new NextRequest(
        "http://localhost:3000/api/admin/articles",
        {
          method: "POST",
          body: JSON.stringify(incompleteArticle),
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

      const response = await CreateArticle(request);

      expect(response.status).toBe(400);
      const data = await response.json();
      expect(data.error).toContain("required");
    });

    it("should generate slug from title if not provided", async () => {
      const articleWithoutSlug = {
        title: "Test Article Title",
        content: "Content",
        excerpt: "Excerpt",
        author: "Author",
        published: true,
      };

      const Article = require("@/lib/db/models/Article");
      Article.create.mockResolvedValue({
        _id: "4",
        ...articleWithoutSlug,
        slug: "test-article-title",
      });

      const request = new NextRequest(
        "http://localhost:3000/api/admin/articles",
        {
          method: "POST",
          body: JSON.stringify(articleWithoutSlug),
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

      const response = await CreateArticle(request);

      expect(response.status).toBe(201);
      expect(Article.create).toHaveBeenCalledWith(
        expect.objectContaining({ slug: "test-article-title" }),
      );
    });
  });

  describe("GET /api/admin/articles/[id]", () => {
    it("should return a specific article", async () => {
      const mockArticle = {
        _id: "1",
        title: "Test Article",
        content: "Content",
        published: true,
      };

      const Article = require("@/lib/db/models/Article");
      Article.findById.mockResolvedValue(mockArticle);

      const request = new NextRequest(
        "http://localhost:3000/api/admin/articles/1",
      );
      const response = await GET(request, { params: { id: "1" } });

      expect(response.status).toBe(200);
      const data = await response.json();
      expect(data.article).toEqual(mockArticle);
      expect(Article.findById).toHaveBeenCalledWith("1");
    });

    it("should return 404 for non-existent article", async () => {
      const Article = require("@/lib/db/models/Article");
      Article.findById.mockResolvedValue(null);

      const request = new NextRequest(
        "http://localhost:3000/api/admin/articles/999",
      );
      const response = await GET(request, { params: { id: "999" } });

      expect(response.status).toBe(404);
      const data = await response.json();
      expect(data.error).toBe("Article not found");
    });
  });

  describe("PUT /api/admin/articles/[id]", () => {
    it("should update an article", async () => {
      const updatedArticle = {
        _id: "1",
        title: "Updated Article",
        content: "Updated content",
        published: false,
      };

      const Article = require("@/lib/db/models/Article");
      Article.findById.mockResolvedValue({
        _id: "1",
        title: "Original Article",
      });
      Article.findByIdAndUpdate.mockResolvedValue(updatedArticle);

      const request = new NextRequest(
        "http://localhost:3000/api/admin/articles/1",
        {
          method: "PUT",
          body: JSON.stringify(updatedArticle),
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

      const response = await PUT(request, { params: { id: "1" } });

      expect(response.status).toBe(200);
      const data = await response.json();
      expect(data.article).toEqual(updatedArticle);
    });

    it("should return 404 when updating non-existent article", async () => {
      const Article = require("@/lib/db/models/Article");
      Article.findById.mockResolvedValue(null);

      const updateData = { title: "Updated Title" };
      const request = new NextRequest(
        "http://localhost:3000/api/admin/articles/999",
        {
          method: "PUT",
          body: JSON.stringify(updateData),
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

      const response = await PUT(request, { params: { id: "999" } });

      expect(response.status).toBe(404);
    });
  });

  describe("DELETE /api/admin/articles/[id]", () => {
    it("should delete an article", async () => {
      const mockArticle = { _id: "1", title: "Article to Delete" };

      const Article = require("@/lib/db/models/Article");
      Article.findById.mockResolvedValue(mockArticle);
      Article.findByIdAndDelete.mockResolvedValue(mockArticle);

      const request = new NextRequest(
        "http://localhost:3000/api/admin/articles/1",
        {
          method: "DELETE",
        },
      );

      const response = await DELETE(request, { params: { id: "1" } });

      expect(response.status).toBe(200);
      const data = await response.json();
      expect(data.success).toBe(true);
      expect(Article.findByIdAndDelete).toHaveBeenCalledWith("1");
    });

    it("should return 404 when deleting non-existent article", async () => {
      const Article = require("@/lib/db/models/Article");
      Article.findById.mockResolvedValue(null);

      const request = new NextRequest(
        "http://localhost:3000/api/admin/articles/999",
        {
          method: "DELETE",
        },
      );

      const response = await DELETE(request, { params: { id: "999" } });

      expect(response.status).toBe(404);
    });
  });
});
