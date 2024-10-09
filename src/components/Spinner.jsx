import spinner from "../assets/spinner.gif";

const Spinner = () => {
    return (
        <div className="text-center">
            <img src={spinner} className="my-3" alt="loading" width="50px" />
        </div>
    )
}

export default Spinner