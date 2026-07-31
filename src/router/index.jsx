import { createBrowserRouter } from "react-router-dom";

import DashboardLayout from "../layouts/DashboardLayout";

import Dashboard from "../pages/Dashboard";
import Orders from "../pages/Orders";
import Products from "../pages/Products";

import Designs from "../pages/Designs";
import Production from "../pages/Production";
import Inventory from "../pages/Inventory";
import Customers from "../pages/Customers"; // rename this file to Customers.jsx later

import AIStudio from "../pages/AIStudio";
import PrintQueue from "../pages/PrintQueue";
import Reports from "../pages/Reports";
import Settings from "../pages/Settings";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "orders",
        element: <Orders />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "ai-studio",
        element: <AIStudio />,
      },
      {
        path: "print-queue",
        element: <PrintQueue />,
      },
      {
        path: "reports",
        element: <Reports />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
      {
        path: "designs",
        element: <Designs />,
      },
      {
        path: "production",
        element: <Production />,
      },
      {
        path: "inventory",
        element: <Inventory />,
      },
      {
        path: "customers",
        element: <Customers />,
      },
    ],
  },
]);

export default router;