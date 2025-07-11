import { ChangeEvent, useState } from "react";
import JobAPIHandler from "./JobAPIHandler";

function FileUploader() {
  const [file, setFile] = useState<File | null>(null);
  const {mutate: upload, isPending: isUploading} = JobAPIHandler.useUpload();
  const {mutate: download, isPending: isDownloading} = JobAPIHandler.useDownload();

  function fileHandler(e: ChangeEvent<HTMLInputElement>) {
    if(e.target.files) {
        setFile(e.target.files[0]);
    }    
  }

  function UploadHandler() {
    if(!file) return;

    const formData = new FormData();
    formData.append("jobType", "0");
    formData.append("file", file);

    upload(formData, {
      onSuccess: (response) => {
        if(response.status == 200) {
          alert("Success");
          download({id: response.json(), fileName: file.name});
        }
        else {
          alert("Error");
        }
      }
    });
  }

  return (
  <div className="main-content">
    <input type="file" onChange={fileHandler}/>
    {file && 
      <div>
        <p>File name: {file.name}</p>
        <p>Size: {(file.size / 1024).toFixed(2)} KB</p>
        <p>Type: {file.type}</p>
        {isUploading ? <p>Uploading...</p> : isDownloading ? <p>Downloading...</p> : <button onClick={UploadHandler}>Upload</button>}
      </div>
    }
  </div>
  );
};

export default FileUploader;