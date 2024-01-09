import React, { useEffect } from 'react';

const ResponsiveContactForm = () => {
  useEffect(() => {
    // Include the Visme Forms script dynamically
    const script = document.createElement('script');
    script.src = 'https://static-bundles.visme.co/forms/vismeforms-embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup: Remove the script when the component is unmounted
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="visme_d" data-title="Responsive Contact Form" data-url="01qpkzkr-responsive-contact-form?fullPage=true" data-domain="forms" data-full-page="true" data-min-height="100vh" data-form-id="11329"></div>
  );
};

export default ResponsiveContactForm;
