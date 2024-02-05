import { useEffect, useState, useRef } from 'react';
import Thermometer from '../../components/Thermometer/Thermometer';
import Hygrometer from '../../components/Hygrometer/Hygrometer';
import LuxSun from '../../components/Lux/LuxSun';
import Chart from '../../components/Chart';
import Fan from '../../components/Fan/Fan';
import Light from '../../components/Light/Light';
import "./DashBoard.css"
const Dashboard = () => {
    const [chartContainerHeight, setChartContainerHeight] = useState(0);
    const [chartWidth, setChartWidth] = useState('70%');
    const upperSectionRef = useRef(null);
    const [data, setData] = useState({
        hot: Math.floor(Math.random() * 60),
        water: Math.floor(Math.random() * 101),
        lux: Math.floor(Math.random() * 1001)
    });
    useEffect(() => {
        const calculateChartContainerHeight = () => {
            const windowHeight = window.innerHeight;
            const upperSectionHeight = upperSectionRef.current.clientHeight;
            const headerHeight = document.querySelector('header').clientHeight;
            const padding = 40;
            const chartContainerHeight = windowHeight - upperSectionHeight - padding-headerHeight;

            setChartContainerHeight(chartContainerHeight);
        };
        const calculateChartWidth = () => {
            setChartWidth(`${upperSectionRef.current.clientWidth * 80.0 / 100 + 10}px`);
        };

        calculateChartContainerHeight();
        calculateChartWidth();

        window.addEventListener('resize', calculateChartContainerHeight);
        window.addEventListener('resize', calculateChartWidth);

        return () => {
            window.removeEventListener('resize', calculateChartContainerHeight);
            window.removeEventListener('resize', calculateChartWidth);
        };
    }, []);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setData({
                hot: Math.floor(Math.random() * 60),
                water: Math.floor(Math.random() * 101),
                lux: Math.floor(Math.random() * 1001)
            });
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    
    return (
        <div className='container'>
            <div ref={upperSectionRef} className='upper-section'>
                <div className='sensor-container'>
                    <Thermometer data={data}></Thermometer>
                </div>
                <div className='sensor-container'>
                    <Hygrometer data={data}></Hygrometer>
                </div>
                <div className='sensor-container'>
                    <LuxSun data={data}></LuxSun>
                </div>
            </div>
            <div style={{ height: `${chartContainerHeight}px` }} className='chart-control-container'>
                <div className='chart-content' style={{ width: chartWidth }}>
                    <Chart data2={data}></Chart>
                </div>
                <div className='side-content'>
                    <Fan></Fan>
                    <Light></Light>
                </div>
            </div>
        </div>
    );
    
    
    
}

export default Dashboard;