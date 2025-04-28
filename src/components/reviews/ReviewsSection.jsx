
import React from 'react';
import ReviewCard from './ReviewCard';

const reviews = [
  {
    name: "Eli Johnson",
    role: "Health & Wellness Professional",
    rating: 5,
    content: "My overall experience with Hubhopper has been positive. It's easy to use and gets the job done when it comes to podcast distribution. While it could use some improvements in analytics and customization, the platform offers excellent value for its price.",
    badges: ["Verified Review", "Health & Wellness"],
    avatarUrl: "https://i.pravatar.cc/150?u=eli",
  },
  {
    name: "Seth Williams",
    role: "Fitness Podcaster",
    rating: 5,
    content: "I like how easy it was to transfer my existing podcast into Hubhopper from a different platform. The features are intuitive, allowing quick distribution to platforms like Spotify and Apple Podcast.",
    badges: ["Verified Review", "Health & Wellness"],
    avatarUrl: "https://i.pravatar.cc/150?u=seth",
  },
  {
    name: "Adam F.",
    role: "Fashion Industry Professional",
    rating: 5,
    content: "Overall I really love the site. Especially the distribution to other sites part. Those are fantastic. The interface is clean and straightforward, making podcast management a breeze.",
    badges: ["Frequent User", "Verified Review"],
    avatarUrl: "https://i.pravatar.cc/150?u=adam",
  },
  {
    name: "Malaika H.",
    role: "Broadcast Media Professional",
    rating: 5,
    content: "So far it real good. I just pray it stay like that. I'm happy with this app. It's easy for me to stay up, and I like all the platforms that they hook you up to.",
    badges: ["Highly Relevant", "Organic Review"],
    avatarUrl: "https://i.pravatar.cc/150?u=malaika",
  },
  {
    name: "Jessica Patel",
    role: "Independent Creator",
    rating: 4,
    content: "PodcastLaunchpad made it simple to get my show onto all major platforms. The analytics are helpful and I appreciate the clean interface. Would recommend to any new podcaster.",
    badges: ["New User", "Verified Review"],
    avatarUrl: "https://i.pravatar.cc/150?u=jessica",
  },
  {
    name: "Marcus T.",
    role: "Comedy Podcaster",
    rating: 5,
    content: "After trying several hosting platforms, I finally found one that doesn't overcomplicate things. Distribution was seamless and the support team is quick to respond.",
    badges: ["Comedy", "Power User"],
    avatarUrl: "https://i.pravatar.cc/150?u=marcus",
  },
];

const ReviewsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Loved by Podcasters Worldwide
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join thousands of content creators who trust PodcastLaunchpad for their podcast hosting and distribution needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {reviews.map((review, index) => (
            <ReviewCard key={index} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
