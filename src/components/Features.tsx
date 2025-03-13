import { 
  Building2, 
  FileSpreadsheet, 
  ReceiptText, 
  BarChart3 
} from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

const Features = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  
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
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 opacity-0 animate-fade-in">
            All your accounts in one place. All the time.
          </h2>
          <p className="text-lg text-gray-600 opacity-0 animate-fade-in delay-100">
            Creda integrates seamlessly with your existing financial infrastructure to provide real-time data synchronization and analysis.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto">
          {/* Left Panel - Feature Selection */}
          <div className="lg:col-span-4 flex flex-col space-y-3 md:space-y-4">
            {features.map((feature, index) => (
              <button
                key={index}
                onClick={() => setActiveFeature(index)}
                className={cn(
                  "flex items-center space-x-4 p-4 md:p-5 rounded-xl transition-all duration-300 text-left",
                  "border hover:border-blue-200",
                  activeFeature === index 
                    ? "shadow-md border-blue-200 bg-gradient-to-r from-white to-blue-50" 
                    : "bg-white border-gray-100"
                )}
              >
                <div className={cn(
                  "flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center",
                  feature.color
                )}>
                  {feature.icon && <feature.icon size={24} />}
                </div>
                <span className={cn(
                  "font-medium",
                  activeFeature === index ? "text-creda-blue" : "text-gray-700"
                )}>
                  {feature.title}
                </span>
              </button>
            ))}
          </div>
          
          {/* Right Panel - Feature Details */}
          <div className="lg:col-span-8">
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-soft border border-gray-100 h-full">
              <div className="mb-6 flex items-center">
                <div className={cn(
                  "w-14 h-14 rounded-xl flex items-center justify-center mr-4",
                  features[activeFeature].color
                )}>
                  {features[activeFeature].icon && <features[activeFeature].icon size={28} />}
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">
                  {features[activeFeature].title}
                </h3>
              </div>
              
              <p className="text-gray-600 leading-relaxed animate-fade-in">
                {features[activeFeature].description}
              </p>
              
              <div className="mt-8 pt-6 border-t border-gray-100">
                <h4 className="font-medium text-gray-900 mb-4">Key Benefits:</h4>
                <ul className="space-y-3">
                  {activeFeature === 0 && (
                    <>
                      <li className="flex items-start opacity-0 animate-fade-in delay-100">
                        <span className="bg-green-50 text-green-600 rounded-full p-1 mr-3 mt-0.5">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </span>
                        <span>Real-time balance visibility across all accounts</span>
                      </li>
                      <li className="flex items-start opacity-0 animate-fade-in delay-200">
                        <span className="bg-green-50 text-green-600 rounded-full p-1 mr-3 mt-0.5">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </span>
                        <span>Secure API tunnel with encryption for sensitive data</span>
                      </li>
                      <li className="flex items-start opacity-0 animate-fade-in delay-300">
                        <span className="bg-green-50 text-green-600 rounded-full p-1 mr-3 mt-0.5">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </span>
                        <span>Automated transaction categorization and logging</span>
                      </li>
                    </>
                  )}
                  {activeFeature === 1 && (
                    <>
                      <li className="flex items-start opacity-0 animate-fade-in delay-100">
                        <span className="bg-green-50 text-green-600 rounded-full p-1 mr-3 mt-0.5">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </span>
                        <span>Reduces manual data entry by up to 95%</span>
                      </li>
                      <li className="flex items-start opacity-0 animate-fade-in delay-200">
                        <span className="bg-green-50 text-green-600 rounded-full p-1 mr-3 mt-0.5">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </span>
                        <span>AI-powered matching algorithms for transaction pairing</span>
                      </li>
                      <li className="flex items-start opacity-0 animate-fade-in delay-300">
                        <span className="bg-green-50 text-green-600 rounded-full p-1 mr-3 mt-0.5">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </span>
                        <span>Exception handling with suggested resolutions</span>
                      </li>
                    </>
                  )}
                  {activeFeature === 2 && (
                    <>
                      <li className="flex items-start opacity-0 animate-fade-in delay-100">
                        <span className="bg-green-50 text-green-600 rounded-full p-1 mr-3 mt-0.5">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </span>
                        <span>Reduces Days Sales Outstanding by an average of 30%</span>
                      </li>
                      <li className="flex items-start opacity-0 animate-fade-in delay-200">
                        <span className="bg-green-50 text-green-600 rounded-full p-1 mr-3 mt-0.5">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </span>
                        <span>Automated payment reminders based on due dates</span>
                      </li>
                      <li className="flex items-start opacity-0 animate-fade-in delay-300">
                        <span className="bg-green-50 text-green-600 rounded-full p-1 mr-3 mt-0.5">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </span>
                        <span>Cash flow forecasting based on outstanding receivables</span>
                      </li>
                    </>
                  )}
                  {activeFeature === 3 && (
                    <>
                      <li className="flex items-start opacity-0 animate-fade-in delay-100">
                        <span className="bg-green-50 text-green-600 rounded-full p-1 mr-3 mt-0.5">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </span>
                        <span>Customizable dashboard with key financial metrics</span>
                      </li>
                      <li className="flex items-start opacity-0 animate-fade-in delay-200">
                        <span className="bg-green-50 text-green-600 rounded-full p-1 mr-3 mt-0.5">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </span>
                        <span>Automated report generation and distribution</span>
                      </li>
                      <li className="flex items-start opacity-0 animate-fade-in delay-300">
                        <span className="bg-green-50 text-green-600 rounded-full p-1 mr-3 mt-0.5">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </span>
                        <span>Historical data analysis with trend identification</span>
                      </li>
                    </>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
