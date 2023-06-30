import React,{useState} from 'react';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Zoom from "@material-ui/core/Zoom";

const CreateArea = (props) => {
  
  //state variables
  const [isExpanded,setIsExpanded] = useState(false);

  /*Instead of creating separate state variables like below
  const[title,setTitle]=useState("");
  const[content,setContent]=useState("");*/

  //array of list of objects using "useState"
  const [note,setNote] = useState({
    title:"",
    content:""
  });

  
  //using update function of a state variable can only renders the component, there is any change occurs

  //let expand = false;//variable , not a state variable

  let expanded= ()=>{
       setIsExpanded(true);
       //expand=true;
       return console.log(isExpanded);
  };

  function handleChange(e){
    
     //get name and value of input type : text and textarea tags and store it in the variable 
     const name = e.target.name;
     const value = e.target.value;

     /* using callback function, assign "value" variable to the value of the input:text and textarea */
     setNote((prevNote)=>{
      return{   
          ...prevNote,
         [name]:value
      };
    });


  };

  console.log(note);

  function handleNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  return (
    <div classname='createArea'>
        <form className='create-note'>
          {/* "conditional rendering" :
                 when condition is satisfied , then it display that component or tag (in below eg)*/} 
          
          {isExpanded && 
           <input name='title' 
                  type='text' 
                  placeholder='Title'
                  value={note.title}
                  onChange={handleChange}
          /> }  
          <textarea name='content' 
                    placeholder='Take a note...' 
                    rows={isExpanded ? 3:1} 
                    value={note.content}
                    onClick={expanded}
                    onChange={handleChange}>
          </textarea>
          
           {/** "in" attribute pf <zoom></zoom> takes only boolean value.
            *    fab :  Floating Action Button
            */}
          <Zoom in={isExpanded}>
           <Fab onClick={handleNote}>
            <AddIcon />
           </Fab>
          </Zoom>
        
        </form>
    </div>
  );
}

export default CreateArea;