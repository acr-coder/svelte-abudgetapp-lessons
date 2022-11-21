<script>
import { TransactionStore, LangStore } from "../store"

let tName = "";
let tType = "";
let tDate = "";
let tAmount;
let message = "";

const handleSubmit = () => {
    if(tName.trim().length > 3 && tName.trim().length < 20){
        const newTransaction = {
            id: Date.now(),
            name:tName.toLocaleLowerCase(),
            type:tType,
            amount:tAmount,
            date:tDate
        }
        TransactionStore.update((currentTransactions) => {
            return [newTransaction, ...currentTransactions]
        })
        tName = ""
        tType='Income'
        tDate=""
        tAmount=""
        message = $LangStore === "EN" ? "Success" :  "İşlem Başarılı"
    }else if(tName.trim().length < 4 || tName.trim().length > 20 ){
        message = $LangStore === "EN" ? "Transaction Name must be between 3 and 20 characters" :  "İşlem ismi 3 ile 20 karakter arasında olmalıdır"
    }
}



</script>


<form on:submit|preventDefault={handleSubmit} class="mt-3 p-1">
    <div class="mt-2 mb-2 text-center text-danger fw-bolder fs-4">
        {$LangStore === "EN" ? "Add New Transaction" : "Yeni İşlem Ekle"}
    </div>
    <div class="mb-2">
        <input on:input={()=> message = ''} type="text" bind:value={tName} required autocomplete="off" class="form-control" placeholder={$LangStore === "EN" ? "Transaction Name..." : "İşlem İsmi..."} >
    </div>
    <div class="mb-2">
        <input type="number" bind:value={tAmount} required autocomplete="off" class="form-control" placeholder={$LangStore === "EN" ? "Transaction Amount..." : "İşlem Miktarı..."} >
    </div>
    <select bind:value={tType} required class="form-select mb-2" >
        <option value="Income" selected>{$LangStore === "EN" ? "Incomes" : "Gelirler"}</option>
        <option value="Expense" >{$LangStore === "EN" ? "Expenses" : "Giderler"}</option>
        <option value="Investment" >{$LangStore === "EN" ? "Investments" : "Yatırımlar"}</option>
    </select>
    <div  class="mb-2">
        <input bind:value={tDate} type="date" required class="form-control" >
    </div>
    <div class="form-text text-wrap text-danger">{message}</div>
    <button  type="submit" class="btn btn-primary w-100" >{$LangStore === "EN" ? "Submit" : "Ekle"}</button>
</form>