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
import DashboardPage from "../dashboard/views/Dashboard/Dashboard.js";
import UserProfile from "../dashboard/views/UserProfile/UserProfile.js";
import TableList from "../dashboard/views/TableList/TableList.js";
import Typography from "../dashboard/views/Typography/Typography.js";
import Icons from "../dashboard/views/Icons/Icons.js";
//import Maps from "../dashboard/views/Maps/Maps.js";
import NotificationsPage from "../dashboard/views/Notifications/Notifications.js";
//import UpgradeToPro from "../dashboard/views/UpgradeToPro/UpgradeToPro.js";
// core components/views for RTL layout
//import RTLPage from "../dashboard/views/RTLPage/RTLPage.js";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Mi Perfil",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/user-profile",
  },
  {
    path: "/controles-ped",
    name: "Controles Medicos",
    //rtlName: "ملف تعريفي للمستخدم",
    icon: Person,
    component: UserProfile,
    layout: "/user-profile",
  },
  {
    path: "/vacunacion",
    name: "Vacunacion",
    //rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: TableList,
    layout: "/user-profile",
  },
  {
    path: "/percentiles",
    name: "Percentiles",
    //rtlName: "طباعة",
    icon: LibraryBooks,
    component: Typography,
    layout: "/user-profile",
  },
  {
    path: "/icons",
    name: "Icons",
    //rtlName: "الرموز",
    icon: BubbleChart,
    component: Icons,
    layout: "/user-profile",
  },
  // {
  //   path: "/maps",
  //   name: "Maps",
  //   //rtlName: "خرائط",
  //   icon: LocationOn,
  //   component: Maps,
  //   layout: "/admin",
  // },
  {
    path: "/notifications",
    name: "Notifications",
    //rtlName: "إخطارات",
    icon: Notifications,
    component: NotificationsPage,
    layout: "/user-profile",
  },
  // {
  //   path: "/rtl-page",
  //   name: "RTL Support",
  //   rtlName: "پشتیبانی از راست به چپ",
  //   icon: Language,
  //   component: RTLPage,
  //   layout: "/rtl",
  // },
  // {
  //   path: "/upgrade-to-pro",
  //   name: "Upgrade To PRO",
  //   rtlName: "التطور للاحترافية",
  //   icon: Unarchive,
  //   component: UpgradeToPro,
  //   layout: "/admin",
  // },
];

export default dashboardRoutes;
