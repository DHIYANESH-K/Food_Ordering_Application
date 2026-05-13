import React from 'react';

class UserClass extends React.Component{

    constructor(props){
        super(props);

        this.state={
            count1:0,
            count2:10,
            count3:100
        }

        console.log("Child constructor")
    }

    componentDidMount(){
        console.log("Child componentDidMount")
    }

    render(){

        let {name, location, phone} = this.props;

        console.log("Child render")

        return(<div>
            <div>Count 1 : {this.state.count1}</div>
            <div>Count2 : {this.state.count2}</div>
            <div>Count3 : {this.state.count3}</div>
            <button onClick={()=>{
                this.setState({
                    count1: this.state.count1 + 1,
                    count2: this.state.count2 - 1
                });
            }}>Increment</button>
            <div>Name : {name}</div>
            <div>Location : {location}</div>
            <div>Contact : {phone}</div>
        </div>)
    }
}

export default UserClass;