import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="mt-30 border-t border-slate-100 bg-white">
      <div className="mx-auto w-full max-w-[1500px] px-5 sm:px-7">
        
        {/* Main Footer */}
         <div className="grid gap-10 py-12 sm:py-14 md:grid-cols-[1.6fr_1fr_1fr_1fr] md:justify-items-start">
          {/* Brand */}
          <div>
            <a href="#" className="flex w-fit items-center gap-2">
              <span className="grid h-7 w-7 place-items-center rounded-md bg-gradient-to-br from-[#b33be1] to-[#df3f92] text-[10px] font-extrabold text-white">
                DS
              </span>

              <span className="text-[17px] font-bold tracking-tight text-slate-800">
                Dev <span className="text-[#d92d86]">Stack</span>
              </span>
            </a>

            <p className="mt-4 max-w-[400px] text-xs leading-6 text-slate-400">
              Curated tools, technologies, and resources for developers building 
               modern software.
            </p>

            {/* Social Links */}
            <div className="mt-5 flex items-center gap-5">
              <a
                href="#"
                className="text-[11px] font-semibold text-slate-600 transition hover:text-slate-900"
              >
                GitHub
              </a>

              <a
                href="#"
                className="text-[11px] font-semibold text-slate-600 transition hover:text-slate-900"
              >
                Twitter
              </a>

              <a
                href="#"
                className="text-[11px] font-semibold text-slate-600 transition hover:text-slate-900"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-[10px] font-extrabold tracking-wide text-slate-700">
              PRODUCT
            </h4>

            <div className="mt-4 space-y-3">
              <a
                href="#"
                className="block text-[11px] text-slate-400 transition hover:text-slate-700"
              >
                Home
              </a>

              <a
                href="#technologies"
                className="block text-[11px] text-slate-400 transition hover:text-slate-700"
              >
                Technologies
              </a>

              <a
                href="#projects"
                className="block text-[11px] text-slate-400 transition hover:text-slate-700"
              >
                Projects
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-[10px] font-extrabold tracking-wide text-slate-700">
              COMPANY
            </h4>

            <div className="mt-4 space-y-3">
              <a
                href="#about"
                className="block text-[11px] text-slate-400 transition hover:text-slate-700"
              >
                About
              </a>

              <a
                href="#contact"
                className="block text-[11px] text-slate-400 transition hover:text-slate-700"
              >
                Contact
              </a>

              <a
                href="#"
                className="block text-[11px] text-slate-400 transition hover:text-slate-700"
              >
                Careers
              </a>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-[10px] font-extrabold tracking-wide text-slate-700">
              LEGAL
            </h4>

            <div className="mt-4 space-y-3">
              <a
                href="#"
                className="block text-[11px] text-slate-400 transition hover:text-slate-700"
              >
                Privacy Policy
              </a>

              <a
                href="#"
                className="block text-[11px] text-slate-400 transition hover:text-slate-700"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col gap-3 border-t border-slate-100 py-6 text-[10px] text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Dev Stack. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <a
              href="#"
              className="transition hover:text-slate-700"
            >
              Privacy
            </a>

            <a
              href="#"
              className="transition hover:text-slate-700"
            >
              Terms
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;