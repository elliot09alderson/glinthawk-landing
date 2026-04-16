export default function PageIllustration() {
  return (
    <>
      {/* ── Fixed atmospheric background ─────────────────── */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-30 overflow-hidden"
      >
        {/* Primary hero glow — large indigo/violet radial */}
        <div
          className="absolute left-1/2 top-0 h-[120vh] w-full -translate-x-1/2"
          style={{
            background:
              "radial-gradient(ellipse 75% 60% at 50% 0%, rgba(99,102,241,0.28) 0%, rgba(79,70,229,0.12) 45%, transparent 68%)",
          }}
        />
        {/* Violet accent — upper right */}
        <div
          className="absolute -right-20 top-[5%] h-[700px] w-[600px]"
          style={{
            background:
              "radial-gradient(ellipse at right top, rgba(139,92,246,0.18) 0%, transparent 60%)",
            filter: "blur(50px)",
          }}
        />
        {/* Blue accent — upper left */}
        <div
          className="absolute -left-20 top-[15%] h-[500px] w-[500px]"
          style={{
            background:
              "radial-gradient(ellipse at left top, rgba(59,130,246,0.12) 0%, transparent 60%)",
            filter: "blur(60px)",
          }}
        />
        {/* Mid-page indigo — right */}
        <div
          className="absolute -right-40 top-[55%] h-[600px] w-[500px]"
          style={{
            background:
              "radial-gradient(ellipse at right center, rgba(99,102,241,0.14) 0%, transparent 60%)",
            filter: "blur(70px)",
          }}
        />
        {/* Mid-page blue — left */}
        <div
          className="absolute -left-40 top-[70%] h-[500px] w-[450px]"
          style={{
            background:
              "radial-gradient(ellipse at left center, rgba(59,130,246,0.10) 0%, transparent 60%)",
            filter: "blur(80px)",
          }}
        />
        {/* Bottom violet glow */}
        <div
          className="absolute bottom-0 left-1/2 h-[500px] w-[800px] -translate-x-1/2"
          style={{
            background:
              "radial-gradient(ellipse at center bottom, rgba(109,40,217,0.12) 0%, transparent 60%)",
            filter: "blur(60px)",
          }}
        />
      </div>

      {/* ── Hero concentric rings ─────────────────────────── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 -z-20 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/4 opacity-40"
        style={{
          background:
            "repeating-radial-gradient(circle at center, transparent 0px, transparent 80px, rgba(99,102,241,0.07) 81px, transparent 83px)",
        }}
      />
    </>
  );
}
