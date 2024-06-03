import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Timeline from '@/app/components/ProgressBars/Timeline';
import { BlogPreview } from '@/types/BlogPreview';

const mockBlogPosts: BlogPreview[] = [
  {
    uuid: '1',
    imgUrl: 'https://example.com/image1.jpg',
    title: 'Test Blog 1',
    content: 'This is a test blog content 1.',
    buttonText: 'Read More',
    buttonLink: '/read-more-1',
    publishedDate: '2023-01-01'
  },
  {
    uuid: '2',
    imgUrl: 'https://example.com/image2.jpg',
    title: 'Test Blog 2',
    content: 'This is a test blog content 2.',
    buttonText: 'Expore',
    buttonLink: '/read-more-2',
    publishedDate: '2023-01-02'
  }
];

describe('Timeline Component', () => {
  test('renders without crashing', () => {
    render(<Timeline blogPosts={mockBlogPosts} />);
  });

  test('displays the correct number of blog posts', () => {
    render(<Timeline blogPosts={mockBlogPosts} />);
    const blogCards = screen.getAllByRole('listitem');
    expect(blogCards).toHaveLength(mockBlogPosts.length);
  });

  test('displays the correct blog post details', () => {
    render(<Timeline blogPosts={mockBlogPosts} />);
    mockBlogPosts.forEach((post) => {
      expect(screen.getByText(post.title)).toBeInTheDocument();
      expect(screen.getByText(post.content)).toBeInTheDocument();
      expect(screen.getByText(post.publishedDate)).toBeInTheDocument();
      const buttonElement = screen.getByText(post.buttonText);
      expect(buttonElement).toBeInTheDocument();
      expect(buttonElement.closest('a')).toHaveAttribute(
        'href',
        post.buttonLink
      );
    });
  });

  test('displays timeline icons and lines correctly', () => {
    render(<Timeline blogPosts={mockBlogPosts} />);
    const timelineIcons = screen.getAllByRole('img', { hidden: true });
    expect(timelineIcons).toHaveLength(mockBlogPosts.length);

    const horizontalLines = screen.getAllByRole('separator');
    // Two horizontal lines should exist for each post except the first and last
    expect(horizontalLines).toHaveLength(mockBlogPosts.length);
  });

  test('renders blog posts in alternating timeline positions', () => {
    render(<Timeline blogPosts={mockBlogPosts} />);
    mockBlogPosts.forEach((post, index) => {
      const postElement = screen.getByText(post.publishedDate).closest('div');
      if (index % 2 === 0) {
        expect(postElement).toHaveClass('justify-end');
      } else {
        expect(postElement).toHaveClass('justify-start');
      }
    });
  });
});
