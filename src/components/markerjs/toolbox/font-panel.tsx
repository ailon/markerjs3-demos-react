import { useEffect, useState } from "react";

import { FontIcon } from "../ui/icons";
import ToolboxPanel, { PanelProps } from "../ui/toolbox-panel";
import { Label } from "@/components/ui/label";
import ColorPicker from "../ui/color-picker";
import { TextMarkerEditor } from "@markerjs/markerjs3";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

type Props = {
  markerEditor: TextMarkerEditor;
} & PanelProps;

const FontPanel = ({ markerEditor, variant = "ghost" }: Props) => {
  const [color, setColor] = useState(markerEditor.color);
  const [fontFamily, setFontFamily] = useState(markerEditor.fontFamily);
  const [fontSize, setFontSize] = useState(markerEditor.fontSize.value);

  useEffect(() => {
    setColor(markerEditor.color);
    setFontFamily(markerEditor.fontFamily);
    setFontSize(markerEditor.fontSize.value);
  }, [markerEditor]);

  const handleColorChange = (newValue: string) => {
    markerEditor.color = newValue;
    setColor(newValue);
  };

  const handleFontFamilyChange = (newValue: string) => {
    markerEditor.fontFamily = newValue;
    setFontFamily(newValue);
  };

  const handleFontSizeChange = (newValue: string) => {
    const newValueNum = parseFloat(newValue);
    markerEditor.fontSize = {
      value: newValueNum,
      units: markerEditor.fontSize.units,
      step: markerEditor.fontSize.step,
    };
    setFontSize(newValueNum);
  };

  return (
    <ToolboxPanel title="Font" icon={FontIcon} variant={variant}>
      <div className="flex justify-between items-center space-x-2">
        <Select value={fontFamily} onValueChange={handleFontFamilyChange}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Family" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Helvetica, Arial, sans-serif">
              Sans-serif
            </SelectItem>
            <SelectItem value="Georgia, 'Times New Roman', Times, serif">
              Serif
            </SelectItem>
            <SelectItem value="'Courier New', Courier, monospace">
              Monospace
            </SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex items-center space-x-4 justify-between">
        <Label>Size</Label>
        <ToggleGroup
          type="single"
          value={fontSize.toString()}
          variant="outline"
          onValueChange={handleFontSizeChange}
        >
          <ToggleGroupItem value="0.5" title="Small">
            XS
          </ToggleGroupItem>
          <ToggleGroupItem value="0.8" title="Small">
            S
          </ToggleGroupItem>
          <ToggleGroupItem value="1" title="Normal">
            M
          </ToggleGroupItem>
          <ToggleGroupItem value="1.5" title="Large">
            L
          </ToggleGroupItem>
          <ToggleGroupItem value="3" title="Large">
            XL
          </ToggleGroupItem>
        </ToggleGroup>
      </div>

      <div className="flex flex-col space-y-4">
        <Label>Color</Label>
        <ColorPicker color={color} onValueChange={handleColorChange} />
      </div>
    </ToolboxPanel>
  );
};

export default FontPanel;
