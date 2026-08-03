import { useState } from "react";
import useInventoryStore from "@/store/inventoryStore";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";


export default function AddInventoryDialog({
  open,
  onOpenChange
}) {


const addItem = useInventoryStore(
  (state)=>state.addItem
);


const [form,setForm]=useState({

name:"",
category:"",
stock:"",
unit:"",
minStock:""

});


function handleSubmit(e){

e.preventDefault();


addItem({

id:Date.now(),

name:form.name,

category:form.category,

stock:Number(form.stock),

unit:form.unit,

minStock:Number(form.minStock)

});


setForm({
name:"",
category:"",
stock:"",
unit:"",
minStock:""
});


onOpenChange(false);

}



return (

<Dialog
open={open}
onOpenChange={onOpenChange}
>

<DialogContent>

<DialogHeader>

<DialogTitle>
Add Inventory Item
</DialogTitle>

</DialogHeader>


<form
onSubmit={handleSubmit}
className="space-y-4"
>


<Input
placeholder="Item Name"
value={form.name}
onChange={(e)=>
setForm({
...form,
name:e.target.value
})
}
/>


<Input
placeholder="Category"
value={form.category}
onChange={(e)=>
setForm({
...form,
category:e.target.value
})
}
/>


<Input
placeholder="Stock Quantity"
type="number"
value={form.stock}
onChange={(e)=>
setForm({
...form,
stock:e.target.value
})
}
/>


<Input
placeholder="Unit (pcs, bottle, sheets)"
value={form.unit}
onChange={(e)=>
setForm({
...form,
unit:e.target.value
})
}
/>


<Input
placeholder="Minimum Stock"
type="number"
value={form.minStock}
onChange={(e)=>
setForm({
...form,
minStock:e.target.value
})
}
/>


<Button
type="submit"
className="w-full"
>
Save Item
</Button>


</form>


</DialogContent>


</Dialog>

)

}