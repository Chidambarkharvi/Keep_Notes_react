import React, { createContext, useState } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import { NoEncryption } from '@material-ui/icons';
const Createnote = (props) => {
  

    const [note , setnote] = useState({title:"", content:""})
    console.log("idar" + note.title)

    const [show ,setshow] = useState(false)


    const gettitle = (event) => {
        const value = event.target.value;
        const name = event.target.name;     
      setnote({...note, [name]:value})
   
    }
    
    const getcontent = (event) => {
        const value = event.target.value;    
        const  name = event.target.name;   
      setnote( {...note, [name]:value })
     
    }
    
      
   // setnote((previousdata) => {
   //     return {...previousdata, 
  //          [name]:{value} ,
   //     }       
   // }
  //  )


    const addnote = () => {
        
        if(note.title !=='' && note.content !== '') {
        props.callnote(note)
        setnote({
            title:"",
            content:""}
         ); 
        }
        else if(note.title=='' && note.content== ''){
            alert("Please add ttitle and content")
        }
        else if(note.title==''){
            alert("Please add title")
        }
        else if (note.content==''){
            alert("please add content")
        }
    }
    
    const showtrue = () => {
        setshow(true)
    }
    const showfalse = () => {
        setshow(false)
    }

    return(
    <>
    <div className="mainnote" onDoubleClick={showfalse}>

    <form>
    {
        show?
    <input type="text" 
    placeholder="Title"  
    className="inputfield" 
    onChange={gettitle}  
    name="title"
    value={note.title}
     />
   
    :null

    }

    <textarea rows="3" column=""
      placeholder="write a note" 
      className="texty" 
      onChange={getcontent} 
      name = "content"
      onClick = {showtrue}
      value={note.content}
    
       />
    </form>
    {
        show?
    <div className="btnbox">
       <button className="addbtn"  onClick= {addnote}> <AddIcon /> </button>
    </div> 
    : null
    }
    </div>
    

    </>
    
    )
    
   
}

export default Createnote;