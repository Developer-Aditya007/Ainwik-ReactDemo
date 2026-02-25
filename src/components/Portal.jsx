import {createPortal} from 'react-dom'

function Portal(){
   return(
   createPortal(<>
    <h1>This is Portal</h1>
    </>,document.getElementsByClassName('another-root')[0])
   )
}

export default Portal