import React from 'react';

const Terms: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-[#D4AF37] mb-8">Terms of Service</h1>
        
        <div className="space-y-6 text-[#D4AF37]/90">
          <section>
            <h2 className="text-2xl font-semibold text-[#D4AF37] mb-4">1. Agreement to Terms</h2>
            <p>By accessing our website, you agree to these terms of service. If you disagree with any part of these terms, please do not use our service.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#D4AF37] mb-4">2. Use License</h2>
            <p>Permission is granted to temporarily access our gold price calculator for personal, non-commercial use. This license does not include:</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Modifying or copying materials</li>
              <li>Using materials for commercial purposes</li>
              <li>Attempting to reverse engineer any software</li>
              <li>Removing any copyright or proprietary notations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#D4AF37] mb-4">3. Disclaimer</h2>
            <p>Our gold price calculations are estimates based on current market data. We do not guarantee their accuracy for actual transactions. Users should verify prices with dealers for actual sales.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#D4AF37] mb-4">4. Limitations</h2>
            <p>We shall not be held liable for any damages arising from the use of our service. This includes but is not limited to:</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Financial losses</li>
              <li>Data inaccuracies</li>
              <li>Service interruptions</li>
              <li>Technical issues</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#D4AF37] mb-4">5. Updates</h2>
            <p>We may update these terms at any time. Continued use of the service after changes constitutes acceptance of new terms.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#D4AF37] mb-4">6. Governing Law</h2>
            <p>These terms shall be governed by and construed in accordance with applicable laws, without regard to conflict of law principles.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#D4AF37] mb-4">7. Contact</h2>
            <p>For questions about these terms, please contact us at goldpricepergram9ct@gmail.com</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Terms;