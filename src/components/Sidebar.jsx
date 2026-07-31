import {
  LayoutDashboard,
  Folder,
  Package,
  Users,
  FileText,
} from "lucide-react";

import { NavLink } from "react-router-dom";


const menu = [
  {
    name: "Dashboard",
    path: "/",
    icon: LayoutDashboard,
  },
  {
    name: "Orders",
    path: "/orders",
    icon: FileText,
  },
  {
    name: "Designs",
    path: "/designs",
    icon: Folder,
  },
  {
    name: "Production",
    path: "/production",
    icon: Package,
  },
  {
    name: "Inventory",
    path: "/inventory",
    icon: Package,
  },
  {
    name: "Customers",
    path: "/customers",
    icon: Users,
  }
  

];


export default function Sidebar(){

return (

<div className="
w-64
bg-black
text-white
min-h-screen
p-5
">


<h1 className="
text-2xl
font-bold
mb-8
">
🖨️ PrintFlowPro
</h1>


<nav>


{
menu.map((item)=>{

const Icon=item.icon;


return (

<NavLink
key={item.name}
to={item.path}

className={({isActive})=>

`
flex items-center gap-3 p-3 rounded-lg mb-2
${isActive ? "bg-gray-700" : "hover:bg-gray-800"}
`

}

>

<Icon size={20}/>

<span>
{item.name}
</span>

</NavLink>

)

})

}

</nav>

</div>

)

}