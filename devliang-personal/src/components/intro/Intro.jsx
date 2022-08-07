import React, { useEffect, useRef } from 'react'
import "./intro.scss"
import { init } from 'ityped'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function Intro() {

   const textRef = useRef();

   useEffect(() => {
      init(textRef.current, {
         backDelay: 1500,
         showCursor: true,
         strings: ["Engineer", "Developer"],
      });
   }, []);

   return (
      <div className='intro' id='intro'>
         <div className="wrapper">
            <h1>Hey I'm Devin</h1>
            <h1>Software <span ref={textRef}></span></h1>
            <a href="#projects">
               <div className='icon-container'>
                  <ExpandMoreIcon className='arrow-icon'/>
               </div>
            </a>
         </div>
      </div>
    )
}
