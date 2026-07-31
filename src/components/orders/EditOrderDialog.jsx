import { useState, useEffect } from "react";

import {
  Dialog,
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

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import useOrderStore from "@/store/orderStore";

export default function EditOrderDialog({
  open,
  onOpenChange,
  order,
}) {

    const updateOrder = useOrderStore(
    (state)=>state.updateOrder
  );


  const [formData, setFormData] = useState({
    customer:"",
    contact:"",
    product:"",
    qty:"",
    method:"",
    deadline:"",
    notes:"",
  });



  useEffect(()=>{

    if(order){

      setFormData({

        customer: order.customer || "",
        contact: order.contact || "",
        product: order.product || "",
        qty: order.qty || "",
        method: order.method || "",
        deadline: order.deadline || "",
        notes: order.notes || "",

      });

    }

  },[order]);



  const handleChange=(e)=>{

    setFormData({

      ...formData,
      [e.target.id]:e.target.value

    });

  };



  const handleSave=()=>{

    updateOrder(
      order.id,
      {
        ...formData,
        qty:Number(formData.qty)
      }
    );


    onOpenChange(false);

  };



  if(!order) return null;



  return (

    <Dialog
      open={open}
      onOpenChange={onOpenChange}
    >


      <DialogContent className="sm:max-w-2xl">


        <DialogHeader>

          <DialogTitle>
            Edit Order {order.id}
          </DialogTitle>

        </DialogHeader>



        <div className="grid gap-4 py-4">


          <div className="grid gap-2">

            <Label>
              Customer Name
            </Label>

            <Input
              id="customer"
              value={formData.customer}
              onChange={handleChange}
            />

          </div>



          <div className="grid gap-2">

            <Label>
              Contact Number
            </Label>

            <Input
              id="contact"
              value={formData.contact}
              onChange={handleChange}
            />

          </div>



          <div className="grid grid-cols-2 gap-4">


            <div className="grid gap-2">

              <Label>
                Product
              </Label>

              <Input
                id="product"
                value={formData.product}
                onChange={handleChange}
              />

            </div>



            <div className="grid gap-2">

              <Label>
                Quantity
              </Label>

              <Input
                id="qty"
                type="number"
                value={formData.qty}
                onChange={handleChange}
              />

            </div>


          </div>



          <div className="grid gap-2">

            <Label>
              Print Method
            </Label>


            <Select

              value={formData.method}

              onValueChange={(value)=>
                setFormData({
                  ...formData,
                  method:value
                })
              }

            >

              <SelectTrigger>

                <SelectValue placeholder="Select Method"/>

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

            <Label>
              Notes
            </Label>

            <Textarea

              id="notes"

              value={formData.notes}

              onChange={handleChange}

            />

          </div>



        </div>



        <DialogFooter>

          <DialogClose render={<Button variant="outline"/>}>

            Cancel

          </DialogClose>


          <Button onClick={handleSave}>

            Save Changes

          </Button>


        </DialogFooter>



      </DialogContent>


    </Dialog>

  );

}