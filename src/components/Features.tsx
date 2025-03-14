
import { 
  Building2, 
  FileSpreadsheet, 
  ReceiptText, 
  BarChart3 
} from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

const Features = () => {
  const [activeFeature, setActiveFeature] = useState<number | null>(null);
  
  const features = [
    {
      title: "Open Banking",
      description: "Creda seamlessly connects ERP solutions with banking accounts through national API tunnel with its open banking platform, ensuring real-time synchronization and a unified financial view.",
      icon: Building2,
      color: "bg-blue-50 text-creda-blue"
    },
    {
      title: "Reconciliation",
      description: "Auto-matches ERP transactions with real-time bank data, ensuring accuracy, spotting errors instantly, and keeping finances in sync.",
      icon: FileSpreadsheet,
      color: "bg-indigo-50 text-indigo-600"
    },
    {
      title: "A/R Tracking",
      description: "Monitor account receivables, predict overdue payments, and reduce DSO for optimized cash flow.",
      icon: ReceiptText,
      color: "bg-sky-50 text-sky-600"
    },
    {
      title: "Reporting",
      description: "Automatically generates real-time daily, weekly, and monthly reports by tracking accounting and bank accounts.",
      icon: BarChart3,
      color: "bg-cyan-50 text-cyan-600"
    }
  ];
  
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 opacity-0 animate-fade-in">
            All your accounts in one place. All the time.
          </h2>
          <p className="text-lg text-gray-600 opacity-0 animate-fade-in delay-100">
            Creda seamlessly connects ERP solutions with banking accounts through its open banking platform, ensuring real-time synchronization and a unified financial view.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className={cn(
                "card-gradient relative rounded-2xl p-8 border border-blue-50 shadow-soft transition-all duration-300 opacity-0 group",
                "animate-fade-in",
                `delay-${(index + 1) * 100}`,
                activeFeature === index ? "ring-2 ring-blue-200" : "hover:shadow-md"
              )}
              onMouseEnter={() => setActiveFeature(index)}
              onMouseLeave={() => setActiveFeature(null)}
            >
              <div className={cn(
                "inline-flex items-center justify-center w-14 h-14 rounded-xl mb-5 transition-transform duration-300",
                feature.color,
                "group-hover:scale-110"
              )}>
                <feature.icon size={28} />
              </div>
              
              <h3 className="text-xl font-semibold mb-3 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
              
              {/* Hover indicator */}
              <div className={cn(
                "absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent transform origin-left transition-transform duration-300",
                activeFeature === index ? "scale-x-100" : "scale-x-0"
              )}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
