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

type Props = {
  markerTypes: MarkerTypeList;
  currentMarkerType: MarkerTypeItem | null;
  editorState: EditorState;
  onAction: (action: ToolbarAction) => void;
  onNewMarker: (markerType: MarkerTypeItem) => void;
} & React.ComponentProps<"div">;

const EditorToolbar = ({
  markerTypes,
  currentMarkerType,
  editorState,
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

      <div className="inline-flex space-x-1">
        {markerTypes.map((markerListItem) => {
          if (isMarkerTypeGroup(markerListItem)) {
            console.log(markerListItem);
            return (
              <ToolbarMarkerGroup
                key={markerListItem.name}
                markers={markerListItem}
                toggled={
                  currentMarkerType
                    ? markerListItem.markerTypes.includes(currentMarkerType)
                    : false
                }
                onSelectionChange={onNewMarker}
              />
            );
          }
        })}
      </div>

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
