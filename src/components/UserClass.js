import React from 'react';

class UserClass extends React.Component{

    constructor(props){
        super(props);
    }

    render(){

        let {name, location, phone} = this.props;

        return(<div>
            <div>Name : {name}</div>
            <div>Location : {location}</div>
            <div>Contact : {phone}</div>
        </div>)
    }
}

export default UserClass;