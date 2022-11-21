<script>
  import TransactionCard from "./TransactionCard.svelte";
  import {
    SearchStore,
    TransactionStore,
    SelectedTypeStore,
    IncomeStore,
    ExpenseStore,
    InvestmentStore,
  } from "../store";

  import {fly, fade, slide, scale} from "svelte/transition"
  import { flip } from "svelte/animate"

  $: transactionList = $TransactionStore;

  $: if ($SelectedTypeStore === "all") {
    transactionList = $TransactionStore;
  } else if ($SelectedTypeStore === "Income") {
    transactionList = $IncomeStore;
  } else if ($SelectedTypeStore === "Expense") {
    transactionList = $ExpenseStore;
  } else if ($SelectedTypeStore === "Investment") {
    transactionList = $InvestmentStore;
  }

  $: visibleTransactions = $SearchStore
    ? transactionList.filter((transaction) => {
        return (
          transaction.name.match(`${$SearchStore.toLocaleLowerCase()}.*`) ||
          transaction.date.match(`${$SearchStore.toLocaleLowerCase()}.*`)
        );
      })
    : transactionList;
</script>

<div class="d-flex flex-column flex-sm-row flex-wrap justify-content-around">
  {#each visibleTransactions as transaction (transaction.id)}
    <div in:fade out:scale|local={{duration:1000}} animate:flip={{duration:1000}} class="my-card">
      <TransactionCard {transaction} />
    </div>
  {/each}
</div>

<style>
  .my-card {
    width: 75%;
    margin: auto;
    margin-bottom: 5px;
    position: relative;
  }

  @media (min-width: 768px) {
    .my-card {
      width: 25%;
      margin: 15px;
    }
  }
</style>
