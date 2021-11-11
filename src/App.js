import { useState } from "react";
import ImageGrid from "./comps/ImageGrid";
import Model from "./comps/Model";
import Title from "./comps/Title";
import UploadForm from "./comps/UploadForm";

function App() {
  const [selectedImage, setSelectedImage] = useState(null);
  return (
    <div className="App">
      <Title />
      <UploadForm />
      <ImageGrid setSelectedImage={setSelectedImage} />
      {selectedImage && (
        <Model
          setSelectedImage={setSelectedImage}
          selectedImage={selectedImage}
        />
      )}
    </div>
  );
}

export default App;
