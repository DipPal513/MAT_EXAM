"use client"

import { useState } from "react"
import { ChevronUp } from "lucide-react"
import Image from "next/image"

export default function FAQSection() {
    const [openItem, setOpenItem] = useState(0)

    const toggleItem = (index) => {
        setOpenItem(openItem === index ? -1 : index)
    }

    const faqItems = [
        {
            question: "What is Med Exam Pass?",
            answer:
                "Med Exam Pass is an innovative online learning platform designed to empower doctors worldwide. This comprehensive resource caters to a wide range of medical professionals, offering specialized courses for post-graduate degrees such as MRCS, MRCP, USMLE, PLAB, AMC, MPH, FCPS, MD, MS etc. Additionally, it provides a strong foundation in basic medical knowledge for undergraduate students and equips physicians with essential clinical skills. Through a dynamic and engaging online environment, Med Exam Pass aims to enhance medical education and facilitate continuous professional development for healthcare practitioners globally.",
        },
        {
            question: "What types of medical courses are available?",
            answer:
                "We offer a comprehensive range of medical courses covering various specialties including surgery, internal medicine, pediatrics, obstetrics and gynecology, family medicine, and more. Our courses are designed for different qualification paths such as MRCS, MRCP, USMLE, PLAB, AMC, and others.",
        },
        {
            question: "How do I reset my password?",
            answer:
                "To reset your password, click on the 'Forgot Password' link on the login page. Enter your registered email address, and we'll send you instructions to create a new password. Follow the link in the email to set up a new password for your account.",
        },
        {
            question: "Can I cancel my subscription?",
            answer:
                "Yes, you can cancel your subscription at any time. Go to your account settings, select 'Subscription', and click on 'Cancel Subscription'. Your access will continue until the end of your current billing period. There are no cancellation fees.",
        },
        {
            question: "Do you provide additional support?",
            answer:
                "Yes, we offer comprehensive support for all our users. You can reach our support team via email, live chat, or through our community forum. We also provide regular webinars, study groups, and one-on-one mentoring sessions for premium subscribers.",
        },
    ]

    return (
        <div className="max-w-3xl mx-auto p-6 bg-white rounded-xl shadow-sm">
            <div className="flex justify-center mb-6">
                
            </div>

            <h2 className="text-2xl font-bold text-center mb-8">FAQ</h2>

            <div className="space-y-4">
                {faqItems.map((item, index) => (
                    <div key={index} className="border-b transition-all duration-300 border-gray-100 pb-4">
                        <button
                            onClick={() => toggleItem(index)}
                            className="flex justify-between items-center w-full text-left py-2 focus:outline-none"
                        >
                            <h3 className="text-base text-gray-600 font-medium">{item.question}</h3>
                            <ChevronUp
                                className={`w-5 h-5 text-gray-400 transition-transform ${
                                    openItem === index ? "" : "transform rotate-180"
                                }`}
                            />
                        </button>

                        <div
                            className={`overflow-hidden transition-all duration-300`}
                            style={{
                                height: openItem === index ? "auto" : "0",
                            }}
                        >
                            <div className="mt-2 text-sm text-gray-500 leading-relaxed">
                                <p>{item.answer}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
