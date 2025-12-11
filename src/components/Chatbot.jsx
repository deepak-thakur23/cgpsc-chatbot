import { useState } from "react";
import logo from '../assets/logo_cgpsc.png'
const faqs = [
  {
    id: 1,
    q: "What is the process for filling the online application form for CGPSC?",
    a: `
      To apply for CGPSC exams:<br/>
      1️⃣ Visit the online application portal:<br/>
      <a href="https://online.ecgpsconline.in/" target="_blank" rel="noopener noreferrer" class="text-blue-600 underline">
        CGPSC Online Application Portal
      </a><br/>
      2️⃣ Complete <a href="https://online.ecgpsconline.in/registration/basic-details" target="_blank" rel="noopener noreferrer" class="text-blue-600 underline">Registration</a> / <a href="https://online.ecgpsconline.in/auth/login" target="_blank" rel="noopener noreferrer" class="text-blue-600 underline">Login</a>.<br/>
      3️⃣ Select the relevant examination advertisement.
      4️⃣ Fill in your details, upload photo & signature as per instructions.<br/>
      5️⃣ Pay the examination fee and submit the form.<br/>
      Detailed instructions are usually available in the advertisement PDF on:<br/>
      <a href="https://psc.cg.gov.in" target="_blank" rel="noopener noreferrer" class="text-blue-600 underline">
        CGPSC Official Website
      </a>.
    `,
  },
  {
    id: 2,
    q: "I forgot my password. How can I reset it?",
    a: `
      ➡️You can reset your password using the "Forgot Password" option on the login page:<br/>
      <a href="https://online.ecgpsconline.in/auth/login" target="_blank" rel="noopener noreferrer" class="text-blue-600 underline">
        CGPSC Candidate Login
      </a><br/><br/>
      Enter your registered email / mobile and follow the instructions to receive OTP / reset link.
    `,
  },
  {
    id: 3,
    q: "Where can I see latest CGPSC notifications and advertisements?",
    a: `
      ➡️All latest notifications, advertisements, and notices are published on:<br/>
      <a href="https://psc.cg.gov.in/htm/notification.html" target="_blank" rel="noopener noreferrer" class="text-blue-600 underline">
        https://psc.cg.gov.in
      </a><br/><br/>
      Check the "Advertisements" and "Notifications" sections regularly for updates.
    `,
  },
  {
    id: 4,
    q: "How do I download my admit card / hall ticket?",
    a: `
      Admit cards are generally available on the online portal a few days before the exam.<br/><br/>
      1️⃣ Go to:
      <a href="https://online.ecgpsconline.in/auth/login" target="_blank" rel="noopener noreferrer" class="text-blue-600 underline">
        🎫 CGPSC Candidate Login 
      </a><br/>
      2️⃣ Login with your username and password.<br/>
      3️⃣ Click on the relevant exam admit card link and download / print it.
    `,
  },
  {
    id: 5,
    q: "What is the process for editing of filled application?",
    a: `
      ➡️Correction/Editing on online application can be done in the stipulated days free of cost only once, after the last date of application .<br/>
      ➡️Paid corrections to online applications can be made for ₹500 on the specified dates after the deadline for free corrections. This correction can also be made only once.<br/>
      ➡️Candidate can only correct their Gender, Date of Birth, Caste, Domicile, and PH related information in Paid applications correction <br/> 
      ➡️If change on Caste from un-reserved to reserved the diffrence amount will not be refund.<br/><br/>
      Detailed instructions are usually available in the advertisement PDF on:<br/>
      <a href="https://psc.cg.gov.in" target="_blank" rel="noopener noreferrer" class="text-blue-600 underline">
        CGPSC Official Website
      </a>.
    `,
  },
  {
    id: 6,
    q: "Do I need to send a copy of my application to CGPSC after submission?",
    a: `
     ➡️Since the entire application process is conducted online, you do not need to send any physical documents after submitting your application.<br/>
    `,
  },
  {
    id: 7,
    q: "Where can I see Model Answers, Syllabus, Results, Latest Notification?",
    a: `
      ➡️For Model Answer you can find here.<br/>
      Go to:
      <a href="https://psc.cg.gov.in/htm/model_answer%20-%20Latest.html" target="_blank" rel="noopener noreferrer" class="text-blue-600 underline">
      Model Answer</a>
      <br/>
      ➡️For Results page link is given below<br/>
      Go to:
      <a href="https://psc.cg.gov.in/htm/Results.html" target="_blank" rel="noopener noreferrer" class="text-blue-600 underline">
      Results page</a>
      <br/>
      ➡️For Latest Notification <br/>
      Go to:
      <a href="https://psc.cg.gov.in/htm/notification.html" target="_blank" rel="noopener noreferrer" class="text-blue-600 underline">
      Notifications</a>
      <br/><br/>
      Check the "Advertisements" and "Notifications" sections regularly for updates.
    `,
  },
  {
    id: 8,
    q: "Post or Reservation related query?",
    a: `
      ➡️Advertisements are published by the Commission on the basis of the indents sent to the Commission by the concerned department. 
      Which includes the number of posts and reservation of category.
      <br/><br/>
      Check the "Advertisements" and "Notifications" sections regularly for updates.
    `,
  },
  {
    id: 8,
    q: "Two exam same date related query?",
    a: `
      ➡️All procedures for conducting the examination have been completed. There is no possibility of any change in this now..  
      <br/><br/>
      Check the "Advertisements" and "Notifications" sections regularly for updates.
    `,
  },
  {
    id: 9,
    q: " I did not receive the SMS intimation for registration of my application?",
    a: `
      ➡️SMS sending is a automate process done by system, if you are not getting its due to DND service active in your mobile by service provider.
      <br/><br/>
      Check the "Advertisements" and "Notifications" sections regularly for updates.
    `,
  },
  {
    id: 9,
    q: "What should I do if there is lot of delay in accessing the page?",
    a: `
      ➡️Speed for Registration of On-Line Application on Internet, is based on various factors like Internet Speed, large number of applicants trying to register the application at the same time etc. Therefore if you are not able to get the pages for registration immediately, please retry after a gap of 15 minutes or during off-peak hours at night..
      <br/><br/>
      Check the "Advertisements" and "Notifications" sections regularly for updates.
    `,
  },
  {
    id: 10,
    q: "What details should I provide while writing for the problem?",
    a: `
      ➡️Please do not forget to provide following details while writing to us: (1) REGISTRATION NO. (2) ROLL NUMBER (3) NAME OF EXAM WITH YEAR (4) DATE OF BIRTH & (5) FULL NAME as entered in application.
      <br/><br/>
      Check the "Advertisements" and "Notifications" sections regularly for updates.
    `,
  },
  {
    id: 11,
    q: "What if I have paid and it still shows 'Application fee not paid?",
    a: `
      ➡️FEES ONCE PAID SHOULD NOT BE PAID AGAIN.Kindly wait for few days for it to reflect on your portal or contact HELPDESK (ecgpsconline@gmail.com, 📞7987283093, 8602744927) for clarification on payment.
      <br/><br/>
      Check the "Advertisements" and "Notifications" sections regularly for updates.
    `,
  },
  {
    id: 12,
    q: "No Objection Certificate (NOC) related query?",
    a: `
      <h2>No Objection Certificate (NOC)</h2><br/>
      ➡️A No Objection Certificate (NOC) is required for candidates who are currently employed in the government, public sector undertakings (PSU), universities, or autonomous bodies. <br/>
        ➡️Purpose: The NOC ensures there is no conflict of service and that your current employer has no objection to you applying for another government job.<br/>
        ➡️When to submit: The NOC must typically be produced during the document verification stage or the interview stage.<br/>
        ➡️Private Sector Employees: If you work in the private sector, an NOC is generally not required for the application process itself, but you should still bring all relevant experience and relieving letters during document verification.<br/>
    `,
  },
  {
    id: 13,
    q: "Experience Certificate related query?",
    a: `The requirement for an experience certificate is job-specific. <br/>
        ➡️If experience is required: You must possess a valid experience certificate at the time of document verification (DV). The certificate should be in the format specified by the commission, detailing the duration of service, designation, nature of work, and the issuing authority's seal.<br/>
        ➡️If experience is not required: If the post does not demand prior experience, an experience certificate is not essential for the DV process.<br/>
        ➡️Format: The experience certificate should include:<br/>
          ★  Name of the organization.<br/>
          ★  Your designation(s) held.<br/>
          ★  Duration of service (From and To dates).<br/>
          ★  Nature of work performed.<br/>
          ★  Signature of the issuing authority with their designation and official seal. <br/>    
      `,
  },
  {
    id: 14,
    q: "Education Qualification related query?",
    a: `
      ➡️Kindly see Education Qualification section of related advertisment. 
      <br/><br/>
      Check the "Advertisements" and "Notifications" sections regularly for updates.
    `,
  },
  {
    id: 15,
    q: "What is the age limit for the CGPSC exam?",
    a: `
      ➡️Candidates must generally be between 21 and 30 years of age. However, residents and domiciles of Chhattisgarh are eligible for an upper age limit relaxation of up to 35 years. Age relaxation is also provided for various reserved categories and other scenarios as per government norms.<br/>
      <br/>
      Check the "Advertisements" and "Notifications" sections regularly for updates.
    `,
  },
  {
    id: 16,
    q: "Can a final year student apply for the CGPSC exam?",
    a: `
      ➡️Specific rules apply to final year students; candidates should check the official notification on the <a href="https://psc.cg.gov.in/htm/Advertisement%20-%20Latest.htm" target="_blank" rel="noopener noreferrer" class="text-blue-600 underline">CGPSC website </a> for the most current guidelines regarding eligibility during the application period.<br/>
      <br/>
      Check the "Advertisements" and "Notifications" sections regularly for updates.
    `,
  },
  {
    id: 17,
    q: "What is the 'minimum qualifying marks' (qualifying marks)?",
    a: `
      ➡️'Minimum qualifying marks' means the minimum marks without which a candidate cannot be successful in the examination. CGPSC In this examination, it will be mandatory for unreserved category candidates to get a minimum of 33% qualifying marks and reserved category and disabled category candidates to get a minimum of 23% qualifying marks in each paper. The cut-off is determined for the candidates who obtain the 'minimum qualifying marks. The candidates who obtain the cut-off marks or more are declared successful and the remaining unsuccessful.<br/>
      <br/>
      Check the "Advertisements" and "Notifications" sections regularly for updates.
    `,
  },
  {
    id: 18,
    q: "Is there negative marking in the CGPSC examinations?",
    a: `
      ➡️Yes, there is a provision for negative marking in the all objective type examinations. For every incorrect answer, 1/3rd of the marks assigned to the correct answer will be deducted.<br/>
      <br/>
      Check the "Advertisements" and "Notifications" sections regularly for updates.
    `,
  },
  {
    id: 19,
    q: "How to apply RTI in CGPSC?",
    a: `
      1️⃣Draft Application: Write your request clearly in English or Hindi, stating you are an Indian Citizen. Include your full name, address, contact details, and sign it.<br/>
      2️⃣Fee Payment: Pay ₹10 (or Rs. 2 per page for documents) via: Cash, Indian Postal Order (IPO), Demand Draft (DD), or Treasury Challan, payable to the Accounts Officer/DDO/Secretary of CGPSC.<br/>
      3️⃣Submission: Send the application and fee to the Public Information Officer (PIO) of the Chhattisgarh Public Service Commission (CGPSC) through Speed Post, Registered Post, or hand-delivery.<br/>
      4️⃣Keep Records: Take a photocopy/scan of your application and fee receipt.<br/>
      <br/>
      Check the "Advertisements" and "Notifications" sections regularly for updates.
    `,
  },
  {
    id: 20,
    q: "Where can I contact CGPSC for technical or application related issues?",
    a: `
     ➡️For technical problems (login, OTP, payment etc.) use the help/contact details given on the online portal:<br/>
      ecgpsconline@gmail.com, 📞7987283093, 8602744927
        CGPSC Help / Contact
      <br/><br/>
      For examination related queries, check the contact / helpdesk details on the official website:<br/>
      <a href="https://psc.cg.gov.in" target="_blank" rel="noopener noreferrer" class="text-blue-600 underline">
        CGPSC Official Website
      </a>.
    `,
  },
];

