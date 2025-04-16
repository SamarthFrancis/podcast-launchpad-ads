
import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Instagram, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-white">
      <div className="container mx-auto px-4">
        {/* CTA Banner */}
        <div className="py-12 px-6 bg-gradient-to-r from-primary to-secondary rounded-xl -mt-10 mb-16 text-center transform translate-y-[-30px] shadow-xl">
          <h3 className="font-jakarta font-bold text-2xl md:text-3xl mb-6">
            Ready to Launch?
          </h3>
          <Link 
            to="/" 
            className="inline-block bg-white text-primary hover:bg-gray-100 font-medium px-8 py-3 rounded-lg text-lg transition-all transform hover:scale-105 shadow-md"
          >
            Start Free Trial
          </Link>
        </div>
        
        {/* Footer Content */}
        <div className="py-6 text-center md:text-left mb-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div>
              <h4 className="font-jakarta font-bold text-xl mb-1">PodcastLaunchpad</h4>
              <p className="font-manrope text-gray-300 text-sm">
                Start your podcast. Reach millions. No tech stress.
              </p>
            </div>
            
            <div className="mt-6 md:mt-0 flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
              <div className="flex items-center justify-center space-x-1 text-gray-300">
                <Mail size={16} />
                <span className="font-manrope text-sm">support@podcastlaunchpad.com</span>
              </div>
              
              <div className="flex space-x-4">
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  <Linkedin size={20} />
                </Link>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  <Instagram size={20} />
                </Link>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  <Twitter size={20} />
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        <div className="py-4 border-t border-gray-800 text-center">
          <div className="font-manrope text-xs text-gray-400">
            © {new Date().getFullYear()} PodcastLaunchpad. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
