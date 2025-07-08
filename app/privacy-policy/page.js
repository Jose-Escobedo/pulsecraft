import Footer from "@/components/Footer";

export const metadata = {
  title: "Privacy Policy | Therapy Site Studio",
  description: "Learn how Therapy Site Studio collects and protects your information.",
};

export default function PrivacyPolicy() {
  return (
    <>
    <main className="font-oswald max-w-4xl mx-auto px-6 py-20 pt-56 -mt-24 text-[#0A2540]">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <p className="mb-6 font-semibold">Effective Date: June 2, 2025</p>

      <p className="mb-6">
        Therapy Site Studio (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy.
        This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website{" "}
        <a href="https://www.therapysitestudio.com" className="text-teal-600 underline" target="_blank" rel="noopener noreferrer">
          https://www.therapysitestudio.com
        </a>{" "}
        (&quot;Site&quot;) or use our services.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">1. Information We Collect</h2>
      <h3 className="font-semibold mt-4 mb-1">Personal Information:</h3>
      <p className="mb-4">
        If you contact us or fill out a form, we may collect your name, email address, phone number, and any message content.
      </p>

      <h3 className="font-semibold mt-4 mb-1">Usage Data:</h3>
      <p className="mb-4">
        We collect anonymized data on how users interact with our site using tools like Google Analytics.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">2. How We Use Your Information</h2>
      <ul className="list-disc ml-6 space-y-1 mb-6">
        <li>To respond to inquiries and provide services.</li>
        <li>To improve our website and services.</li>
        <li>To send relevant updates or communications with your consent.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">3. Data Sharing</h2>
      <p className="mb-6">
        We do not sell, rent, or trade your personal information. We may share data with third-party vendors for services like hosting,
        analytics, and contact forms — all of whom are required to uphold data protection standards.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">4. Security</h2>
      <p className="mb-6">
        We use industry-standard security measures to protect your data. However, no method of transmission over the Internet is 100% secure.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">5. Your Rights</h2>
      <p className="mb-6">
        You may request access to, correction of, or deletion of your personal information by contacting us.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">6. HIPAA Disclaimer</h2>
      <p className="mb-6">
        Our website services are designed with HIPAA best practices in mind, but it is your responsibility as a healthcare provider to ensure your practice is compliant.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">7. Changes to This Policy</h2>
      <p className="mb-6">
        We may update this policy from time to time. Updates will be posted on this page with a revised effective date.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">8. Contact</h2>
      <p>
        If you have questions about this policy, email us at:{" "}
        <a href="mailto:support@therapysitestudio.com" className="text-teal-600 underline">
          support@therapysitestudio.com
        </a>
      </p>
    </main>
 
    </>
  );
}
