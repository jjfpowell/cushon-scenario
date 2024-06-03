import React from 'react';
import BlogCard from '../Cards/BlogCard';
import { BlogPreview } from '@/types/BlogPreview';

const Timeline = ({ blogPosts }: { blogPosts: BlogPreview[] }) => {
  return (
    <ul className="timeline timeline-snap-icon max-w-6xl max-md:timeline-compact timeline-vertical">
      {blogPosts.map((post, index) => (
        <li key={post.uuid}>
          {index !== 0 && <hr />}
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div
            className={`md:text-end mb-10 ${
              index % 2 === 0 ? 'timeline-start' : 'timeline-end'
            }`}
          >
            <div
              className={`flex flex-row ${
                index % 2 === 0 ? 'justify-end' : 'justify-start'
              }`}
            >
              <time className={`font-mono italic place-items-start`}>
                {post.publishedDate}
              </time>
            </div>
            <BlogCard blogPreview={post} />
          </div>
          {index !== blogPosts.length - 1 && <hr />}
        </li>
      ))}
    </ul>
  );
};

export default Timeline;
