import { ToolbarAction } from "@/models/toolbar";
import {
  RedoIcon,
  UndoIcon,
  ZoomInIcon,
  ZoomOutIcon,
  ZoomResetIcon,
} from "./ui/icons";
import ToolbarActionButton from "./ui/toolbar-action-button";
import { EditorState } from "@/models/editor";
import { MarkerBaseEditor } from "@markerjs/markerjs3";
import OpacityPanel from "./opacity-panel";

type Props = {
  editorState: EditorState;
  markerEditor: MarkerBaseEditor | null;
  onAction: (action: ToolbarAction) => void;
} & React.ComponentProps<"div">;

const EditorToolbox = ({
  editorState,
  markerEditor,
  onAction,
  ...props
}: Props) => {
  const canEditOpacity = () => {
    if (markerEditor === null) {
      return false;
    }

    return markerEditor.is(MarkerBaseEditor);
  };

  return (
    <div
      className="flex space-x-1 p-2 justify-between border-t border-slate-100"
      {...props}
    >
      <div className="inline-flex space-x-1">
        <ToolbarActionButton
          icon={UndoIcon}
          title="Undo"
          action="undo"
          onAction={onAction}
          disabled={!editorState.canUndo}
        />
        <ToolbarActionButton
          icon={RedoIcon}
          title="Redo"
          action="redo"
          onAction={onAction}
          disabled={!editorState.canRedo}
        />
      </div>
      <div className="inline-flex space-x-1">
        {canEditOpacity() && <OpacityPanel markerEditor={markerEditor!} />}
      </div>
      <div className="inline-flex space-x-1">
        <ToolbarActionButton
          icon={ZoomOutIcon}
          title="Zoom-out"
          action="zoom-out"
          onAction={onAction}
        />
        <ToolbarActionButton
          icon={ZoomResetIcon}
          title="Reset zoom"
          action="zoom-reset"
          onAction={onAction}
        />
        <ToolbarActionButton
          icon={ZoomInIcon}
          title="Zoom-in"
          action="zoom-in"
          onAction={onAction}
        />
      </div>
    </div>
  );
};

export default EditorToolbox;
