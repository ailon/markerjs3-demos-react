import { useEffect, useState } from "react";

import { FillIcon } from "../ui/icons";
import ToolboxPanel, { PanelProps } from "../ui/toolbox-panel";
import ColorPicker from "../ui/color-picker";
import { defaultColorsWithTransparent } from "@/models/colors";

const FillPanel = ({ markerEditor, variant = "ghost" }: PanelProps) => {
  const [fillColor, setFillColor] = useState(markerEditor.fillColor);

  useEffect(() => {
    setFillColor(markerEditor.fillColor);
  }, [markerEditor]);

  const handleFillColorChange = (newValue: string) => {
    markerEditor.fillColor = newValue;
    setFillColor(newValue);
  };

  return (
    <ToolboxPanel title="Fill" icon={FillIcon} variant={variant}>
      <div className="flex flex-col space-y-4">
        <ColorPicker
          color={fillColor}
          colors={defaultColorsWithTransparent}
          onValueChange={handleFillColorChange}
        />
      </div>
    </ToolboxPanel>
  );
};

export default FillPanel;
