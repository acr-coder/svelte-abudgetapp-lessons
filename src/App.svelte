<script>
 import Header from "./lib/Header.svelte"
  import Sidebar from "./lib/Sidebar.svelte";
  import TransactionHeader from "./lib/TransactionHeader.svelte";
</script>

<div class="p-1">
  <!--Header-->
  <Header  />

  <div class="d-flex flex-column flex-sm-row">
    <!--Sidebar-->
    <Sidebar  />
    <div class="flex-grow-1 pt-3">
      <!--Tranaction Header-->
      <TransactionHeader  />
      <div>
        <!--TransactionCardList-->
      </div>
      <div>
        <!--TransactionTableList-->
      </div>
    </div>
  </div>
</div>


<style>
 
</style>
