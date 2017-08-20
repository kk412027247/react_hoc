import React from 'react';

const loggedinUser = 'mock user';

class AddUserProp extends React.Component{
  render(){
    const user = loggedinUser;
    return this.props.childre(user)
  }
}

AddUserProp.propTypes = {
  childre:React.PropTypes.func.isrequired
};

export default AddUserProp;
