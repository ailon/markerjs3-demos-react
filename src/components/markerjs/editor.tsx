import { useEffect, useRef, useState } from "react";
import { AnnotationState, MarkerArea } from "@markerjs/markerjs3";
import EditorToolbar from "./editor-toolbar";
import EditorToolbox from "./editor-toolbox";
import { ToolbarAction } from "@/models/toolbar";
import { EditorState } from "@/models/editor";

type Props = {
  targetImageSrc: string;
  annotation?: AnnotationState;
};

const Editor = ({ targetImageSrc, annotation }: Props) => {
  const editorContainer = useRef<HTMLDivElement | null>(null);
  const editor = useRef<MarkerArea | null>(null);

  const [editorState, setEditorState] = useState<EditorState>({
    canUndo: false,
    canRedo: false,
    canDelete: false,
  });

  const onToolbarAction = (action: ToolbarAction) => {
    console.log(action);
  };

  useEffect(() => {
    if (!editor.current && editorContainer.current) {
      const targetImg = document.createElement("img");
      targetImg.src = targetImageSrc;

      editor.current = new MarkerArea();

      editor.current.targetImage = targetImg;
      editor.current.targetWidth = 800;

      editor.current.addEventListener("areastatechange", () => {
        if (editor.current)
          setEditorState({
            canUndo: editor.current.isUndoPossible,
            canRedo: editor.current.isRedoPossible,
            canDelete: editor.current.currentMarkerEditor !== undefined, // @todo: handle multiple markers
          });
      });

      editor.current.addEventListener("markerselect", (e) => {
        const markerEditor = e.detail.markerEditor;
        console.log(markerEditor.marker.typeName);
      });
      editor.current.addEventListener("markerdeselect", () => {
        // setCurrentMarker(null);
      });

      editorContainer.current.appendChild(editor.current);
    }
    if (annotation !== undefined) {
      editor.current?.restoreState(annotation);
    }
  }, [annotation, targetImageSrc]);

  return (
    <div className="grid grid-rows-[auto_1fr_auto] w-full h-full">
      <div>
        <EditorToolbar editorState={editorState} onAction={onToolbarAction} />
      </div>
      <div
        ref={editorContainer}
        className="flex overflow-hidden bg-slate-50"
      ></div>
      <div>
        <EditorToolbox editorState={editorState} onAction={onToolbarAction} />
      </div>
    </div>
  );
};

export default Editor;
