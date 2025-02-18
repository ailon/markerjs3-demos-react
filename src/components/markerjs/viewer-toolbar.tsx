import { ToolbarAction } from "@/models/toolbar";
import { ZoomInIcon, ZoomOutIcon, ZoomResetIcon } from "./ui/icons";
import ToolbarActionButton from "./ui/toolbar-action-button";

type Props = {
  variant?: "ghost" | "outline";
  onAction: (action: ToolbarAction) => void;
} & React.ComponentProps<"div">;

const ViewerToolbar = ({ variant = "ghost", onAction, ...props }: Props) => {
  return (
    <div className="inline-flex" {...props}>
      <div className="inline-flex space-x-1">
        <ToolbarActionButton
          icon={ZoomOutIcon}
          title="Zoom-out"
          variant={variant}
          action="zoom-out"
          onAction={onAction}
          className="rounded-r-none"
        />
        <ToolbarActionButton
          icon={ZoomResetIcon}
          title="Reset zoom"
          variant={variant}
          action="zoom-reset"
          onAction={onAction}
          className="rounded-none"
        />
        <ToolbarActionButton
          icon={ZoomInIcon}
          title="Zoom-in"
          variant={variant}
          action="zoom-in"
          onAction={onAction}
          className="rounded-l-none"
        />
      </div>
    </div>
  );
};

export default ViewerToolbar;
