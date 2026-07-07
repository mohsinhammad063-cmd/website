import { useParams, Link } from 'react-router-dom';
import { Download, ShieldAlert, ArrowLeft } from 'lucide-react';
import { resources, type Resource } from '../data/resources';
import SEO from '../components/SEO';

const ResourceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const resource = resources.find((r: Resource) => r.slug === slug);

  if (!resource) {
    return (
      <div className="py-20 flex flex-col items-center justify-center text-center px-4 min-h-[60vh]">
        <h1 className="text-4xl font-bold text-brand-text mb-4">Resource Not Found</h1>
        <p className="text-brand-muted mb-8 max-w-md">
          Oops! It looks like this resource doesn't exist or has been moved.
        </p>
        <Link to="/free-resources" className="btn-primary">
          Back to Free Resources
        </Link>
      </div>
    );
  }

  return (
    <div className="py-12 md:py-20">
      <SEO
        title={`${resource.title} | Free Resources by Master Hammad`}
        description={resource.description}
      />
      <div className="container mx-auto px-4 md:px-6">
        <Link
          to="/free-resources"
          className="inline-flex items-center gap-2 text-brand-muted hover:text-brand-text transition-colors mb-8 group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          Back to Free Resources
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Resource Image / Icon */}
          <div className="glass-card p-12 flex items-center justify-center border-brand-secondary/30 bg-brand-secondary/5 min-h-[400px]">
            <Download className="w-32 h-32 text-brand-secondary opacity-50" />
          </div>

          {/* Resource Info */}
          <div className="flex flex-col">
            <span className="px-3 py-1 text-sm font-semibold rounded-full bg-brand-secondary/20 text-brand-secondary border border-brand-secondary/30 w-fit mb-4">
              {resource.type}
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold text-brand-text mb-4 leading-tight">
              {resource.title}
            </h1>
            <p className="text-2xl font-bold text-brand-secondary mb-6">Free</p>

            <p className="text-lg text-brand-muted mb-8 leading-relaxed flex-grow">
              {resource.description}
            </p>

            <div className="glass-card p-4 border-brand-secondary/30 bg-brand-secondary/5 mb-8 flex items-start gap-4">
              <ShieldAlert className="w-6 h-6 text-brand-secondary shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-brand-text mb-1">Parent-Safe Notice</h4>
                <p className="text-sm text-brand-muted">
                  {resource.safetyNote}
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-auto">
              <Link to="/coming-soon" className="btn-secondary text-center flex-1">
                Coming Soon
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourceDetail;
