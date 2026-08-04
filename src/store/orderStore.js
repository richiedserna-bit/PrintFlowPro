import { create } from "zustand";

const orderStatuses = [
  "Waiting",
  "Printing",
  "Quality Check",
  "Ready for Pickup",
  "Completed"
];

const initialOrders = [

{
id:"#1024",
customer:"Juan Dela Cruz",
product:"Custom T-Shirt",
quantity:20,
method:"Sublimation",
status:"Printing",
price:110
},

{
id:"#1025",
customer:"ABC Company",
product:"Company Uniform",
quantity:50,
method:"DTF",
status:"Waiting",
price:250
},

{
id:"#1026",
customer:"Maria Santos",
product:"Team Jersey",
quantity:15,
method:"Screen Print",
status:"Quality Check",
price:150
}

];

const useOrderStore = create((set)=>({

orders: initialOrders,

addOrder:(order)=>

set((state)=>({

orders:[
order,
...state.orders
]

})),

updateOrder:(id, updatedOrder)=>

set((state)=>({

orders:state.orders.map(order =>
order.id === id
    ?   {
        ...order,
        ...updatedOrder
        }

    :order

    ),   

})),

deleteOrder: (id) =>
set((state) => ({
orders: state.orders.filter((order) => order.id !== id),
})),

updateStatus:(id,status)=>
set((state)=>({
orders:state.orders.map(order =>
order.id === id
? { ...order, status }
: order

)

}))

}));

export {
  orderStatuses
};

export default useOrderStore;