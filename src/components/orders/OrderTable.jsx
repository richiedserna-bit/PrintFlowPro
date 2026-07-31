import { useState } from "react";
import OrderDetailsDialog from "@/components/orders/OrderDetailsDialog";
import EditOrderDialog from "@/components/orders/EditOrderDialog";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Button } from "@/components/ui/button";
import { MoreVertical } from "lucide-react";
import useOrderStore from "@/store/orderStore";

export default function OrderTable() {

  const orders = useOrderStore(
    (state) => state.orders
  );

  const [selectedOrder, setSelectedOrder] = useState(null);
  const [showDetails, setShowDetails] = useState(false);

  const [editOrder, setEditOrder] = useState(null);
  const [showEdit, setShowEdit] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow p-6">


      <h2 className="text-xl font-bold mb-5">
        Orders Management
      </h2>


      <table className="w-full">

        <thead>

          <tr className="border-b">

            <th className="text-left p-3">
              Order
            </th>

            <th className="text-left p-3">
              Customer
            </th>

            <th className="text-left p-3">
              Product
            </th>

            <th className="text-left p-3">
              Qty
            </th>

            <th className="text-left p-3">
              Method
            </th>

            <th className="text-left p-3">
              Status
            </th>

            <th className="text-left p-3">
              Action
            </th>

          </tr>

        </thead>


        <tbody>


        {
          orders.map((order)=>(

            <tr
              key={order.id}
              className="border-b hover:bg-gray-50"
            >

              <td className="p-3">
                {order.id}
              </td>


              <td className="p-3">
                {order.customer}
              </td>


              <td className="p-3">
                {order.product}
              </td>


              <td className="p-3">
                {order.quantity}
              </td>


              <td className="p-3">
                {order.method}
              </td>


              <td  className="p-3">
                  {order.status}
              </td>

              <td className="p-3">

                <DropdownMenu>

                <DropdownMenuTrigger render={<Button variant="ghost" size="icon" />}>
                  <MoreVertical size={18}/>
                </DropdownMenuTrigger>


                <DropdownMenuContent>

                <DropdownMenuItem
                  onClick={() => {
                    setSelectedOrder(order);
                    setShowDetails(true);
                  }}
                >
                  View Details
                </DropdownMenuItem>

                <DropdownMenuItem
                    onClick={()=>{
                      setEditOrder(order);
                      setShowEdit(true);
                    }}
                  >
                    Edit Order
                </DropdownMenuItem>


                <DropdownMenuItem>
                  Change Status
                </DropdownMenuItem>


                <DropdownMenuItem className="text-red-500">
                  Delete
                </DropdownMenuItem>


                </DropdownMenuContent>

                </DropdownMenu>

                </td>

            <span
            className={`
            px-3
            py-1
            rounded-full
            text-sm

            ${
            order.status === "Completed"
            ? "bg-green-100 text-green-700"

            : order.status === "Printing"
            ? "bg-blue-100 text-blue-700"

            : "bg-yellow-100 text-yellow-700"

            }
            `}
            >
            {order.status}
            </span>
            </tr>

          ))
        }


        </tbody>


      </table>

      <OrderDetailsDialog
        open={showDetails}
        onOpenChange={setShowDetails}
        order={selectedOrder}
/>
      <EditOrderDialog
          open={showEdit}
          onOpenChange={setShowEdit}
          order={editOrder}

        />
    </div>
  );
}