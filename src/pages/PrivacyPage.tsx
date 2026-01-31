export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Header */}
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-onyx-card border border-onyx-border mb-4">
          <span className="text-sm text-onyx-text-secondary">Legal Document</span>
        </div>
        <h1 className="text-4xl font-bold text-white mb-4">Privacy Policy</h1>
        <p className="text-onyx-text-secondary">
          Last updated: January 2026
        </p>
      </div>

      {/* Content */}
      <div className="legal-content">
        <h2>1. Introduction</h2>
        <p>
          Welcome to ONYX ("we", "our", "us"). We are committed to protecting your privacy and personal data.
          This Privacy Policy explains how we collect, use, store, and protect your information when you use the ONYX mobile application (the "App").
        </p>
        <p>
          By using the App, you agree to the collection and use of information in accordance with this Privacy Policy.
        </p>

        <h2>2. Information We Collect</h2>
        
        <h3>2.1 Information You Provide Directly</h3>
        <ul>
          <li><strong>Account Information:</strong> Email address and display name when you create an account.</li>
          <li><strong>Authentication Data:</strong> Information provided through Apple Sign In or Google Sign In.</li>
          <li><strong>User Preferences:</strong> Favorite wallpapers, categories, and app settings.</li>
        </ul>

        <h3>2.2 Automatically Collected Information</h3>
        <p>We automatically collect limited technical and usage data, including:</p>
        <ul>
          <li><strong>Usage Data:</strong> Wallpapers viewed, downloaded, and interactions within the App.</li>
          <li><strong>Device Information:</strong> Device type, operating system version, and anonymized technical identifiers used solely for app functionality and security.</li>
          <li><strong>Analytics Data:</strong> App usage statistics collected via Firebase Analytics.</li>
          <li><strong>Crash Reports:</strong> Diagnostic and crash data collected via Firebase Crashlytics.</li>
        </ul>
        <p>We do not collect precise location data.</p>

        <h3>2.3 Push Notifications</h3>
        <p>If you enable push notifications, we may collect:</p>
        <ul>
          <li>A device push token required to deliver notifications.</li>
          <li>Information about notification delivery and interaction.</li>
        </ul>
        <p>You can disable notifications at any time in your device settings.</p>

        <h3>2.4 Information from Third Parties</h3>
        <ul>
          <li><strong>Apple / Google:</strong> Basic profile information used for authentication.</li>
          <li><strong>RevenueCat:</strong> Subscription status and purchase history.</li>
        </ul>
        <p>We do not receive or store your payment card details.</p>

        <h2>3. Legal Basis for Processing (GDPR)</h2>
        <p>We process your personal data under the following legal bases:</p>
        <ul>
          <li><strong>Contract:</strong> To provide the App and subscription services you request.</li>
          <li><strong>Consent:</strong> For push notifications and optional communications.</li>
          <li><strong>Legitimate Interest:</strong> To improve the App, ensure security, prevent fraud, and analyze usage patterns.</li>
          <li><strong>Legal Obligation:</strong> To comply with applicable laws and regulations.</li>
        </ul>

        <h2>4. How We Use Your Information</h2>
        <p>We use your information to:</p>
        <ul>
          <li>Provide and operate the App.</li>
          <li>Authenticate users and manage accounts.</li>
          <li>Process subscriptions and manage access.</li>
          <li>Personalize wallpaper recommendations.</li>
          <li>Send service-related notifications (if enabled).</li>
          <li>Improve app performance and stability.</li>
          <li>Analyze usage trends to improve user experience.</li>
          <li>Detect, prevent, and resolve technical issues.</li>
        </ul>
        <p>We do not perform automated decision-making that produces legal or similarly significant effects on users.</p>

        <h2>5. Advertising and Tracking</h2>
        <p>ONYX is a subscription-only application.</p>
        <ul>
          <li>We do not display third-party advertisements.</li>
          <li>We do not use any advertising networks.</li>
          <li>We do not use your data for targeted advertising.</li>
          <li>We do not sell or rent your personal data.</li>
          <li>We do not use your data for cross-app tracking.</li>
        </ul>

        <h2>6. Information Sharing</h2>
        <p>We do not sell your personal information.</p>
        <p>We may share your data only with:</p>
        <ul>
          <li>
            <strong>Service Providers:</strong>
            <ul>
              <li>Firebase (Analytics, Authentication, Crashlytics)</li>
              <li>RevenueCat (subscription management)</li>
            </ul>
            <p>These providers process data on our behalf under strict confidentiality agreements.</p>
          </li>
          <li><strong>Legal Requirements:</strong> When required by law or to protect our legal rights.</li>
          <li><strong>Business Transfers:</strong> In case of merger, acquisition, or sale of assets.</li>
        </ul>

        <h2>7. Data Retention</h2>
        <p>We retain your data only as long as necessary for the purposes described.</p>
        
        <table>
          <thead>
            <tr>
              <th>Data Type</th>
              <th>Retention Period</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Account Information</td>
              <td>Until account deletion</td>
            </tr>
            <tr>
              <td>Usage Analytics</td>
              <td>Up to 24 months</td>
            </tr>
            <tr>
              <td>Crash Reports</td>
              <td>Up to 90 days</td>
            </tr>
            <tr>
              <td>Purchase History</td>
              <td>As required by law</td>
            </tr>
          </tbody>
        </table>

        <p>You may request deletion of your account and associated data at any time.</p>
        <p>Account deletion requests are processed within 30 days.</p>

        <h2>8. Your Rights</h2>
        <p>Depending on your location, you may have the following rights:</p>
        <ul>
          <li><strong>Access:</strong> Request a copy of your personal data</li>
          <li><strong>Correction:</strong> Request correction of inaccurate data</li>
          <li><strong>Deletion:</strong> Request deletion of your data</li>
          <li><strong>Portability:</strong> Request transfer of your data</li>
          <li><strong>Restriction:</strong> Request limitation of processing</li>
          <li><strong>Opt-out:</strong> Opt out of notifications and communications</li>
        </ul>
        <p>
          To exercise your rights, contact us at:<br />
          <a href="mailto:privacy@onyxwalls.com">privacy@onyxwalls.com</a>
        </p>

        <h2>9. Data Security</h2>
        <p>
          We implement appropriate technical and organizational measures to protect your personal data.
          However, no system is 100% secure, and we cannot guarantee absolute security.
        </p>

        <h2>10. Children's Privacy</h2>
        <p>
          The App is not intended for children under the age of 13.
          We do not knowingly collect personal data from children under 13.
          If we become aware of such data, we will delete it promptly.
        </p>

        <h2>11. International Data Transfers</h2>
        <p>
          Your data may be transferred to and processed in countries outside your own.
          We ensure appropriate safeguards are in place in accordance with applicable data protection laws.
        </p>

        <h2>12. California Privacy Rights (CCPA)</h2>
        <p>California residents have the right to:</p>
        <ul>
          <li>Know what personal data is collected</li>
          <li>Request deletion of personal data</li>
          <li>Request information about data usage</li>
        </ul>
        <p>
          Requests can be sent to: <a href="mailto:privacy@onyxwalls.com">privacy@onyxwalls.com</a>
        </p>

        <h2>13. European Privacy Rights (GDPR)</h2>
        <p>If you are in the European Economic Area, you have the right to:</p>
        <ul>
          <li>Lodge a complaint with a supervisory authority</li>
          <li>Withdraw consent at any time</li>
        </ul>

        <h2>14. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time.
          Changes will be posted in the App and on our website with an updated date.
        </p>

        <h2>15. Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, contact us at:
        </p>
        <ul>
          <li><strong>Email:</strong> <a href="mailto:privacy@onyxwalls.com">privacy@onyxwalls.com</a></li>
          <li><strong>Support:</strong> <a href="mailto:support@onyxwalls.com">support@onyxwalls.com</a></li>
          <li><strong>Website:</strong> <a href="https://onyx-mobile.github.io">https://onyx-mobile.github.io</a></li>
        </ul>
      </div>
    </div>
  );
}
