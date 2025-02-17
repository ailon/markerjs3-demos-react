import {
  MarkerTypeList,
  ToolbarAction,
  MarkerTypeItem,
  isMarkerTypeGroup,
} from "@/models/toolbar";
import { DeleteIcon, DownloadIcon, PointerIcon } from "./ui/icons";
import ToolbarActionButton from "./ui/toolbar-action-button";
import { EditorState } from "@/models/editor";
import ToolbarMarkerGroup from "./ui/toolbar-marker-group";
import ToolbarMarkersButton from "./ui/toolbar-markers-button";

type Props = {
  markerTypes: MarkerTypeList;
  currentMarkerType: MarkerTypeItem | null;
  editorState: EditorState;
  variant?: "ghost" | "outline";
  onAction: (action: ToolbarAction) => void;
  onNewMarker: (markerType: MarkerTypeItem) => void;
} & React.ComponentProps<"div">;

const EditorToolbar = ({
  markerTypes,
  currentMarkerType,
  editorState,
  variant = "ghost",
  onAction,
  onNewMarker,
  ...props
}: Props) => {
  return (
    <div
      className="flex space-x-1 p-2 justify-between border-b border-slate-100"
      {...props}
    >
      <div className="inline-flex space-x-1">
        <ToolbarActionButton
          icon={PointerIcon}
          title="Select"
          buttonType="toggle"
          variant={variant}
          toggled={editorState.mode === "select"}
          action="select"
          onAction={onAction}
        />
        <ToolbarActionButton
          icon={DeleteIcon}
          title="Delete"
          variant={variant}
          action="delete"
          onAction={onAction}
          disabled={!editorState.canDelete}
        />
      </div>

      <div className="hidden sm:inline-flex space-x-1 items-center">
        {markerTypes.map(
          (markerListItem) =>
            isMarkerTypeGroup(markerListItem) ? (
              <ToolbarMarkerGroup
                key={markerListItem.name}
                markers={markerListItem}
                variant={variant}
                toggled={
                  editorState.mode === "create" && currentMarkerType
                    ? markerListItem.markerTypes.includes(currentMarkerType)
                    : false
                }
                onSelectionChange={onNewMarker}
              />
            ) : null // @todo handle single marker items
        )}
      </div>
      <div className="sm:hidden space-x-1 items-center">
        <ToolbarMarkersButton
          markerList={markerTypes}
          onSelectionChange={onNewMarker}
        />
      </div>

      <div className="inline-flex space-x-1">
        <ToolbarActionButton
          icon={DownloadIcon}
          title="Download"
          variant={variant}
          action="download"
          disabled={editorState.mode === "rendering"}
          loading={editorState.mode === "rendering"}
          onAction={onAction}
        />
      </div>
    </div>
  );
};

export default EditorToolbar;
