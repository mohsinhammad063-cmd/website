import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
}

const SEO = ({ title, description }: SEOProps) => {
  useEffect(() => {
    document.title = title || "Tips & Tricks by Master Hammad | Gaming Tips for Kids and Teens";

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", description || "Explore beginner-friendly gaming tips, tricks, safe gaming advice, printable resources, and simple game guides by Master Hammad for young players aged 8–15.");
    }
  }, [title, description]);

  return null;
};

export default SEO;
