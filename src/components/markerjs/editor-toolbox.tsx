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
  ShapeMarkerEditor,
  ShapeOutlineMarkerEditor,
  TextMarkerEditor,
} from "@markerjs/markerjs3";
import OpacityPanel from "./toolbox/opacity-panel";
import StrokePanel from "./toolbox/stroke-panel";
import FillPanel from "./toolbox/fill-panel";
import FontPanel from "./toolbox/font-panel";

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
  const canEditOpacity = (
    editor: MarkerBaseEditor | null
  ): editor is MarkerBaseEditor => {
    if (editor === null) {
      return false;
    }

    return editor.is(MarkerBaseEditor);
  };

  const canEditStroke = (
    editor: MarkerBaseEditor | null
  ): editor is MarkerBaseEditor => {
    if (editor === null) {
      return false;
    }

    return (
      editor.is(ShapeOutlineMarkerEditor) ||
      editor.is(LinearMarkerEditor) ||
      editor.is(CalloutMarkerEditor) ||
      editor.is(FreehandMarkerEditor) ||
      editor.is(PolygonMarkerEditor) ||
      editor.is(CaptionFrameMarkerEditor)
    );
  };

  const canEditFill = (
    editor: MarkerBaseEditor | null
  ): editor is MarkerBaseEditor => {
    if (editor === null) {
      return false;
    }

    return (
      editor.is(ShapeMarkerEditor) ||
      editor.is(CaptionFrameMarkerEditor) ||
      editor.is(CalloutMarkerEditor)
    );
  };

  const canEditFont = (
    editor: MarkerBaseEditor | null
  ): editor is TextMarkerEditor => {
    if (editor === null) {
      return false;
    }

    return editor.is(TextMarkerEditor);
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
          className="hidden sm:inline-flex"
          action="redo"
          onAction={onAction}
          disabled={!editorState.canRedo}
        />
      </div>

      <div className="inline-flex space-x-1">
        {canEditFont(markerEditor) && (
          <FontPanel markerEditor={markerEditor} variant={variant} />
        )}
        {canEditStroke(markerEditor) && (
          <StrokePanel markerEditor={markerEditor} variant={variant} />
        )}
        {canEditFill(markerEditor) && (
          <FillPanel markerEditor={markerEditor} variant={variant} />
        )}
        {canEditOpacity(markerEditor) && (
          <OpacityPanel markerEditor={markerEditor} variant={variant} />
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
          className="hidden sm:inline-flex"
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
