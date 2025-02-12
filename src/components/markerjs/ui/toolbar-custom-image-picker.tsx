import { useState } from "react";

import { Toggle } from "@/components/ui/toggle";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { ChevronDownIcon } from "./icons";
import { MarkerTypeItem } from "@/models/toolbar";
import { CustomImageMarker } from "@markerjs/markerjs3";
import { NewMarkerOptions } from "@/models/editor";
import { CustomSvgImage, emojis } from "./emojis";

type Props = {
  toggled: boolean;
  onSelectionChange: (
    markerType: MarkerTypeItem,
    options?: NewMarkerOptions
  ) => void;
};

const CustomImagePicker = ({ toggled, onSelectionChange }: Props) => {
  const [currentEmoji, setCurrentEmoji] = useState(emojis[0]);

  const [popoverOpen, setPopoverOpen] = useState(false);

  const handleSelection = (emoji: CustomSvgImage) => {
    setCurrentEmoji(emoji);
    setPopoverOpen(false);
    onSelectionChange(
      {
        icon: ChevronDownIcon,
        name: emoji.name,
        markerType: CustomImageMarker,
      },
      { svgString: emoji.svgString }
    );
  };

  return (
    <div className="inline-flex">
      <Toggle
        pressed={toggled}
        variant="outline"
        className="rounded-r-none border-r-0"
        onClick={() => handleSelection(currentEmoji)}
      >
        <span dangerouslySetInnerHTML={{ __html: currentEmoji.svgString }} />
      </Toggle>
      <Popover open={popoverOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            title="Emoji"
            className="rounded-l-none border-l-0 bg-transparent"
            onClick={() => setPopoverOpen(!popoverOpen)}
          >
            <ChevronDownIcon className="-mx-4 h-4 w-4" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="flex flex-wrap w-auto p-2">
          {emojis.map((emoji) => (
            <Button
              variant="ghost"
              size="icon"
              key={emoji.name}
              title={emoji.name}
              onClick={() => handleSelection(emoji)}
            >
              <span dangerouslySetInnerHTML={{ __html: emoji.svgString }} />
            </Button>
          ))}
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default CustomImagePicker;
