
import React from 'react';
import { Star } from 'lucide-react';

interface StarRatingProps {
  rating: number;
}

const StarRating = ({ rating }: StarRatingProps) => {
  return (
    <div className="flex text-[#4F46E5]">
      {[...Array(5)].map((_, i) => (
        <Star 
          key={i} 
          fill={i < Math.floor(rating) ? "currentColor" : "none"} 
          className={i < Math.floor(rating) ? "text-[#4F46E5]" : "text-[#4F46E5]/40"} 
          size={20}
        />
      ))}
    </div>
  );
};

export default StarRating;
