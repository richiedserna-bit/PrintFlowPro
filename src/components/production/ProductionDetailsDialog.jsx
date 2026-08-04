import {
Dialog,
DialogContent,
DialogHeader,
DialogTitle,
} from "@/components/ui/dialog";


import StatusBadge from "@/components/StatusBadge";
import PriorityBadge from "@/components/PriorityBadge";


export default function ProductionDetailsDialog({
order,
open,
setOpen
}){


if(!order) return null;


return (

<Dialog
open={open}
onOpenChange={setOpen}
>

<DialogContent
>

<DialogHeader>

<DialogTitle>
Production Details
</DialogTitle>

</DialogHeader>


<div className="space-y-3">


<h2 className="text-xl font-bold">
{order.id}
</h2>


<p>
Customer:
<strong>
{" "}{order.customer}
</strong>
</p>


<p>
Product:
<strong>
{" "}{order.product}
</strong>
</p>


<p>
Quantity:
{order.quantity} pcs
</p>


<p>
Method:
{order.method}
</p>


<div className="flex gap-2">

<StatusBadge
status={order.status}
/>

<PriorityBadge
priority={order.priority}
/>

</div>


<div>

<h3 className="font-bold mt-4">
Production History
</h3>


<div className="mt-2 space-y-2">

{
(order.history || []).map((item,index)=>(

<div
key={index}
className="
border-l-4
pl-3
"
>

<p className="font-semibold">
{item.status}
</p>

<p className="text-sm text-gray-500">
{item.date}
</p>

</div>

))

}

</div>

</div>


</div>


</DialogContent>

</Dialog>

)

}