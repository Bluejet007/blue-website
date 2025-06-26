import { ChangeEvent, useState } from "react";
import ImageJobAPI from "./ImageJobAPI";

function FileUploader() {
  const [file, setFile] = useState<File | null>(null);
  const {mutate: upload, isPending} = ImageJobAPI.useUpload();

  function fileHandler(e: ChangeEvent<HTMLInputElement>) {
    if(e.target.files) {
        setFile(e.target.files[0]);
    }    
  }

  function uploadHandler() {
    if(!file) return;

    const formData = new FormData();
    formData.append("id", "wioalknfa");
    formData.append("filter", "kuwa");
    formData.append("file", file);

    upload(formData, {
      onSuccess: (response) => {
        if(response.status == 200) {
          alert("Success");
        }
        else {
          alert("Error");
        }
      },
      onError: () => {
        alert("Error");
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
        {isPending ? <p>Uploading...</p> : <button onClick={uploadHandler}>Upload</button>}
      </div>
    }
  </div>
  );
};

export default FileUploader;