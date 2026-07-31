import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";


export default function OrderDetailsDialog({
  open,
  onOpenChange,
  order
}) {


  if (!order) return null;


  return (

    <Dialog
      open={open}
      onOpenChange={onOpenChange}
    >

      <DialogContent className="sm:max-w-lg">


        <DialogHeader>

          <DialogTitle>
            Order Details
          </DialogTitle>

        </DialogHeader>



        <div className="space-y-4">


          <div>
            <p className="text-sm text-gray-500">
              Order ID
            </p>

            <p className="font-semibold">
              {order.id}
            </p>
          </div>



          <div>
            <p className="text-sm text-gray-500">
              Customer
            </p>

            <p className="font-semibold">
              {order.customer}
            </p>
          </div>



          <div>
            <p className="text-sm text-gray-500">
              Product
            </p>

            <p className="font-semibold">
              {order.product}
            </p>
          </div>



          <div className="grid grid-cols-2 gap-4">


            <div>
              <p className="text-sm text-gray-500">
                Quantity
              </p>

              <p className="font-semibold">
                {order.qty} pcs
              </p>
            </div>



            <div>
              <p className="text-sm text-gray-500">
                Method
              </p>

              <p className="font-semibold">
                {order.method}
              </p>
            </div>


          </div>



          <div>

            <p className="text-sm text-gray-500">
              Status
            </p>


            <p className="font-semibold">
              {order.status}
            </p>

          </div>



        </div>


      </DialogContent>

    </Dialog>

  );
}