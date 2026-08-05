import {
    createContext,
    useContext,
    useState
} from "react";


const OrderContext = createContext(null);


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
status:"Completed",
price:150
}

];


export function OrderProvider({children}){


const [orders,setOrders] = useState(initialOrders);



function addOrder(order){

setOrders(prev => [

order,
...prev

]);

}



function updateStatus(id,status){

setOrders(prev =>

prev.map(order =>

order.id === id

?

{
...order,
status
}

:

order

)

);

}



return (

<OrderContext.Provider

value={{

orders,
addOrder,
updateStatus

}}

>

{children}

</OrderContext.Provider>

)

}



export function useOrders(){

return useContext(OrderContext);

}