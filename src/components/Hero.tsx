
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="hero-gradient pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <p className="inline-block px-4 py-1.5 mb-5 text-sm font-medium bg-gradient-to-r from-blue-50 to-blue-100 text-creda-deep-blue rounded-full opacity-0 animate-fade-in blue-gradient">
            Synchronous Treasury Management
          </p>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 opacity-0 animate-fade-in delay-100">
            <span className="blue-gradient">Seamless Banking and Accounting, Unified.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto opacity-0 animate-fade-in delay-200">
            Connect, sync, and streamline all your financial workflows in a single platform designed for modern businesses.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 opacity-0 animate-fade-in delay-300">
            <button className="btn-blue-gradient px-8 py-3 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              Schedule a Demo
            </button>
            
            <button className="group flex items-center justify-center px-8 py-3 text-creda-blue font-medium border border-creda-blue rounded-full hover:bg-blue-50 transition-all duration-300">
              How It Works
              <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
        
        <div className="mt-16 lg:mt-24 relative">
          <div className="relative mx-auto max-w-5xl rounded-xl overflow-hidden shadow-xl opacity-0 animate-fade-in delay-400">
            <div className="aspect-[16/9] bg-gradient-to-r from-blue-100 to-blue-50 rounded-xl flex items-center justify-center">
              <div className="text-center p-10">
                <div className="inline-block p-4 mb-4 rounded-full bg-blue-100">
                  <svg className="w-10 h-10 text-creda-deep-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                  </svg>
                </div>
                <p className="text-xl font-medium text-gray-800">Dashboard Preview</p>
                <p className="mt-2 text-gray-600">Interactive visualization coming soon</p>
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-creda-deep-blue/10 to-blue-100/30 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-gradient-to-tr from-creda-blue/10 to-blue-200/30 rounded-full blur-3xl"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
