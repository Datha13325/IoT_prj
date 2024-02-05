import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Line } from 'react-chartjs-2';
  import { useState, useEffect } from 'react';
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
  
  const Chart = ({ data2 }) => {
    const options = {
      responsive: true,
      plugins: {
        legend: {
          position: 'bottom',
        },
        title: {
          display: true,
          text: 'Chart.js Line Chart',
        },
      },
    };
  
    const labels = ['01', '02', '03', '04', '05'];
  
    const [data, setData] = useState({
      labels,
      datasets: [
        {
          label: 'Thermometer',
          data: [100, data2.hot, 300, 200, 444], // Thêm null cho các tháng không có dữ liệu
          borderColor: '#F44236',
          backgroundColor: '#F44236',
        },
        {
          label: 'Hygrometer',
          data: [333, data2.water, 321, 515, 235], // Thêm null cho các tháng không có dữ liệu
          borderColor: '#2196F3',
          backgroundColor: '#2196F3',
        },
        {
          label: 'Lux meter',
          data: [345, data2.lux, 512, 692, 456], // Thêm null cho các tháng không có dữ liệu
          borderColor: '#FFCA29',
          backgroundColor: '#FFCA29',
        },
        {
          label: 'Additional Data',
          data: [100, 200, 300, 400, 500], // Giá trị từ 100 đến 1000 và thêm 100, 200 cho tháng July và August
          borderColor: '#30ff29',
          backgroundColor: '#30ff29',
        },
      ],
    });
  
    return  (
      <div style={{ width: 1000, height: 400 }}>
        <Line options={options} data={data} />
      </div>
    );
  };
  
  
  export default Chart;