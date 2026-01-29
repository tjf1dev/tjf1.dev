export default function ContainerGlare({
  topLeft = false,
  topRight = false,
  bottomLeft = false,
  bottomRight = false,
}: {
  topLeft?: boolean;
  topRight?: boolean;
  bottomLeft?: boolean;
  bottomRight?: boolean;
}) {
  const baseClasses =
    "pointer-events-none absolute w-2/3 h-[150%] aspect-square rounded-full blur-2xl opacity-20";

  const styleFor = (pos: string) => ({
    background: `radial-gradient(circle at ${pos}, rgba(255,255,255,0.9), rgba(255,255,255,0.4) 50%, rgba(255,255,255,0.15) 70%, transparent 100%)`,
  });

  return (
    <div className="overflow-hidden">
      {topLeft && (
        <span
          className={`${baseClasses} -top-4/5 -left-1/10`}
          style={styleFor("-30% 10%")}
        />
      )}
      {topRight && (
        <span
          className={`${baseClasses} -top-4/5 right-[-10%]`}
          style={styleFor("130% 10%")}
        />
      )}
      {bottomLeft && (
        <span
          className={`${baseClasses} bottom-[-50%] -left-1/10`}
          style={styleFor("-30% 110%")}
        />
      )}
      {bottomRight && (
        <span
          className={`${baseClasses} bottom-[-50%] right-[-10%]`}
          style={styleFor("130% 110%")}
        />
      )}
    </div>
  );
}
