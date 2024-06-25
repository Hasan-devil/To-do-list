import { useState } from 'react';

export default function Popup(props) {
  const [listd, setListd] = useState("");

  function handleChange(e) {
    setListd(e.target.value);
  }

  function sendList() {
    props.handleList(listd);
    props.Close();
    setListd("")
  }
  
  

  return props.trigger && (
    <div className="modal fade show d-block position-fixed" tabIndex="-1">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Enter your Task</h5>
            <button type="button" className="close" aria-label="Close" onClick={props.Close}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <p className="d-inline p-1">Enter:</p>
            <input type="text" className="p-1 rounded" onChange={handleChange} value={listd} />
          </div>
          <div className="modal-footer">
            <button className="btn btn-success rounded" onClick={sendList}>Add</button>
            <button type="button" className="btn btn-secondary" onClick={props.Close}>Close</button>
          </div>
        </div>
      </div>
    </div>
  );
}