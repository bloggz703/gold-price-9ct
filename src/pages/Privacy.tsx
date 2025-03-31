import React from 'react';

const Privacy: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-[#D4AF37] mb-8">Privacy Policy</h1>
        
        <div className="prose prose-invert prose-gold">
          <div className="space-y-6 text-[#D4AF37]/90">
            <section>
              <h2 className="text-2xl font-semibold text-[#D4AF37] mb-4">1. Information We Collect</h2>
              <p>We collect minimal information necessary to provide our gold price calculation service. This may include:</p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Contact information when you reach out to us</li>
                <li>Usage data to improve our service</li>
                <li>Technical information for website functionality</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#D4AF37] mb-4">2. How We Use Your Information</h2>
              <p>We use collected information to:</p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Provide and maintain our service</li>
                <li>Respond to your inquiries</li>
                <li>Improve user experience</li>
                <li>Monitor usage patterns</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#D4AF37] mb-4">3. Data Security</h2>
              <p>We implement appropriate security measures to protect your information. However, no method of transmission over the Internet is 100% secure.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#D4AF37] mb-4">4. Cookies</h2>
              <p>We use cookies to enhance your experience. You can control cookie settings through your browser preferences.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#D4AF37] mb-4">5. Third-Party Links</h2>
              <p>Our website may contain links to third-party websites. We are not responsible for their privacy practices.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#D4AF37] mb-4">6. Changes to Privacy Policy</h2>
              <p>We may update this policy periodically. Please review it regularly.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#D4AF37] mb-4">7. Contact Us</h2>
              <p>For privacy-related questions, please contact us at goldpricepergram9ct@gmail.com</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;