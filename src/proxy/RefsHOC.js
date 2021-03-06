import React from 'react';

const refsHOC = (WrappedComponent) => {
  return class HOCComponent extends React.Component{
    constructor(){
      super(...arguments);
    }

    linkRef=(wrappedInstance)=>{
    this._root=wrappedInstance;
    } ;

    render(){
      const props = {...this.props, ref:this.linkRef};
      return <WrappedComponent {...props} />
    }
  }
} ;

export default refsHOC;
