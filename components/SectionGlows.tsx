export default function SectionGlows() {
  return (
    <>
      {/* Top corner glows - extend above section boundary */}
      <div className="absolute -top-48 left-0 w-[700px] h-[500px] pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(16,185,129,0.15),transparent_60%)]" />
      </div>
      <div className="absolute -top-48 right-0 w-[700px] h-[500px] pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(52,211,153,0.15),transparent_60%)]" />
      </div>

      {/* Bottom corner glows - extend below section boundary */}
      <div className="absolute -bottom-48 left-0 w-[700px] h-[500px] pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(52,211,153,0.15),transparent_60%)]" />
      </div>
      <div className="absolute -bottom-48 right-0 w-[700px] h-[500px] pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(16,185,129,0.15),transparent_60%)]" />
      </div>
    </>
  );
}
