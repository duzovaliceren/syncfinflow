
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="container mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="col-span-1 md:col-span-1">
            <img 
              src="/lovable-uploads/d7b0fa69-835f-4e38-81cc-135b30f6f989.png" 
              alt="Creda Logo" 
              className="h-10 mb-4"
            />
            <p className="text-gray-600 text-sm mt-4">
              Creda synchronizes your financial data across banking and accounting systems for real-time visibility and control.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-creda-blue transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-creda-blue transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-creda-blue transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-creda-blue transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-gray-800 font-medium mb-4">Product</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-creda-blue transition-colors">Features</a></li>
              <li><a href="#" className="text-gray-600 hover:text-creda-blue transition-colors">Integrations</a></li>
              <li><a href="#" className="text-gray-600 hover:text-creda-blue transition-colors">Pricing</a></li>
              <li><a href="#" className="text-gray-600 hover:text-creda-blue transition-colors">Updates</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-gray-800 font-medium mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-creda-blue transition-colors">About</a></li>
              <li><a href="#" className="text-gray-600 hover:text-creda-blue transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-600 hover:text-creda-blue transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-600 hover:text-creda-blue transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-gray-800 font-medium mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-creda-blue transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-creda-blue transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-gray-600 hover:text-creda-blue transition-colors">Security</a></li>
              <li><a href="#" className="text-gray-600 hover:text-creda-blue transition-colors">Compliance</a></li>
            </ul>
          </div>
        </div>
        
        <div className="section-divider my-8"></div>
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} Creda Financial Technologies. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <select className="bg-gray-50 border border-gray-200 text-gray-600 text-sm rounded-md px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-blue-200">
              <option>English (US)</option>
              <option>Türkçe</option>
              <option>Français</option>
              <option>Deutsch</option>
            </select>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
