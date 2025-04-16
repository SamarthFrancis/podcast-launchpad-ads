
import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Instagram, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-white">
      <div className="container mx-auto px-4">
        {/* CTA Banner */}
        <div className="py-12 px-6 bg-gradient-to-r from-primary to-secondary rounded-lg -mt-8 mb-12 text-center">
          <h3 className="font-jakarta font-bold text-2xl md:text-3xl mb-4">
            Ready to go live?
          </h3>
          <Link 
            to="/" 
            className="inline-block bg-white text-primary hover:bg-gray-100 font-medium px-8 py-3 rounded-lg text-lg transition-all transform hover:scale-105"
          >
            Get Started Free
          </Link>
        </div>
        
        {/* Footer Content */}
        <div className="py-8 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h4 className="font-jakarta font-bold text-lg mb-4">PodcastLaunchpad</h4>
            <p className="font-manrope text-gray-300 mb-4">
              Start your podcast. Reach millions. No tech stress.
            </p>
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
          
          <div>
            <h4 className="font-jakarta font-bold text-lg mb-4">Product</h4>
            <ul className="space-y-2 font-manrope">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Features</Link></li>
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Pricing</Link></li>
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Integrations</Link></li>
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Enterprise</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-jakarta font-bold text-lg mb-4">Resources</h4>
            <ul className="space-y-2 font-manrope">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Documentation</Link></li>
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Tutorials</Link></li>
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Support</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-jakarta font-bold text-lg mb-4">Contact</h4>
            <div className="flex items-center space-x-2 text-gray-300 mb-2">
              <Mail size={16} />
              <span className="font-manrope">support@podcastlaunchpad.com</span>
            </div>
          </div>
        </div>
        
        <div className="py-4 border-t border-gray-800">
          <div className="font-manrope text-sm text-gray-400">
            © {new Date().getFullYear()} PodcastLaunchpad. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
