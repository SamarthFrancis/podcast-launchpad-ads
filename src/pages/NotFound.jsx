
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';

const NotFound = () => {
  return (
    <Layout>
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-jakarta font-bold text-4xl mb-4">Page Not Found</h1>
          <p className="font-manrope text-xl text-gray mb-8">
            Sorry, the page you are looking for doesn't exist.
          </p>
          <Link
            to="/"
            className="inline-block bg-primary hover:bg-primary/90 text-white font-medium px-6 py-2 rounded-lg transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
