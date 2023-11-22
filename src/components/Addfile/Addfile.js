import { useState, useEffect, useRef } from 'react';
import './Addfile.css';
import { uploadFile } from './Api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';

function Addfile() {
  const [file, setFile] = useState('');
  const [result, setResult] = useState('');
  const fileInputRef = useRef();

  useEffect(() => {
    const getImage = async () => {
      if (file) {
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);

        const response = await uploadFile(data);
        setResult(response.path);
      }
    };
    getImage();
  }, [file]);

  const onUploadClick = () => {
    fileInputRef.current.click();
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(result);
      alert("Link copied to clipboard!");
    } catch (error) {
      console.error("Failed to copy:", error);
    }
  };

  return (
    <div className='wrapper'>
      <h1>Simple file storing and Download!</h1>
      <p>Upload and store Your file</p>

      <button className='button-56' onClick={() => onUploadClick()}>Upload</button>
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={(e) => setFile(e.target.files[0])}
      />

      <a href={result} target='_blank' rel="noopener noreferrer">{result}</a>
      <button onClick={copyToClipboard}>
        <FontAwesomeIcon icon={faCopy} />
      </button>
    </div>
  );
}

export default Addfile;
