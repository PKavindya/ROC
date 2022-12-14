import React,{useState} from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export const Projects = () => {
  const [value, setValue] = useState('')
  console.log(value);
  return (
    <div className='add'>
      <div className="content">
        <input type="text" placeholder="Title"/>
      <div className="editorContainer">
        
    <ReactQuill className="editor" theme="snow" value={value} onChange={setValue} />;
      </div>
      </div>
        
        <div className="menu">
<div className="item">
  <h1>Publish</h1>
  <span><b>Status:</b>Draft</span>
  <span><b>Visibility:</b>Public</span>
  <input style={{display:"none"}} type='file' id="file" name="" />
  <label htmlFor="file">Upload Image</label>
<div className="buttons">
  <button>
    Save as a draft
  </button>
  <button>
    update
  </button>
</div>
</div>
<div className="item">

  <h1>Category</h1>
  <div className="cat">
  <input type="radio" name="cat" value="art" id="art"/>
<label htmlFor="art">Donation</label>
</div>
<div className="cat">
<input type="radio" name="cat" value="science" id="science"/>
<label htmlFor="science">Cleaning</label>
</div>
<div className="cat">
<input type="radio" name="cat" value="tech" id="tech"/>
<label htmlFor="tech">Seminars</label>
</div>
<div className="cat">
 <input type="radio" name="cat" value="socail" id="social"/>
<label htmlFor="social">Tree Plantation</label>
</div>
</div>
      </div>
    </div>
  )
}
