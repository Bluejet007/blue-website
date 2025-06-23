import axios from "axios";
import { ChangeEvent, useState } from "react";

function FileUploader() {
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState<"idle" | "uploading" | "success" | "error">("idle");
  const [uploadProgress, setUploadProgress] = useState(0);

  function fileHandler(e: ChangeEvent<HTMLInputElement>) {
    if(e.target.files) {
        setFile(e.target.files[0]);
    }    
  }

  async function uploadHandler() {
    if(!file) return;

    setStatus("uploading");
    setUploadProgress(0);

    const formData = new FormData();
    formData.append("filter", "kuwa");
    formData.append("file", file);

    try {
      await axios.post("https://httpbin.org/post", formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        },
        onUploadProgress: (e) => {
          const progress = e.total ? Math.round((e.loaded * 100) / e.total) : 0;
          setUploadProgress(progress);
        }
      });

      setStatus("success");
      setUploadProgress(100);
    } catch {
      setStatus("error");
      setUploadProgress(0);
    }
  }

  return (
  <div className="main-content">
    <input type="file" onChange={fileHandler}/>
    {file && 
      <div>
        <p>File name: {file.name}</p>
        <p>Size: {(file.size / 1024).toFixed(2)} KB</p>
        <p>Type: {file.type}</p>
        {status !== "uploading" && <button onClick={uploadHandler}>Upload</button>}
        <p>{status} {uploadProgress}%</p>
      </div>
    }
  </div>
  );
};

export default FileUploader;