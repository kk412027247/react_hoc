import React from 'react';

const doNothing = () => ({});

function connect(mapStateToProps=doNothing, mapDispatchToProps=doNothing){
  return function(WrappedComponent){
    class HOCComponent extends React.Component{
      constructor(){
        super(...arguments);
        this.onChange = this.onChange.bind(this);
        this.store={};
      }

      componentDidMount(){
        this.context.store.subscribe(this.onChange);
      }

      componentWillMount(){
        this.context.store.unsubscribe(this.onChange)
      }

      onChange(){
        this.setState({})
      }

      render(){
        const store=this.context.store;
        const newProps={
          ...this.props,
          ...mapStateToprops(state.getState(),this.props),
          ...mapDispatchToprops(store.dispatch, this.props)
        };
        return <WrappedComponent {...newProps}/>
      }
    }

    HOCComponent.contextTypes={
      store:React.PropTypes.object
    } ;
    return HOCComponent;
  }
}
