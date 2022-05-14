import * as Icons from 'react-icons/fa';

export const navItems = [
  {
    id:1,
    title: 'Home',
    path: './',
    navName: 'nav-item',
    sideName: 'sidebar-item',
    icon: <Icons.FaHome />,
  },
  {
    id: 2,
    title: "Services",
    path: "./services",
    navName: "nav-item",
    sideName: "sidebar-item",
    icon: <Icons.FaBriefcase />,
  },
  {
    id: 3,
    title: "Products",
    path: "./products",
    navName: "nav-item",
    sideName: "sidebar-item",
    icon: <Icons.FaCartArrowDown />,
  },
  {
    id: 4,
    title: "Contact Us",
    path: "./contactus",
    navName: "nav-item",
    sideName: "sidebar-item",
    icon: <Icons.FaPhone />,
  },
];