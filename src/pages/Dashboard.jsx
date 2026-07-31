import {
  ShoppingCart,
  Clock,
  Factory,
  CheckCircle
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

const stats = [
  {
    title:"Total Orders",
    value:"128",
    icon:ShoppingCart
  },
  {
    title:"Pending Prints",
    value:"24",
    icon:Clock
  },
  {
    title:"In Production",
    value:"15",
    icon:Factory
  },
  {
    title:"Completed",
    value:"89",
    icon:CheckCircle
  }
];


export default function Dashboard(){

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
items-center
justify-between
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

<tr className="border-b">

<td className="p-3">
#1024
</td>

<td>
Custom T-Shirt
</td>

<td>
Printing
</td>

</tr>


<tr className="border-b">

<td className="p-3">
#1025
</td>

<td>
Team Jersey
</td>

<td>
Waiting
</td>

</tr>


<tr>

<td className="p-3">
#1026
</td>

<td>
Company Uniform
</td>

<td>
Completed
</td>

</tr>


</tbody>

</table>


</div>


</div>

)

}