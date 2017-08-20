import React from 'react';

// function removeUserProp(WarppedComponent){
//   return class NewComponent extends WarppedComponent{
//     render(){
//       const{user, ...otherProps} = this.props;
//       this.props = otherProps;
//       return super.render()
//
//     }
//   }
// }

function removeUserProp(WrappedComponent){
  return class NewComponent extends WrappedComponent{
    render(){
      const elements = super.render();
      const{user, ...otherProps} = this.props;
      return React.cloneElement(elements, otherProps, elements.props.children);
    }

  }
}

export default removeUserProp;
