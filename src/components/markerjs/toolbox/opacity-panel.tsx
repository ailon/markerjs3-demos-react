import { useState } from "react";

import { MarkerBaseEditor } from "@markerjs/markerjs3";
import { OpacityIcon } from "../ui/icons";
import { Slider } from "../../ui/slider";
import { Input } from "../../ui/input";
import ToolboxPanel from "../ui/toolbox-panel";
import { Label } from "@/components/ui/label";

type Props = {
  markerEditor: MarkerBaseEditor;
};

const OpacityPanel = ({ markerEditor }: Props) => {
  const [opacity, setOpacity] = useState(markerEditor.opacity);

  const handleOpacityChange = (newValue: number) => {
    if (newValue < 0 || newValue > 1) {
      setOpacity(markerEditor.opacity);
    } else {
      markerEditor.opacity = newValue;
      setOpacity(newValue);
    }
  };

  return (
    <ToolboxPanel title="Opacity" icon={OpacityIcon}>
      <div className="flex flex-col space-y-4">
        <div className="flex justify-between items-center space-x-2">
          <Label htmlFor="opacityInput">Value:</Label>
          <Input
            id="opacityInput"
            value={Math.round(opacity * 100)}
            type="number"
            min={0}
            max={100}
            step={10}
            className="w-auto p-1 text-right"
            onChange={(ev) =>
              handleOpacityChange(ev.target.valueAsNumber / 100)
            }
          />
        </div>
        <Slider
          value={[opacity]}
          min={0}
          max={1}
          step={0.1}
          onValueChange={(ev) => handleOpacityChange(ev[0])}
        />
      </div>
    </ToolboxPanel>
  );
};

export default OpacityPanel;
