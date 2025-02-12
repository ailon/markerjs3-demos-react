import { ToolbarAction } from "@/models/toolbar";
import { PointerIcon } from "./ui/icons";
import ToolbarActionButton from "./ui/toolbar-action-button";

type Props = {
  onAction: (action: ToolbarAction) => void;
} & React.ComponentProps<"div">;

const EditorToolbar = ({ onAction, ...props }: Props) => {
  return (
    <div
      className="flex space-x-1 p-2 justify-between border-b border-slate-100 bg-white"
      {...props}
    >
      <div className="inline-flex space-x-1">
        <ToolbarActionButton
          icon={PointerIcon}
          title="Select"
          action="select"
          onAction={onAction}
        />
      </div>
      <div className="inline-flex space-x-1">markers</div>
      <div className="inline-flex space-x-1"></div>
    </div>
  );
};

export default EditorToolbar;
