import { useEffect, useRef, useState } from "react";
import {
  AnnotationState,
  ArrowMarker,
  CalloutMarker,
  CaptionFrameMarker,
  CoverMarker,
  EllipseFrameMarker,
  EllipseMarker,
  FrameMarker,
  FreehandMarker,
  HighlightMarker,
  LineMarker,
  MarkerArea,
  MeasurementMarker,
  PolygonMarker,
  TextMarker,
} from "@markerjs/markerjs3";
import EditorToolbar from "./editor-toolbar";
import EditorToolbox from "./editor-toolbox";
import {
  MarkerTypeItem,
  MarkerTypeList,
  ToolbarAction,
} from "@/models/toolbar";
import { EditorState } from "@/models/editor";
import {
  ArrowIcon,
  CalloutIcon,
  CaptionFrameIcon,
  CoverIcon,
  EllipseFrameIcon,
  EllipseIcon,
  FrameIcon,
  FreehandIcon,
  HighlightIcon,
  LineIcon,
  MeasurementIcon,
  PolygonIcon,
  TextIcon,
} from "./ui/icons";

const markerTypes: MarkerTypeList = [
  {
    name: "Basic shapes",
    markerTypes: [
      {
        icon: FrameIcon,
        name: "Rectangle",
        markerType: FrameMarker,
      },
      {
        icon: CoverIcon,
        name: "Cover (filled rectangle)",
        markerType: CoverMarker,
      },
      {
        icon: HighlightIcon,
        name: "Highlighter",
        markerType: HighlightMarker,
      },
      {
        icon: EllipseFrameIcon,
        name: "Ellipse",
        markerType: EllipseFrameMarker,
      },
      {
        icon: EllipseIcon,
        name: "Ellipse (filled)",
        markerType: EllipseMarker,
      },
    ],
  },
  {
    name: "Lines",
    markerTypes: [
      {
        icon: ArrowIcon,
        name: "Arrow",
        markerType: ArrowMarker,
      },
      {
        icon: LineIcon,
        name: "Line",
        markerType: LineMarker,
      },
      {
        icon: MeasurementIcon,
        name: "Measure",
        markerType: MeasurementMarker,
      },
    ],
  },
  {
    name: "Text",
    markerTypes: [
      {
        icon: TextIcon,
        name: "Text",
        markerType: TextMarker,
      },
      {
        icon: CalloutIcon,
        name: "Callout",
        markerType: CalloutMarker,
      },
      {
        icon: CaptionFrameIcon,
        name: "Captioned frame",
        markerType: CaptionFrameMarker,
      },
    ],
  },
  {
    name: "Advanced shapes",
    markerTypes: [
      {
        icon: FreehandIcon,
        name: "Freehand",
        markerType: FreehandMarker,
      },
      {
        icon: PolygonIcon,
        name: "Polygon",
        markerType: PolygonMarker,
      },
    ],
  },
];

type Props = {
  targetImageSrc: string;
  annotation?: AnnotationState;
};

const Editor = ({ targetImageSrc, annotation }: Props) => {
  const editorContainer = useRef<HTMLDivElement | null>(null);
  const editor = useRef<MarkerArea | null>(null);

  const [editorState, setEditorState] = useState<EditorState>({
    mode: "select",
    canUndo: false,
    canRedo: false,
    canDelete: false,
  });

  const [currentMarkerType, setCurrentMarkerType] =
    useState<MarkerTypeItem | null>(null);

  const handleToolbarAction = (action: ToolbarAction) => {
    switch (action) {
      case "select": {
        setEditorState((prevState) => ({
          ...prevState,
          mode: "select",
        }));
        break;
      }
    }
  };

  const handleNewMarker = (markerType: MarkerTypeItem | null) => {
    setCurrentMarkerType(markerType);
    if (editor.current && markerType) {
      setEditorState((prevState) => ({
        ...prevState,
        mode: "create",
      }));
      editor.current.createMarker(markerType.markerType);
    }
  };

  const updateCalculatedEditorState = () => {
    if (editor.current) {
      const editorInstance = editor.current;
      setEditorState((prevState) => ({
        ...prevState,
        canUndo: editorInstance.isUndoPossible,
        canRedo: editorInstance.isRedoPossible,
        canDelete: editorInstance.currentMarkerEditor !== undefined, // @todo: handle multiple markers
      }));
    }
  };

  useEffect(() => {
    if (!editor.current && editorContainer.current) {
      const targetImg = document.createElement("img");
      targetImg.src = targetImageSrc;

      editor.current = new MarkerArea();

      editor.current.targetImage = targetImg;
      editor.current.targetWidth = 800;

      editor.current.addEventListener("areastatechange", () => {
        updateCalculatedEditorState();
      });

      editor.current.addEventListener("markerselect", (e) => {
        updateCalculatedEditorState();
        const markerEditor = e.detail.markerEditor;
        console.log(markerEditor.marker.typeName);
      });

      editor.current.addEventListener("markerdeselect", () => {
        updateCalculatedEditorState();
        setCurrentMarkerType(null);
      });

      editor.current.addEventListener("markercreate", () => {
        setEditorState((prevState) => ({
          ...prevState,
          mode: "select",
        }));
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
        <EditorToolbar
          markerTypes={markerTypes}
          currentMarkerType={currentMarkerType}
          editorState={editorState}
          onAction={handleToolbarAction}
          onNewMarker={handleNewMarker}
        />
      </div>
      <div
        ref={editorContainer}
        className="flex overflow-hidden bg-slate-50"
      ></div>
      <div>
        <EditorToolbox
          editorState={editorState}
          onAction={handleToolbarAction}
        />
      </div>
    </div>
  );
};

export default Editor;
