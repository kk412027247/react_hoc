import React from 'react';

class CountDown extends React.Component{
  constructor(){
    super(...arguments);

    this.state={count:this.props.startCount};
  }

  componentDidMount(){
    this.intervalHanle = setInterval(()=>{
      const newCount = this.state.count -1;
      if(newCount >= 0){
        this.setState({count:newCount});
      }else{
        window.clearInterval(this.intervalHandle);
      }
    },1000)
  }

  componentWillUnmount(){
    if(this.intervalHandle){
      window.clearInterval(this.intervalHandle)
    }
  }

  shouldComponentUpdate(nextProps,nextState){
    return nextState.count !== this.state.count;
  }

  render(){
    return this.props.children(this.state.count);
  }
}

CountDwon.propTypes={
  childre:React.PropTypes.func.isRequired,
  startCount:React.PropTypes.number.isRequired
};

export default countDown;
