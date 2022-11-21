<script>
 import Header from "./lib/Header.svelte"
  import Sidebar from "./lib/Sidebar.svelte";
  import TransactionCardList from "./lib/TransactionCardList.svelte";
  import TransactionHeader from "./lib/TransactionHeader.svelte";
  import TransactionTableList from "./lib/TransactionTableList.svelte";
  
  let view = "table"
  

</script>

<div class="p-1">
  <!--Header-->
  <Header  />

  <div class="d-flex flex-column flex-sm-row">
    <!--Sidebar-->
    <Sidebar {view} on:handleViewSelect={(e) => view = e.detail} />
    <div class="flex-grow-1 pt-3">
      <!--Tranaction Header-->
      <TransactionHeader  />
      <div class:hide={view === "table"} >
        <!--TransactionCardList-->
        <TransactionCardList  />
      </div>
      <div class:hide={view === "card"} class="w-75 m-auto" >
        <!--TransactionTableList-->
        <TransactionTableList  />
      </div>
    </div>
  </div>
</div>


<style>
 .hide{
  display: none;
 }
</style>
