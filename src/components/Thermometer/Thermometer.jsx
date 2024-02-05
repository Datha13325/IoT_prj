import { WiCelsius } from "react-icons/wi";
import "./Themometer.css";
function calculateBackground(humidity) {
    if (humidity < 15) {
        return 'color-under-15';
    } else if (humidity < 30) {
        return 'color-15-to-30';
    } else {
        return 'color-over-30';
    }
}
const Thermometer = ({ data }) => {

    return (
        <div className={`thermometer-container ${calculateBackground(data.hot)}`}>
            <div className="thermometer-value">
                <p>{data.hot}<sup>o</sup>C</p>
                <p>Thermometer</p>
            </div>
            <div className="thermometer-value-container">
                <WiCelsius size={120} color='#535353'></WiCelsius>
            </div>
        </div>
    );
    
}

export default Thermometer;