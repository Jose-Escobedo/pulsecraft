import Footer from "@/components/Footer";

export const metadata = {
  title: "Terms & Conditions | Therapy Site Studio",
  description: "Read the Terms & Conditions for Therapy Site Studio's website and services.",
};

export default function TermsConditions() {
  return (
    <>
    <main className="max-w-4xl mx-auto px-6 py-20 pt-56 -mt-24 text-[#0A2540]">
      <h1 className="text-3xl font-bold mb-6">Terms & Conditions</h1>
      <p className="mb-6 font-semibold">Effective Date: June 3, 2025</p>

      <p className="mb-6">
        These Terms and Conditions (&quot;Terms&quot;) govern your use of Therapy Site Studio&apos;s website and services.
        By using our website, you agree to be bound by these Terms.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">1. Services</h2>
      <p className="mb-6">
        We offer custom website development and related services tailored to therapists, psychologists, and other mental health professionals.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">2. User Responsibilities</h2>
      <p className="mb-6">
        You agree not to use our services for any unlawful or unauthorized purpose. You must provide accurate information and comply with all applicable laws.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">3. Intellectual Property</h2>
      <p className="mb-6">
        All content, branding, designs, and code developed by us remain our intellectual property until paid in full. After full payment, rights may be transferred as specified in the contract.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">4. Payment Terms</h2>
      <p className="mb-6">
        Project scopes, timelines, and payment terms are defined in individual contracts. Deposits are typically required to begin work.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">5. Limitations of Liability</h2>
      <p className="mb-6">
        We are not liable for indirect, incidental, or consequential damages arising from the use or inability to use our services.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">6. Third-Party Services</h2>
      <p className="mb-6">
        We may link to or integrate third-party services (e.g., hosting, plugins). We are not responsible for the practices or performance of these services.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">7. Termination</h2>
      <p className="mb-6">
        We reserve the right to terminate access to our services if you breach these Terms or act in a way that harms our business or users.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">8. Governing Law</h2>
      <p className="mb-6">
        These Terms shall be governed by the laws of the State of California.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">9. Contact</h2>
      <p>
        For questions regarding these Terms, email us at:{" "}
        <a href="mailto:support@therapysitestudio.com" className="text-teal-600 underline">
          support@therapysitestudio.com
        </a>
      </p>
    </main>
    <Footer/>
    </>
  );
}
