<script>
  import TransactionForm from "./TransactionForm.svelte";
import { createEventDispatcher } from "svelte"
import { SelectedTypeStore, SearchStore, LangStore } from "../store"

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
        <div class:selected={view === "card"} on:click={()=> handleView("card")}  class="mb-2" style="cursor: pointer;" >{$LangStore === "EN" ? "Card View" : "Kart Görünümü"} </div>
        <div class:selected={view === "table"} on:click={()=> handleView("table")}  class="mb-2"  style="cursor: pointer;" >{$LangStore === "EN" ? "Table View" : "Tablo Görünümü"}</div>
    </div>
    <div>
        <div class="mt-3">
            <input bind:value={search} type="search" class="form-control" placeholder={$LangStore === "EN" ? "Search for transactions" : "İşlem ara..."}>
        </div>
        <select bind:value={selectedType} class="form-select mt-3" >
            <option value="all" selected>{$LangStore === "EN" ? "All Transactions" : "Tüm İşlemler"}</option>
            <option value="Income" selected>{$LangStore === "EN" ? "Incomes" : "Gelirler"}</option>
            <option value="Expense" selected>{$LangStore === "EN" ? "Expenses" : "Giderler"}</option>
            <option value="Investment" selected>{$LangStore === "EN" ? "Investments" : "Yatırımlar"}</option>
        </select>
    </div>
    <TransactionForm  />
</div>

<style>
    .selected{
        color: red;
    }
</style>