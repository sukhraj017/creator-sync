import { useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  const navClass = (path) =>
    `group relative flex items-center gap-2 px-5 h-10 rounded-full text-sm font-medium 
     text-gray-300 border border-white/10 transition-all duration-300
     hover:text-white hover:bg-gradient-to-r hover:from-[#a455ff] hover:to-[#40c9b8]
     hover:shadow-[0_0_15px_rgba(164,85,255,0.35)]`;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-16 bg-[#0b0b0f]/80 backdrop-blur-2xl border-b border-white/10 px-4">
      <div className="max-w-7xl mx-auto h-full flex items-center justify-between">

        {/* LEFT — LOGO */}
        <a href="/" className="flex items-center gap-3">
          <div className="w-[40px] h-[40px] rounded-lg bg-[hsl(263,70%,60%)] flex items-center justify-center shadow-lg shadow-purple-500/20">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="hsl(240 5% 96%)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5" />
              <rect x="2" y="6" width="14" height="12" rx="2" />
            </svg>
          </div>

          <span className="text-xl font-bold bg-gradient-to-r from-[#a455ff] to-[#40c9b8] bg-clip-text text-transparent tracking-wide">
            CreatorSync
          </span>
        </a>

        {/* CENTER LINKS */}
        <div className="hidden md:flex items-center gap-3 px-3 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl">
          <a href="/upload" className={navClass("/upload")}>Upload</a>
          <a href="/my-videos" className={navClass("/my-videos")}>My Videos</a>
          <a href="/pricing" className={navClass("/pricing")}>Pricing</a>
        </div>

        {/* RIGHT BUTTONS */}
        <div className="flex items-center gap-3">

          {/* SIGN IN — Transparent default */}
          <a
            href="/auth"
            className="px-5 h-10 flex items-center rounded-full text-sm font-semibold text-white 
                       border border-white/20 hover:bg-gradient-to-r hover:from-[#a455ff] hover:to-[#40c9b8]
                       hover:shadow-lg hover:shadow-purple-500/20 transition"
          >
            Sign In
          </a>

          {/* TRY FREE — Always blue */}
          <a
            href="/upload"
            className="px-5 h-10 flex items-center rounded-full text-sm font-semibold text-white
                       bg-gradient-to-r from-[#a455ff] to-[#40c9b8] shadow-lg shadow-purple-500/20 
                       hover:opacity-90 transition"
          >
            Try Free
          </a>

        </div>
      </div>
    </nav>
  );
}
<section
  className="w-full h-screen bg-cover bg-center bg-no-repeat"
  style={{ backgroundImage: "url('/hero.png')" }}
></section>
