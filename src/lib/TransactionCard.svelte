<script>
    import { Card, CardBody } from "sveltestrap"
</script>


<Card>
    <CardBody class="text-center">Maaş</CardBody>
    <span class="money text-danger fw-bolder">5000</span>
    <span class="date text-danger fw-bolder">22-05-2022</span>
    <span class="delete-btn">X</span>
</Card>

<style>
    .money{
        background-color: #c5cbd8;
        padding: 0 5px;
        border-radius: 0.25rem;
        width: fit-content;
        position: absolute;
        top: -5px;
        left: -5px;
        color: #fff;
    }
    .date{
        background-color: #c5cbd8;
        padding: 0 5px;
        border-radius: 0.25rem;
        width: fit-content;
        position: absolute;
        right: -6px;
        bottom: -5px;
        color: #fff;
    }
    .delete-btn{
        position: absolute;
        width: 20px;
        height: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        top: -5px;
        right: -6px;
        background-color: rgb(51,50,50);
        border-radius: 50%;
        color: #fff;
        cursor: pointer;
    }

    .delete-btn:hover{
        background-color: black;
    }

</style>