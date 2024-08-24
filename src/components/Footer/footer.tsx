import React from 'react'



const heute = new Date();

const Footer = () => {
  return (
    <footer className="w-full border-t border-t-foreground/10 p-8 flex justify-center text-center text-xs">
    <p className='uppercase text'>
      &copy; {heute.getFullYear()} Copyright and Powered by{" "}
    
       <span className='uppercase text-lime-500'>medicus desing</span>  basel🇨🇭
      
    </p>
  </footer>
  )
}

export default Footer