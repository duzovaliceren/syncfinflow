
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Values from '@/components/Values';
import Metrics from '@/components/Metrics';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Features />
        <Values />
        <Metrics />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
