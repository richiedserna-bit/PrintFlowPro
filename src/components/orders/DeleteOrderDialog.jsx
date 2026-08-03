import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";

import { toast } from "sonner";

import useOrderStore from "@/store/orderStore";

export default function DeleteOrderDialog({
  open,
  onOpenChange,
  order,
}) {

  const deleteOrder = useOrderStore(
    (state) => state.deleteOrder
  );

  if (!order) return null;

  const handleDelete = () => {

    deleteOrder(order.id);

    toast.success("Order Deleted", {
      description: `${order.customer}'s order has been removed.`,
    });

    onOpenChange(false);

  };

  return (

    <Dialog
      open={open}
      onOpenChange={onOpenChange}
    >

      <DialogContent>

        <DialogHeader>

          <DialogTitle>
            Delete Order
          </DialogTitle>

        </DialogHeader>

        <div className="space-y-3">

          <p>
            Are you sure you want to delete this order?
          </p>

          <div className="rounded-lg bg-red-50 p-4">

            <p>
              <strong>Order:</strong> {order.id}
            </p>

            <p>
              <strong>Customer:</strong> {order.customer}
            </p>

          </div>

          <p className="text-red-500 text-sm">
            This action cannot be undone.
          </p>

        </div>

        <DialogFooter>

          <DialogClose
            render={<Button variant="outline" />}
          >
            Cancel
          </DialogClose>

          <Button
            variant="destructive"
            onClick={handleDelete}
          >
            Delete
          </Button>

        </DialogFooter>

      </DialogContent>

    </Dialog>

  );

}