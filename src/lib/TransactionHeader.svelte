<script>
  import { Progress } from "sveltestrap";
  import {
    LangStore,
    TransactionStore,
    countOfIncome,
    countOfExpense,
    countOfInvestment,
    amountOfIncome,
    amountOfExpense,
    amountOfInvestment,
  } from "../store";
</script>

<div class="d-flex flex-column flex-md-row justify-content-around">
  <div
    class="t-card d-flex flex-column shadow p-3 mb-5 rounded "
    style="background-color: #c5cbd8; max-width:75%;"
  >
    <div class="card-text fs-3 fw-bolder" style="color: #3b5998;">
      {$LangStore === "EN" ? "Income" : "Gelirler"}: <span class="text-danger">${$amountOfIncome}</span>
    </div>
    <div class="card-text fs-3 fw-bolder" style="color: #3b5998;">
      {$LangStore === "EN" ? "Transactions" : "İşlemler"}:<span class="text-danger"
        >{$countOfExpense + $countOfIncome + $countOfInvestment}</span
      >
    </div>
    <div class="card-text fs-3 fw-bolder" style="color: #3b5998;">
      {$LangStore === "EN" ? "Budget" : "Bütçe"}:<span class="text-danger">${$amountOfIncome - $amountOfExpense - $amountOfInvestment}</span>
    </div>
  </div>
  <!--Investment Statics-->
  <div
    class="t-card d-flex flex-column shadow p-3 mb-5 rounded "
    style="background-color: #c5cbd8; max-width:75%;"
  >
    <div class="card-text fs-2 fw-bolder" style="color: #3b5998;">
      {$LangStore === "EN" ? "Investments" : "Yatırımlar"}
    </div>
    <div class="d-flex flex-column ms-1">
      <div class="d-flex align-items-center">
        <div
          class="bg-primary rounded-circle"
          style="width: 10px;height:10px;"
        />
        <div class="ms-2 card-text">{$countOfInvestment} {$LangStore === "EN" ? "transactions" : "işlem"}</div>
      </div>
      <div class="d-flex align-items-center">
        <div
          class="bg-warning rounded-circle"
          style="width: 10px;height:10px;"
        />
        <div class="ms-2 card-text">${$amountOfInvestment}</div>
      </div>
      <Progress value={$amountOfInvestment / $amountOfIncome * 100} color="danger" class="mt-1 mb-1" />
      <span style="font-size: 12px;"
        >{$LangStore === "EN" ? "Investments / Incomes" : "Yatırımlar / Gelirler"} <span class="fw-bolder">{ $amountOfIncome ? Math.floor($amountOfInvestment / $amountOfIncome * 100) : 0}%</span>
      </span>
    </div>
  </div>

  <!--Expenses Statics-->
  <div
    class="t-card d-flex flex-column shadow p-3 mb-5 rounded "
    style="background-color: #c5cbd8; max-width:75%;"
  >
    <div class="card-text fs-2 fw-bolder" style="color: #3b5998;">{$LangStore === "EN" ? "Expenses" : "Giderler"}</div>
    <div class="d-flex align-items-center">
      <div class="bg-primary rounded-circle" style="width: 10px;height:10px;" />
      <div class="ms-2 card-text">{$countOfExpense} {$LangStore === "EN" ? "transactions" : "işlem"}</div>
    </div>
    <div class="d-flex align-items-center">
      <div class="bg-warning rounded-circle" style="width: 10px;height:10px;" />
      <div class="ms-2 card-text">${$amountOfExpense}</div>
    </div>
    <Progress value={$amountOfExpense / $amountOfIncome * 100} color="danger" class="mt-1 mb-1" />
    <span style="font-size: 12px;"
      >{$LangStore === "EN" ? "Expenses / Incomes" : "Giderler / Gelirler"} <span class="fw-bolder">{$amountOfIncome ?  Math.floor($amountOfExpense / $amountOfIncome * 100) : 0}%</span>
    </span>
  </div>
</div>

<style>
  .t-card {
    min-width: 25%;
  }
  @media (max-width: 768px) {
    .t-card {
      min-width: 75%;
      margin: auto;
    }
  }
  @media (max-width: 801px) {
    .card-text {
      font-size: 15px;
    }
  }
</style>
