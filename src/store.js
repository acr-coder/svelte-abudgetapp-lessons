import { writable, derived } from "svelte/store";
import { persistStore } from "./persistStore";


const initial = [
   
]

export const TransactionStore = persistStore('transactionValues',initial)

export const countOfIncome = derived(
  TransactionStore,
  // @ts-ignore
  $TransactionStore => $TransactionStore.filter((transaction) => transaction.type === "Income").length  
)
export const countOfExpense = derived(
  TransactionStore,
  // @ts-ignore
  $TransactionStore => $TransactionStore.filter((transaction) => transaction.type === "Expense").length  
)
export const countOfInvestment = derived(
  TransactionStore,
  // @ts-ignore
  $TransactionStore => $TransactionStore.filter((transaction) => transaction.type === "Investment").length  
)

export const amountOfIncome = derived(
    TransactionStore,
    // @ts-ignore
    $TransactionStore => $TransactionStore.filter((transaction) => transaction.type === "Income").reduce((a,item) => a + item.amount, 0)  
  )
export const amountOfExpense = derived(
    TransactionStore,
    // @ts-ignore
    $TransactionStore => $TransactionStore.filter((transaction) => transaction.type === "Expense").reduce((a,item) => a + item.amount, 0)  
  )
export const amountOfInvestment = derived(
    TransactionStore,
    // @ts-ignore
    $TransactionStore => $TransactionStore.filter((transaction) => transaction.type === "Investment").reduce((a,item) => a + item.amount, 0)  
  )