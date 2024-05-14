import React from 'react'

//just making a container, so that any sub container i.e like header and foter make use of it, 
//eg- contetnt of header and footer wraps inside this.
function Container({children}) {
  return <div className='w-full max-w-7xl mx-auto px-4'>{children}</div>;
  
}

export default Container