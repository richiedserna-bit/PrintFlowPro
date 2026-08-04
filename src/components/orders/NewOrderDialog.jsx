import { toast } from "sonner";
import useOrderStore from "@/store/orderStore";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { useState } from "react";

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function NewOrderDialog() {

    const addOrder = useOrderStore(
        (state)=>state.addOrder
);

    const [order, setOrder] = useState({
            customer: "",
            contact: "",
            product: "",
            quantity: "",
            method: "",
            deadline: "",
            notes: "", 

});
const [errors, setErrors] = useState({});

const handleChange = (e) => {
  setOrder({
    ...order,
    [e.target.id]: e.target.value,
  });

  setErrors({
    ...errors,
    [e.target.id]: "",
  });

};

const validateOrder = () => {
  const newErrors = {};

  if (!order.contact.trim()) {
    newErrors.contact = "Contact number is required"
  } 

  if (!order.customer.trim()) {
    newErrors.customer = "Customer name is required";
  }

  if (!order.product.trim()) {
    newErrors.product = "Product is required";
  }

  if (!order.quantity) {
    newErrors.quantity = "Quantity is required";
  }

  if (!order.method) {
    newErrors.method = "Print method is required";
  }

  setErrors(newErrors);

  return Object.keys(newErrors).length === 0;
};

const handleSave = () => {

  if (!validateOrder()) {
    return;
  }

  addOrder({
  id:`#${Date.now()}`,
  customer:order.customer,
  product:order.product,
  quantity:order.quantity,
  method:order.method,
  deadline: order.deadline,
  notes: order.notes,
  status:"Waiting",
  priority:"Normal",
  history:[{
  status:"Waiting",
  date: new Date().toLocaleString(),
  }
  ]
});

  toast.success("Order Saved Successfully!", {
  description: `${order.customer} - ${order.quantity} pcs ${order.product}`,
});

  setOrder({
    customer: "",
    contact: "",
    product: "",
    quantity: "",
    method: "",
    deadline: "",
    notes: "",
  });

  setErrors({});
};

  return (
    <Dialog>
      <DialogTrigger render={<Button />}>
        + New Order
      </DialogTrigger>

      <DialogContent className="sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle>Create New Order</DialogTitle>
        </DialogHeader>

        <div className="grid gap-4 py-4">

          <div className="grid gap-2">
            <Label htmlFor="customer">Customer Name</Label>
            <Input  id="customer" 
                    value={order.customer}
                    onChange={handleChange}
                    placeholder="Juan Dela Cruz" />
            
            {errors.customer && (
                <p className="text-sm text-red-500">
                ⚠ {errors.customer}
                </p>
             )}
          </div>

          <div className="grid gap-2">
            <Label htmlFor="contact">Contact Number</Label>
            <Input  id="contact" 
                    value={order.contact}
                    onChange={handleChange}
                    placeholder="09xxxxxxxxx" />

                    {errors.contact && (
                <p className="text-sm text-red-500">
                ⚠ {errors.contact}
                </p>
             )}
          </div>

          <div className="grid grid-cols-2 gap-4">

            <div className="grid gap-2">
              <Label htmlFor="product">Product</Label>
              <Input    id="product" 
                        value={order.product}
                        onChange={handleChange}
                        placeholder="Custom T-Shirt" />

                        {errors.product && (
                        <p className="text-sm text-red-500">
                        ⚠ {errors.product}
                        </p>
             )}
            </div>

            <div className="grid gap-2">
              <Label htmlFor="qty">Quantity</Label>
              <Input    id="quantity" 
                        value={order.quantity}
                        onChange={handleChange}
                        type="number" />

                        {errors.quantity && (
                        <p className="text-sm text-red-500">
                        ⚠ {errors.quantity}
                        </p>
             )}
            </div>

          </div>

          <div className="grid grid-cols-2 gap-4">

            <div className="grid gap-2">
              <Label htmlFor="method">Print Method</Label>
              
              <Select
                    value={order.method}
                    onValueChange={(value) => {
                        
                    setOrder({
                        ...order,
                        method:value,
                    });

                    setErrors({
                        ...errors,
                        method:"",
                    });

                    }}
                    
                    >
                    <SelectTrigger>
                        <SelectValue placeholder="Select Print Method" />
                    </SelectTrigger>


                    <SelectContent>

                        <SelectItem value="Sublimation">
                        Sublimation
                        </SelectItem>

                        <SelectItem value="DTF">
                        DTF
                        </SelectItem>

                        <SelectItem value="Transfer Paper">
                        Transfer Paper
                        </SelectItem>

                        <SelectItem value="Screen Printing">
                        Screen Printing
                        </SelectItem>

                    </SelectContent>

                </Select>

            </div>

            <div className="grid gap-2">
              <Label htmlFor="deadline">Due Date</Label>
              <Input
                        id="deadline"
                        type="date"
                        value={order.deadline}
                        onChange={handleChange}
                        />
            </div>

          </div>

          <div className="grid gap-2">
            <Label htmlFor="notes">Notes</Label>
            <Textarea
                id="notes"
                value={order.notes}     
                onChange={handleChange}
                rows={4}
                placeholder="Additional instructions..."
            />
          </div>

        </div>

        <DialogFooter>

          <DialogClose render={<Button variant="outline" />}>
            Cancel
          </DialogClose>

          <Button onClick={handleSave}>
            Save Order
          </Button>

        </DialogFooter>

      </DialogContent>
    </Dialog>
  );
}