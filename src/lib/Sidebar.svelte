<script>
  import TransactionForm from "./TransactionForm.svelte";
import { createEventDispatcher } from "svelte"
import { SelectedTypeStore, SearchStore } from "../store"

let search = ""
$:$SearchStore = search

export let view;
const dispatch = createEventDispatcher()

let selectedType = "all"
$:$SelectedTypeStore = selectedType

const handleView = (viewSelection) => {
    dispatch('handleViewSelect',viewSelection)
}
 

</script>

<div class="d-flex flex-column mt-3 rounded p-3" style="background-color: #c5cbd8;">
    <div class="d-flex flex-sm-column justify-content-around">
        <div class:selected={view === "card"} on:click={()=> handleView("card")}  class="mb-2" style="cursor: pointer;" >Card View</div>
        <div class:selected={view === "table"} on:click={()=> handleView("table")}  class="mb-2"  style="cursor: pointer;" >Table View</div>
    </div>
    <div>
        <div class="mt-3">
            <input bind:value={search} type="search" class="form-control" placeholder="search for transactions...">
        </div>
        <select bind:value={selectedType} class="form-select mt-3" >
            <option value="all" selected>All Transactions</option>
            <option value="Income" selected>Incomes</option>
            <option value="Expense" selected>Expenses</option>
            <option value="Investment" selected>Investments</option>
        </select>
    </div>
    <TransactionForm  />
</div>

<style>
    .selected{
        color: red;
    }
</style>