import { WiHumidity } from "react-icons/wi";
import "./Hygrometer.css"
function calculateBackground(humidity) {
    if (humidity < 60) {
        return 'color-under-60';
    } else if (humidity < 80) {
        return 'color-60-to-80';
    } else {
        return 'color-over-80';
    }
}

const Hygrometer = ({data}) => {

    return (
        <div className={`hygrometer-container ${calculateBackground(data.water)}`}>
            <div className="hygrometer-text">
                <p>{data.water}%</p>
                <p>Hygrometer</p>
            </div>
            <div className="measuring-tool-container">
                <WiHumidity  size={120} color='#535353'></WiHumidity>
            </div>
        </div>
    );
    
    
}

export default Hygrometer;