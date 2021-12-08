import {useNavigate} from "react-router-dom";
import { useParams } from "react-router";


const MonthlyHorrorScope = () => {

    const { month } = useParams();
    let navigate = useNavigate();

    return(
        <h1>MonthlyHorrorScope</h1>
    )
}

export default MonthlyHorrorScope;