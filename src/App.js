// import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard/DashBoard";
// import Team from "./scenes/team";
// import Invoices from "./scenes/invoices";
// import Contacts from "./scenes/contacts";
// import Bar from "./scenes/bar";
// import Form from "./scenes/form";
// import Line from "./scenes/line";
// import Pie from "./scenes/pie";
// import FAQ from "./scenes/faq";
// import Geography from "./scenes/geography";
import Public from "./pages/Public";
import Sensor from "./pages/Sensor";
import Status from "./pages/Status";
import ProfilePage from "./pages/Profile/ProfilePage";
// import { CssBaseline, ThemeProvider } from "@mui/material";
// import { ColorModeContext, useMode } from "./theme";
// import Calendar from "./scenes/calendar/calendar";

function App() {
  // const [theme, colorMode] = useMode();
  // const [isSidebar, setIsSidebar] = useState(true);

  return (
  
    <Routes>
      <Route path="/" element={<Public></Public>}>
        <Route path="" element={<Dashboard></Dashboard>}></Route>
        <Route path="sensor" element={<Sensor></Sensor>}></Route>
        <Route path="status" element={<Status></Status>}></Route>
        <Route path="profile" element={<ProfilePage></ProfilePage>}></Route>
      </Route>
    </Routes>
  
  );
}

export default App;
