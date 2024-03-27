import { useState } from "react"
import useShowToast from "./useShowToast"


const usePreviewImg = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const showToast = useShowToast();
  const maxFileSizeBytes = 1024 * 1024 * 2;

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      if (file.size > maxFileSizeBytes) {
        showToast("Error", "File size exceeds 2MB", "error")
        setSelectedFile(null);
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedFile(reader.result);
      };

      reader.readAsDataURL(file);

    } else {
      showToast("Error", "Invalid file type", "error");
      setSelectedFile(null);
    }
  }

  return { selectedFile, handleImageChange, setSelectedFile }

}

export default usePreviewImg;