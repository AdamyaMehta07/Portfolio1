export default function Background() {
  return (
    <div className="bg-layers" aria-hidden="true">
      {/* Layer 1: matte black base is set on .bg-layers itself */}
      <div className="bg-grid" />
      <div className="bg-noise" />
      <div className="bg-aurora" />
      <div className="bg-vignette" />
    </div>
  );
}
