import UserClass from "./UserClass";

let About = () => {
    return (
        <div className="pt-20">
            <div>About Us</div>
            <UserClass name={"Dhiyanesh K"} location={"Tamil Nadu"} phone={"1234567890"}></UserClass>
        </div>
    )
}

export default About;