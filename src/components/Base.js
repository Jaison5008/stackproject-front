import React from "react"; 


export default function Base({thead ,tstyle,children ,footer}) { 


    return(  
        <div> 
        <div style={{justifyContent:'center'}} className={tstyle}>{thead}</div>
         <div> 
            {children}
         </div>


        <footer className={footer}>
            
        </footer>
        </div>


    )
    
}