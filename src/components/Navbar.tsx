
import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const navLinks = [
    { 
      name: 'Product', 
      link: '#',
      dropdownItems: [
        { name: 'Banking Integration', link: '#' },
        { name: 'Reconciliation', link: '#' },
        { name: 'AR Tracking', link: '#' },
        { name: 'Reporting', link: '#' },
      ]
    },
    { 
      name: 'How It Works', 
      link: '#',
      dropdownItems: [
        { name: 'Process Overview', link: '#' },
        { name: 'Integration Guide', link: '#' },
        { name: 'Case Studies', link: '#' },
      ]
    },
    { 
      name: 'Use Cases', 
      link: '#',
      dropdownItems: [
        { name: 'Small Businesses', link: '#' },
        { name: 'Mid-sized Companies', link: '#' },
        { name: 'Enterprises', link: '#' },
      ]
    },
    { name: 'FAQ', link: '#' },
  ];

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4",
        isScrolled ? "glassmorphism shadow-soft" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <span className="text-2xl font-bold text-creda-blue">
                <img 
                  src="/lovable-uploads/d7b0fa69-835f-4e38-81cc-135b30f6f989.png" 
                  alt="Creda Logo" 
                  className="h-12 md:h-14" /* Increased logo size from h-10 */
                />
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((item) => (
              <div key={item.name} className="relative">
                {item.dropdownItems ? (
                  <button
                    onClick={() => toggleDropdown(item.name)}
                    className="flex items-center text-gray-700 hover:text-creda-blue transition-colors duration-200"
                  >
                    {item.name}
                    <ChevronDown 
                      size={16} 
                      className={cn(
                        "ml-1 transition-transform duration-200",
                        activeDropdown === item.name ? "rotate-180" : ""
                      )} 
                    />
                  </button>
                ) : (
                  <a
                    href={item.link}
                    className="text-gray-700 hover:text-creda-blue transition-colors duration-200"
                  >
                    {item.name}
                  </a>
                )}

                {/* Dropdown Menu */}
                {item.dropdownItems && activeDropdown === item.name && (
                  <div className="absolute left-0 mt-2 py-2 w-48 bg-white rounded-lg shadow-lg animate-fade-in">
                    {item.dropdownItems.map((dropdownItem) => (
                      <a
                        key={dropdownItem.name}
                        href={dropdownItem.link}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-creda-blue"
                      >
                        {dropdownItem.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white bg-creda-blue hover:bg-creda-blue-light transition-colors rounded-full shadow-sm"
            >
              Schedule a Demo
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-creda-blue focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 py-2 bg-white rounded-lg animate-fade-in">
            {navLinks.map((item) => (
              <div key={item.name} className="py-2">
                {item.dropdownItems ? (
                  <div>
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      className="flex items-center w-full px-4 py-2 text-left text-gray-700 hover:text-creda-blue"
                    >
                      {item.name}
                      <ChevronDown 
                        size={16} 
                        className={cn(
                          "ml-1 transition-transform duration-200",
                          activeDropdown === item.name ? "rotate-180" : ""
                        )} 
                      />
                    </button>
                    {activeDropdown === item.name && (
                      <div className="mt-1 pl-8 border-l-2 border-blue-100 ml-4">
                        {item.dropdownItems.map((dropdownItem) => (
                          <a
                            key={dropdownItem.name}
                            href={dropdownItem.link}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-creda-blue"
                          >
                            {dropdownItem.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    href={item.link}
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-creda-blue"
                  >
                    {item.name}
                  </a>
                )}
              </div>
            ))}
            <div className="mt-4 px-4 py-2">
              <a
                href="#"
                className="block text-center px-5 py-2.5 text-sm font-medium text-white bg-creda-blue hover:bg-creda-blue-light transition-colors rounded-full shadow-sm"
              >
                Schedule a Demo
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
