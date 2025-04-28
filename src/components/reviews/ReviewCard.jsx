
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Badge } from "../ui/badge";
import { Card, CardHeader, CardContent } from "../ui/card";
import { Star } from 'lucide-react';

const ReviewCard = ({ review }) => {
  const {
    name,
    role,
    company,
    rating,
    content,
    avatarUrl,
    badges = [],
  } = review;

  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="space-y-4">
        <div className="flex items-start justify-between">
          <div className="flex gap-3">
            <Avatar className="h-12 w-12">
              <AvatarImage src={avatarUrl} alt={name} />
              <AvatarFallback>{name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <div className="font-semibold text-lg">{name}</div>
              <div className="text-sm text-muted-foreground">
                {role}
                {company && ` at ${company}`}
              </div>
            </div>
          </div>
          <div className="flex text-primary">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={16}
                fill={i < rating ? "currentColor" : "none"}
                className={i < rating ? "text-primary" : "text-primary/40"}
              />
            ))}
          </div>
        </div>
        {badges.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {badges.map((badge) => (
              <Badge key={badge} variant="secondary" className="text-xs">
                {badge}
              </Badge>
            ))}
          </div>
        )}
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-gray-600">{content}</p>
      </CardContent>
    </Card>
  );
};

export default ReviewCard;
