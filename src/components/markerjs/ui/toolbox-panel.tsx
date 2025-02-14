import { ReactNode, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { IconComponent } from "@/components/markerjs/ui/icons";
import { MarkerBaseEditor } from "@markerjs/markerjs3";

type Props = {
  title: string;
  icon: IconComponent;
  variant?: "ghost" | "outline";
  children: ReactNode;
};

export type PanelProps = {
  markerEditor: MarkerBaseEditor;
  variant?: "ghost" | "outline";
};

const ToolboxPanel = ({
  title,
  icon: Icon,
  variant = "ghost",
  children,
}: Props) => {
  const [popoverOpen, setPopoverOpen] = useState(false);

  return (
    <div className="inline-flex">
      <Popover open={popoverOpen} onOpenChange={setPopoverOpen}>
        <PopoverTrigger asChild>
          <Button
            variant={variant}
            title={title}
            onClick={() => setPopoverOpen(!popoverOpen)}
          >
            <Icon />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="min-w-48 w-auto p-4">
          <div className="flex flex-col space-y-6">
            <h2 className="text-sm font-semibold">{title}</h2>
            {children}
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default ToolboxPanel;
