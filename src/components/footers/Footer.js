import React from 'react';
import { Phone, Mail, Facebook, Instagram, Linkedin } from 'lucide-react';
import { chatOnWhatsapp, openMail } from '../../utils/utils';

export default function Footer() {
  return (
    <footer className="bg-blue/60 pt-10">
      {/* Main Footer Container with Large Rounded Top */}
      <div className="bg-white rounded-t-[50px] md:rounded-t-[80px] px-6 md:px-12 lg:px-20 pt-16 pb-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            
            {/* Column 1: Brand & Slogan */}
            <div className="lg:col-span-1">
              <h2 className="text-lg md:text-2xl font-bold text-black-metal tracking-wider mb-6">
                EDUSTEPS2EUROPE
              </h2>
              <p className="font-playfair italic text-lg text-black-metal/80 leading-relaxed max-w-[280px]">
                Supporting students & families on their journey to success abroad.
              </p>
            </div>

            {/* Column 2: Navigation 1 */}
            <div className="flex flex-col gap-4">
              <a href="/" className="text-black-metal/70 hover:text-orange transition-colors">Home</a>
              <a href="/services" className="text-black-metal/70 hover:text-orange transition-colors">Services</a>
              <a href="#" className="text-black-metal/70 hover:text-orange transition-colors">Free Guide</a>
            </div>

            {/* Column 3: Navigation 2 */}
            <div className="flex flex-col gap-4">
              <a href="/contact" className="text-black-metal/70 hover:text-orange transition-colors">Contact Us</a>
              <a href="/faq" className="text-black-metal/70 hover:text-orange transition-colors">FAQ</a>
              <a onClick={chatOnWhatsapp} className="text-black-metal/70 hover:text-orange transition-colors cursor-pointer">Book a free Call</a>
            </div>

            {/* Column 4: Contact & Socials */}
            <div className="flex flex-col gap-6">
              <div className="space-y-3">
                <div onClick={chatOnWhatsapp} className="flex items-center gap-3 text-black-metal/80 cursor-pointer">
                  <Phone size={18} className="text-black-metal" />
                  <span className="text-sm font-medium">+33 07 80 75 27 58</span>
                </div>
                <div onClick={openMail} className="flex items-center gap-3 text-black-metal/80 cursor-pointer">
                  <Mail size={18} className="text-black-metal" />
                  <span className="text-sm font-medium">contact@edusteps.com</span>
                </div>
              </div>

              {/* Social Icons */}
              <div className="flex items-center gap-4">
                <a href="#" className="p-2 rounded-full hover:bg-orange/10 transition-colors text-black-metal">
                  <Facebook size={22} fill="currentColor" />
                </a>
                <a href="#" className="p-2 rounded-full hover:bg-orange/10 transition-colors text-black-metal">
                  <Instagram size={22} />
                </a>
                <a href="#" className="p-2 rounded-full hover:bg-orange/10 transition-colors text-black-metal">
                  <Linkedin size={22} fill="currentColor" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="bg-light-orange py-4 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-[13px] text-black-metal/80 font-medium">
          <p>© 2025 EDUSTEPS2EUROPE. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Designed with care for future global students 🌍
          </p>
        </div>
      </div>
    </footer>
  );
}