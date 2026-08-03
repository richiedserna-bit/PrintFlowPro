import StockBadge from "./StockBadge";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import AddInventoryDialog from "./AddInventoryDialog";
import useInventoryStore from "@/store/inventoryStore";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { MoreVertical } from "lucide-react";


export default function InventoryTable(){

const items = useInventoryStore(
  (state)=>state.items
);
const [editItem, setEditItem] = useState(null);
const [showEdit, setShowEdit] = useState(false);

const [deleteItem, setDeleteItem] = useState(null);
const [showDelete, setShowDelete] = useState(false);
const [showAdd,setShowAdd] = useState(false);
;

return (

<div className="
bg-white
rounded-xl
shadow
p-6
">

<div className="flex justify-between mb-5">

<h2 className="text-xl font-bold">
Inventory List
</h2>

<Button
onClick={()=>setShowAdd(true)}
>
+ Add Item
</Button>

</div>

<table className="w-full text-left">
<thead>
<tr className="border-b">
<th className="p-3">
Item
</th>

<th className="p-3">
Category
</th>

<th className="p-3">
Stock
</th>

<th className="p-3">
Unit
</th>

<th className="p-3">
Status
</th>

<th className="p-3">
Actions
</th>

</tr>
</thead>

<tbody>
{items.map((item)=>(

<tr
key={item.id}
className="border-b"
>

<td className="p-3">
{item.name}
</td>

<td className="p-3">
{item.category}
</td>

<td className="p-3">
{item.stock}
</td>

<td className="p-3">
{item.unit}
</td>

<td className="p-3">
<StockBadge
    stock={item.stock}
    minStock={item.minStock}
/>
</td>

<td className="p-3">
  <DropdownMenu>

    <DropdownMenuTrigger asChild>

      <Button
        variant="ghost"
        size="icon"
      >
        <MoreVertical size={18}/>
      </Button>

    </DropdownMenuTrigger>

    <DropdownMenuContent>

      <DropdownMenuItem
        onClick={()=>{
          setEditItem(item);
          setShowEdit(true);
        }}
      >
        Edit Item
      </DropdownMenuItem>

      <DropdownMenuItem
        className="text-red-500"
        onClick={()=>{
          setDeleteItem(item);
          setShowDelete(true);
        }}
      >
        Delete Item
      </DropdownMenuItem>

    </DropdownMenuContent>

  </DropdownMenu>
</td>

</tr>

))}

</tbody>

</table>

<AddInventoryDialog
  open={showAdd}
  onOpenChange={setShowAdd}
/>

</div>

)

}