
import React, { useState } from 'react';
import { Bot, FileAudio, Globe, Share2, Users, Lock, Video, Search, BarChart3, FileText, Upload, Monitor } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

const FeaturesSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState("video-podcasting");
  
  const features = [
    {
      id: "video-podcasting",
      icon: <Video className="h-5 w-5" />,
      title: "Video Podcasting",
      heading: "Two Powerful Formats — Podcast Audio & Video",
      description: "Create stunning video podcasts that engage viewers with high-quality video content alongside your audio. Reach more audiences across multiple platforms.",
      visual: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
            <Upload className="h-8 w-8 mb-4 text-[#4F46E5]" />
            <h4 className="font-jakarta text-lg font-semibold mb-2">Upload Media</h4>
            <p className="text-[#4B5563] font-manrope">Drag and drop your audio or video files to get started</p>
            <div className="mt-4 p-4 bg-gray-50 rounded-lg border border-dashed border-gray-200 flex items-center justify-center h-32">
              <p className="text-[#4B5563] text-sm">Drop your files here or browse</p>
            </div>
          </div>
          <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
            <Monitor className="h-8 w-8 mb-4 text-[#4F46E5]" />
            <h4 className="font-jakarta text-lg font-semibold mb-2">Episode Details</h4>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-[#4B5563] mb-1">Episode Type</label>
                <select className="w-full p-2 border border-gray-200 rounded-md text-[#4B5563]">
                  <option>Full Episode</option>
                  <option>Trailer</option>
                  <option>Bonus Content</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-[#4B5563] mb-1">Episode Number</label>
                <input type="number" className="w-full p-2 border border-gray-200 rounded-md text-[#4B5563]" placeholder="42" />
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "seo-tools",
      icon: <Search className="h-5 w-5" />,
      title: "AI-powered SEO Tools",
      heading: "Optimize Your Podcast For Search & Discovery",
      description: "Automatically generate transcripts and optimize SEO with our AI tools. Get keyword suggestions and improve your podcast's discoverability across platforms.",
      visual: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
            <FileText className="h-8 w-8 mb-4 text-[#4F46E5]" />
            <h4 className="font-jakarta text-lg font-semibold mb-2">Auto Transcription</h4>
            <p className="text-[#4B5563] font-manrope">AI-powered transcription for better accessibility and SEO</p>
            <div className="mt-4 p-4 bg-gray-50 rounded-lg border border-dashed border-gray-200 h-32 overflow-y-auto">
              <p className="text-[#4B5563] text-sm leading-relaxed">
                "Welcome to episode 42 of our podcast where we discuss the latest trends in technology and their impact on our daily lives. Today we're joined by a special guest..."
              </p>
            </div>
          </div>
          <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
            <BarChart3 className="h-8 w-8 mb-4 text-[#4F46E5]" />
            <h4 className="font-jakarta text-lg font-semibold mb-2">SEO Analysis</h4>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-[#4B5563] mb-1">Top Keywords</label>
                <div className="flex flex-wrap gap-2">
                  {["technology", "innovation", "digital", "future", "AI"].map((keyword) => (
                    <span key={keyword} className="px-2 py-1 text-xs bg-[#4F46E5]/10 text-[#4F46E5] rounded-full">
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-[#4B5563] mb-1">Optimization Score</label>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-[#4F46E5] h-2.5 rounded-full" style={{ width: "85%" }}></div>
                </div>
                <div className="flex justify-between text-xs text-[#4B5563] mt-1">
                  <span>0</span>
                  <span>85/100</span>
                  <span>100</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "custom-microsites",
      icon: <Globe className="h-5 w-5" />,
      title: "Custom Microsites",
      heading: "Beautiful Websites For Your Podcast",
      description: "Create a professional website for your podcast with customizable templates. Showcase your episodes, about page, and contact information in one place.",
      visual: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
            <div className="mb-4">
              <div className="h-6 bg-[#4F46E5] rounded-t-lg"></div>
              <div className="h-40 bg-gray-50 border border-gray-100 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-[#4F46E5]/20 flex items-center justify-center mx-auto mb-2">
                    <FileAudio className="h-8 w-8 text-[#4F46E5]" />
                  </div>
                  <p className="text-sm font-semibold">Your Podcast Name</p>
                </div>
              </div>
            </div>
            <h4 className="font-jakarta text-lg font-semibold mb-2">Website Preview</h4>
            <p className="text-[#4B5563] font-manrope">Custom domain with your brand colors and logo</p>
          </div>
          <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
            <Globe className="h-8 w-8 mb-4 text-[#4F46E5]" />
            <h4 className="font-jakarta text-lg font-semibold mb-2">Site Settings</h4>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-[#4B5563] mb-1">Domain Name</label>
                <input type="text" className="w-full p-2 border border-gray-200 rounded-md text-[#4B5563]" placeholder="yourpodcast.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#4B5563] mb-1">Theme</label>
                <select className="w-full p-2 border border-gray-200 rounded-md text-[#4B5563]">
                  <option>Modern</option>
                  <option>Classic</option>
                  <option>Minimalist</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "private-episodes",
      icon: <Lock className="h-5 w-5" />,
      title: "Private Episodes",
      heading: "Exclusive Content For Your Subscribers",
      description: "Create members-only episodes for your paying subscribers. Securely deliver premium content with flexible access controls and subscription tiers.",
      visual: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
            <Lock className="h-8 w-8 mb-4 text-[#4F46E5]" />
            <h4 className="font-jakarta text-lg font-semibold mb-2">Access Control</h4>
            <p className="text-[#4B5563] font-manrope">Control who can listen to your premium content</p>
            <div className="mt-4 space-y-2">
              <div className="flex items-center justify-between p-2 bg-gray-50 rounded-md">
                <span className="text-sm text-[#4B5563]">Free Listeners</span>
                <div className="w-12 h-6 bg-gray-200 rounded-full relative">
                  <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full"></div>
                </div>
              </div>
              <div className="flex items-center justify-between p-2 bg-gray-50 rounded-md">
                <span className="text-sm text-[#4B5563]">Paid Subscribers</span>
                <div className="w-12 h-6 bg-[#4F46E5] rounded-full relative">
                  <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
            <Users className="h-8 w-8 mb-4 text-[#4F46E5]" />
            <h4 className="font-jakarta text-lg font-semibold mb-2">Subscription Tiers</h4>
            <div className="space-y-4">
              <div className="p-3 border border-gray-100 rounded-lg">
                <div className="flex justify-between mb-1">
                  <span className="font-medium text-[#111827]">Basic</span>
                  <span className="text-[#4F46E5] font-medium">$5/mo</span>
                </div>
                <p className="text-xs text-[#4B5563]">Access to bonus episodes</p>
              </div>
              <div className="p-3 border border-[#4F46E5]/20 bg-[#4F46E5]/5 rounded-lg">
                <div className="flex justify-between mb-1">
                  <span className="font-medium text-[#111827]">Premium</span>
                  <span className="text-[#4F46E5] font-medium">$12/mo</span>
                </div>
                <p className="text-xs text-[#4B5563]">All bonus content + community access</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "team-collaboration",
      icon: <Users className="h-5 w-5" />,
      title: "Team Collaboration",
      heading: "Work Together Seamlessly",
      description: "Invite up to 8 team members to collaborate on your podcast production. Assign roles, track changes, and streamline your workflow.",
      visual: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
            <Users className="h-8 w-8 mb-4 text-[#4F46E5]" />
            <h4 className="font-jakarta text-lg font-semibold mb-2">Team Members</h4>
            <p className="text-[#4B5563] font-manrope">Manage your podcast production team</p>
            <div className="mt-4 space-y-2">
              <div className="flex items-center gap-3 p-2 bg-gray-50 rounded-md">
                <div className="w-8 h-8 rounded-full bg-[#4F46E5]/20 flex items-center justify-center">
                  <span className="text-xs text-[#4F46E5] font-bold">JD</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-[#111827]">Jane Doe</p>
                  <p className="text-xs text-[#4B5563]">Host</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-2 bg-gray-50 rounded-md">
                <div className="w-8 h-8 rounded-full bg-[#4F46E5]/20 flex items-center justify-center">
                  <span className="text-xs text-[#4F46E5] font-bold">JS</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-[#111827]">John Smith</p>
                  <p className="text-xs text-[#4B5563]">Producer</p>
                </div>
              </div>
              <button className="w-full mt-2 p-2 text-sm text-[#4F46E5] border border-dashed border-[#4F46E5]/30 rounded-md">
                + Add Team Member
              </button>
            </div>
          </div>
          <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
            <Share2 className="h-8 w-8 mb-4 text-[#4F46E5]" />
            <h4 className="font-jakarta text-lg font-semibold mb-2">Permission Settings</h4>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-[#4B5563] mb-1">Edit Content</label>
                <select className="w-full p-2 border border-gray-200 rounded-md text-[#4B5563]">
                  <option>All Team Members</option>
                  <option>Only Admins</option>
                  <option>Custom</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-[#4B5563] mb-1">Publish Episodes</label>
                <select className="w-full p-2 border border-gray-200 rounded-md text-[#4B5563]">
                  <option>Only Admins</option>
                  <option>All Team Members</option>
                  <option>Custom</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "dai-monetization",
      icon: <Share2 className="h-5 w-5" />,
      title: "DAI Monetization",
      heading: "Generate Revenue From Your Content",
      description: "Insert ads dynamically into your podcast episodes. Set up multiple ad spots and monitor performance through our analytics dashboard.",
      visual: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
            <BarChart3 className="h-8 w-8 mb-4 text-[#4F46E5]" />
            <h4 className="font-jakarta text-lg font-semibold mb-2">Ad Performance</h4>
            <p className="text-[#4B5563] font-manrope">Track your ad revenue and impressions</p>
            <div className="mt-4 h-32 bg-gray-50 rounded-lg border border-gray-200 flex items-center justify-center">
              <div className="w-full px-4 flex items-end justify-between h-24">
                <div className="w-8 bg-[#4F46E5] h-1/3 rounded-t"></div>
                <div className="w-8 bg-[#4F46E5] h-2/3 rounded-t"></div>
                <div className="w-8 bg-[#4F46E5] h-full rounded-t"></div>
                <div className="w-8 bg-[#4F46E5] h-1/2 rounded-t"></div>
                <div className="w-8 bg-[#4F46E5] h-3/4 rounded-t"></div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
            <Share2 className="h-8 w-8 mb-4 text-[#4F46E5]" />
            <h4 className="font-jakarta text-lg font-semibold mb-2">Ad Settings</h4>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-[#4B5563] mb-1">Ad Frequency</label>
                <select className="w-full p-2 border border-gray-200 rounded-md text-[#4B5563]">
                  <option>Pre-roll only</option>
                  <option>Pre-roll & Mid-roll</option>
                  <option>Pre-roll, Mid-roll & Post-roll</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-[#4B5563] mb-1">Ad Categories</label>
                <div className="flex flex-wrap gap-2">
                  {["Technology", "Finance", "Entertainment", "Education", "Travel"].map((category) => (
                    <span key={category} className="px-2 py-1 text-xs bg-[#4F46E5]/10 text-[#4F46E5] rounded-full">
                      {category}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-7xl">
        <h2 className="font-jakarta font-bold text-3xl md:text-4xl mb-8 text-center text-[#4F46E5]">
          Everything You Need. Nothing You Don't.
        </h2>
        
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <Tabs 
            defaultValue="video-podcasting" 
            value={activeTab} 
            onValueChange={setActiveTab}
            className="w-full"
          >
            <div className="overflow-x-auto pb-2">
              <TabsList className="w-full bg-white border-b border-gray-100 rounded-none p-0 h-auto">
                {features.map(feature => (
                  <TabsTrigger 
                    key={feature.id}
                    value={feature.id}
                    className={cn(
                      "flex items-center gap-2 py-3 px-4 whitespace-nowrap border-b-2 border-transparent data-[state=active]:border-[#4F46E5] rounded-none",
                      "data-[state=active]:bg-white data-[state=active]:shadow-none",
                      "hover:text-[#7C3AED] transition-colors"
                    )}
                  >
                    <span className={cn("transition-colors", activeTab === feature.id ? "text-[#4F46E5]" : "text-[#4B5563]")}>
                      {feature.icon}
                    </span>
                    <span className="font-medium text-sm">{feature.title}</span>
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
            
            <div className="mt-8">
              {features.map(feature => (
                <TabsContent 
                  key={feature.id}
                  value={feature.id}
                  className="animate-fade-in focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
                >
                  <div className="mb-8">
                    <h3 className="font-jakarta font-bold text-2xl md:text-3xl mb-3 text-[#111827]">
                      {feature.heading}
                    </h3>
                    <p className="font-manrope text-lg text-[#4B5563] max-w-3xl">
                      {feature.description}
                    </p>
                  </div>
                  
                  <div className="mt-8">
                    {feature.visual}
                  </div>
                </TabsContent>
              ))}
            </div>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
