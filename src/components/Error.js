import { useRouteError } from "react-router";

let Error = () => {

    let err = useRouteError();
    console.log(err);

    return (
        <div>
            <h2>Oops!!!</h2>
            <h3>Something went wrong!</h3>
            <div>{err.status}</div>
        </div>
    )
}

export default Error;