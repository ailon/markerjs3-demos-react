import { useState } from "react";
import { AnnotationState } from "@markerjs/markerjs3";
import sampleAnnotation from "./sample-state.json";
import Editor from "@/components/markerjs/editor";
import Viewer from "./components/markerjs/viewer";
import Renderer from "./components/markerjs/renderer";
import { Button } from "./components/ui/button";
import { GitHubIcon } from "./components/markerjs/ui/icons";

const sampleImage = "/sample-images/phone-modules.jpg";

function App() {
  const [annotation, setAnnotation] = useState<AnnotationState | null>(
    sampleAnnotation
  );

  return (
    <>
      <div className="py-24 sm:py-32 lg:pb-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-5xl font-semibold tracking-tight text-balance text-slate-900 sm:text-7xl">
              <span className="relative whitespace-nowrap text-pink-600">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 418 42"
                  className="absolute top-1/2 left-0 h-[0.58em] w-full fill-yellow-300/70"
                  preserveAspectRatio="none"
                >
                  <path d="M0,21 L418,10 V42 L0,36 Z" />
                </svg>
                <span className="relative">marker.js</span>
              </span>{" "}
              3 React demos
            </h1>
            <p className="mt-8 text-lg text-pretty text-slate-500 sm:text-xl/8">
              This is a set of React demos built with{" "}
              <a
                href="https://markerjs.com"
                className="underline text-pink-600 hover:text-pink-400"
              >
                marker.js 3
              </a>{" "}
              and{" "}
              <a
                href="https://ui.shadcn.com/"
                className="underline text-pink-600 hover:text-pink-400"
              >
                shadcn/ui
              </a>
              .
            </p>
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <Button variant="outline" className="rounded-full" asChild>
            <a href="https://github.com/ailon/markerjs3-demos-react">
              <GitHubIcon className="w-6 h-6" />
              <span className="ml-1">Get the code</span>
            </a>
          </Button>
        </div>
      </div>

      <section
        id="editor"
        aria-label="marker.js 3 editor"
        className="bg-white pt-20 pb-28 sm:py-10 mb-10"
      >
        <div className="max-w-2xl md:mx-auto text-center xl:max-w-none mb-10">
          <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
            Annotation Editor
          </h2>
          <p className="mt-6 text-lg tracking-tight text-slate-800">
            Edit the annotation below then click "save" in the top right corner.
          </p>
          <p>
            (
            <a
              href="https://github.com/ailon/markerjs3-demos-react/blob/main/src/components/markerjs/editor.tsx"
              className="font-mono underline text-pink-600 hover:text-pink-400"
            >
              editor.tsx
            </a>
            )
          </p>
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flow-root">
            <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-gray-900/10 ring-inset lg:-m-4 lg:rounded-2xl lg:p-4">
              <div className="bg-white rounded-md ring-1 shadow-2xl ring-gray-900/10 w-full aspect-[16/14] overflow-hidden">
                <Editor
                  targetImageSrc={sampleImage}
                  annotation={annotation}
                  onSave={(newAnnotation) => {
                    setAnnotation(newAnnotation);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="viewer"
        aria-label="marker.js 3 viewer"
        className="bg-white pt-20 pb-28 sm:py-10 mb-10"
      >
        <div className="max-w-2xl md:mx-auto text-center xl:max-w-none mb-10">
          <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
            Annotation Viewer
          </h2>
          <p className="mt-6 text-lg tracking-tight text-slate-800">
            Mouse over or click on annotation markers to see them highlighted
            and their notes displayed in the notes card.
          </p>
          <p>
            (
            <a
              href="https://github.com/ailon/markerjs3-demos-react/blob/main/src/components/markerjs/viewer.tsx"
              className="font-mono underline text-pink-600 hover:text-pink-400"
            >
              viewer.tsx
            </a>
            )
          </p>
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flow-root">
            <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-gray-900/10 ring-inset lg:-m-4 lg:rounded-2xl lg:p-4">
              <div className="bg-white rounded-md ring-1 shadow-2xl ring-gray-900/10 w-full aspect-[16/14] overflow-hidden">
                <Viewer targetImageSrc={sampleImage} annotation={annotation} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="renderer"
        aria-label="marker.js 3 viewer"
        className="bg-white pt-20 pb-28 sm:py-10 mb-10"
      >
        <div className="max-w-2xl md:mx-auto text-center xl:max-w-none mb-10">
          <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
            Annotation Renderer
          </h2>
          <p className="mt-6 text-lg tracking-tight text-slate-800">
            Renders the annotation onto the static image.
          </p>
          <p>
            (
            <a
              href="https://github.com/ailon/markerjs3-demos-react/blob/main/src/components/markerjs/renderer.tsx"
              className="font-mono underline text-pink-600 hover:text-pink-400"
            >
              renderer.tsx
            </a>
            )
          </p>
        </div>

        <div className="flex mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 justify-center">
          <div className="flex">
            <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-gray-900/10 ring-inset lg:-m-4 lg:rounded-2xl lg:p-4">
              <div className="bg-white rounded-md ring-1 shadow-2xl ring-gray-900/10 w-full overflow-hidden">
                <Renderer
                  targetImageSrc={sampleImage}
                  annotation={annotation}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
