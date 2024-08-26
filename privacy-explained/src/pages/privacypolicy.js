import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "../styles/PrivacyPolicy.module.css";

export default function PrivacyPolicy() {
  return (
    <div className="Privacy-Policy">
      <Navbar />
      <div className={styles.maincontent}>
        <h1 className="privacy-header">Privacy Policy</h1>
        <h1>
          This website is a learning experience for the programmer building it,
          this website it not performing any collection and this webpage is
          educational for both the individual building it and the user viewing
        </h1>
        <p>
          The core of this website is to inform its users about your privacy
          rights, the history of privacy events, and techniques used or should
          be used to protect collected data.
          <b>
            Please email us here if you require help reading or understanding
            this policy.
          </b>
        </p>

        <h2>Compliance with Laws and Regulations</h2>
        <p>
          We comply with relevant data privacy laws and regulations, including
          the Privacy Act of 1974, the E-Government Act of 2002, HIPAA for
          health information, GLBA for financial data, and COPPA for children's
          online privacy.
        </p>

        <h2>What We Collect</h2>
        <h3>
          Personal Identifiable Information -{" "}
          <a href="https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-122.pdf">
            PII
          </a>
        </h3>
        <ul>
          <li>Full Name</li>
          <li>Date of Birth</li>
          <li>Email Address</li>
          <li>Phone Number</li>
          <li>Postal Address</li>
          <li>Location Information (via device and interactions)</li>
          <li>IP Address</li>
          <li>Browser Type and Version</li>
          <li>Operating System</li>
          <li>Device Type</li>
          <li>Unique Device Identifiers</li>
          <li>Log Files</li>
          <li>Cookies and Usage Data</li>
          <li>Payment Information (e.g., credit card details)</li>
          <li>Social Media Profile Information (if linked)</li>
          <li>Profile Picture</li>
          <li>Username and Password</li>
          <li>Preferences and Interests</li>
          <li>Search Queries</li>
          <li>Interaction Data (e.g., page clicks, ad clicks)</li>
          <li>Survey Responses</li>
          <li>Feedback and Reviews</li>
          <li>Customer Support Communications</li>
          <li>Subscription and Newsletter Preferences</li>
          <li>Purchase History</li>
          <li>Browsing History</li>
          <li>Referral Source</li>
          <li>Geolocation Data</li>
          <li>Biometric Data</li>
        </ul>

        <h3>Biometric Data</h3>
        <ul>
          <li>Fingerprint</li>
          <li>Facial Recognition</li>
          <li>Voice Recognition</li>
          <li>Retina/Iris Scans</li>
          <li>Hand Geometry</li>
          <li>Gait Analysis</li>
          <li>Vein Recognition</li>
          <li>DNA</li>
          <li>
            Behavioral Biometrics (e.g., typing patterns, mouse movements)
          </li>
        </ul>

        <h2>How We Use Your Data</h2>
        <p>
          We use the collected data for various purposes to provide and improve
          our services, including but not limited to:
        </p>
        <ul>
          <li>To better understand your needs and preferences</li>
          <li>To personalize your experience on our website</li>
          <li>To improve our services and develop new features</li>
          <li>To send marketing and promotional communications</li>
          <li>
            To contact you for market research and invite you to participate in
            surveys
          </li>
          <li>To analyze website usage and improve our content and layout</li>
          <li>To process transactions and manage your orders</li>
          <li>To provide customer support and respond to your inquiries</li>
          <li>To enforce our terms and conditions and prevent fraud</li>
          <li>To comply with legal obligations and protect our legal rights</li>
          <li>To conduct data analysis and research to enhance our services</li>
          <li>
            To customize our website based on user behaviors and preferences
          </li>
        </ul>

        <h2>Data Governance Framework</h2>
        <p>
          We have implemented a data governance framework to manage data
          quality, accessibility, and security. This includes appointing a Chief
          Data Officer (CDO) and establishing data governance bodies.
        </p>

        <h2>Collected While Using This Website</h2>
        <ul>
          <li>Page Clicks</li>
          <li>Ad Clicks</li>
          <li>Time Spent on Pages</li>
          <li>Navigation Paths</li>
          <li>Interaction with Forms and Surveys</li>
          <li>Downloads</li>
          <li>Video Views</li>
          <li>Social Media Shares</li>
        </ul>

        <h2>Additional Consent for Upcoming Features</h2>
        <ul>
          <li>
            Users under the age of 18 will require parental permission to engage
            with this webpage.
          </li>
          <li>Dating</li>
          <li>Political Beliefs</li>
          <li>Religious Beliefs</li>
          <li>Geolocation (IP address and device location)</li>
          <li>Biometrics (Fingerprint, Facial Recognition, Voice Controls)</li>
        </ul>

        <h2>Why We Collect Your Data</h2>
        <ul>
          <li>To better understand your needs</li>
          <li>To improve our services</li>
          <li>To send marketing and promotional notifications</li>
          <li>
            To contact you for market research and invite you to participate in
            surveys
          </li>
          <li>To customize our website to user behaviors</li>
        </ul>

        <h2>Safeguarding Your Data</h2>
        <p>
          We employ advanced security measures to protect your data, including
          encryption, access controls, and regular security audits. We
          continuously work to expand our safeguards and implement the latest
          technologies and techniques as they emerge.
        </p>

        <h2>Cookie Policy</h2>
        <p>
          We use cookies on our website to analyze web traffic and the web pages
          you visit and spend the most time on. Cookies do not grant us any
          method to control or monitor your actions online beyond this website.
        </p>

        <h2>Third-Party Links</h2>
        <p>
          This website uses third-party links for educational purposes. We
          cannot control their practices or how they collect your information.
        </p>

        <h2>Your Rights</h2>
        <p>You have the following rights regarding your personal data:</p>
        <ul>
          <li>
            <b>Right to Access:</b> You have the right to request access to the
            personal data we hold about you. This includes the right to obtain
            information about how your data is being used and to receive a copy
            of your data.
          </li>
          <li>
            <b>Right to Rectification:</b> You have the right to request the
            correction of inaccurate or incomplete personal data we hold about
            you.
          </li>
          <li>
            <b>Right to Erasure:</b> You have the right to request the deletion
            of your personal data under certain circumstances, such as when the
            data is no longer necessary for the purposes for which it was
            collected.
          </li>
          <li>
            <b>Right to Restrict Processing:</b> You have the right to request
            the restriction of processing your personal data in certain
            situations, such as when you contest the accuracy of the data or
            object to the processing.
          </li>
          <li>
            <b>Right to Data Portability:</b> You have the right to request the
            transfer of your personal data to another organization or directly
            to you, where technically feasible.
          </li>
          <li>
            <b>Right to Object:</b> You have the right to object to the
            processing of your personal data for direct marketing purposes or
            when the processing is based on our legitimate interests.
          </li>
          <li>
            <b>Right to Withdraw Consent:</b> If the processing of your personal
            data is based on your consent, you have the right to withdraw your
            consent at any time.
          </li>
          <li>
            <b>Right to Lodge a Complaint:</b> You have the right to lodge a
            complaint with a supervisory authority if you believe that your data
            protection rights have been violated.
          </li>
          <li>
            <b>Right to Non-Discrimination:</b> You have the right not to be
            discriminated against for exercising any of your data protection
            rights.
          </li>
        </ul>
        <p>
          To exercise any of these rights, please contact us at [add contact
          information]. We will respond to your request within a reasonable
          timeframe and in accordance with applicable data protection laws.
        </p>
      </div>
      <Footer />
    </div>
  );
}
