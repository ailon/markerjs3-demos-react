import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { defaultColors } from "@/models/colors";
import { FC, SVGProps } from "react";

const ColorSampleVisual: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path
      fill={props.fill}
      strokeWidth={2}
      stroke="currentColor"
      d="M0,0 H24 V24 H0 Z"
    />
  </svg>
);

const TransparentColorSampleVisual: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path
      fill={props.fill}
      strokeWidth={2}
      stroke="currentColor"
      d="M0,0 H24 V24 H0 Z"
    />
    <path
      fill="currentColor"
      opacity="0.2"
      strokeWidth="0"
      d="M0,0 H12 V12 H0 Z"
    />
    <path
      fill="currentColor"
      opacity="0.2"
      strokeWidth="0"
      d="M12,12 H24 V24 H12 Z"
    />
  </svg>
);

type Props = {
  color: string;
  colors?: string[];
  onValueChange: (color: string) => void;
};

const ColorPicker = ({
  color,
  colors = defaultColors,
  onValueChange,
}: Props) => {
  return (
    <ToggleGroup
      type="single"
      value={color}
      onValueChange={(v) => v && v !== color && onValueChange(v)}
      className="flex flex-wrap justify-start max-w-48"
    >
      {colors.map((c) => (
        <ToggleGroupItem key={c} value={c} title={c}>
          {c !== "transparent" && <ColorSampleVisual fill={c} />}
          {c === "transparent" && <TransparentColorSampleVisual />}
        </ToggleGroupItem>
      ))}
    </ToggleGroup>
  );
};

export default ColorPicker;
