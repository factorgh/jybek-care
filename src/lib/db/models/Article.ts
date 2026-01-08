import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IArticle extends Document {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  image: string;
  author: string;
  authorImage?: string;
  readTime: string;
  featured: boolean;
  published: boolean;
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
}

const ArticleSchema = new Schema<IArticle>(
  {
    title: {
      type: String,
      required: [true, 'Title is required'],
      trim: true,
    },
    slug: {
      type: String,
      required: [true, 'Slug is required'],
      unique: true,
      lowercase: true,
      trim: true,
    },
    excerpt: {
      type: String,
      required: [true, 'Excerpt is required'],
      maxlength: [300, 'Excerpt cannot exceed 300 characters'],
    },
    content: {
      type: String,
      required: [true, 'Content is required'],
    },
    category: {
      type: String,
      required: [true, 'Category is required'],
      enum: [
        'Caregiving Tips',
        'Health & Wellness',
        'Family Support',
        'Senior Living',
        'Jybek News',
        'Industry Insights',
      ],
    },
    image: {
      type: String,
      required: [true, 'Image is required'],
    },
    author: {
      type: String,
      required: [true, 'Author is required'],
    },
    authorImage: {
      type: String,
      default: '/images/authors/default.jpg',
    },
    readTime: {
      type: String,
      required: [true, 'Read time is required'],
    },
    featured: {
      type: Boolean,
      default: false,
    },
    published: {
      type: Boolean,
      default: false,
    },
    tags: [{
      type: String,
      trim: true,
    }],
  },
  {
    timestamps: true,
  }
);

// Create slug from title before saving
ArticleSchema.pre('save', function () {
  if (this.isModified('title') && !this.slug) {
    this.slug = this.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)+/g, '');
  }
});

// Index for search
ArticleSchema.index({ title: 'text', excerpt: 'text', content: 'text' });

const Article: Model<IArticle> = mongoose.models.Article || mongoose.model<IArticle>('Article', ArticleSchema);

export default Article;

