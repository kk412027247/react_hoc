import React from 'react';

const styleHOC=(WrappedComponent, style) => {
   return class HOCComponent extends React.Component{
     render(){
       return(
         <div style={style}>
           <WrappedCompnent {this.props}/>
         </div>
       )
     }
   }
} ;

export default styleHOC;
