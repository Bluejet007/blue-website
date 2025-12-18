import { useMutation } from "@tanstack/react-query";

const JobAPIHandler = {
  useUpload() {
    return useMutation({
      mutationFn: async (formData: FormData) => {
        return await fetch(
          "https://rtarticlesapi.azurewebsites.net/api/FileJobs",
          {
            method: "POST",
            body: formData
          }
        );
      },
      onError: (error) => console.error("Error while uploading image: ", error.message)
    })
  },
  useDownload() {
    return useMutation({
      mutationFn: async ({ id, fileName }: { id: Promise<string> | string, fileName: string }) => {
        if (typeof id === "object")
          id = await id;

        const response = await fetch(
          `https://rtarticlesapi.azurewebsites.net/api/FileJobs/${id}`,
          {
            method: "GET"
          }
        );

        if (response.status != 200)
          throw new Error(response.status.toString());
        else
          return { response, fileName };
      },
      retry: (count, error) => count < 10 && error.message === "202",
      onSuccess: async ({ response, fileName }) => {
        const sasUrl = await response.text();
        const link = document.createElement("a");

        link.href = window.URL.createObjectURL(await fetch(sasUrl).then((response) => response.blob()));
        link.download = fileName;
        link.target = "_blank";

        document.body.appendChild(link);
        link.click();
        window.URL.revokeObjectURL(link.href)
        document.body.removeChild(link);

        await fetch(sasUrl, {
          method: "DELETE"
        });
      },
      onError: (error) => console.error("Error while downloading image: ", error.message),
      retryDelay: (count) => 5000 + count * 1000
    })
  }
};

export default JobAPIHandler;