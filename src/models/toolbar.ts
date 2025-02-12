import { IconComponent } from "@/components/markerjs/ui/icons";
import { MarkerBase } from "@markerjs/markerjs3";

export type ToolbarAction =
  | "select"
  | "delete"
  | "delete-all"
  | "save"
  | "download"
  | "close"
  | "undo"
  | "redo"
  | "zoom-in"
  | "zoom-out"
  | "zoom-reset";

export type MarkerTypeItem = {
  icon: IconComponent;
  name: string;
  markerType: typeof MarkerBase;
};

export type MarkerTypeGroup = {
  name: string;
  markerTypes: MarkerTypeItem[];
};

export type MarkerTypeList = Array<MarkerTypeGroup | MarkerTypeItem>;

export function isMarkerTypeGroup(
  item: MarkerTypeGroup | MarkerTypeItem
): item is MarkerTypeGroup {
  return "name" in item && "markerTypes" in item;
}
