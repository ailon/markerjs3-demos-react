import { useEffect, useRef, useState } from "react";
import { AnnotationState, MarkerBase, MarkerView } from "@markerjs/markerjs3";
import ViewerToolbar from "./viewer-toolbar";
import { ToolbarAction } from "@/models/toolbar";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

type Props = {
  targetImageSrc: string;
  variant?: "ghost" | "outline";
  annotation?: AnnotationState;
};

const Viewer = ({ targetImageSrc, variant = "ghost", annotation }: Props) => {
  const viewerContainer = useRef<HTMLDivElement | null>(null);
  const viewer = useRef<MarkerView | null>(null);

  const [hoveredMarker, setHoveredMarker] = useState<MarkerBase | null>(null);

  const handleToolbarAction = (action: ToolbarAction) => {
    if (viewer.current) {
      switch (action) {
        case "zoom-in": {
          viewer.current.zoomLevel += 0.1;
          break;
        }
        case "zoom-out": {
          if (viewer.current.zoomLevel > 0.2) {
            viewer.current.zoomLevel -= 0.1;
          }
          break;
        }
        case "zoom-reset": {
          viewer.current.zoomLevel = 1;
          break;
        }
      }
    }
  };

  useEffect(() => {
    if (!viewer.current && viewerContainer.current) {
      const targetImg = document.createElement("img");
      targetImg.src = targetImageSrc;

      viewer.current = new MarkerView();

      viewer.current.targetImage = targetImg;

      // set a reasonable size for the target image in the editor
      const viewerAreaWidth = viewerContainer.current.clientWidth;
      viewer.current.targetWidth =
        viewerAreaWidth < 400
          ? 400
          : viewerAreaWidth < 2000
          ? Math.round((viewerAreaWidth * 0.9) / 10) * 10
          : -1;

      viewer.current.addEventListener("markerclick", (ev) => {
        setHoveredMarker(ev.detail.marker);
      });
      viewer.current.addEventListener("markerover", (ev) => {
        setHoveredMarker(ev.detail.marker);
        ev.detail.marker.container.style.filter =
          "drop-shadow(0 0 15px rgba(255, 255, 255, 1)) brightness(1.2)";
      });
      viewer.current.addEventListener("markerpointerleave", () => {
        if (hoveredMarker) {
          hoveredMarker.container.style.filter = "";
        }
        setHoveredMarker(null);
      });

      viewerContainer.current.appendChild(viewer.current);
    }
    if (annotation !== undefined) {
      viewer.current?.show(annotation);
    }
  }, [annotation, targetImageSrc, hoveredMarker]);

  return (
    <div className="flex relative w-full h-full">
      <div
        ref={viewerContainer}
        className="flex overflow-hidden bg-slate-50 w-full h-full"
      ></div>

      <Card className="absolute top-5 right-5 w-80 max-w-full md:max-w-[30%] min-h-36 bg-white/80 hover:bg-white/90">
        <CardHeader>
          <CardTitle>Notes</CardTitle>
        </CardHeader>
        <CardContent>
          {hoveredMarker === null && (
            <>Hover or click on a marker to see its notes.</>
          )}
          {hoveredMarker !== null && <>{hoveredMarker.notes ?? "No notes."}</>}
        </CardContent>
      </Card>

      <div className="absolute bottom-5 flex items-center justify-center w-full bg-transparent pointer-events-none">
        <div className="inline-flex pointer-events-auto bg-slate-50/50 rounded-md shadow-2xs">
          <ViewerToolbar variant={variant} onAction={handleToolbarAction} />
        </div>
      </div>
    </div>
  );
};

export default Viewer;
