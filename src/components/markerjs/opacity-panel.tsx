import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { MarkerBaseEditor } from "@markerjs/markerjs3";
import { OpacityIcon } from "./ui/icons";
import { Slider } from "../ui/slider";
import { Input } from "../ui/input";

type Props = {
  markerEditor: MarkerBaseEditor;
};

const OpacityPanel = ({ markerEditor }: Props) => {
  const [popoverOpen, setPopoverOpen] = useState(false);

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
    <div className="inline-flex">
      <Popover open={popoverOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            title="Opacity"
            onClick={() => setPopoverOpen(!popoverOpen)}
          >
            <OpacityIcon />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="min-w-48 w-auto p-4">
          <div className="flex flex-col space-y-3">
            <h2 className="text-sm font-semibold">Opacity</h2>
            <div className="flex items-center space-x-2">
              <Slider
                value={[opacity]}
                min={0}
                max={1}
                step={0.05}
                onValueChange={(ev) => handleOpacityChange(ev[0])}
              />
              <Input
                value={Math.round(opacity * 100)}
                type="number"
                min={0}
                max={100}
                className="w-auto p-1"
                onChange={(ev) =>
                  handleOpacityChange(ev.target.valueAsNumber / 100)
                }
              />
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default OpacityPanel;
