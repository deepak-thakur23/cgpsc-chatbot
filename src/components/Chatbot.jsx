import { useState } from "react";
import logo from '../assets/logo_cgpsc.png'
const faqs = {
  hi: [
    {
      id: 1,
      q: "CGPSC ऑनलाइन आवेदन फॉर्म भरने की प्रक्रिया क्या है?",
      a: `
      CGPSC परीक्षा के लिए आवेदन करने हेतु:<br/>
      1️⃣ ऑनलाइन आवेदन पोर्टल पर जाएँ:<br/>
      <a href="https://online.ecgpsconline.in/" target="_blank" rel="noopener noreferrer" class="text-blue-600 underline">
        CGPSC Online Application Portal
      </a><br/>
      2️⃣ <a href="https://online.ecgpsconline.in/registration/basic-details" target="_blank" rel="noopener noreferrer" class="text-blue-600 underline">पंजीकरण</a> /  
      <a href="https://online.ecgpsconline.in/auth/login" target="_blank" rel="noopener noreferrer" class="text-blue-600 underline">लॉगिन</a> करें।<br/>
      3️⃣ संबंधित परीक्षा विज्ञापन चुनें।<br/>
      4️⃣ आवश्यक विवरण भरें और फोटो/सिग्नेचर अपलोड करें।<br/>
      5️⃣ शुल्क का भुगतान कर फॉर्म सबमिट करें।<br/>
      विस्तृत निर्देश विज्ञापन PDF में उपलब्ध होते हैं:<br/>
      <a href="https://psc.cg.gov.in" target="_blank" rel="noopener noreferrer" class="text-blue-600 underline">
        CGPSC आधिकारिक वेबसाइट
      </a>.
    `,
    },
    {
      id: 2,
      q: "मैं पासवर्ड भूल गया/गई हूँ। इसे कैसे रीसेट करूँ?",
      a: `
      ➡️ आप लॉगिन पेज पर उपलब्ध "Forgot Password" विकल्प से पासवर्ड रीसेट कर सकते हैं:<br/>
      <a href="https://online.ecgpsconline.in/auth/login" target="_blank" rel="noopener noreferrer" class="text-blue-600 underline">
        CGPSC Candidate Login
      </a><br/><br/>
      पंजीकृत ईमेल / मोबाइल दर्ज करें और OTP / रीसेट लिंक प्राप्त करें।
    `,
    },
    {
      id: 3,
      q: "नवीनतम CGPSC नोटिफिकेशन और विज्ञापन कहाँ देख सकते हैं?",
      a: `
      ➡️ सभी नवीनतम नोटिफिकेशन, विज्ञापन और सूचनाएँ यहाँ उपलब्ध हैं:<br/>
      <a href="https://psc.cg.gov.in/htm/notification.html" target="_blank" rel="noopener noreferrer" class="text-blue-600 underline">
        https://psc.cg.gov.in
      </a><br/><br/>
      "Advertisements" और "Notifications" सेक्शन नियमित रूप से देखें।
    `,
    },
    {
      id: 4,
      q: "मेरी प्रवेश-पत्र / एडमिट कार्ड कैसे डाउनलोड करूँ?",
      a: `
      प्रवेश-पत्र परीक्षा से कुछ दिन पहले ऑनलाइन पोर्टल पर उपलब्ध होता है।<br/><br/>
      1️⃣ यहाँ जाएँ:
      <a href="https://online.ecgpsconline.in/auth/login" target="_blank" rel="noopener noreferrer" class="text-blue-600 underline">
        🎫 CGPSC Candidate Login 
      </a><br/>
      2️⃣ यूज़रनेम और पासवर्ड से लॉगिन करें।<br/>
      3️⃣ संबंधित परीक्षा के एडमिट कार्ड लिंक पर क्लिक कर डाउनलोड करें।
    `,
    },
    {
      id: 5,
      q: "भरे हुए आवेदन में सुधार की प्रक्रिया क्या है?",
      a: `
      ➡️ आवेदन में निःशुल्क सुधार निर्धारित तिथि में केवल एक बार किया जा सकता है।<br/>
      ➡️ ₹500 के शुल्क पर भुगतानयुक्त सुधार अंतिम तिथि के बाद निर्धारित दिनों में उपलब्ध होता है (यह भी केवल एक बार)।<br/>
      ➡️ भुगतानयुक्त सुधार में केवल Gender, DOB, Caste, Domicile, और PH विवरण बदले जा सकते हैं।<br/>
      ➡️ सामान्य से आरक्षित श्रेणी में परिवर्तन करने पर शुल्क का अंतर वापस नहीं किया जाएगा।<br/><br/>
      विस्तृत जानकारी हेतु संबंधित विज्ञापन देखें:<br/>
      <a href="https://psc.cg.gov.in" target="_blank" rel="noopener noreferrer" class="text-blue-600 underline">
        CGPSC आधिकारिक वेबसाइट
      </a>.
    `,
    },
    {
      id: 6,
      q: "क्या आवेदन सबमिट करने के बाद CGPSC को उसकी कॉपी भेजने की आवश्यकता है?",
      a: `
      ➡️ पूरी आवेदन प्रक्रिया ऑनलाइन है, इसलिए आवेदन सबमिट करने के बाद किसी भी प्रकार का दस्तावेज़ भेजने की आवश्यकता नहीं है।
    `,
    },
    {
      id: 7,
      q: "ऑनलाइन आवेदन शुल्क कितना है?",
      a: `
     ➡️ छत्तीसगढ़ के SC/ST/OBC उम्मीदवारों हेतु – ₹300 + पोर्टल शुल्क + GST<br/>
     ➡️ अन्य उम्मीदवारों हेतु – ₹400 + पोर्टल शुल्क + GST<br/><br/>
     अधिक जानकारी के लिए संबंधित <a href="https://psc.cg.gov.in/htm/Advertisement%20-%20Latest.htm" target="_blank" rel="noopener noreferrer" class="text-blue-600 underline">विज्ञापन</a> देखें।
    `,
    },
    {
      id: 8,
      q: "मॉडल आंसर, सिलेबस, परिणाम और नवीनतम नोटिफिकेशन कहाँ देखें?",
      a: `
      ➡️ मॉडल आंसर यहाँ उपलब्ध हैं:<br/>
      <a href="https://psc.cg.gov.in/htm/model_answer%20-%20Latest.html" target="_blank" class="text-blue-600 underline">Model Answer</a><br/>
      ➡️ परिणाम:<br/>
      <a href="https://psc.cg.gov.in/htm/Results.html" target="_blank" class="text-blue-600 underline">Results page</a><br/>
      ➡️ नवीनतम नोटिफिकेशन:<br/>
      <a href="https://psc.cg.gov.in/htm/notification.html" target="_blank" class="text-blue-600 underline">Notifications</a><br/><br/>
      नवीनतम अपडेट हेतु नियमित रूप से वेबसाइट देखें।
    `,
    },

    {
      id: 9,
      q: "पद या आरक्षण से संबंधित प्रश्न?",
      a: `
      ➡️ विभाग द्वारा आयोग को भेजे गए अधियाचन (Indent) के आधार पर पद एवं आरक्षण निर्धारित किया जाता है।<br/><br/>
      अधिक जानकारी के लिए संबंधित विज्ञापन देखें।
    `,
    },

    {
      id: 10,
      q: "दो परीक्षाएँ एक ही दिन होने पर क्या किया जाए?",
      a: `
      ➡️ परीक्षा आयोजन से संबंधित सभी प्रक्रियाएँ पूर्ण हो चुकी हैं। अब किसी परिवर्तन की संभावना नहीं है।<br/><br/>
      अधिक जानकारी हेतु विज्ञापन देखें।
    `,
    },

    {
      id: 11,
      q: "मेरे आवेदन पंजीकरण का SMS क्यों नहीं आया?",
      a: `
      ➡️ SMS भेजना एक स्वचालित प्रक्रिया है। यदि SMS नहीं आता है तो संभवतः आपके मोबाइल में DND सेवा सक्रिय है।<br/><br/>
      इस संबंध में अपने सेवा प्रदाता से संपर्क करें।
    `,
    },

    {
      id: 12,
      q: "पेज खुलने में समय लग रहा है, क्या करें?",
      a: `
      ➡️ इंटरनेट स्पीड, सर्वर लोड आदि कारणों से पेज खुलने में देरी हो सकती है।<br/>
      कृपया 15 मिनट बाद या रात के समय पुनः प्रयास करें।<br/><br/>
      यह सामान्य तकनीकी समस्या है।
    `,
    },

    {
      id: 13,
      q: "समस्या लिखते समय मुझे कौन-कौन सी जानकारी देनी चाहिए?",
      a: `
      ➡️ कृपया निम्न विवरण अवश्य लिखें:<br/>
      1) पंजीकरण संख्या<br/>
      2) रोल नंबर<br/>
      3) परीक्षा का नाम व वर्ष<br/>
      4) जन्मतिथि<br/>
      5) आवेदन में भरा पूरा नाम<br/><br/>
      इससे आपकी समस्या जल्दी सुलझाई जा सकेगी।
    `,
    },

    {
      id: 14,
      q: "यदि मैंने शुल्क जमा कर दिया है लेकिन पोर्टल में 'Fee Not Paid' दिखा रहा है तो?",
      a: `
      ➡️ एक बार दिया गया शुल्क पुनः नहीं देना चाहिए।<br/>
      कृपया कुछ दिन प्रतीक्षा करें, राशि स्वतः अपडेट हो जाती है।<br/>
      यदि समस्या बनी रहे तो HELPDESK से संपर्क करें:<br/>
      ecgpsconline@gmail.com, 📞7987283093, 8602744927
    `,
    },

    {
      id: 15,
      q: "NOC (No Objection Certificate) से संबंधित जानकारी?",
      a: `
      ➡️ सरकारी नौकरी, PSU, यूनिवर्सिटी या स्वायत्त संस्थानों में कार्यरत उम्मीदवारों के लिए NOC आवश्यक है।<br/>
      ➡️ यह दस्तावेज़ सत्यापन या साक्षात्कार के समय जमा करना होता है।<br/>
      ➡️ निजी क्षेत्र के उम्मीदवारों के लिए आवेदन के समय NOC अनिवार्य नहीं है।<br/>
    `,
    },

    {
      id: 16,
      q: "अनुभव प्रमाणपत्र से संबंधित जानकारी?",
      a: `
      ➡️ अनुभव आवश्यक होने पर प्रमाणपत्र दस्तावेज़ सत्यापन के समय उपलब्ध होना चाहिए।<br/>
      प्रमाणपत्र में यह जानकारी हो:<br/>
      ★ संस्था का नाम<br/>
      ★ पदनाम<br/>
      ★ कार्यकाल<br/>
      ★ कार्य का प्रकार<br/>
      ★ जारीकर्ता अधिकारी की मुहर व हस्ताक्षर<br/>
    `,
    },

    {
      id: 17,
      q: "शैक्षणिक योग्यता से संबंधित प्रश्न?",
      a: `
      ➡️ कृपया संबंधित विज्ञापन में शैक्षणिक योग्यता अनुभाग देखें।<br/><br/>
      प्रत्येक पद के लिए योग्यता भिन्न होती है।
    `,
    },

    {
      id: 18,
      q: "CGPSC परीक्षा के लिए आयु सीमा क्या है?",
      a: `
      ➡️ सामान्य आयु सीमा 21–30 वर्ष है।<br/>
      ➡️ छत्तीसगढ़ निवासियों को अधिकतम 35 वर्ष तक की छूट मिलती है।<br/>
      ➡️ आरक्षित वर्गों को सरकारी नियमों के अनुसार अतिरिक्त छूट मिलती है।<br/>
    `,
    },

    {
      id: 19,
      q: "क्या अंतिम वर्ष के विद्यार्थी आवेदन कर सकते हैं?",
      a: `
      ➡️ यह परीक्षा के अनुसार भिन्न हो सकता है। संबंधित विज्ञापन में दिए गए निर्देश देखें:<br/>
      <a href="https://psc.cg.gov.in/htm/Advertisement%20-%20Latest.htm" class="text-blue-600 underline">CGPSC Website</a>
    `,
    },

    {
      id: 20,
      q: "न्यूनतम योग्यता अंक क्या है?",
      a: `
      ➡️ यह वह न्यूनतम अंक हैं जिनके बिना उम्मीदवार सफल नहीं माना जाएगा।<br/>
      सामान्य वर्ग: 33%<br/>
      आरक्षित एवं दिव्यांग वर्ग: 23%<br/>
      कटऑफ केवल उन्हीं उम्मीदवारों के लिए निर्धारित किया जाता है जो न्यूनतम योग्यतानक प्राप्त करते हैं।<br/>
    `,
    },

    {
      id: 21,
      q: "क्या CGPSC परीक्षाओं में नकारात्मक अंकन (Negative Marking) है?",
      a: `
      ➡️ हाँ, सभी वस्तुनिष्ठ परीक्षाओं में गलत उत्तर पर निर्धारित अंक का 1/3 भाग काटा जाता है।<br/>
    `,
    },

    {
      id: 22,
      q: "CGPSC में RTI कैसे लगाएँ?",
      a: `
      1️⃣ आवेदन तैयार करें—नाम, पता, विवरण स्पष्ट लिखें।<br/>
      2️⃣ शुल्क ₹10—IPO, DD, चालान या नकद।<br/>
      3️⃣ आवेदन PIO, CGPSC को स्पीड पोस्ट/रजिस्टर्ड पोस्ट से भेजें।<br/>
      4️⃣ सभी दस्तावेज़ों की कॉपी रखें।<br/>
    `,
    },

    {
      id: 23,
      q: "CGPSC से तकनीकी समस्या या आवेदन संबंधी सहायता कहाँ मिलेगी?",
      a: `
      ➡️ तकनीकी समस्याओं हेतु:<br/>
      ecgpsconline@gmail.com, 📞7987283093, 8602744927<br/><br/>
      परीक्षा संबंधी प्रश्नों हेतु आधिकारिक वेबसाइट देखें:<br/>
      <a href="https://psc.cg.gov.in" class="text-blue-600 underline">CGPSC Official Website</a>
    `,
    }
    // Add your full Hindi FAQ content here (already translated)
  ],

  en: [
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
      q: "Fees for Online application?",
      a: `
     ➡️For domicile Chhattisgarh ST,SC,OBC candidates -> 300/- +Portal charge + GST<br/>
     ➡️For Other candidates -> 400/- +Portal charge + GST<br/><br/>
     further details, kindly see related <a href="https://psc.cg.gov.in/htm/Advertisement%20-%20Latest.htm" target="_blank" rel="noopener noreferrer" class="text-blue-600 underline">advertisment</a>.<br/>
    `,
    },
    {
      id: 8,
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
      id: 9,
      q: "Post or Reservation related query?",
      a: `
      ➡️Advertisements are published by the Commission on the basis of the indents sent to the Commission by the concerned department. 
      Which includes the number of posts and reservation of category.
      <br/><br/>
      Check the "Advertisements" and "Notifications" sections regularly for updates.
    `,
    },
    {
      id: 10,
      q: "Two exam same date related query?",
      a: `
      ➡️All procedures for conducting the examination have been completed. There is no possibility of any change in this now..  
      <br/><br/>
      Check the "Advertisements" and "Notifications" sections regularly for updates.
    `,
    },
    {
      id: 11,
      q: " I did not receive the SMS intimation for registration of my application?",
      a: `
      ➡️SMS sending is a automate process done by system, if you are not getting its due to DND service active in your mobile by service provider.
      <br/><br/>
      Check the "Advertisements" and "Notifications" sections regularly for updates.
    `,
    },
    {
      id: 12,
      q: "What should I do if there is lot of delay in accessing the page?",
      a: `
      ➡️Speed for Registration of On-Line Application on Internet, is based on various factors like Internet Speed, large number of applicants trying to register the application at the same time etc. Therefore if you are not able to get the pages for registration immediately, please retry after a gap of 15 minutes or during off-peak hours at night..
      <br/><br/>
      Check the "Advertisements" and "Notifications" sections regularly for updates.
    `,
    },
    {
      id: 13,
      q: "What details should I provide while writing for the problem?",
      a: `
      ➡️Please do not forget to provide following details while writing to us: (1) REGISTRATION NO. (2) ROLL NUMBER (3) NAME OF EXAM WITH YEAR (4) DATE OF BIRTH & (5) FULL NAME as entered in application.
      <br/><br/>
      Check the "Advertisements" and "Notifications" sections regularly for updates.
    `,
    },
    {
      id: 14,
      q: "What if I have paid and it still shows 'Application fee not paid?",
      a: `
      ➡️FEES ONCE PAID SHOULD NOT BE PAID AGAIN.Kindly wait for few days for it to reflect on your portal or contact HELPDESK (ecgpsconline@gmail.com, 📞7987283093, 8602744927) for clarification on payment.
      <br/><br/>
      Check the "Advertisements" and "Notifications" sections regularly for updates.
    `,
    },
    {
      id: 15,
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
      id: 16,
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
      id: 17,
      q: "Education Qualification related query?",
      a: `
      ➡️Kindly see Education Qualification section of related advertisment. 
      <br/><br/>
      Check the "Advertisements" and "Notifications" sections regularly for updates.
    `,
    },
    {
      id: 18,
      q: "What is the age limit for the CGPSC exam?",
      a: `
      ➡️Candidates must generally be between 21 and 30 years of age. However, residents and domiciles of Chhattisgarh are eligible for an upper age limit relaxation of up to 35 years. Age relaxation is also provided for various reserved categories and other scenarios as per government norms.<br/>
      <br/>
      Check the "Advertisements" and "Notifications" sections regularly for updates.
    `,
    },
    {
      id: 19,
      q: "Can a final year student apply for the CGPSC exam?",
      a: `
      ➡️Specific rules apply to final year students; candidates should check the official notification on the <a href="https://psc.cg.gov.in/htm/Advertisement%20-%20Latest.htm" target="_blank" rel="noopener noreferrer" class="text-blue-600 underline">CGPSC website </a> for the most current guidelines regarding eligibility during the application period.<br/>
      <br/>
      Check the "Advertisements" and "Notifications" sections regularly for updates.
    `,
    },
    {
      id: 20,
      q: "What is the 'minimum qualifying marks' (qualifying marks)?",
      a: `
      ➡️'Minimum qualifying marks' means the minimum marks without which a candidate cannot be successful in the examination. CGPSC In this examination, it will be mandatory for unreserved category candidates to get a minimum of 33% qualifying marks and reserved category and disabled category candidates to get a minimum of 23% qualifying marks in each paper. The cut-off is determined for the candidates who obtain the 'minimum qualifying marks. The candidates who obtain the cut-off marks or more are declared successful and the remaining unsuccessful.<br/>
      <br/>
      Check the "Advertisements" and "Notifications" sections regularly for updates.
    `,
    },
    {
      id: 21,
      q: "Is there negative marking in the CGPSC examinations?",
      a: `
      ➡️Yes, there is a provision for negative marking in the all objective type examinations. For every incorrect answer, 1/3rd of the marks assigned to the correct answer will be deducted.<br/>
      <br/>
      Check the "Advertisements" and "Notifications" sections regularly for updates.
    `,
    },
    {
      id: 22,
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
      id: 23,
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
      closing: "🙏 CGPSC सहायक उपयोग करने के लिए धन्यवाद!...!",
      footer: "⚡ हेल्पडेस्क CGPSC द्वारा संचालित",
      language: "EN",
    },

    en: {
      title: "CGPSC Assistant",
      subtitle: "Please select your issue",
      more: "Do you have another question?",
      yes: "✔ Yes",
      no: "✖ No",
      closing: "🙏 Thank you for using CGPSC helpdesk...!",
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


          {/* Body */}
          <div className="flex-1 overflow-y-auto px-3 py-3 space-y-3 bg-white">
            {/* FAQ list */}
            {!activeFaq && !finished && (
              <div className="space-y-2">
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
            {/* ANSWER
            {activeFaq && !finished && (
              <div className="bg-gray-50 border rounded-xl p-3">
                <p className="text-xs font-semibold">{activeFaq.q}</p>
                <p className="text-[11px] text-gray-700 mt-1">{activeFaq.a}</p>
              </div>
            )} */}

            {/* Any other issue?
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
            )} */}
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
            {/* Thank-you message
            {finished && showMorePrompt && (
              <div className="bg-gray-50 border border-gray-200 rounded-2xl px-3 py-2 text-center animate-pulse">
                <p className="text-xs text-gray-700">
                  🙏 Thank you for using CGPSC helpdesk! Closing...
                </p>
              </div>
            )} */}
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
