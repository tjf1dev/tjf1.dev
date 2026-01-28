export default function NoiseBackground() {
  return (
    <span
      className="absolute inset-0 rounded-xl opacity-5 pointer-events-none "
      style={{
        backgroundImage: "url('/noise.png')",
        backgroundSize: "60%",
        backgroundRepeat: "repeat",
        backgroundAttachment: "local",
      }}
    />
  );
}
