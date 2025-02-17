import Editor from "@/components/markerjs/editor";
import demoState from "./frontpage-state.json";

function App() {
  return (
    <div className="w-screen h-dvh flex justify-center items-center">
      <Editor
        targetImageSrc="/sample-images/phone-modules.jpg"
        annotation={demoState}
      />
    </div>
  );
}

export default App;
