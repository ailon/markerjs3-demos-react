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
import {
  CalloutMarkerEditor,
  CaptionFrameMarkerEditor,
  FreehandMarkerEditor,
  LinearMarkerEditor,
  MarkerBaseEditor,
  PolygonMarkerEditor,
  ShapeOutlineMarkerEditor,
} from "@markerjs/markerjs3";
import OpacityPanel from "./toolbox/opacity-panel";
import StrokePanel from "./toolbox/stroke-panel";

type Props = {
  editorState: EditorState;
  variant?: "ghost" | "outline";
  markerEditor: MarkerBaseEditor | null;
  onAction: (action: ToolbarAction) => void;
} & React.ComponentProps<"div">;

const EditorToolbox = ({
  editorState,
  variant = "ghost",
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

  const canEditStroke = () => {
    if (markerEditor === null) {
      return false;
    }

    return (
      markerEditor.is(ShapeOutlineMarkerEditor) ||
      markerEditor.is(LinearMarkerEditor) ||
      markerEditor.is(CalloutMarkerEditor) ||
      markerEditor.is(FreehandMarkerEditor) ||
      markerEditor.is(PolygonMarkerEditor) ||
      markerEditor.is(CaptionFrameMarkerEditor)
    );
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
          variant={variant}
          action="undo"
          onAction={onAction}
          disabled={!editorState.canUndo}
        />
        <ToolbarActionButton
          icon={RedoIcon}
          title="Redo"
          variant={variant}
          action="redo"
          onAction={onAction}
          disabled={!editorState.canRedo}
        />
      </div>

      <div className="inline-flex space-x-1">
        {canEditStroke() && (
          <StrokePanel markerEditor={markerEditor!} variant={variant} />
        )}
        {canEditOpacity() && (
          <OpacityPanel markerEditor={markerEditor!} variant={variant} />
        )}
      </div>

      <div className="inline-flex space-x-1">
        <ToolbarActionButton
          icon={ZoomOutIcon}
          title="Zoom-out"
          variant={variant}
          action="zoom-out"
          onAction={onAction}
        />
        <ToolbarActionButton
          icon={ZoomResetIcon}
          title="Reset zoom"
          variant={variant}
          action="zoom-reset"
          onAction={onAction}
        />
        <ToolbarActionButton
          icon={ZoomInIcon}
          title="Zoom-in"
          variant={variant}
          action="zoom-in"
          onAction={onAction}
        />
      </div>
    </div>
  );
};

export default EditorToolbox;
