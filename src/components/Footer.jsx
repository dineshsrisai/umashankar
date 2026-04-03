import { Link } from "react-router-dom";
import { MapPin, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-10 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">

        <div>
          <h3 className="text-white font-bold text-base sm:text-lg mb-2">
            UmaShankar Printers & Solutions
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
            Trusted repair & installation services since 2015. Serving Palakol and surrounding areas.
          </p>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-3 text-sm sm:text-base">Quick Links</h3>
          <ul className="space-y-2 text-xs sm:text-sm">
            <li><Link to="/printer" className="hover:text-white transition-colors">Printers Service</Link></li>
            <li><Link to="/computer" className="hover:text-white transition-colors">Computers & Laptops</Link></li>
            <li><Link to="/cctv" className="hover:text-white transition-colors">CCTV Installation</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-3 text-sm sm:text-base">Visit Us</h3>
          <div className="space-y-2 text-xs sm:text-sm">
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-blue-400" />
              <span>15-6-19 Abothulavari Street, Palakol - 534260</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 shrink-0 text-blue-400" />
              <span>10:00 AM - 10:00 PM, All Days</span>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-700 py-4 text-center text-xs text-slate-500">
        Copyright © 2026 - All rights reserved
      </div>
    </footer>
  );
};

export default Footer;