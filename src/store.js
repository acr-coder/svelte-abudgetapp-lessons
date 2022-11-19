import { writable } from "svelte/store";
import { persistStore } from "./persistStore";


const initial = [
    {
        id:1,
        name:"maaş",
        type:"Income",
        amount:5000,
        date:"01-01-2022"
    },
    {
        id:2,
        name:"kira",
        type:"Expense",
        amount:2000,
        date:"04-05-2022"
    },
    {
        id:3,
        name:"altın aldım",
        type:"Investment",
        amount:1000,
        date:"03-07-2022"
    },
    {
        id:4,
        name:"euro",
        type:"Investment",
        amount:500,
        date:"05-07-2022"
    },
]

export const TransactionStore = persistStore('transactionValues',initial)