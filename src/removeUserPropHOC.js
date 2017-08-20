import React from 'react';

function removeUserProp(WarppedComponent){
  return class NewComponent extends WarppendComponent{
    render(){
      const{user, ...otherProps} = this.props;
      this.props = otherProps;
      return super.render()

    }
  }
}


export default removeUserProp;
