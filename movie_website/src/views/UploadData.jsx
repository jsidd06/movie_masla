import React from 'react';

function UploadData() {
  return <div style={{textAlign: 'center'}}>
    <h1>Upload Data</h1>
    <p>title</p>
    <input placeholder="enter the title" onChange={(e) => console.log(e)} />
    <p>description</p>
    <input placeholder="enter the description" />
    <p>year</p>
    <input placeholder="enter the year" />
    <p>img</p>
    <input placeholder="enter the img" type="file" alt="none" />
    <button>Upload Data</button>
  </div>;
}

export default UploadData;
