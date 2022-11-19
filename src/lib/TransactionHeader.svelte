<script>
     import { Progress } from 'sveltestrap';
</script>

<div class="d-flex flex-column flex-md-row justify-content-around">
  <div
    class="t-card d-flex flex-column shadow p-3 mb-5 rounded "
    style="background-color: #c5cbd8; max-width:75%;"
  >
    <div class="card-text fs-3 fw-bolder" style="color: #3b5998;">
      Income: <span class="text-danger">$15000</span>
    </div>
    <div class="card-text fs-3 fw-bolder" style="color: #3b5998;">
      Transactions:<span class="text-danger">15</span>
    </div>
    <div class="card-text fs-3 fw-bolder" style="color: #3b5998;">
      Budget:<span class="text-danger">$7000</span>
    </div>
  </div>
  <!--Investment Statics-->
  <div
    class="t-card d-flex flex-column shadow p-3 mb-5 rounded "
    style="background-color: #c5cbd8; max-width:75%;"
  >
    <div class="card-text fs-2 fw-bolder" style="color: #3b5998;">
      Investments
    </div>
    <div class="d-flex flex-column ms-1">
      <div class="d-flex align-items-center">
        <div
          class="bg-primary rounded-circle"
          style="width: 10px;height:10px;"
        />
        <div class="ms-2 card-text">5 transactions</div>
      </div>
      <div class="d-flex align-items-center">
        <div
          class="bg-warning rounded-circle"
          style="width: 10px;height:10px;"
        />
        <div class="ms-2 card-text">$3000</div>
      </div>
      <Progress value={75}  color="danger" class="mt-1 mb-1" />
      <span style="font-size: 12px;" >Investments / Incomes <span class="fw-bolder">{75}%</span> </span>
    </div>
  </div>

  <!--Expenses Statics-->
  <div
    class="t-card d-flex flex-column shadow p-3 mb-5 rounded "
    style="background-color: #c5cbd8; max-width:75%;"
  >
    <div class="card-text fs-2 fw-bolder" style="color: #3b5998;">Expenses</div>
    <div class="d-flex align-items-center">
      <div class="bg-primary rounded-circle" style="width: 10px;height:10px;" />
      <div class="ms-2 card-text">5 transactions</div>
    </div>
    <div class="d-flex align-items-center">
      <div class="bg-warning rounded-circle" style="width: 10px;height:10px;" />
      <div class="ms-2 card-text">$3000</div>
    </div>
    <Progress value={35}  color="danger" class="mt-1 mb-1" />
    <span style="font-size: 12px;" >Expenses / Incomes <span class="fw-bolder">{35}%</span> </span>
  </div>
</div>

<style>
    .t-card{
        min-width: 25%;
    }
    @media (max-width: 768px){
        .t-card{
            min-width: 75%;
            margin: auto;
        }
    }
    @media (max-width: 801px){
        .card-text{
            font-size: 15px;
        }
    }
</style>
