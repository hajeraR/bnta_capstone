import {useNavigate} from "react-router-dom";
import { Link } from 'react-router-dom'

const HomePage = () => {

    let navigate = useNavigate();

    return(
        <section>
            <h1>HomePage</h1>
            <Link to="/zodiac/:sign" className="button">
                View Descriptions
            </Link>
        </section>
        
    )
}

export default HomePage;