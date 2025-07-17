import Footer from "@/components/Footer";

export const metadata = {
  title: "Accessibility Statement | Pulsecraft Web",
  description:
    "Read about the steps Pulsecraft Web Designs takes to make its website accessible for individuals with disabilities. We are committed to inclusive, barrier-free experiences.",
};

export default function AccessibilityPage() {
  return (
    <>
    <main className="font-oswald max-w-4xl mx-auto px-6 py-20 pt-56 -mt-24 text-[#0A2540]">
      <h1 className="text-4xl font-bold mb-6">Accessibility Statement</h1>

      <p className="mb-4 text-lg">
        At Pulsecraft Web, we are committed to ensuring digital accessibility for all individuals, including people with disabilities. We are continually working to improve the user experience for everyone and applying the relevant accessibility standards.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-2">Standards & Practices</h2>
      <p className="mb-4">
        Our website aims to follow the Web Content Accessibility Guidelines (WCAG) 2.1, Level AA, which outline how to make web content more accessible for people with a wide range of disabilities, including visual, auditory, cognitive, and motor.
      </p>

      <ul className="list-disc list-inside space-y-2 mb-6">
        <li>Keyboard-friendly navigation</li>
        <li>Readable color contrast and font sizes</li>
        <li>Text alternatives for meaningful images</li>
        <li>Semantic HTML for assistive technologies</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-10 mb-2">Feedback & Support</h2>
      <p className="mb-4">
        If you encounter any accessibility barriers while using our site or need support accessing any content, please let us know. We’re here to help.
      </p>

      <ul className="mb-6 space-y-2">
        <li>
          <strong>Email:</strong>{' '}
          <a
            href="mailto:support@pulsecraftweb.com"
            className="text-blue-600 underline"
          >
            support@pulsecraftweb.com
          </a>
        </li>
        <li>
          <strong>Location:</strong> Los Angeles, CA
        </li>
      </ul>

      <p className="text-sm text-gray-500">
        Last updated: June 4, 2025
      </p>
    </main>
  
    </>
  );
}
