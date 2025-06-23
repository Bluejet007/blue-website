import { useMutation } from "@tanstack/react-query";

const ImageJobAPI = {
  useUpload() {
    return useMutation({
      mutationFn: async (formData: FormData) => {
        return await fetch("https://httpbin.org/post", {
          method: "POST",
          body: formData
        });
      }
    })
  }
};

export default ImageJobAPI