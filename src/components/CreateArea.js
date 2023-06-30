import React from 'react'

const CreateArea = () => {
  return (
    <div classname='createArea'>
        <form>
            <input name='title' type='text' placeholder='Title'/>
            <textarea name='content' placeholder='Take a note...' rows={3}></textarea>
        </form>
    </div>
  )
}

export default CreateArea