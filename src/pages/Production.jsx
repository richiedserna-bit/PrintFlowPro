import PriorityBadge from "@/components/PriorityBadge";
import useOrderStore from "@/store/orderStore";
import { Button } from "@/components/ui/button";
import StatusBadge from "@/components/StatusBadge";


const columns = [

{
title:"Waiting",
status:"Waiting",
color:"text-yellow-700"
},

{
title:"Printing",
status:"Printing",
color:"text-blue-700"
},

{
title:"Quality Check",
status:"Quality Check",
color:"text-purple-700"
},

{
title:"Ready for Pickup",
status:"Ready for Pickup",
color:"text-green-700"
},

{
title:"Completed",
status:"Completed",
color:"text-gray-700"
}

];

export default function Production(){

const orders = useOrderStore(
(state)=>state.orders
);

const updateStatus = useOrderStore(
(state)=>state.updateStatus
);

const moveOrder = (order)=>{

const flow = {

"Waiting":"Printing",

"Printing":"Quality Check",

"Quality Check":"Ready for Pickup",

"Ready for Pickup":"Completed"

};

if(flow[order.status]){

updateStatus(
order.id,
flow[order.status]
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
className="
bg-white
rounded-xl
shadow
p-4
mb-3
border
hover:shadow-md
transition
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
</p>

<div className="
flex
gap-2
items-center
">

<StatusBadge status={order.status}/>

<PriorityBadge priority={order.priority}/>

</div>

</div>

<p className="
font-semibold
text-slate-700
">
{order.product}
</p>

<p className="text-sm text-gray-600">
Customer: {order.customer}
</p>

<p className="text-sm text-gray-600">
Quantity: {order.quantity} pcs
</p>

<p className="text-sm text-gray-600">
Method: {order.method}
</p>

<p>
📅 Deadline: {order.deadline}
</p>

<p>
📝 Notes: {order.notes}
</p>

{
column.status !== "Completed" && (

<Button
className="mt-4 w-full"
onClick={()=>moveOrder(order)}
>
Move Next
</Button>

)

}

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