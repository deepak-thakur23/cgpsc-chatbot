import { useState } from "react";
import logo from "../assets/logo_cgpsc.png";

const faqs = {
  hi: [
    { id: 1, q: "CGPSC ऑनलाइन आवेदन फॉर्म कैसे भरें?", a: "CGPSC वेबसाइट पर जाएँ..." },
    { id: 2, q: "पासवर्ड कैसे रीसेट करें?", a: "Forgot Password पर क्लिक करें..." },
    // Add your full Hindi FAQ content here (already translated)
  ],

  en: [
    { id: 1, q: "How to fill CGPSC online application form?", a: "Go to the CGPSC official site..." },
    { id: 2, q: "How to reset password?", a: "Click on Forgot Password..." },
    // Add English version for each FAQ
  ],
};

export default function CgpscChatbot() {
  const [open, setOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);
  const [showMorePrompt, setShowMorePrompt] = useState(false);
  const [finished, setFinished] = useState(false);

  const [lang, setLang] = useState("hi"); // ⭐ Current language

  const text = {
    hi: {
      title: "CGPSC सहायक",
      subtitle: "कृपया अपनी समस्या चुनें",
      more: "क्या आपके और प्रश्न है?",
      yes: "✔ हाँ",
      no: "✖ नहीं",
      closing: "🙏 धन्यवाद! चैट 3 सेकंड में बंद हो जाएगी...",
      footer: "⚡ CGPSC हेल्पडेस्क द्वारा",
      language: "EN",
    },

    en: {
      title: "CGPSC Assistant",
      subtitle: "Please select your issue",
      more: "Do you have another question?",
      yes: "✔ Yes",
      no: "✖ No",
      closing: "🙏 Thank you! Chat will close in 3 seconds...",
      footer: "⚡ Powered by CGPSC Helpdesk",
      language: "HI",
    },
  };

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
    setFinished(true);
    setTimeout(() => {
      setOpen(false);
      setActiveFaq(null);
      setFinished(false);
      setShowMorePrompt(false);
    }, 3000);
  };

  return (
    <>
      {/* Chatbot Button */}
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="fixed bottom-4 right-4 z-50 w-14 h-14 rounded-full bg-cgb-500 text-white flex items-center justify-center shadow-xl text-2xl"
      >
        💬
      </button>

      {open && (
        <div className="fixed bottom-20 right-4 w-80 h-[480px] bg-white rounded-2xl shadow-2xl border z-50 flex flex-col">

          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b bg-blue-50 rounded-t-2xl">

            {/* Left: Logo + title */}
            <div className="flex items-center gap-2">
              <img src={logo} className="w-9 h-9 rounded-lg bg-white p-1 shadow" />

              <div>
                <p className="text-xs font-bold">{text[lang].title}</p>
                <p className="text-[10px] text-gray-500">{text[lang].subtitle}</p>
              </div>
            </div>

            {/* ⭐ Language switch button */}
            <button
              onClick={() => setLang(lang === "hi" ? "en" : "hi")}
              className="text-[11px] bg-blue-200 hover:bg-blue-300 px-2 py-1 rounded"
            >
              {text[lang].language} 🌐
            </button>

            {/* Close button */}
            <button
              onClick={() => setOpen(false)}
              className="text-gray-500 text-xl ml-2"
            >
              ×
            </button>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-3 space-y-3">

            {/* FAQ LIST */}
            {!activeFaq && !finished &&
              faqs[lang].map((faq) => (
                <button
                  key={faq.id}
                  onClick={() => handleQuestionClick(faq)}
                  className="w-full bg-white border border-blue-300 rounded-xl px-3 py-2 text-left hover:bg-blue-50 shadow-sm"
                >
                  <span className="text-[11px] text-blue-700">{faq.q}</span>
                </button>
              ))}

            {/* ANSWER */}
            {activeFaq && !finished && (
              <div className="bg-gray-50 border rounded-xl p-3">
                <p className="text-xs font-semibold">{activeFaq.q}</p>
                <p className="text-[11px] text-gray-700 mt-1">{activeFaq.a}</p>
              </div>
            )}

            {/* MORE PROMPT */}
            {showMorePrompt && !finished && (
              <div className="bg-gray-100 border rounded-xl p-2 text-center">
                <p className="text-xs mb-2">{text[lang].more}</p>
                <div className="flex justify-center gap-2">
                  <button
                    onClick={handleYes}
                    className="px-4 py-1 border border-blue-400 rounded-full text-xs text-blue-600 bg-white"
                  >
                    {text[lang].yes}
                  </button>
                  <button
                    onClick={handleNo}
                    className="px-4 py-1 border border-blue-400 rounded-full text-xs text-blue-600 bg-white"
                  >
                    {text[lang].no}
                  </button>
                </div>
              </div>
            )}

            {/* CLOSING MESSAGE */}
            {finished && (
              <div className="bg-gray-50 border rounded-xl p-2 text-center animate-pulse">
                <p className="text-xs text-gray-700">{text[lang].closing}</p>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="text-[10px] text-gray-400 text-center py-1">
            {text[lang].footer}
          </div>
        </div>
      )}
    </>
  );
}
