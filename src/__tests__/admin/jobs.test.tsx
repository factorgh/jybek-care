import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { useRouter } from 'next/navigation';
import JobsPage from '@/app/admin/dashboard/jobs/page';
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
const mockJobs = [
  {
    _id: '1',
    title: 'Senior Caregiver',
    slug: 'senior-caregiver',
    department: 'Caregiving',
    location: 'Boston, MA',
    type: 'Full-time',
    description: 'We are seeking compassionate and experienced Senior Caregivers...',
    requirements: [
      'Minimum 2 years of caregiving experience',
      'CPR and First Aid certification',
      'Valid driver\'s license and reliable transportation'
    ],
    responsibilities: [
      'Assist clients with personal care and hygiene',
      'Prepare meals and assist with feeding',
      'Provide companionship and emotional support'
    ],
    benefits: [
      'Competitive salary ($18-$22/hour)',
      'Health, dental, and vision insurance',
      '401(k) retirement plan'
    ],
    salary: '$18-$22/hour',
    featured: true,
    published: true,
    applicationDeadline: '2024-02-15T00:00:00.000Z',
    createdAt: '2024-01-10T00:00:00.000Z',
    updatedAt: '2024-01-10T00:00:00.000Z',
  },
  {
    _id: '2',
    title: 'Registered Nurse (RN)',
    slug: 'registered-nurse-rn',
    department: 'Nursing',
    location: 'Providence, RI',
    type: 'Full-time',
    description: 'Join our team of dedicated Registered Nurses...',
    requirements: [
      'Valid RN license in state of practice',
      'Minimum 1 year of clinical experience',
      'BLS certification'
    ],
    responsibilities: [
      'Provide skilled nursing care to clients',
      'Develop and implement care plans',
      'Administer medications and treatments'
    ],
    benefits: [
      'Excellent salary ($30-$38/hour)',
      'Comprehensive health benefits',
      'Malpractice insurance coverage'
    ],
    salary: '$30-$38/hour',
    featured: false,
    published: false,
    applicationDeadline: '2024-02-20T00:00:00.000Z',
    createdAt: '2024-01-08T00:00:00.000Z',
    updatedAt: '2024-01-08T00:00:00.000Z',
  },
];

