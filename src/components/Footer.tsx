
import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Instagram, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-[#4B5563]">
      <div className="container mx-auto px-4">
        {/* CTA Banner */}
        <div className="py-12 px-6 bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] rounded-xl -mt-10 mb-16 text-center transform translate-y-[-30px] shadow-xl">
          <h3 className="font-jakarta font-bold text-2xl md:text-3xl mb-6 text-white">
            Ready to Launch?
          </h3>
          <Link 
            to="/" 
            className="inline-block bg-white text-[#4F46E5] hover:bg-gray-100 font-medium px-8 py-3 rounded-lg text-lg transition-all transform hover:scale-105 shadow-md"
          >
            Start Free Trial
          </Link>
        </div>
        
        {/* Footer Content */}
        <div className="py-6 text-center md:text-left mb-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div>
              <h4 className="font-jakarta font-bold text-xl mb-1 text-[#111827]">PodcastLaunchpad</h4>
              <p className="font-manrope text-[#4B5563] text-sm">
                Start your podcast. Reach millions. No tech stress.
              </p>
            </div>
            
            <div className="mt-6 md:mt-0 flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
              <div className="flex items-center justify-center space-x-1 text-[#4B5563]">
                <Mail size={16} />
                <span className="font-manrope text-sm">support@podcastlaunchpad.com</span>
              </div>
              
              <div className="flex space-x-4">
                <Link to="/" className="text-[#4B5563] hover:text-[#4F46E5] transition-colors">
                  <Linkedin size={20} />
                </Link>
                <Link to="/" className="text-[#4B5563] hover:text-[#4F46E5] transition-colors">
                  <Instagram size={20} />
                </Link>
                <Link to="/" className="text-[#4B5563] hover:text-[#4F46E5] transition-colors">
                  <Twitter size={20} />
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        <div className="py-4 border-t border-gray-200 text-center">
          <div className="font-manrope text-xs text-[#4B5563]">
            © {new Date().getFullYear()} PodcastLaunchpad. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
