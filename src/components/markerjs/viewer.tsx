import { useEffect, useRef } from "react";
import { AnnotationState, MarkerView } from "@markerjs/markerjs3";

type Props = {
  targetImageSrc: string;
  variant?: "ghost" | "outline";
  annotation?: AnnotationState;
};

const Viewer = ({ targetImageSrc, variant = "ghost", annotation }: Props) => {
  const viewerContainer = useRef<HTMLDivElement | null>(null);
  const viewer = useRef<MarkerView | null>(null);

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

      viewerContainer.current.appendChild(viewer.current);
    }
    if (annotation !== undefined) {
      viewer.current?.show(annotation);
    }
  }, [annotation, targetImageSrc]);

  return (
    <div className="grid grid-rows-[auto_1fr_auto] w-full h-full">
      <div></div>
      <div
        ref={viewerContainer}
        className="flex overflow-hidden bg-slate-50"
      ></div>
      <div></div>
    </div>
  );
};

export default Viewer;