describe('Jobs Admin Dashboard', () => {
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

  describe('Jobs List Page', () => {
    it('should render jobs list correctly', async () => {
      (fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: async () => ({ jobs: mockJobs }),
      });

      render(<JobsPage />);

      await waitFor(() => {
        expect(screen.getByText('Jobs')).toBeInTheDocument();
        expect(screen.getByText('Senior Caregiver')).toBeInTheDocument();
        expect(screen.getByText('Registered Nurse (RN)')).toBeInTheDocument();
        expect(screen.getByText('Caregiving')).toBeInTheDocument();
        expect(screen.getByText('Nursing')).toBeInTheDocument();
        expect(screen.getByText('Boston, MA')).toBeInTheDocument();
        expect(screen.getByText('Providence, RI')).toBeInTheDocument();
      });
    });

    it('should show loading state while fetching jobs', () => {
      (fetch as jest.Mock).mockImplementation(() => new Promise(() => {}));
      
      render(<JobsPage />);
      
      expect(screen.getByText('Loading jobs...')).toBeInTheDocument();
    });

    it('should show error message when fetch fails', async () => {
      (fetch as jest.Mock).mockResolvedValueOnce({
        ok: false,
        status: 500,
      });

      render(<JobsPage />);

      await waitFor(() => {
        expect(screen.getByText(/Failed to load jobs/)).toBeInTheDocument();
      });
    });

    it('should navigate to new job page when "New Job" is clicked', async () => {
      (fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: async () => ({ jobs: mockJobs }),
      });

      render(<JobsPage />);

      await waitFor(() => {
        const newJobButton = screen.getByText('New Job');
        fireEvent.click(newJobButton);
      });

      expect(mockPush).toHaveBeenCalledWith('/admin/dashboard/jobs/new');
    });

    it('should navigate to edit page when edit button is clicked', async () => {
      (fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: async () => ({ jobs: mockJobs }),
      });

      render(<JobsPage />);

      await waitFor(() => {
        const editButtons = screen.getAllByText('Edit');
        fireEvent.click(editButtons[0]);
      });

      expect(mockPush).toHaveBeenCalledWith('/admin/dashboard/jobs/1');
    });

    it('should handle job deletion correctly', async () => {
      (fetch as jest.Mock)
        .mockResolvedValueOnce({
          ok: true,
          json: async () => ({ jobs: mockJobs }),
        })
        .mockResolvedValueOnce({
          ok: true,
          json: async () => ({ success: true }),
        });

      render(<JobsPage />);

      await waitFor(() => {
        const deleteButtons = screen.getAllByText('Delete');
        fireEvent.click(deleteButtons[0]);
      });

      // Confirm deletion
      await waitFor(() => {
        const confirmButton = screen.getByText('Delete Job');
        fireEvent.click(confirmButton);
      });

      await waitFor(() => {
        expect(fetch).toHaveBeenCalledWith(
          '/api/admin/jobs/1',
          expect.objectContaining({
            method: 'DELETE',
          })
        );
      });
    });

    it('should toggle job publish status', async () => {
      (fetch as jest.Mock)
        .mockResolvedValueOnce({
          ok: true,
          json: async () => ({ jobs: mockJobs }),
        })
        .mockResolvedValueOnce({
          ok: true,
          json: async () => ({ 
            success: true, 
            job: { ...mockJobs[0], published: false } 
          }),
        });

      render(<JobsPage />);

      await waitFor(() => {
        const toggleButtons = screen.getAllByRole('switch');
        fireEvent.click(toggleButtons[0]);
      });

      await waitFor(() => {
        expect(fetch).toHaveBeenCalledWith(
          '/api/admin/jobs/1/toggle-publish',
          expect.objectContaining({
            method: 'PATCH',
          })
        );
      });
    });

    it('should toggle job featured status', async () => {
      (fetch as jest.Mock)
        .mockResolvedValueOnce({
          ok: true,
          json: async () => ({ jobs: mockJobs }),
        })
        .mockResolvedValueOnce({
          ok: true,
          json: async () => ({ 
            success: true, 
            job: { ...mockJobs[0], featured: false } 
          }),
        });

      render(<JobsPage />);

      await waitFor(() => {
        const featuredButtons = screen.getAllByText('Featured');
        fireEvent.click(featuredButtons[0]);
      });

      await waitFor(() => {
        expect(fetch).toHaveBeenCalledWith(
          '/api/admin/jobs/1/toggle-featured',
          expect.objectContaining({
            method: 'PATCH',
          })
        );
      });
    });

    it('should filter jobs by search term', async () => {
      (fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: async () => ({ jobs: mockJobs }),
      });

      render(<JobsPage />);

      await waitFor(() => {
        const searchInput = screen.getByPlaceholderText('Search jobs...');
        fireEvent.change(searchInput, { target: { value: 'Senior Caregiver' } });
      });

      await waitFor(() => {
        expect(screen.getByText('Senior Caregiver')).toBeInTheDocument();
        expect(screen.queryByText('Registered Nurse (RN)')).not.toBeInTheDocument();
      });
    });

    it('should filter jobs by department', async () => {
      (fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: async () => ({ jobs: mockJobs }),
      });

      render(<JobsPage />);

      await waitFor(() => {
        const departmentFilter = screen.getByRole('combobox', { name: /department/i });
        fireEvent.change(departmentFilter, { target: { value: 'Caregiving' } });
      });

      await waitFor(() => {
        expect(screen.getByText('Senior Caregiver')).toBeInTheDocument();
        expect(screen.queryByText('Registered Nurse (RN)')).not.toBeInTheDocument();
      });
    });

    it('should filter jobs by employment type', async () => {
      (fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: async () => ({ jobs: mockJobs }),
      });

      render(<JobsPage />);

      await waitFor(() => {
        const typeFilter = screen.getByRole('combobox', { name: /type/i });
        fireEvent.change(typeFilter, { target: { value: 'Full-time' } });
      });

      await waitFor(() => {
        expect(screen.getByText('Senior Caregiver')).toBeInTheDocument();
        expect(screen.getByText('Registered Nurse (RN)')).toBeInTheDocument();
      });
    });

    it('should filter jobs by status', async () => {
      (fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: async () => ({ jobs: mockJobs }),
      });

      render(<JobsPage />);

      await waitFor(() => {
        const statusFilter = screen.getByRole('combobox', { name: /status/i });
        fireEvent.change(statusFilter, { target: { value: 'published' } });
      });

      await waitFor(() => {
        expect(screen.getByText('Senior Caregiver')).toBeInTheDocument();
        expect(screen.queryByText('Registered Nurse (RN)')).not.toBeInTheDocument();
      });
    });

    it('should display job salary information', async () => {
      (fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: async () => ({ jobs: mockJobs }),
      });

      render(<JobsPage />);

      await waitFor(() => {
        expect(screen.getByText('$18-$22/hour')).toBeInTheDocument();
        expect(screen.getByText('$30-$38/hour')).toBeInTheDocument();
      });
    });

    it('should display application deadline information', async () => {
      (fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: async () => ({ jobs: mockJobs }),
      });

      render(<JobsPage />);

      await waitFor(() => {
        expect(screen.getByText(/Feb 15, 2024/)).toBeInTheDocument();
        expect(screen.getByText(/Feb 20, 2024/)).toBeInTheDocument();
      });
    });

    it('should show featured badge for featured jobs', async () => {
      (fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: async () => ({ jobs: mockJobs }),
      });

      render(<JobsPage />);

      await waitFor(() => {
        expect(screen.getByText('Featured')).toBeInTheDocument();
      });
    });

    it('should show published/unpublished status', async () => {
      (fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: async () => ({ jobs: mockJobs }),
      });

      render(<JobsPage />);

      await waitFor(() => {
        expect(screen.getByText('Published')).toBeInTheDocument();
        expect(screen.getByText('Draft')).toBeInTheDocument();
      });
    });
  });
});
