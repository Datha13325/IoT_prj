// import {
//     DesktopOutlined,
//     PieChartOutlined,
//     ApiOutlined,
//     UserOutlined,
// } from '@ant-design/icons';
import { AiTwotoneHome,AiTwotoneHdd ,AiTwotoneLayout,AiOutlineUser   } from "react-icons/ai";

import { Layout, Menu } from 'antd';
import { Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { tokens } from "../theme";
import { useTheme } from "@mui/material";

const { Header } = Layout;
function getItem(label, key, icon, children) {
    return {
        key,
        icon,
        children,
        label,
    };
}
const items = [
    getItem('Dashboard', '/', <AiTwotoneHome />),
    getItem("Sensor's Log", '/sensor', <AiTwotoneHdd />),
    getItem("Status's Log", '/status', <AiTwotoneLayout  />),
    getItem('Profile', '/profile', <AiOutlineUser  />),
];
const Public = () => {
    const theme = useTheme();
  const colors = tokens(theme.palette.mode);
    const navigate = useNavigate();

    const onClick = (e) => {
        const flattenArr = items.flatMap((item) =>
            item.children ? item.children : [item]
        );
        const selectedItem = flattenArr.find((item) => item.key === e.key);
        if (selectedItem) {
            navigate(e.key);
        }
    };

    return (
        <Layout style={{
            minHeight: '100vh',
        }}>
            <Header
                style={{
                    display: 'flex',
                    alignItems: 'center',
                }}
                className='header'
            >
                <div className="demo-logo" />
                <Menu
                    theme="light"
                    mode="horizontal"
                    defaultSelectedKeys={['/']}
                    items={items}
                    style={{
                        flex: 1,
                        minWidth: 0,
                    }}
                    onClick={onClick}
                />
            </Header>
            <Layout>
                <Outlet></Outlet>
            </Layout>
        </Layout>
    );
};
export default Public;