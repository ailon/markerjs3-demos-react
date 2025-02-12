import { ToolbarAction } from "@/models/toolbar";
import { DeleteIcon, DownloadIcon, PointerIcon } from "./ui/icons";
import ToolbarActionButton from "./ui/toolbar-action-button";
import { EditorState } from "@/models/editor";

type Props = {
  editorState: EditorState;
  onAction: (action: ToolbarAction) => void;
} & React.ComponentProps<"div">;

const EditorToolbar = ({ editorState, onAction, ...props }: Props) => {
  return (
    <div
      className="flex space-x-1 p-2 justify-between border-b border-slate-100"
      {...props}
    >
      <div className="inline-flex space-x-1">
        <ToolbarActionButton
          icon={PointerIcon}
          title="Select"
          action="select"
          onAction={onAction}
        />
        <ToolbarActionButton
          icon={DeleteIcon}
          title="Delete"
          action="delete"
          onAction={onAction}
          disabled={!editorState.canDelete}
        />
      </div>
      <div className="inline-flex space-x-1">markers</div>
      <div className="inline-flex space-x-1">
        <ToolbarActionButton
          icon={DownloadIcon}
          title="Download"
          action="download"
          onAction={onAction}
        />
      </div>
    </div>
  );
};

export default EditorToolbar;
