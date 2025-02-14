import { FC, SVGProps, useState } from "react";

import { StrokeIcon } from "../ui/icons";
import { Slider } from "../../ui/slider";
import { Input } from "../../ui/input";
import ToolboxPanel, { PanelProps } from "../ui/toolbox-panel";
import { Label } from "@/components/ui/label";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import ColorPicker from "../ui/color-picker";

const StrokeStyleVisual: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="butt"
    strokeLinejoin="round"
  >
    <path strokeDasharray={props.strokeDasharray} d="M2,12 H22" />
  </svg>
);

const StrokePanel = ({ markerEditor, variant = "ghost" }: PanelProps) => {
  const [strokeWidth, setStrokeWidth] = useState(markerEditor.strokeWidth);
  const [strokeStyle, setStrokeStyle] = useState(markerEditor.strokeDasharray);
  const [strokeColor, setStrokeColor] = useState(markerEditor.strokeColor);

  const handleStrokeWidthChange = (newValue: number) => {
    markerEditor.strokeWidth = newValue;
    setStrokeWidth(newValue);
  };

  const handleStrokeStyleChange = (newValue: string) => {
    markerEditor.strokeDasharray = newValue;
    setStrokeStyle(newValue);
  };

  const handleStrokeColorChange = (newValue: string) => {
    markerEditor.strokeColor = newValue;
    setStrokeColor(newValue);
  };

  return (
    <ToolboxPanel title="Stroke" icon={StrokeIcon} variant={variant}>
      <div className="flex flex-col space-y-4">
        <div className="flex justify-between items-center space-x-2">
          <Label htmlFor="strokeWidthInput">Width</Label>
          <Input
            id="strokeWidthInput"
            value={strokeWidth}
            type="number"
            min={1}
            max={10}
            step={1}
            className="w-auto p-1 text-right"
            onChange={(ev) => handleStrokeWidthChange(ev.target.valueAsNumber)}
          />
        </div>
        <Slider
          value={[strokeWidth]}
          min={1}
          max={10}
          step={1}
          onValueChange={(ev) => handleStrokeWidthChange(ev[0])}
        />
      </div>

      <div className="flex items-center space-x-4 justify-between">
        <Label>Style</Label>
        <ToggleGroup
          type="single"
          value={strokeStyle}
          variant="outline"
          onValueChange={handleStrokeStyleChange}
        >
          <ToggleGroupItem value="" title="Solid">
            <StrokeStyleVisual strokeDasharray="0" />
          </ToggleGroupItem>
          <ToggleGroupItem value="4,4" title="Dashed">
            <StrokeStyleVisual strokeDasharray="4,4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="2,3" title="Dotted">
            <StrokeStyleVisual strokeDasharray="2,3" />
          </ToggleGroupItem>
        </ToggleGroup>
      </div>

      <div className="flex flex-col space-y-4">
        <Label>Color</Label>
        <ColorPicker
          color={strokeColor}
          onValueChange={handleStrokeColorChange}
        />
      </div>
    </ToolboxPanel>
  );
};

export default StrokePanel;
