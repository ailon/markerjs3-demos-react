import { useEffect, useRef } from "react";
import { AnnotationState, Renderer } from "@markerjs/markerjs3";

type Props = {
  targetImageSrc: string;
  annotation: AnnotationState | null;
};

const Viewer = ({ targetImageSrc, annotation }: Props) => {
  const renderedImageContainer = useRef<HTMLDivElement | null>(null);
  const renderedImage = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    if (annotation) {
      const targetImg = document.createElement("img");
      targetImg.src = targetImageSrc;

      const renderer = new Renderer();
      renderer.targetImage = targetImg;

      renderer.rasterize(annotation).then((result) => {
        if (renderedImage.current) {
          renderedImage.current.src = result;
        }
      });
    }
  }, [annotation, targetImageSrc]);

  return (
    <div className="flex relative w-full h-full">
      <div
        ref={renderedImageContainer}
        className="flex overflow-hidden w-full h-full"
      >
        <img
          ref={renderedImage}
          src={targetImageSrc}
          className="object-contain"
          alt="rendered image"
        />
      </div>
    </div>
  );
};

export default Viewer;
