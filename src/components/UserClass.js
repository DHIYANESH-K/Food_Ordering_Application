import React from 'react';

class UserClass extends React.Component{

    constructor(props){
        super(props);

        console.log(this.props.name+" constructor")
    }

    componentDidMount(){
        console.log(this.props.name+" componentDidMount")
    }

    render(){

        let {name, location, phone} = this.props;

        console.log(this.props.name+" render")

        return(<div>
            <hr></hr>
            <div>Name : {name}</div>
            <div>Location : {location}</div>
            <div>Contact : {phone}</div>
           
        </div>)
    }
}

export default UserClass;