export default function CgpscChatbot() {
  const [open, setOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);
  const [showMorePrompt, setShowMorePrompt] = useState(false);
  const [finished, setFinished] = useState(false);

  const handleQuestionClick = (faq) => {
    setActiveFaq(faq);
    setFinished(false);
    setShowMorePrompt(true);
  };

  const handleYes = () => {
    // back to list for another question
    setActiveFaq(null);
    setShowMorePrompt(false);
    setFinished(false);
  };

  const handleNo = () => {
    setShowMorePrompt(true);
    setFinished(true);

    setTimeout(() => {
      setActiveFaq(null);
      setFinished(false);
      setShowMorePrompt(false);
      setOpen(false);

      // Optional full reset (clear messages later if needed)
      // setMessages([{ from: "bot", text: "Hi! How can I help you today?" }]);
    }, 3000);
  };

  return (
    <>
      {/* Floating button */}
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="fixed bottom-4 right-4 z-40 flex items-center justify-center w-14 h-14 rounded-full bg-cgb-500 text-white shadow-lg hover:bg-cgb-600 transition"
      >
        <span className="text-2xl">💬</span>
      </button>

      {/* Chat panel */}
      {open && (
        <div className="fixed bottom-20 right-4 z-40 w-80 h-[480px] bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b bg-blue-50 rounded-t-2xl">

            {/* Logo + Text */}
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt="CGPSC Logo"
                className="w-9 h-9 rounded-lg bg-white p-[2px] shadow"
              />
              <div className="leading-tight">
                <p className="text-xs font-semibold text-gray-800">
                  CGPSC Assistant
                </p>
                <p className="text-[10px] text-gray-500">
                  Where are you facing issue?
                </p>
              </div>
            </div>

            {/* Close Button */}
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="text-gray-400 hover:text-gray-600 text-lg font-bold"
            >
              ×
            </button>

          </div>


          {/* Body */}
          <div className="flex-1 overflow-y-auto px-3 py-3 space-y-3 bg-white">
            {/* FAQ list */}
            {!activeFaq && !finished && (
              <div className="space-y-2">
                {faqs.map((faq) => (
                  <button
                    key={faq.id}
                    type="button"
                    onClick={() => handleQuestionClick(faq)}
                    className="w-full text-left bg-white border border-blue-300 rounded-2xl px-3 py-2 shadow-sm hover:bg-blue-50 transition flex gap-2"
                  >
                    <span className="mt-[3px] w-2 h-2 rounded-full bg-blue-400 flex-shrink-0" />
                    <span className="text-[11px] text-blue-700 leading-snug">
                      {faq.q}
                    </span>
                  </button>
                ))}
              </div>
            )}

            {/* Selected answer */}
            {activeFaq && !finished && (
              <div className="space-y-2">
                <div className="bg-gray-50 border border-gray-200 rounded-2xl px-3 py-2">
                  <p className="text-xs font-semibold mb-1">{activeFaq.q}</p>
                  <div
                    className="text-[11px] text-gray-700 leading-snug space-y-1"
                    dangerouslySetInnerHTML={{ __html: activeFaq.a }}
                  />
                </div>
              </div>
            )}

            {/* Any other issue? */}
            {showMorePrompt && !finished && (
              <div className="bg-gray-50 border border-gray-200 rounded-xl px-3 py-2">
                <p className="text-xs font-medium mb-2">Any other issue?</p>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={handleYes}
                    className="flex items-center gap-1 px-4 py-1 rounded-full border border-blue-400 text-xs text-blue-600 bg-white hover:bg-blue-50"
                  >
                    <span className="w-3 h-3 rounded-full border border-blue-400 bg-white" />
                    Yes
                  </button>
                  <button
                    type="button"
                    onClick={handleNo}
                    className="flex items-center gap-1 px-4 py-1 rounded-full border border-blue-400 text-xs text-blue-600 bg-white hover:bg-blue-50"
                  >
                    <span className="w-3 h-3 rounded-full border border-blue-400 bg-white" />
                    No
                  </button>
                </div>
              </div>
            )}

            {/* Thank-you message */}
            {finished && showMorePrompt && (
              <div className="bg-gray-50 border border-gray-200 rounded-2xl px-3 py-2 text-center animate-pulse">
                <p className="text-xs text-gray-700">
                  🙏 Thank you for using CGPSC helpdesk! Closing...
                </p>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="text-[10px] text-gray-400 text-center py-1">
            Chat ⚡ by CGPSC Helpdesk
          </div>
        </div>
      )}
    </>
  );
}
