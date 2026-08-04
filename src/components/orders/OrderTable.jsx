import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import StatusBadge from "@/components/StatusBadge";
import { Input } from "@/components/ui/input";
import DeleteOrderDialog from "@/components/orders/DeleteOrderDialog";
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

const orders = useOrderStore((state) => state.orders);
const updateStatus = useOrderStore(
      (state) => state.updateStatus);

const [search, setSearch] = useState("");
const [statusFilter, setStatusFilter] = useState("All");

const [selectedOrder, setSelectedOrder] = useState(null);
const [showDetails, setShowDetails] = useState(false);

const [editOrder, setEditOrder] = useState(null);
const [showEdit, setShowEdit] = useState(false);

const [deleteOrder, setDeleteOrder] = useState(null);
const [showDelete, setShowDelete] = useState(false);

const filteredOrders = orders.filter((order) => {

  const keyword = search.toLowerCase();

  const matchesSearch =
    (order.id || "").toLowerCase().includes(keyword) ||
    (order.customer || "").toLowerCase().includes(keyword) ||
    (order.product || "").toLowerCase().includes(keyword) ||
    (order.method || "").toLowerCase().includes(keyword);

  const matchesStatus =
    statusFilter === "All" ||
    order.status === statusFilter;

  return matchesSearch && matchesStatus;

});

  return (
    <div className="bg-white rounded-xl shadow p-6">

     <div className="flex justify-between items-center mb-5">

  <h2 className="text-xl font-bold">
    Orders Management
  </h2>

  <div className="flex gap-3">

    <Input
      className="w-72"
      placeholder="Search orders..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />

    <Select
      value={statusFilter}
      onValueChange={setStatusFilter}
    >
      <SelectTrigger className="w-44">
        <SelectValue />
      </SelectTrigger>

      <SelectContent>
        <SelectItem value="All">All</SelectItem>
        <SelectItem value="Waiting">Waiting</SelectItem>
        <SelectItem value="Printing">Printing</SelectItem>
        <SelectItem value="Completed">Completed</SelectItem>
        <SelectItem value="Released">Released</SelectItem>
      </SelectContent>

    </Select>

  </div>

</div>

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

            <th className="text-left w-16">
              Action
            </th>

          </tr>

        </thead>

        <tbody>

        {
          filteredOrders.map((order) => (

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
                  <StatusBadge status={order.status} />
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

                <DropdownMenuItem
                  onClick={() =>
                    updateStatus(order.id, "Waiting")
                  }
                >
                  Set Waiting
                </DropdownMenuItem>

                <DropdownMenuItem
                  onClick={() =>
                    updateStatus(order.id, "Printing")
                  }
                >
                  Set Printing
                </DropdownMenuItem>

                <DropdownMenuItem
                  onClick={() =>
                    updateStatus(order.id, "Completed")
                  }
                >
                  Set Completed
                </DropdownMenuItem>

                <DropdownMenuItem
                    className="text-red-500"
                    onClick={() => {
                      setDeleteOrder(order);
                      setShowDelete(true);
                    }}
                  >
                    Delete
                </DropdownMenuItem>

                </DropdownMenuContent>

                </DropdownMenu>

            </td>
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

        <DeleteOrderDialog
          open={showDelete}
          onOpenChange={setShowDelete}
          order={deleteOrder}
        />

    </div>
  );
}