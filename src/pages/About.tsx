import React from 'react';
import { TrendingUp, Scale, Users } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-[#D4AF37] mb-12">About Us</h1>
        
        <div className="space-y-12 text-[#D4AF37]/90">
          <section className="bg-[#242424] rounded-xl p-8 border border-[#D4AF37]/20">
            <div className="flex items-center gap-4 mb-6">
              <Users className="w-8 h-8 text-[#D4AF37]" />
              <h2 className="text-2xl font-semibold text-[#D4AF37]">Who We Are</h2>
            </div>
            <p className="leading-relaxed">
              We are a passionate group of financial market enthusiasts with a particular focus on precious metals, especially gold. Our team combines decades of experience in market analysis, trading, and investment strategy, bringing together diverse perspectives to provide valuable insights into the gold market.
            </p>
          </section>

          <section className="bg-[#242424] rounded-xl p-8 border border-[#D4AF37]/20">
            <div className="flex items-center gap-4 mb-6">
              <TrendingUp className="w-8 h-8 text-[#D4AF37]" />
              <h2 className="text-2xl font-semibold text-[#D4AF37]">Our Mission</h2>
            </div>
            <p className="leading-relaxed">
              Our mission is to democratize access to accurate gold pricing information and empower individuals to make informed decisions about their gold investments. We believe that transparent, real-time market data should be accessible to everyone, from seasoned investors to first-time sellers.
            </p>
          </section>

          <section className="bg-[#242424] rounded-xl p-8 border border-[#D4AF37]/20">
            <div className="flex items-center gap-4 mb-6">
              <Scale className="w-8 h-8 text-[#D4AF37]" />
              <h2 className="text-2xl font-semibold text-[#D4AF37]">What We Offer</h2>
            </div>
            <p className="leading-relaxed">
              We provide a sophisticated yet user-friendly gold price calculator that leverages real-time market data to give you accurate valuations. Our tool is designed to help you understand the true value of your gold items, whether you're looking to sell, buy, or simply stay informed about your investments.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-semibold text-[#D4AF37] mb-6">Our Commitment</h2>
            <p className="leading-relaxed">
              We are committed to maintaining the highest standards of accuracy and reliability in our gold price calculations. Our team continuously monitors market trends and updates our systems to ensure you receive the most current and accurate information possible.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;