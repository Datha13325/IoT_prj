import { PiFanDuotone } from "react-icons/pi";
import Switch from "react-switch";
import { useState, useEffect } from "react";
import styled from "styled-components";
import './Fan.css'
const StyledFan = styled('div')`
.rotate {
    animation: rotate 2s linear infinite;
}

@keyframes rotate {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}
`

const Fan = () => {
    const [active, setActive] = useState(false);
    const [rotation, setRotation] = useState(0);

    function handleChange(checked) {
        setActive(checked);
    }

    useEffect(() => {
        let intervalId;

        if (active) {
            intervalId = setInterval(() => {
                setRotation(prevRotation => (prevRotation + 5) % 360);
            }, 16);
        } else {
            clearInterval(intervalId);
        }

        return () => {
            clearInterval(intervalId);
        };
    }, [active]);

    return (
        <div className="container-wrapper">
            <StyledFan className="fan-controller-container">
                <div>
                    <p className="controller-title">Fan</p>
                </div>
                <div className="controller-content">
                    <div className={`fan-icon`} style={{ transform: `rotate(${rotation}deg)` }}>
                        <PiFanDuotone size={80} />
                    </div>
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
            </StyledFan>
        </div>
    );
    
    
}
export default Fan;