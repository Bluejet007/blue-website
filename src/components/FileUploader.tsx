import { ChangeEvent, useState } from 'react';
import JobAPIHandler from '../handlers/JobAPIHandler';
import jobTypes, { JobParameter } from '../data/jobTypes';
import SampleDisplay from './SampleDisplay';
import '../styling/FileUploader.css';

function FileUploader() {
  const [file, setFile] = useState<File | null>(null);
  const [selectedJob, setSelectedJob] = useState<string>('0');
  const [params, setParams] = useState<number[]>([]);

  const {mutate: uploadFile, isPending: isUploading} = JobAPIHandler.useUpload();
  const {mutate: downloadFile, isPending: isDownloading} = JobAPIHandler.useDownload();

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
    let parameter: JobParameter = {name: '', dataType: ''};

    if(jobTypes[ind].parameters)
      parameter = jobTypes[ind].parameters[k];

    switch(parameter.dataType) {
      case 'number':
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
    formData.append('jobType', selectedJob);
    formData.append('file', file, file.name);
    
    if(jobTypes[Number.parseInt(selectedJob)].parameters)
      params.forEach((p) => formData.append('parameters', p.toString()));

    uploadFile(formData, {
      onSuccess: (response) => {
        if(response.status == 200)
          downloadFile({id: response.text(), fileName: file.name});
        else
          alert('Error');
      }
    });
  }

  return (
  <div className='main-content'>
    <div className='file-uploader'>
      <input type='file' onChange={fileHandler}/>
      <select onChange={jobTypeHandler}>
        {jobTypes.map((job, i) => (
          <option value={i} key={i}>{job.name}</option>
        ))}
      </select>

      {jobTypes[Number.parseInt(selectedJob)].parameters?.map((param, k) => (
        <div key={k}>
          <label htmlFor={param.name}>{param.name + ': '}</label>
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

    <SampleDisplay jobInd={Number.parseInt(selectedJob)}/>
  </div>
  );
};

export default FileUploader;