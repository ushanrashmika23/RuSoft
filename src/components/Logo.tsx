import { Link } from "react-router";

interface LogoProps {
  inverted?: boolean;
  size?: "sm" | "md" | "lg";
  linkTo?: string;
  showWordmark?: boolean;
  symbolOnly?: boolean;
}

export function LogoSymbol({ color = "#080808", size = 36 }: { color?: string; size?: number }) {
  return (
    // <svg
    //   width={size}
    //   height={Math.round(size * 1.18)}
    //   viewBox="0 0 200 236"
    //   fill="none"
    //   xmlns="http://www.w3.org/2000/svg"
    // >
    //   <polygon points="97,10 8,178 86,196 97,76" fill={color} />
    //   <polygon points="103,10 192,178 114,196 103,76" fill={color} />
    // </svg>
    <svg
  width={size}
  height={Math.round(size * 1.18)}
  viewBox="0 0 200 236"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="
      M 98.0 10
      L 91.5 11
      L 10 178
      L 27.5 178
      L 99 123
      Z
    "
    fill={color}
  />
  <path
    d="
      M 102.0 10
      L 108.5 11
      L 190 178
      L 172.5 178
      L 101 123
      Z
    "
    fill={color}
  />
</svg>
  );
}

export default function Logo({
  inverted = false,
  size = "md",
  linkTo = "/",
  showWordmark = true,
  symbolOnly = false,
}: LogoProps) {
  const color = inverted ? "#FFFFFF" : "#080808";
  const sizeMap = {
    sm: { sym: 24, name: "text-[12px]", sub: "text-[6.5px]", gap: "gap-2" },
    md: { sym: 32, name: "text-[14px]", sub: "text-[7.5px]", gap: "gap-2.5" },
    lg: { sym: 48, name: "text-[20px]", sub: "text-[10px]", gap: "gap-3" },
  };
  const s = sizeMap[size];

  const content = (
    <div className={`flex items-center ${s.gap}`}>
      <LogoSymbol color={color} size={s.sym} />
      {showWordmark && !symbolOnly && (
        <div className="flex flex-col leading-none">
          <span
            className={`font-bold ${s.name}`}
            style={{ color, letterSpacing: "0.22em" }}
          >
            RUSOFT
          </span>
          <span
            className={`font-light ${s.sub} mt-[3px]`}
            style={{ color, letterSpacing: "0.28em", opacity: 0.65 }}
          >
            TECHNOLOGIES
          </span>
        </div>
      )}
    </div>
  );

  if (linkTo) {
    return (
      <Link to={linkTo} className="inline-flex items-center">
        {content}
      </Link>
    );
  }
  return <div className="inline-flex items-center">{content}</div>;
}
