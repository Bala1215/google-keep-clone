import React,{useState} from 'react'

const CreateArea = () => {
  
  const [isExpanded,setIsExpanded] = useState(false);
  //using update function of a state variable can only renders the component, there is any change occurs

  //let expand = false;//variable , not a state variable

  let expanded= ()=>{
       setIsExpanded(true);
       //expand=true;

     return console.log(isExpanded);
  };

  return (
    <div classname='createArea'>
        <form>
          {/* "conditional rendering" :
                 when condition is satisfied , then it display that component or tag (in below eg)*/} 
          {isExpanded && <input name='title' type='text' placeholder='Title'/> }  
            <textarea name='content' placeholder='Take a note...' rows={3} onClick={expanded}></textarea>
        </form>
    </div>
  )
}

export default CreateArea