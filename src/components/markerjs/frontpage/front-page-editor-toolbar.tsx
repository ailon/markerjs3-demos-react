import { PointerIcon } from "../ui/icons";
import ToolbarButton from "../ui/toolbar-button";

type Props = React.ComponentProps<"div">;

const EditorToolbar = ({ ...props }: Props) => {
  return (
    <div
      className="flex space-x-1 p-2 justify-between border-b border-slate-100 bg-white"
      {...props}
    >
      <div className="inline-flex space-x-1">
        <ToolbarButton icon={PointerIcon} title="Select" />
      </div>
      <div className="inline-flex space-x-1">markers</div>
      <div className="inline-flex space-x-1">
        <ToolbarButton icon={PointerIcon} title="Select" />
      </div>
    </div>
  );
};

export default EditorToolbar;
