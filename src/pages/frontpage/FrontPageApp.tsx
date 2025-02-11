import FrontPageEditor from "@/components/markerjs/frontpage/front-page-editor";

function App() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <FrontPageEditor targetImageSrc="/sample-images/phone-modules.jpg" />
    </div>
  );
}

export default App;
