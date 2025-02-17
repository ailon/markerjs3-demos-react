import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import {
  MarkerTypeList,
  MarkerTypeItem,
  isMarkerTypeGroup,
} from "@/models/toolbar";
import { AddIcon } from "./icons";

type Props = {
  markerList: MarkerTypeList;
  variant?: "ghost" | "outline";
  onSelectionChange: (markerType: MarkerTypeItem) => void;
};

const ToolbarMarkersButton = ({
  markerList,
  variant = "ghost",
  onSelectionChange,
}: Props) => {
  const [popoverOpen, setPopoverOpen] = useState(false);

  const handleMarkerSelection = (markerType: MarkerTypeItem) => {
    setPopoverOpen(false);
    onSelectionChange(markerType);
  };

  return (
    <div className="inline-flex border rounded-md border-transparent hover:border hover:border-slate-200">
      <Popover open={popoverOpen} onOpenChange={setPopoverOpen}>
        <PopoverTrigger asChild>
          <Button
            variant={variant}
            title="Add Marker"
            className="bg-transparent"
            onClick={() => setPopoverOpen(!popoverOpen)}
          >
            <AddIcon />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="flex flex-col w-auto p-2">
          {markerList.map((markers) => (
            <div className="flex flex-wrap" key={markers.name}>
              {isMarkerTypeGroup(markers) &&
                markers.markerTypes.map((markerType) => (
                  <Button
                    variant="ghost"
                    size="icon"
                    key={markerType.name}
                    title={markerType.name}
                    onClick={() => handleMarkerSelection(markerType)}
                  >
                    <span
                      dangerouslySetInnerHTML={{ __html: markerType.icon }}
                    />
                  </Button>
                ))}
            </div>
          ))}
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default ToolbarMarkersButton;
