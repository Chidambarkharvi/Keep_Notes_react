import React, { useEffect, useState } from 'react';
import Createnote from './Createnote';
import Header from './Header';
import Footer from './Footer';
import Note from './Note';
import { Create } from '@material-ui/icons';


const App = () => {
    
    const [data, setdata] = useState([])
   
    const addcomponote = (note) => {
        
        setdata((prevdata) => {
            console.log(prevdata)
            return [...prevdata, note]
        }
        )
    }

    const deletenote = (id) => {
        console.log("id is" + id)
        setdata(
            data.filter((curd, index) => {
                return index !== id
            }
            )
        
        )     
    }

//     const callMe = () =>{
//     alert("You entered here")
//     }

//     useEffect(() =>{
// callMe()
//     } ,[data] )

    
    return (
        <>
        <Header />
        <Createnote  callnote={addcomponote}/>

        <div className="notecontainer">
        {
        
            data?
        data.map((curdata, index) => {
            return(
                <Note
                key = {index}
                id = {index}
                title= {curdata.title}
                content= {curdata.content}
                deleteitem ={deletenote}
                 />    
                  )
            })
            :null
        }
        </div>
     
     
          
        </>
    );
}

export default App;