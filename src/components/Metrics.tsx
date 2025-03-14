
import { cn } from '@/lib/utils';
import { TrendingUp, Clock, DollarSign, ArrowDownCircle } from 'lucide-react';

const Metrics = () => {
  const metrics = [
    {
      icon: TrendingUp,
      value: "2x",
      label: "Cashflow Uplift",
      color: "from-blue-600 to-indigo-600",
      iconColor: "text-blue-50"
    },
    {
      icon: ArrowDownCircle,
      value: "30%",
      label: "DSOs Reduction",
      color: "from-indigo-600 to-purple-600",
      iconColor: "text-indigo-50"
    },
    {
      icon: DollarSign,
      value: "60%",
      label: "AR Cost Reduction",
      color: "from-purple-600 to-pink-600",
      iconColor: "text-purple-50"
    },
    {
      icon: Clock,
      value: "60%",
      label: "Time Saving",
      color: "from-pink-600 to-rose-600",
      iconColor: "text-pink-50"
    }
  ];
  
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 opacity-0 animate-fade-in">
            Tangible Results. Measurable Impact.
          </h2>
          <p className="text-lg text-gray-600 opacity-0 animate-fade-in delay-100">
            Our platform delivers concrete business outcomes that directly impact your bottom line.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {metrics.map((metric, index) => (
            <div 
              key={index}
              className={cn(
                "relative rounded-2xl p-8 transition-all duration-300",
                "opacity-0 animate-fade-in",
                `delay-${(index + 1) * 100}`
              )}
            >
              <div className={cn(
                "absolute inset-0 rounded-2xl bg-gradient-to-br",
                metric.color,
                "opacity-90"
              )}></div>
              
              <div className="relative z-10 flex flex-col items-center">
                <div className={cn(
                  "inline-flex items-center justify-center w-16 h-16 rounded-full mb-5 bg-white/20 backdrop-blur-sm",
                  metric.iconColor
                )}>
                  <metric.icon size={32} />
                </div>
                
                <h3 className="text-4xl font-bold mb-2 text-white">{metric.value}</h3>
                <p className="text-white/90 text-lg font-medium">{metric.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Metrics;
