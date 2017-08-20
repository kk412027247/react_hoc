import React from 'react';

const addNewProps = (WrappedComponent, newProps) =>{
  return class WrappingComponent extends react.Component{
    render(){
      return <WarppendComponent {...this.props}{...newProps}/>
    }
  }
};

export default addNewProps;
