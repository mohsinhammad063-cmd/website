import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  type?: string;
  url?: string;
  image?: string;
}

const SEO = ({
  title = "Tips & Tricks by Master Hammad | Gaming Tips for Kids and Teens",
  description = "Explore beginner-friendly gaming tips, tricks, safe gaming advice, and game guides by Master Hammad for young players aged 8–15.",
  type = "website",
  url = "https://hammad-s-guide.web.app/",
  image = "https://hammad-s-guide.web.app/og-image.png"
}: SEOProps) => {
  useEffect(() => {
    // Update title
    document.title = title;

    // Helper function to update or create meta tags
    const updateMetaTag = (selector: string, attribute: string, value: string) => {
      let tag = document.querySelector(selector);
      if (!tag) {
        tag = document.createElement('meta');
        if (selector.startsWith('meta[name=')) {
          tag.setAttribute('name', selector.match(/meta\[name="(.*?)"\]/)?.[1] || '');
        } else if (selector.startsWith('meta[property=')) {
          tag.setAttribute('property', selector.match(/meta\[property="(.*?)"\]/)?.[1] || '');
        }
        document.head.appendChild(tag);
      }
      tag.setAttribute(attribute, value);
    };

    // Standard meta tags
    updateMetaTag('meta[name="description"]', 'content', description);

    // Open Graph meta tags
    updateMetaTag('meta[property="og:title"]', 'content', title);
    updateMetaTag('meta[property="og:description"]', 'content', description);
    updateMetaTag('meta[property="og:type"]', 'content', type);
    updateMetaTag('meta[property="og:url"]', 'content', url);
    updateMetaTag('meta[property="og:image"]', 'content', image);

    // Twitter Card meta tags
    updateMetaTag('meta[name="twitter:card"]', 'content', 'summary_large_image');
    updateMetaTag('meta[name="twitter:title"]', 'content', title);
    updateMetaTag('meta[name="twitter:description"]', 'content', description);
    updateMetaTag('meta[name="twitter:image"]', 'content', image);

  }, [title, description, type, url, image]);

  return null; // This component does not render anything visible
};

export default SEO;
