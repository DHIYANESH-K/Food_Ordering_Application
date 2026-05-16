import React from 'react';

class UserClass extends React.Component{

    constructor(props){
        super(props);
        this.state={
            userInfo:{
                name:"Dummy",
            }
        }

        console.log("Constructor")
    }

    async componentDidMount(){

        console.log("Component Did Mount")

        let data=await fetch("https://api.github.com/users/Dhiyanesh-K");
        let result=await data.json();
        // console.log(result);
        // debugger
        this.setState({
            userInfo:result 
        })
    }

    componentDidUpdate()
    {
        console.log("Component Did Update")
    }

    componentWillUnmount(){
        console.log("Component Will Unmount")
    }

    render(){

        let { location, phone} = this.props;
        return(<div>
            <img src={this.state.userInfo.avatar_url} alt="User Image" className="w-20 h-20 rounded-full"></img>
            <div>Name : {this.state.userInfo.name}</div>
            <div>Location : {location}</div>
            <div>Contact : {phone}</div>
           
        </div>)
    }
}

export default UserClass;