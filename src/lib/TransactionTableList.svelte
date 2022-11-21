<script>
    import { TransactionStore } from "../store"

    $:transactionList = $TransactionStore

    const handleDelete = (id) => {
        $TransactionStore = $TransactionStore.filter(transaction => transaction.id != id)
    }

</script>

<table class="table table-hover table-bordered" style="background-color: #c5cbd8;" >
    <thead>
        <tr>
            <th>Name</th>
            <th>Amount</th>
            <th>Type</th>
            <th>Date</th>
            <th>Delete</th>
        </tr>
    </thead>
    <tbody>
        {#each transactionList as transaction (transaction.id) }
            <tr>
                <td>{transaction.name}</td>
                <td>{transaction.amount}</td>
                <td>{transaction.type}</td>
                <td>{transaction.date}</td>
                <td class="text-center" > <button on:click={()=> handleDelete(transaction.id)} class="delete-btn" >X</button> </td>
            </tr>
        {/each}
    </tbody>
</table>

<style>
    .delete-btn{
        border: none;
        background: none;
        color: rbg(117,115,115);
    }
    .delete-btn:hover{
        color: #fff;
    }
</style>