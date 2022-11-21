<script>
  import {
    LangStore,
    SearchStore,
    TransactionStore,
    SelectedTypeStore,
    IncomeStore,
    ExpenseStore,
    InvestmentStore,
  } from "../store";
  import { fly, fade, slide, scale } from "svelte/transition";
  import { flip } from "svelte/animate";

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

  const handleDelete = (id) => {
    $TransactionStore = $TransactionStore.filter(
      (transaction) => transaction.id != id
    );
  };
</script>

<table
  class="table table-hover table-bordered"
  style="background-color: #c5cbd8;"
>
  <thead>
    <tr>
      <th>{$LangStore === "EN" ? "Name" : "İsim"}</th>
      <th>{$LangStore === "EN" ? "Amount" : "Miktar"}</th>
      <th>{$LangStore === "EN" ? "Type" : "Tip"}</th>
      <th>{$LangStore === "EN" ? "Date" : "Tarih"}</th>
      <th>{$LangStore === "EN" ? "Delete" : "Sil"}</th>
    </tr>
  </thead>
  <tbody>
    {#each visibleTransactions as transaction (transaction.id)}
      <tr
        in:fade
        out:scale|local={{ duration: 1000 }}
        animate:flip={{ duration: 1000 }}
      >
        <td>{transaction.name}</td>
        <td>{transaction.amount}</td>
        <td>{transaction.type}</td>
        <td>{transaction.date}</td>
        <td class="text-center">
          <button
            on:click={() => handleDelete(transaction.id)}
            class="delete-btn">X</button
          >
        </td>
      </tr>
    {/each}
  </tbody>
</table>

<style>
  .delete-btn {
    border: none;
    background: none;
    color: rbg(117, 115, 115);
  }
  .delete-btn:hover {
    color: #fff;
  }
</style>
