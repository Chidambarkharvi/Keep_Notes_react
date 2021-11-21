import React from 'react';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';


const Note = (props) => {
    const deletenote = () => {
        props.deleteitem(props.id)
    }
    return (
        <>

        <div className="note">
        <h3 className="notehead">{props.title}</h3> 
        <p className="notepara">{props.content}</p>
        <div className="btnbox">
        <button className="notebtn"  onClick={deletenote}   
        > <DeleteOutlineIcon/> </button>
        </div>
        </div>

        </>
    )
}

export default Note;
