# Testing Setup for Jybek Home Care

This directory contains comprehensive tests for the admin section covering both article and job CRUD operations.

## 📁 Test Structure

```
src/__tests__/
├── admin/
│   ├── articles.test.tsx    # Admin articles UI tests
│   └── jobs.test.tsx        # Admin jobs UI tests
├── api/
│   └── admin/
│       ├── articles.test.ts     # Articles API tests
│       └── jobs.test.ts        # Jobs API tests
└── README.md                # This file
```

## 🧪 Test Coverage

### Admin UI Tests

- **Articles Dashboard**: List, create, edit, delete, publish/unpublish
- **Jobs Dashboard**: List, create, edit, delete, publish/unpublish, featured toggle
- **Search & Filtering**: By title, department, type, status
- **Navigation**: Routing between admin pages
- **Error Handling**: Loading states, error messages, validation

### API Tests

- **Authentication**: Admin authentication for all endpoints
- **CRUD Operations**: Create, Read, Update, Delete for both articles and jobs
- **Validation**: Required fields, data validation, error responses
- **Edge Cases**: Non-existent resources, unauthorized access

## 🛠️ Installation & Setup

### 1. Install Dependencies

```bash
npm install --save-dev @testing-library/react @testing-library/jest-dom @testing-library/user-event @types/jest jest jest-environment-jsdom
```

### 2. Run Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

## 📊 Coverage Goals

- **Branches**: 70%
- **Functions**: 70%
- **Lines**: 70%
- **Statements**: 70%

## 🔧 Configuration

### Jest Configuration (`jest.config.js`)

- Next.js integration
- Path mapping (`@/` aliases)
- DOM environment
- Coverage thresholds
- Test file patterns

### Setup File (`jest.setup.js`)

- Testing library DOM extensions
- Next.js router mocks
- Image component mock
- Browser API mocks (matchMedia, IntersectionObserver, ResizeObserver)

## 📝 Writing Tests

### Component Tests Example

```typescript
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { useRouter } from 'next/navigation';

// Mock Next.js router
jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

describe('Component Tests', () => {
  it('should render correctly', async () => {
    render(<Component />);

    await waitFor(() => {
      expect(screen.getByText('Expected Text')).toBeInTheDocument();
    });
  });
});
```

### API Tests Example

```typescript
import { NextRequest } from "next/server";

// Mock database models
jest.mock("@/lib/db/models/Model", () => ({
  find: jest.fn(),
  create: jest.fn(),
}));

describe("API Tests", () => {
  it("should handle requests correctly", async () => {
    const Model = require("@/lib/db/models/Model");
    Model.find.mockResolvedValue(mockData);

    const request = new NextRequest("http://localhost:3000/api/endpoint");
    const response = await handler(request);

    expect(response.status).toBe(200);
  });
});
```

## 🎯 Test Best Practices

### 1. Test Structure

- **Arrange**: Setup test data and mocks
- **Act**: Perform the action being tested
- **Assert**: Verify the expected outcome

### 2. Mocking Strategy

- Mock external dependencies (APIs, database)
- Use consistent mock data across tests
- Clear mocks between tests (`beforeEach`)

### 3. Async Testing

- Use `waitFor` for async operations
- Test loading and error states
- Handle promises properly

### 4. Accessibility

- Test with semantic HTML elements
- Use `getByRole` for interactive elements
- Verify ARIA labels and attributes

### 5. User Interactions

- Use `fireEvent` for user actions
- Test form submissions and navigation
- Verify state changes

## 🐛 Debugging Tests

### Common Issues

1. **Import Errors**: Check path mapping in jest.config.js
2. **Mock Failures**: Verify mock implementations
3. **Async Issues**: Use proper async/await patterns
4. **DOM Timing**: Use waitFor for DOM updates

### Debug Commands

```bash
# Run specific test file
npm test articles.test.tsx

# Run with verbose output
npm test --verbose

# Run tests matching pattern
npm test --testNamePattern="should render"
```

## 📈 CI/CD Integration

### GitHub Actions Example

```yaml
- name: Run Tests
  run: |
    npm ci
    npm run test:coverage
```

### Coverage Reports

- HTML reports generated in `coverage/lcov-report/`
- LCov data in `coverage/lcov.info`
- Console summary with coverage percentages

## 🔍 Test Files Description

### `articles.test.tsx`

Tests the articles admin dashboard functionality:

- Article listing and pagination
- Create/edit/delete operations
- Publish/unpublish toggles
- Search and filtering
- Form validation

### `jobs.test.tsx`

Tests the jobs admin dashboard functionality:

- Job listing and management
- CRUD operations for job postings
- Featured status toggles
- Department and type filtering
- Application deadline handling

### `api/admin/articles.test.ts`

Tests the articles API endpoints:

- GET /api/admin/articles (list all)
- POST /api/admin/articles (create)
- GET /api/admin/articles/[id] (get one)
- PUT /api/admin/articles/[id] (update)
- DELETE /api/admin/articles/[id] (delete)

### `api/admin/jobs.test.ts`

Tests the jobs API endpoints:

- All CRUD operations for jobs
- Authentication and authorization
- Data validation and error handling
- File upload functionality (if applicable)

## 🚀 Next Steps

1. **Add E2E Tests**: Use Playwright or Cypress for full user flows
2. **Visual Regression**: Add visual testing for UI components
3. **Performance Tests**: Add load testing for API endpoints
4. **Integration Tests**: Test component interactions with real APIs
5. **Accessibility Tests**: Add automated accessibility testing

## 📚 Resources

- [Jest Documentation](https://jestjs.io/docs/getting-started)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)
- [Next.js Testing](https://nextjs.org/docs/testing)
- [Testing Best Practices](https://kentcdodds.com/blog/common-mistakes-with-react-testing-library)
