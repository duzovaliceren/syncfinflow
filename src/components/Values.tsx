
import { 
  RefreshCw, 
  Link, 
  ShieldCheck 
} from 'lucide-react';
import { cn } from '@/lib/utils';

const Values = () => {
  const values = [
    {
      icon: RefreshCw,
      title: "Synchronous",
      description: "Real-time financial synchronization ensures banking and accounting data are always up to date, eliminating manual entry and reconciliation delays.",
      color: "bg-gradient-to-br from-blue-500 to-blue-600"
    },
    {
      icon: Link,
      title: "Integrated",
      description: "Seamlessly connects with ERP systems, accounting software, and financial institutions to automate reconciliation, receivables tracking, and payment processes.",
      color: "bg-gradient-to-br from-indigo-500 to-indigo-600" 
    },
    {
      icon: ShieldCheck,
      title: "Private",
      description: "Enterprise-grade security and encryption protect sensitive financial data, ensuring compliance and access control for authorized users only.",
      color: "bg-gradient-to-br from-sky-500 to-sky-600"
    }
  ];
  
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 opacity-0 animate-fade-in">
            Designed for accuracy, efficiency, and security.
          </h2>
          <p className="text-lg text-gray-600 opacity-0 animate-fade-in delay-100">
            Our core values reflect our commitment to providing a financial platform that transforms how businesses manage their treasury.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {values.map((value, index) => (
            <div 
              key={index}
              className={cn(
                "bg-white rounded-2xl p-8 border border-gray-100 shadow-soft transition-all duration-300",
                "hover:shadow-md hover:-translate-y-1",
                "opacity-0 animate-fade-in",
                `delay-${(index + 1) * 100}`
              )}
            >
              <div className="flex justify-center mb-6">
                <div className={cn(
                  "flex items-center justify-center w-16 h-16 rounded-full text-white",
                  value.color
                )}>
                  <value.icon size={32} />
                </div>
              </div>
              
              <h3 className="text-xl font-semibold mb-3 text-center text-gray-900">{value.title}</h3>
              <p className="text-gray-600 text-center">{value.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-20 max-w-4xl mx-auto text-center opacity-0 animate-fade-in delay-500">
          <button className="btn-blue-gradient px-8 py-3 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            Get Started Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default Values;
