import { ChangeEvent, useState } from "react";
import JobAPIHandler from "../handlers/JobAPIHandler";
import jobTypes, { JobParameter } from "../data/jobTypes";

function FileUploader() {
  const [file, setFile] = useState<File | null>(null);
  const [selectedJob, setSelectedJob] = useState<string>("0");
  const [params, setParams] = useState<number[]>([]);

  const {mutate: upload, isPending: isUploading} = JobAPIHandler.useUpload();
  const {mutate: download, isPending: isDownloading} = JobAPIHandler.useDownload();

  function fileHandler(e: ChangeEvent<HTMLInputElement>) {
    if(e.target.files) {
        setFile(e.target.files[0]);
    }    
  }

  function jobTypeHandler(e: ChangeEvent<HTMLSelectElement>) {
    setSelectedJob(e.target.value);
  }

  function parameterHandler(k: number, input: string) {
    const ind = Number.parseInt(selectedJob);
    let value: number = Number.parseInt(input);
    let parameter: JobParameter = {name: "", dataType: ""};

    if(jobTypes[ind].parameters)
      parameter = jobTypes[ind].parameters[k];

    switch(parameter.dataType) {
      case "number":
        if(parameter.range) {
          value = Math.max(Math.min(value, parameter.range[1]), parameter.range[0]);
          value = Number.isNaN(value) ? parameter.range[0] : value;
        }
        break;
    }

    setParams((prev => {
      prev[k] = value;
      return prev;
    }));
  }

  function uploadHandler() {
    if(!file) return;

    const formData = new FormData();
    formData.append("jobType", selectedJob);
    formData.append("file", file, file.name);
    
    if(jobTypes[Number.parseInt(selectedJob)].parameters)
      params.forEach((p) => formData.append("parameters", p.toString()));

    upload(formData, {
      onSuccess: (response) => {
        if(response.status == 200)
          download({id: response.text(), fileName: file.name});
        else
          alert("Error");
      }
    });
  }

  return (
  <div className="main-content">
    <input type="file" onChange={fileHandler}/>
    <select onChange={jobTypeHandler}>
      {jobTypes.map((job, i) => (
        <option value={i} key={i}>{job.name}</option>
      ))}
    </select>

    {jobTypes[Number.parseInt(selectedJob)].parameters?.map((param, k) => (
      <div key={k}>
        <label htmlFor={param.name}>{param.name + ": "}</label>
        <input name={param.name} type={param.dataType} min={param.range[0]} max={param.range[1]} defaultValue={param.range[0]} onChange={(e) => parameterHandler(k, e.target.value)}></input>
      </div>
    ))}

    {file && 
      <div>
        <p>File name: {file.name}</p>
        <p>Size: {(file.size / 1024).toFixed(2)} KB</p>
        <p>Type: {file.type}</p>
        {isUploading ? <p>Uploading...</p> : isDownloading ? <p>Downloading...</p> : <button onClick={uploadHandler}>Upload</button>}
      </div>
    }
  </div>
  );
};

export default FileUploader;