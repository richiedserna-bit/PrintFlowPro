import { create } from "zustand";


const initialInventory = [

  {
    id: 1,
    name: "Black Shirt XL",
    category: "Apparel",
    stock: 120,
    unit: "pcs",
    minStock: 20,
  },

  {
    id: 2,
    name: "Sublimation Paper",
    category: "Materials",
    stock: 350,
    unit: "sheets",
    minStock: 50,
  },

  {
    id: 3,
    name: "Cyan Ink",
    category: "Ink",
    stock: 15,
    unit: "bottle",
    minStock: 10,
  },

];


const useInventoryStore = create((set)=>({

  items: initialInventory,


  addItem:(item)=>
    set((state)=>({
      items:[
        ...state.items,
        item
      ]
    })),


  updateItem:(id, updated)=>
    set((state)=>({
      items:
        state.items.map((item)=>
          item.id === id
          ? {...item,...updated}
          : item
        )
    })),


  deleteItem:(id)=>
    set((state)=>({
      items:
        state.items.filter(
          item=>item.id !== id
        )
    }))

}));


export default useInventoryStore;