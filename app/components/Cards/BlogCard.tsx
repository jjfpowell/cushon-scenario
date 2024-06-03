import React from 'react';
import LinkedButton from '../Buttons/LinkedButton';
import { BlogPreview } from '@/types/BlogPreview';

const BlogCard = ({ blogPreview }: { blogPreview: BlogPreview }) => {
  const { imgUrl, title, content, buttonText, buttonLink } = blogPreview;

  return (
    <div className="card card-side bg-primary shadow-xl">
      <figure className="max-w-48">
        <img className="h-full" src={imgUrl} alt={title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-white text-left">{title}</h2>
        <p className="content-start text-left">{content}</p>
        <div className="card-actions justify-end">
          <LinkedButton
            style="btn btn-accent"
            text={buttonText}
            link={buttonLink}
          />
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
