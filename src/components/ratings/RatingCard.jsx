
import React from 'react';
import StarRating from './StarRating';

interface RatingCardProps {
  platform: string;
  stars: number;
  count: number;
}

const RatingCard = ({ platform, stars, count }: RatingCardProps) => {
  return (
    <div className="flex flex-col items-center p-4 bg-white rounded-xl shadow-sm">
      <div className="flex items-center gap-2 mb-2">
        <StarRating rating={stars} />
        <span className="text-[#111827] font-medium ml-1">{stars}</span>
      </div>
      <div className="text-[#4B5563] font-medium">{platform}</div>
    </div>
  );
};

export default RatingCard;
