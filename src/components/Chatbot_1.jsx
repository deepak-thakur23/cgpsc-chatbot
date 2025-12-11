import { useState } from "react";
import logo from '../assets/logo_cgpsc.png'
export default function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [showServices, setShowServices] = useState(false);

    const services = [
        { title: "Latest Advertised Vacancies", action: "vacancies" },
        { title: "Exam Calendar", action: "calendar" },
        { title: "Apply Online / Status", action: "apply" },
        { title: "Eligibility / Qualification", action: "eligibility" },
        { title: "Syllabus & Exam Pattern", action: "syllabus" },
        { title: "Admit Card Download", action: "admit" },
        // { title: "Answer Key / Model Answer", action: "answerkey" },
        // { title: "Result & Merit List", action: "result" },
        // { title: "Cut-Off Marks", action: "cutoff" }
    ];

    const addBotMessage = (text) =>
        setMessages((prev) => [...prev, { from: "bot", text }]);

    const addUserMessage = (text) =>
        setMessages((prev) => [...prev, { from: "user", text }]);

    const handleServiceClick = (action) => {
        addUserMessage(`Selected: ${action}`);

        switch (action) {
            case "vacancies":
                addBotMessage("✅ Showing latest advertised vacancies.");
                break;
            case "calendar":
                addBotMessage("📅 Exam calendar coming soon.");
                break;
            case "admit":
                addBotMessage("🎫 Click here to download admit card.");
                break;
            case "result":
                addBotMessage("📜 Latest results are available in the Results section.");
                break;
            default:
                addBotMessage("ℹ️ Service details loading...");
        }
    };

    const onShowServices = () => {
        setShowServices(true);
        addBotMessage("✅ Available Services:");
    };

    return (
        <>
            {/* Floating Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-6 right-6 bg-cgb-500 text-white p-4 rounded-full shadow-lg"
            >
                💬
            </button>

            {/* Chat Window */}
            {isOpen && (
                <div className="fixed bottom-10 right-20 w-80 bg-white shadow-xl rounded-lg p-4 border">
                    <div className="px-4 py-3 bg-gradient-to-r from-cgb-700 to-cgb-500 text-white flex items-center gap-3">
                        <div className="flex items-center gap-3">
                            <img src={logo} alt="CGPSC logo" className="w-9 h-9 rounded-xl object-contain shadow" /></div>
                        <h4 className="m-0 text-sm">CGPSC Assistant</h4>
                        <div className="ml-auto">
                            <button onClick={() => setIsOpen(!isOpen)} className="text-white font-semibold">Close</button>
                        </div>
                    </div>
                    <div className="h-64 overflow-y-auto border-b pb-3">
                        {messages.map((m, i) => (
                            <p key={i} className={m.from === "user" ? "text-right text-blue-700" : "text-left text-gray-700"}>
                                {m.text}
                            </p>
                        ))}
                    </div>

                    {/* Services Menu */}
                    {showServices && (
                        <div className="mt-1">
                            {services.map((s, i) => (
                                <button
                                    key={i}
                                    onClick={() => handleServiceClick(s.action)}
                                    className="block w-full text-left bg-cgb-500 text-white p-2 my-1 rounded"
                                >
                                    {s.title}
                                </button>
                            ))}
                        </div>
                    )}

                    {/* Ask User */}
                    <button
                        onClick={onShowServices}
                        className="bg-cgb-500 text-white w-full mt-3 p-2 rounded"
                    >
                        📋 Show Services
                    </button>
                </div>
            )}
        </>
    );
}
