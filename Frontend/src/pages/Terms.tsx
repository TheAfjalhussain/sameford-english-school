import { Layout } from "@/components/layout";
import React from "react";

/* ================= DATA ================= */
const terms = [
  {
    title: "1. Introduction",
    type: "text",
    content:
      "By accessing and using the services of Sameford English School, you agree to comply with all school rules, policies, and regulations.",
  },
  {
    title: "2. Admission Terms",
    type: "list",
    content: [
      "Admission is subject to availability of seats and eligibility criteria.",
      "All submitted documents must be valid and authentic.",
      "The school reserves the right to cancel admission if false information is found.",
    ],
  },
  {
    title: "3. Fee Terms",
    type: "list",
    content: [
      "All fees must be paid before the due date.",
      "Late payment may attract penalties.",
      "Fees once paid are non-refundable.",
    ],
  },
  {
    title: "4. Student Conduct",
    type: "list",
    content: [
      "Students must maintain discipline and respect school staff.",
      "Any misconduct may result in suspension or removal.",
      "School rules must be followed at all times.",
    ],
  },
  {
    title: "5. Attendance Requirement",
    type: "list",
    content: [
      "Minimum attendance is required to appear in examinations.",
      "Absences must be informed by parents.",
    ],
  },
  {
    title: "6. Use of School Property",
    type: "list",
    content: [
      "Students must handle school property carefully.",
      "Any damage caused will be chargeable.",
    ],
  },
  {
    title: "7. Safety & Monitoring",
    type: "text",
    content:
      "The school uses CCTV surveillance for safety. By enrolling, parents agree to monitoring within school premises.",
  },
  {
    title: "8. Digital Usage",
    type: "text",
    content:
      "Students must use digital platforms responsibly. Misuse of online resources is strictly prohibited.",
  },
  {
    title: "9. Changes to Terms",
    type: "text",
    content:
      "The school reserves the right to modify terms and conditions at any time without prior notice.",
  },
  {
    title: "10. Limitation of Liability",
    type: "text",
    content:
      "The school is not responsible for unforeseen events such as natural disasters, transport delays, or external disruptions.",
  },
  {
    title: "11. Governing Rules",
    type: "text",
    content:
      "All rules are subject to school management policies and applicable educational regulations.",
  },
  {
    title: "12. Contact Information",
    type: "custom",
    content: (
      <>
        <p>Sameford English School</p>
        <p>Baghi Bardiha Mode, Vikas Nagar, Nawada - 805132</p>
        <p>Email: samefordenglishschoolnawada@gmail.com</p>
      </>
    ),
  },
];

/* ================= COMPONENT ================= */
const Terms = () => {
  return (
    <Layout>
    <main className="bg-gray-50 min-h-screen py-16 px-4 md:px-10">

      <div className="max-w-6xl mx-auto">

        {/* HERO */}
        <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white rounded-3xl p-8 md:p-12 text-center mb-12 shadow-lg">
          <h1 className="text-3xl md:text-5xl font-bold">
            Terms & Conditions
          </h1>
          <p className="mt-4 text-gray-200 max-w-2xl mx-auto">
            Please read these terms carefully before using our services.
          </p>
        </div>

        {/* CONTENT */}
        <div className="bg-white rounded-3xl shadow-xl p-6 md:p-10 space-y-8">

          {terms.map((section, index) => (
            <section
              key={index}
              className="border-b pb-6 last:border-none hover:bg-gray-50 transition rounded-lg p-3"
            >
              <h2 className="text-xl font-semibold text-blue-900 mb-3">
                {section.title}
              </h2>

              {/* TEXT */}
              {section.type === "text" && (
                <p className="text-gray-700 leading-relaxed">
                  {section.content}
                </p>
              )}

              {/* LIST */}
              {section.type === "list" && (
                <ul className="list-disc pl-5 space-y-2 text-gray-700 leading-relaxed">
                  {section.content.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}

              {/* CUSTOM JSX */}
              {section.type === "custom" && (
                <div className="text-gray-700 leading-relaxed">
                  {section.content}
                </div>
              )}

            </section>
          ))}

        </div>

        {/* DISCLAIMER */}
        <div className="mt-8 bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-lg shadow-sm">
          <p className="text-sm text-gray-700">
            Note: Terms and conditions are subject to change as per school
            management rules and government regulations.
          </p>
        </div>

      </div>
    </main>
  </Layout>
  );
};

export default Terms;