
import { 
  Building2, 
  FileSpreadsheet, 
  ReceiptText, 
  BarChart3 
} from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import React from 'react';

const Features = () => {
  const [activeFeature, setActiveFeature] = useState<number | null>(null);
  
  const features = [
    {
      title: "Banking Integration",
      description: "Directly integrates with Bankalararası Kart Merkezi (BKM) and retrieves financial data through a secure API Tunnel, ensuring real-time access to transactions and balances.",
      icon: Building2,
      color: "bg-blue-50 text-creda-blue"
    },
    {
      title: "Reconciliation",
      description: "Automatically matches transactions across banking and accounting systems, reducing errors, eliminating manual data entry, and improving financial accuracy.",
      icon: FileSpreadsheet,
      color: "bg-indigo-50 text-indigo-600"
    },
    {
      title: "Accounts Receivable Tracking",
      description: "Monitors unpaid invoices, predicts overdue payments, and helps businesses reduce Days Sales Outstanding (DSO) by streamlining collection processes.",
      icon: ReceiptText,
      color: "bg-sky-50 text-sky-600"
    },
    {
      title: "Reporting",
      description: "Generates daily financial reports, including revenue, expenses, accounts receivable, and accounts payable, for better financial visibility and decision-making.",
      icon: BarChart3,
      color: "bg-cyan-50 text-cyan-600"
    }
  ];
  
  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-white deep-blue-accent overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 opacity-0 animate-fade-in blue-gradient">
            All your accounts in one place. All the time.
          </h2>
          <p className="text-lg text-gray-600 opacity-0 animate-fade-in delay-100 font-sans">
            Creda integrates seamlessly with your existing financial infrastructure to provide real-time data synchronization and analysis.
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
                {React.createElement(feature.icon, { size: 28 })}
              </div>
              
              <h3 className="text-xl font-semibold mb-3 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600 font-sans">{feature.description}</p>
              
              {/* Hover indicator */}
              <div className={cn(
                "absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-creda-deep-blue to-transparent transform origin-left transition-transform duration-300",
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
