import { FaRegLightbulb,FaLightbulb  } from "react-icons/fa";
import Switch from "react-switch";
import { useState } from "react";
import './Light.css';

const Light = () => {
    const [active, setActive] = useState(false);

    function handleChange(checked) {
        setActive(checked);
    }

    return (
        <div className="light-controller-container">
            <div>
                <p className="controller-title">Light</p>
            </div>
            <div className="controller-content">
                {active ? <FaLightbulb size={80} color={'#ffdf00'}/> : <FaRegLightbulb size={80}/>}
                <Switch
                    checked={active}
                    onChange={handleChange}
                    onColor="#86d3ff"
                    onHandleColor="#2693e6"
                    handleDiameter={30}
                    uncheckedIcon={false}
                    checkedIcon={false}
                    boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                    activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                    height={20}
                    width={48}
                    className="react-switch"
                    id="material-switch"
                />
            </div>
        </div>
    );
    
    
    
}
export default Light;