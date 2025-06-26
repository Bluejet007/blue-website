import { useMutation } from "@tanstack/react-query";

const ImageJobAPI = {
  useUpload() {
    return useMutation({
      mutationFn: async (formData: FormData) => {
        return await fetch("https://rtarticlesapi.azurewebsites.net/api/ImageJob/upload", {
          method: "POST",
          body: formData
        });
      }
    })
  }
};

export default ImageJobAPI