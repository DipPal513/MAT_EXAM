"use client"

import { Facebook, Twitter, Youtube, Mail } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-[#001337] text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Column */}
          <div>
            <h3 className="text-lg font-semibold mb-6 border-b border-blue-500 pb-2 inline-block">About Medexampass</h3>
            <p className="text-sm text-gray-300 mt-4">
              Med Exam Pass is an online platform specifically designed to enhance the revision & exam preparation
              processes of medical students and graduate physicians worldwide.
            </p>

            <div className="mt-8">
              <h4 className="text-sm font-semibold mb-4">FOLLOW US ON:</h4>
              <div className="flex space-x-3">
                <Link href="#" className="bg-gray-700 p-2 rounded-full hover:bg-gray-600 transition">
                  <Facebook size={16} />
                </Link>
                <Link href="#" className="bg-gray-700 p-2 rounded-full hover:bg-gray-600 transition">
                  <Twitter size={16} />
                </Link>
                <Link href="#" className="bg-gray-700 p-2 rounded-full hover:bg-gray-600 transition">
                  <Youtube size={16} />
                </Link>
              </div>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-lg font-semibold mb-6 border-b border-blue-500 pb-2 inline-block">Quick Links</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start">
                <span className="mr-2 mt-1">•</span>
                <Link href="#" className="hover:text-blue-400 transition">
                  Contact Us
                </Link>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1">•</span>
                <Link href="#" className="hover:text-blue-400 transition">
                  Terms & Condition
                </Link>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1">•</span>
                <Link href="#" className="hover:text-blue-400 transition">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="text-lg font-semibold mb-6 border-b border-blue-500 pb-2 inline-block">Resources</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start">
                <span className="mr-2 mt-1">•</span>
                <Link href="#" className="hover:text-blue-400 transition">
                  Exam Information
                </Link>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1">•</span>
                <Link href="#" className="hover:text-blue-400 transition">
                  Courses
                </Link>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1">•</span>
                <Link href="#" className="hover:text-blue-400 transition">
                  Demo
                </Link>
              </li>
            </ul>
          </div>

          {/* Get in touch Column */}
          <div>
            <h3 className="text-lg font-semibold mb-6 border-b border-blue-500 pb-2 inline-block">Get in touch!</h3>
            <div className="flex items-center text-sm text-gray-300 mt-4">
              <Mail size={16} className="text-blue-400 mr-2" />
              <a href="mailto:medexampass@gmail.com" className="hover:text-blue-400 transition">
                medexampass@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="bg-[#001337] border-t border-gray-800 py-4">
        <div className="container mx-auto px-6 text-center text-xs text-gray-400">
          Copyright © 2023{" "}
          <Link href="#" className="text-blue-400 hover:underline">
            Medexampass
          </Link>
          . All Rights Reserved.
        </div>
      </div>
    </footer>
  )
}
