import { Toaster } from "@/components/ui/sonner";

import {
BrowserRouter,
Routes,
Route
} from "react-router-dom";

import {OrderProvider} from "./context/OrderContext";

import MainLayout from "./layouts/MainLayout";

import Dashboard from "./pages/Dashboard";
import Orders from "./pages/Orders";
import Designs from "./pages/Designs";
import Production from "./pages/Production";
import Inventory from "./pages/Inventory";
import Customers from "./pages/Customers";


function App(){

return (

<>

<BrowserRouter>

<OrderProvider>

<MainLayout>

    <Routes>

    <Route path="/" element={<Dashboard />} />

    <Route path="/orders" element={<Orders />} />

    <Route path="/designs" element={<Designs />} />

    <Route path="/production" element={<Production />} />

    <Route path="/inventory" element={<Inventory />} />

    <Route path="/customers" element={<Customers />} />

</Routes>

</MainLayout>

</OrderProvider>

</BrowserRouter>


<Toaster />

</>

)

}


export default App;