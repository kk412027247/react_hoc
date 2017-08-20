import React from 'react';

const cacheHOC = (WrappedComponent) => {
  return class NewComponent extends WrappedComponent{
    shouldComponentUpdate(nextProps,nextState){
      return nextProps.userCache;
    }
  }
};

export default onlyForLoggedinHOC;
