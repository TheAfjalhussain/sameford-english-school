import { Layout } from "@/components/layout";
import React from "react";

/* ================= DATA ================= */
const policies = [
  {
    title: "1. Admission & Enrollment",
    points: [
      "Admission is granted after submission of required documents such as Birth Certificate, Previous School Record (if any), and passport-size photographs.",
      "Admission is confirmed only after payment of the admission fee.",
      "The school reserves the right to accept or reject any admission request.",
    ],
  },
  {
    title: "2. Fee Structure & Payment",
    points: [
      "School fees must be paid before the 10th of every month.",
      "A late fine may be applied after the due date.",
      "Admission and registration fees are non-refundable.",
      "Parents are requested to keep fee receipts for future reference.",
    ],
  },
  {
    title: "3. Attendance & Punctuality",
    points: [
      "Students must attend school regularly.",
      "Minimum 75% attendance is required during the academic session.",
      "Students arriving late may not be allowed to enter the class.",
      "If a student is absent for more than 3 consecutive days, parents must inform the school.",
    ],
  },
  {
    title: "4. Code of Conduct & Discipline",
    points: [
      "Students must respect teachers, staff, and fellow students.",
      "Any form of bullying, fighting, or misbehavior is strictly prohibited.",
      "Damage to school property will be chargeable.",
      "Mobile phones or electronic gadgets are not allowed in school.",
    ],
  },
  {
    title: "5. Uniform & Grooming",
    points: [
      "Students must wear the proper school uniform every day.",
      "Uniform should be neat, clean, and well maintained.",
      "Students should maintain personal hygiene and discipline.",
    ],
  },
  {
    title: "6. Academic Policy",
    points: [
      "Students must complete homework and assignments on time.",
      "Participation in class activities and assessments is compulsory.",
      "Regular tests and evaluations will be conducted to track student progress.",
    ],
  },
  {
    title: "7. Safety & Health",
    points: [
      "The school ensures a safe and healthy learning environment.",
      "In case of illness or injury, parents will be informed immediately.",
      "Students suffering from infectious diseases should not attend school until fully recovered.",
    ],
  },
  {
    title: "8. Parent Cooperation",
    points: [
      "Parents are requested to check the school diary regularly.",
      "Parents should attend Parent-Teacher Meetings (PTM) whenever scheduled.",
      "Parents must inform the school if their child will be absent.",
      "Cooperation from parents helps in the overall development of the child.",
    ],
  },
  {
    title: "9. School Management Rights",
    points: [
      "The school management reserves the right to modify rules and policies when necessary for the betterment of students and school administration.",
    ],
  },
];


const Policies = () => {
  return (
   <Layout>
    <main className="bg-gray-50 min-h-screen py-16 px-4 md:px-10">

      <div className="max-w-6xl mx-auto">

        {/* HERO */}
        <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white rounded-3xl p-8 md:p-12 text-center mb-12 shadow-lg">
          <h1 className="text-3xl md:text-5xl font-bold">
            School Policies & Terms
          </h1>
          <p className="mt-4 text-gray-200 max-w-2xl mx-auto">
            Clear guidelines ensuring discipline, safety, and quality education
            for every student.
          </p>
        </div>

        {/* CONTENT */}
        <div className="bg-white rounded-3xl shadow-xl p-6 md:p-10 space-y-8">

          {policies.map((policy, index) => (
            <section
              key={index}
              className="border-b pb-6 last:border-none hover:bg-gray-50 transition rounded-lg p-3"
            >
              <h2 className="text-xl font-semibold text-blue-900 mb-3">
                {policy.title}
              </h2>

              <ul className="list-disc pl-5 space-y-2 text-gray-700 leading-relaxed">
                {policy.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </section>
          ))}

        </div>

        {/* DISCLAIMER */}
        <div className="mt-8 bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-lg shadow-sm">
          <p className="text-sm text-gray-700">
            Disclaimer: School policies may be updated from time to time according to
            school management decisions and educational guidelines.
          </p>
        </div>

      </div>
    </main>
  </Layout>
  );
};

export default Policies;