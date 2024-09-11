import React from 'react';
import "./PrivacyPolicy.css";
const PrivacyPolicy = () => {
  return (
    <div className='PrivacyPolicy'>
    <div className='container'>
      <h1>Privacy Policy</h1>
        <p>At PUMPED, your privacy is our top priority. This Privacy Policy explains what information we collect, why we collect it, and how it is used. Our primary goal is to ensure the security and privacy of your data, while offering a seamless fitness-focused social media experience.</p>

        <h1>Information We Collect</h1>
        <p>We collect and store information you provide when you create an account, interact with other users, or use our services. Below is an overview of the types of data we collect:</p>
        <p><strong>1. Contact Information</strong></p>
        <ul>
            <li>Name: First and last name.</li>
            <li>Email Address: Email address, including hashed versions for account security.</li>
        </ul>
        <p><strong>2. Health & Fitness</strong></p>
        <ul>
            <li>Fitness Data: Exercise data, workout routines, and other fitness-related content you share via posts and interactions.</li>
            <li>No Health Data Collected: We do not collect any health or medical information, such as health records or data from APIs like HealthKit.</li>
        </ul>
        <p><strong>3. Financial Information</strong></p>
        <ul>
            <li>No Payment Information: We do not collect or process any payment information. If purchases occur, they are handled securely through external payment gateways.</li>
        </ul>
        <p><strong>4. Location Information</strong></p>
        <ul>
            <li>Precise Location: If you choose to share your location while posting, we may collect precise geolocation data to tag your posts.</li>
            <li>Coarse Location: We may use approximate location data to help provide location-based features (e.g., showing nearby gyms or fitness trends).</li>
        </ul>
        <p><strong>5. Sensitive Information</strong></p>
        <ul>
            <li>No Sensitive Information Collected: We do not collect any sensitive data such as racial or ethnic data, sexual orientation, religious or philosophical beliefs, or biometric data.</li>
        </ul>
        <p><strong>6. User Content</strong></p>
        <ul>
            <li>Photos or Videos: You can upload photos or videos related to your fitness journey. These are stored securely.</li>
            <li>Other User-Generated Content: Any other posts, comments, or likes you share within the app.</li>
        </ul>
        <p><strong>7. Identifiers</strong></p>
        <ul>
            <li>User ID: Your account name, handle, or other identifiers you choose when creating an account.</li>
            <li>Device ID: Device identifiers such as advertising identifiers or other device-level IDs.</li>
        </ul>
        <p><strong>8. Usage Data</strong></p>
        <ul>
            <li>Product Interaction: We collect data on how you use the app, such as posts, likes, comments, and interactions.</li>
            <li>Other Usage Data: Other data related to your activity within the app for performance improvements.</li>
        </ul>
        <p><strong>9. Diagnostics</strong></p>
        <ul>
            <li>Crash Data & Performance Data: Information about app crashes or performance to help improve our service.</li>
        </ul>

        <h1>How We Use Your Data</h1>
        <p>We do not use your data for advertising or any other external purposes. Your data is used exclusively to provide and improve your experience within the app. Specifically, we may use your data for:</p>
        <ul>
            <li>Account creation and management.</li>
            <li>Displaying your posts and interactions with other users.</li>
            <li>Ensuring the security and functionality of the app.</li>
            <li>Improving app performance and user experience.</li>
        </ul>

        <h1>Data Sharing</h1>
        <p>We do not sell, rent, or share your personal data with third parties for marketing purposes. Your information is only shared in limited circumstances:</p>
        <ul>
            <li>With your consent, such as when you share a post.</li>
            <li>To comply with legal obligations, if necessary.</li>
        </ul>

        <h1>Security</h1>
        <p>We implement strong security measures to protect your data. However, no online system is completely secure, and we cannot guarantee the absolute security of your data. Always ensure your account credentials are safe.</p>

        <h1>Your Rights</h1>
        <p>You have the right to access, update, or delete your personal data at any time by accessing your account settings or contacting us.</p>

        <h1>Changes to This Privacy Policy</h1>
        <p>We may update this policy occasionally to reflect changes in our practices or for legal reasons. We will notify you of any significant changes through the app or via email.</p>

        <h1>Contact Us</h1>
        <p>If you have any questions or concerns about this Privacy Policy or your data, please contact us at <a href="mailto:support@thepumpedapp.com">support@thepumpedapp.com</a>.</p>
            
    </div>
    </div>
  );
};

export default PrivacyPolicy;