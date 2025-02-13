import { useState } from "react";

import { Toggle } from "@/components/ui/toggle";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { MarkerTypeGroup, MarkerTypeItem } from "@/models/toolbar";
import { ChevronDownIcon } from "./icons";

type Props = {
  markers: MarkerTypeGroup;
  toggled: boolean;
  onSelectionChange: (markerType: MarkerTypeItem) => void;
};

const ToolbarMarkerGroup = ({ markers, toggled, onSelectionChange }: Props) => {
  const [currentMarkerType, setCurrentMarkerType] = useState(
    markers.markerTypes[0]
  );

  const [popoverOpen, setPopoverOpen] = useState(false);

  const handleMarkerSelection = (markerType: MarkerTypeItem) => {
    setCurrentMarkerType(markerType);
    setPopoverOpen(false);
    onSelectionChange(markerType);
  };

  return (
    <div className="inline-flex">
      <Toggle
        pressed={toggled}
        variant="outline"
        className="rounded-r-none border-r-0"
        onClick={() => handleMarkerSelection(currentMarkerType)}
      >
        <span dangerouslySetInnerHTML={{ __html: currentMarkerType.icon }} />
      </Toggle>
      <Popover open={popoverOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            title={markers.name}
            className="rounded-l-none border-l-0 bg-transparent"
            onClick={() => setPopoverOpen(!popoverOpen)}
          >
            <ChevronDownIcon className="-mx-4 h-4 w-4" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="flex flex-wrap w-auto p-2">
          {markers.markerTypes.map((markerType) => (
            <Button
              variant="ghost"
              size="icon"
              key={markerType.name}
              title={markerType.name}
              onClick={() => handleMarkerSelection(markerType)}
            >
              <span dangerouslySetInnerHTML={{ __html: markerType.icon }} />
            </Button>
          ))}
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default ToolbarMarkerGroup;
