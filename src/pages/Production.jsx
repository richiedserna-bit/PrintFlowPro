import {useState} from "react";

import ProductionDetailsDialog 
from "@/components/production/ProductionDetailsDialog";

import PriorityBadge from "@/components/PriorityBadge";
import useOrderStore from "@/store/orderStore";
import { Button } from "@/components/ui/button";
import StatusBadge from "@/components/StatusBadge";

import { ORDER_STATUS } from "@/constants/orderStatus";

export default function Production(){

const [selectedOrder,setSelectedOrder]=useState(null);

const [open,setOpen]=useState(false);

const orders = useOrderStore(
(state)=>state.orders
);

const updateStatus = useOrderStore(
(state)=>state.updateStatus
);

const columns = ORDER_STATUS;

const moveOrder = (order)=>{

const currentIndex = ORDER_STATUS.findIndex(
(item)=>item.status === order.status
);

const nextStatus = ORDER_STATUS[currentIndex + 1];

if(nextStatus){

updateStatus(
order.id,
nextStatus.status
);

}

};

return (

<div>

<h1 className="
  text-3xl
  font-bold
  mb-6
  text-slate-800">
  Production Workflow
</h1>

<div className="
grid
grid-cols-5
gap-4
">

{
columns.map((column)=>(

<div
  key={column.status}
  className="
  bg-gray-100
  rounded-xl
  p-4
  min-h-[400px]
  "
>

<h2
className={`
font-bold
mb-4
text-center
text-lg
${column.color}
`}
>
{column.title}
</h2>

{

orders
.filter(
(order)=>
order.status === column.status
)
.map((order)=>(

<div
key={order.id}
onClick={()=>{

setSelectedOrder(order);
setOpen(true);
}}

className="
bg-white
rounded-xl
shadow
p-4
mb-3
border
hover:shadow-md
transition
cursor-pointer
"
>

<div className="
flex
justify-between
items-center
mb-3
">

<p className="
font-bold
text-lg
text-slate-800
">
{order.id}
<StatusBadge status={order.status}/>
</p>

<div className="
flex
gap-2
items-center
">

<PriorityBadge priority={order.priority}/>

</div>

</div>

{/* PRODUCT */}

<p className="
font-semibold
text-slate-700
mb-3
">
{order.product}
</p>


{/* QUICK INFO */}

<div className="
flex
justify-between
items-center
text-sm
mb-3
">

<span className="
text-gray-600
">
📦 {order.quantity} pcs
</span>

<PriorityBadge
priority={order.priority}
/>

</div>

<p>
📅 Deadline: {order.deadline}
</p>

<p>
📝 Notes: {order.notes}
</p>

{
column.status !== "Completed" && (

<Button
className="
mt-4
w-full
"
onClick={(e)=>{
e.stopPropagation();
moveOrder(order);
}}
>
Move Next
</Button>

)

}
<ProductionDetailsDialog

order={selectedOrder}

open={open}

setOpen={(value)=>{
setOpen(value);

if(!value){
setSelectedOrder(null);
}

}}

/>

</div>

))

}

</div>

))

}

</div>

</div>

)
}