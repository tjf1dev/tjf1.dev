export default function GridBackground() {
  return (
    <span
      className="absolute top-1/2 left-1/2 -translate-1/2 h-full w-full opacity-5"
      style={{
        backgroundSize: "40px 40px",
        backgroundImage: `linear-gradient(to right, white 1px, transparent 1px),
                          linear-gradient(to bottom, white 1px, transparent 1px)`,
      }}
    />
  );
}
