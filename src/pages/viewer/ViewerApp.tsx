import Viewer from "@/components/markerjs/viewer";
import demoState from "./sample-state.json";

function App() {
  return (
    <div className="w-screen h-dvh flex justify-center items-center">
      <Viewer
        targetImageSrc="/sample-images/phone-modules.jpg"
        annotation={demoState}
      />
    </div>
  );
}

export default App;
