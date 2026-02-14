import React from "react";

const PrivacyPolicy = () => (
  <div className="max-w-2xl mx-auto py-16 px-4 md:px-0">
    <h1 className="text-3xl md:text-4xl font-sans tracking-widest mb-8 text-gray-100" style={{ letterSpacing: '0.15em', fontWeight: 400 }}>
      Privacy Policy
    </h1>
    <p className="text-base md:text-lg text-gray-200 mb-6" style={{ fontWeight: 300, letterSpacing: '0.05em' }}>
      We do not collect personal data from visitors to this site. If you choose to contact us or subscribe to updates, your information will only be used to respond to you and will never be shared with third parties.
    </p>
    <p className="text-base md:text-lg text-gray-400" style={{ fontWeight: 300, letterSpacing: '0.05em' }}>
      For any questions about your privacy, please contact us via our official channels.
    </p>
  </div>
);

export default PrivacyPolicy;
