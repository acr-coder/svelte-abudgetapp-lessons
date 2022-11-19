<script>
  import TransactionCard from "./TransactionCard.svelte";
    import { TransactionStore } from "../store"

    $:transactionList = $TransactionStore

</script>


<div class="d-flex flex-column flex-sm-row flex-wrap justify-content-around">
    {#each transactionList as transaction (transaction.id) }
        <div class="my-card">
        <TransactionCard {transaction} />
        
    </div>
    {/each}

    
    
    
</div>


<style>
    .my-card{
        width: 75%;
        margin: auto;
        margin-bottom: 5px;
        position: relative;

    }

    @media (min-width:768px){
        .my-card{
            width: 25%;
            margin: 15px;
        }
    }
</style>