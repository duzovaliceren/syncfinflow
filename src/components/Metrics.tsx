
import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const Metrics = () => {
  const metrics = [
    {
      value: "2x",
      label: "Cashflow Uplift",
      description: "Double your available working capital",
      color: "from-blue-500 to-blue-600"
    },
    {
      value: "30%",
      label: "DSO Reduction",
      description: "Collect payments faster",
      color: "from-indigo-500 to-indigo-600"
    },
    {
      value: "60%",
      label: "AR Cost Reduction",
      description: "Lower your accounts receivable expenses",
      color: "from-creda-deep-blue to-creda-blue"
    },
    {
      value: "60%",
      label: "Time Saving",
      description: "Free up your financial team's capacity",
      color: "from-sky-500 to-sky-600"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 opacity-0 animate-fade-in">
            Transforming Financial Performance
          </h2>
          <p className="text-lg text-gray-600 opacity-0 animate-fade-in delay-100">
            Our customers achieve significant, measurable improvements across key financial metrics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {metrics.map((metric, index) => (
            <div 
              key={index}
              className={cn(
                "relative overflow-hidden rounded-2xl p-8 shadow-soft",
                "opacity-0 animate-fade-in transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md",
                `delay-${(index + 1) * 100}`
              )}
            >
              <div className="absolute inset-0 bg-gradient-to-br opacity-10" style={{
                background: `linear-gradient(135deg, var(--tw-gradient-stops))`,
                '--tw-gradient-from': `rgb(0, 30, 122)`,
                '--tw-gradient-to': `rgb(0, 45, 146)`,
              }}></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className={cn(
                    "flex items-center justify-center w-12 h-12 rounded-full text-white",
                    `bg-gradient-to-br ${metric.color}`
                  )}>
                    <ArrowUpRight size={24} />
                  </div>
                </div>
                
                <h3 className="text-4xl font-bold mb-2 bg-gradient-to-br from-creda-deep-blue to-creda-blue bg-clip-text text-transparent">
                  {metric.value}
                </h3>
                <p className="text-xl font-semibold mb-2 text-gray-800">{metric.label}</p>
                <p className="text-gray-600">{metric.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="#" 
            className="inline-flex items-center btn-blue-gradient px-8 py-3 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            See Customer Success Stories
          </a>
        </div>
      </div>
    </section>
  );
};

export default Metrics;
