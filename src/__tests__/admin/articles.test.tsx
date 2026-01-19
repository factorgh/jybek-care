import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { useRouter } from 'next/navigation';
import ArticlesPage from '@/app/admin/dashboard/articles/page';
import '@testing-library/jest-dom';

// Mock Next.js router
jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
  useSearchParams: jest.fn(() => ({
    get: jest.fn(),
  }),
}));

// Mock fetch
global.fetch = jest.fn();

// Mock data
const mockArticles = [
  {
    _id: '1',
    title: 'Test Article 1',
    slug: 'test-article-1',
    excerpt: 'Test excerpt 1',
    content: 'Test content 1',
    author: 'Test Author',
    published: true,
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-01T00:00:00.000Z',
  },
  {
    _id: '2',
    title: 'Test Article 2',
    slug: 'test-article-2',
    excerpt: 'Test excerpt 2',
    content: 'Test content 2',
    author: 'Test Author 2',
    published: false,
    createdAt: '2024-01-02T00:00:00.000Z',
    updatedAt: '2024-01-02T00:00:00.000Z',
  },
];

describe('Articles Admin Dashboard', () => {
  const mockPush = jest.fn();
  
  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({
      push: mockPush,
      replace: jest.fn(),
      back: jest.fn(),
      forward: jest.fn(),
      refresh: jest.fn(),
      prefetch: jest.fn(),
    });
    
    (fetch as jest.Mock).mockClear();
  });

  describe('Articles List Page', () => {
    it('should render articles list correctly', async () => {
      (fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: async () => ({ articles: mockArticles }),
      });

      render(<ArticlesPage />);

      await waitFor(() => {
        expect(screen.getByText('Articles')).toBeInTheDocument();
        expect(screen.getByText('Test Article 1')).toBeInTheDocument();
        expect(screen.getByText('Test Article 2')).toBeInTheDocument();
        expect(screen.getByText('Test excerpt 1')).toBeInTheDocument();
        expect(screen.getByText('Test excerpt 2')).toBeInTheDocument();
      });
    });

    it('should show loading state while fetching articles', () => {
      (fetch as jest.Mock).mockImplementation(() => new Promise(() => {}));
      
      render(<ArticlesPage />);
      
      expect(screen.getByText('Loading articles...')).toBeInTheDocument();
    });

    it('should show error message when fetch fails', async () => {
      (fetch as jest.Mock).mockResolvedValueOnce({
        ok: false,
        status: 500,
      });

      render(<ArticlesPage />);

      await waitFor(() => {
        expect(screen.getByText(/Failed to load articles/)).toBeInTheDocument();
      });
    });

    it('should navigate to new article page when "New Article" is clicked', async () => {
      (fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: async () => ({ articles: mockArticles }),
      });

      render(<ArticlesPage />);

      await waitFor(() => {
        const newArticleButton = screen.getByText('New Article');
        fireEvent.click(newArticleButton);
      });

      expect(mockPush).toHaveBeenCalledWith('/admin/dashboard/articles/new');
    });

    it('should navigate to edit page when edit button is clicked', async () => {
      (fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: async () => ({ articles: mockArticles }),
      });

      render(<ArticlesPage />);

      await waitFor(() => {
        const editButtons = screen.getAllByText('Edit');
        fireEvent.click(editButtons[0]);
      });

      expect(mockPush).toHaveBeenCalledWith('/admin/dashboard/articles/1');
    });

    it('should handle article deletion correctly', async () => {
      (fetch as jest.Mock)
        .mockResolvedValueOnce({
          ok: true,
          json: async () => ({ articles: mockArticles }),
        })
        .mockResolvedValueOnce({
          ok: true,
          json: async () => ({ success: true }),
        });

      render(<ArticlesPage />);

      await waitFor(() => {
        const deleteButtons = screen.getAllByText('Delete');
        fireEvent.click(deleteButtons[0]);
      });

      // Confirm deletion
      await waitFor(() => {
        const confirmButton = screen.getByText('Delete Article');
        fireEvent.click(confirmButton);
      });

      await waitFor(() => {
        expect(fetch).toHaveBeenCalledWith(
          '/api/admin/articles/1',
          expect.objectContaining({
            method: 'DELETE',
          })
        );
      });
    });

    it('should toggle article publish status', async () => {
      (fetch as jest.Mock)
        .mockResolvedValueOnce({
          ok: true,
          json: async () => ({ articles: mockArticles }),
        })
        .mockResolvedValueOnce({
          ok: true,
          json: async () => ({ 
            success: true, 
            article: { ...mockArticles[0], published: false } 
          }),
        });

      render(<ArticlesPage />);

      await waitFor(() => {
        const toggleButtons = screen.getAllByRole('switch');
        fireEvent.click(toggleButtons[0]);
      });

      await waitFor(() => {
        expect(fetch).toHaveBeenCalledWith(
          '/api/admin/articles/1/toggle-publish',
          expect.objectContaining({
            method: 'PATCH',
          })
        );
      });
    });

    it('should filter articles by search term', async () => {
      (fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: async () => ({ articles: mockArticles }),
      });

      render(<ArticlesPage />);

      await waitFor(() => {
        const searchInput = screen.getByPlaceholderText('Search articles...');
        fireEvent.change(searchInput, { target: { value: 'Test Article 1' } });
      });

      await waitFor(() => {
        expect(screen.getByText('Test Article 1')).toBeInTheDocument();
        expect(screen.queryByText('Test Article 2')).not.toBeInTheDocument();
      });
    });

    it('should filter articles by status', async () => {
      (fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: async () => ({ articles: mockArticles }),
      });

      render(<ArticlesPage />);

      await waitFor(() => {
        const statusFilter = screen.getByRole('combobox');
        fireEvent.change(statusFilter, { target: { value: 'published' } });
      });

      await waitFor(() => {
        expect(screen.getByText('Test Article 1')).toBeInTheDocument();
        expect(screen.queryByText('Test Article 2')).not.toBeInTheDocument();
      });
    });
  });
});
