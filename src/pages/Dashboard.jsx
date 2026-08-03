import StatusBadge from "@/components/StatusBadge";
import useOrderStore from "@/store/orderStore";
import {
  ShoppingCart,
  Clock,
  Factory,
  CheckCircle
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";


export default function Dashboard(){

const orders = useOrderStore(
  (state) => state.orders
);

const stats = [
  {
    title:"Total Orders",
    value: orders.length,
    icon:ShoppingCart
  },

  {
    title:"Pending Prints",
    value: orders.filter(
      order => order.status === "Waiting"
    ).length,
    icon:Clock
  },

  {
    title:"In Production",
    value: orders.filter(
      order => order.status === "Printing"
    ).length,
    icon:Factory
  },

  {
    title:"Completed",
    value: orders.filter(
      order => order.status === "Completed"
    ).length,
    icon:CheckCircle
  }
];

return (

<div>

<h1 className="
text-3xl
font-bold
mb-6
">
PrintFlow Pro Dashboard
</h1>

{/* STAT CARDS */}

<div className="
grid
grid-cols-4
gap-5
">

{
stats.map((item)=>{

const Icon=item.icon;

return(

<Card key={item.title}>

<CardContent
className="
p-5
flex
flex-col
items-center
text-center
gap-1
"
>

<div>

<p className="text-gray-500">
{item.title}
</p>

<h2 className="text-3xl font-bold">
{item.value}
</h2>

</div>

<Icon size={40}/>

</CardContent>

</Card>

)

})
}

</div>
  
{/* PRODUCTION QUEUE */}

<div className="
mt-8
bg-white
rounded-xl
shadow
p-6
">

<h2 className="
text-xl
font-bold
mb-4
">
Production Queue
</h2>
<table className="w-full">
<thead>
<tr className="border-b">

<th className="text-left p-3">
Order
</th>

<th className="text-left p-3">
Product
</th>

<th className="text-left p-3">
Status
</th>

</tr>

</thead>


<tbody>

{
orders.map((order)=>(
  <tr
    key={order.id}
    className="border-b"
  >

    <td className="p-3 text-left">
      {order.id}
    </td>

    <td className="p-3 text-left">
      {order.product}
    </td>

    <td className="p-3 text-left">
      <StatusBadge status={order.status}/>
    </td>

  </tr>
))

}

</tbody>

</table>


</div>


</div>

)

}