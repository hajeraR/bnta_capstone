import {useNavigate} from "react-router-dom";
import { useParams } from "react-router";

const ZodiacDescription = () => {

    const { zodiac } = useParams();
    let navigate = useNavigate();

    return(
        <h1>ZodiacDescription</h1>
    )
}

export default ZodiacDescription