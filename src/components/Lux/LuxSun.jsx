import { LuThermometerSun } from "react-icons/lu";
import "./LuxSun.css"
const LuxSun = ({data}) => {
    return (
        <div className="lux-sun-container">
            <div className="lux-sun-text">
                <p>{data.lux}lm</p>
                <p>Lux meter</p>
            </div>
            <div className="icon-container">
                <LuThermometerSun size={80} color='#535353'/>
            </div>
        </div>
    );
}

export default LuxSun;
