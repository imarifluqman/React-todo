import React from "react";

function ListAdd(props) {
  return (
    <li>
      {props.text}
      <div className="editbtn">
        <button onClick={()=>{props.edit(props.id)}}>
          <i className="fas fa-pencil-alt"></i>
        </button>
        <button onClick={()=>{props.cancle(props.id)}}>
          <i className="fas fa-trash-alt"></i>
        </button>
      </div>
    </li>
  );
}

export default ListAdd;
