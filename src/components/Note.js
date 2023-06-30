import React from 'react'
import DeleteIcon from "@material-ui/icons/Delete";

const Note = (props) => {

    function handleDelete(){
        props.onDelete(props.id);
    }
  return (
    <div className='note'>
        <h2>{props.title}</h2>
        <p>{props.content}</p>
        <button onClick={handleDelete}>
           <DeleteIcon />
        </button>
    </div>
  )
}

export default Note