import React, { useEffect } from 'react';

const Register = () => {
  useEffect(() => {
    // Extract the referral code from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const referralCode = urlParams.get('code') || '';

    // Define the custom URI for deep linking in the app
    const appLink = `pumped://register/${referralCode}`;
    const fallbackUrl = 'https://apps.apple.com/us/app/pumped-fitness-social-network/id6505126443'; // App Store link as fallback
    const androidFallbackUrl = 'https://play.google.com/store/apps/details?id=com.ThePumped'; // Play Store link as fallback

    const timeout = 250;
    let hasApp = true;

    // Attempt to open the app using the custom URI
    const appTimer = setTimeout(() => {
      if (hasApp) {
        hasApp = false;
        // Redirect to fallback based on user device (this example uses basic user-agent detection)
        const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);
        window.location.href = isIOS ? fallbackUrl : androidFallbackUrl;
      }
    }, timeout);

    const now = new Date().getTime();
    window.location.href = appLink;

    window.onblur = () => {
      clearTimeout(appTimer);
      hasApp = true;
    };

    return () => clearTimeout(appTimer);
  }, []);

  return (
    <div>
      <h1>Redirecting...</h1>
      <p>If the PUMPED app is not installed, you’ll be redirected to the App Store or Play Store shortly.</p>
    </div>
  );
};

export default Register;
