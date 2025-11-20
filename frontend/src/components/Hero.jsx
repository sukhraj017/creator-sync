export default function Hero() {
  return (
    <section className="w-full pt-28 pb-16 bg-[#0b0b0f] text-white">
      <div className="max-w-7xl mx-auto px-6 flex flex-col">

        {/* TAGLINE with STAR ICON */}
        <div
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/10 
                      text-[#5ea0ff] text-sm font-medium mb-4"
          style={{ width: "max-content" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#5ea0ff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 3v3M12 18v3M4.5 7.5l2.1 2.1M17.4 16.4l2.1 2.1M3 12h3M18 12h3M4.5 16.5l2.1-2.1M17.4 7.6l2.1-2.1" />
          </svg>
          AI-Powered Video Repurposing
        </div>

        {/* TITLE */}
        <h1 className="text-5xl font-extrabold leading-tight mb-6">
          Turn One Video Into{" "}
          <span className="bg-gradient-to-r from-[#5ea0ff] to-[#7f56d9] text-transparent bg-clip-text">
            Dozens
          </span>{" "}
          of Clips
        </h1>

        {/* SUBTITLE */}
        <p className="text-lg text-gray-300 max-w-2xl mb-8">
          CreatorSync uses AI to automatically repurpose your long-form content
          into engaging short clips for YouTube Shorts, Instagram Reels, and TikTok.
        </p>

        {/* BUTTONS */}
        <div className="flex items-center gap-4 mb-6">

          {/* Try Free Now — ALWAYS BLUE */}
          <a
            href="/upload"
            className="px-6 py-3 rounded-full text-base font-semibold text-white 
                       bg-gradient-to-r from-[#a455ff] to-[#40c9b8] shadow-lg 
                       shadow-purple-500/20 hover:opacity-90 transition"
          >
            Try Free Now
          </a>

          {/* View Pricing — hover only */}
          <a
            href="/pricing"
            className="px-6 py-3 rounded-full text-base font-semibold text-white 
                       border border-white/20 hover:bg-gradient-to-r hover:from-[#a455ff] hover:to-[#40c9b8]
                       hover:shadow-lg hover:shadow-purple-500/20 transition"
          >
            View Pricing
          </a>
        </div>

        {/* CHECKMARKS */}
        <div className="flex items-center gap-6 text-gray-400 text-sm">

          {/* Check 1 */}
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-full border border-green-500 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#22c55e"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <span>No credit card required</span>
          </div>

          {/* Check 2 */}
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-full border border-green-500 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#22c55e"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <span>Free trial included</span>
          </div>

        </div>

      </div>
    </section>
  );
}
