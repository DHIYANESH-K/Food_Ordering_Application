import UserClass from "./UserClass";
import {Component} from 'react';

class About extends Component{
    constructor()
    {
        super();
        // console.log("Parent constructor")
    }
    componentDidMount(){
        // console.log("Parent componentDidMount")
    }
    render(){
        // console.log("Parent render")
        return (
            <div className="pt-20">
                <div>About Us</div>
                <UserClass  location={"Tamil Nadu"} phone={"1234567890"}></UserClass>
            </div>
        )
    }
}

export default About;