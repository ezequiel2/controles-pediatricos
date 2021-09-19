/*!

=========================================================
* Material Dashboard React - v1.10.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications";
import Unarchive from "@material-ui/icons/Unarchive";
import Language from "@material-ui/icons/Language";
// core components/views for Admin layout
import DashboardPage from "./views/Dashboard/Dashboard.js";
//import UserProfile from "./views/UserProfile/UserProfile.js";
import MiPerfil from './views/MiPerfil/MiPerfil';
//import TableList from "./views/TableList/TableList.js";
import ControlesMedicos from './views/ControlesMedicos/ControlesMedicos';
import Typography from "./views/Typography/Typography.js";
import Icons from "./views/Icons/Icons.js";
import Vacunas from "./views/Vacunas/Vacunas.js";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: Dashboard, 
    component: DashboardPage,
    layout: "/admin",
  },
  {
    path: "/miperfil",
    name: "Mi perfil",
    icon: Person,
    //component: UserProfile,
    component: MiPerfil,
    layout: "/admin",
  },
  {
    path: "/controles-medicos",
    name: "Controles medicos",
    icon: "content_paste",
    //component: TableList,
    component: ControlesMedicos,
    layout: "/admin",
  },
  {
    path: "/vacunas",
    name: "Vacunas",
    icon: LibraryBooks,
    component: Vacunas,
    layout: "/admin",
  },
  {
    path: "/percentiles",
    name: "Percentiles",
    //rtlName: "إخطارات",
    icon: Notifications,
    component: Vacunas,
    layout: "/admin",
  },
];

export default dashboardRoutes;
