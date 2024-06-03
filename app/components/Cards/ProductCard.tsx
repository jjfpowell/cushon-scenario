import React from 'react';
import LinkedButton from '../Buttons/LinkedButton';

interface ProductCardProps {
  imageUrl: string;
  title: string;
  description: string;
  buttonText: string;
  redirectLink: string;
}

const ProductCard = ({
  imageUrl,
  title,
  description,
  buttonText,
  redirectLink
}: ProductCardProps) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img className="h-48" src={imageUrl} alt={title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <LinkedButton
            text={buttonText}
            link={redirectLink}
            style="btn text-white btn-primary"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
