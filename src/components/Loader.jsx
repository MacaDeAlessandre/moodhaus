import { MoonLoader } from "react-spinners";
import '../css/loader.css';


const Loader = (loader) => {
    return (
        <div className="loader-container">
            <MoonLoader loading={loader} color="#7A9E7E" size={80}/>
        </div>
    )

}

export default Loader;