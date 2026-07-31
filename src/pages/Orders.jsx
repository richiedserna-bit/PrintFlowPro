import NewOrderDialog from "@/components/orders/NewOrderDialog";

import OrderTable from "@/components/orders/OrderTable";

export default function Orders() {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-slate-900">
          Orders
        </h1>

        <NewOrderDialog />
      </div>

      <OrderTable />
    </div>
  );
}