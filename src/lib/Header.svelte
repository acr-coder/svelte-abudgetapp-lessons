<script>
import { LangStore} from "../store"

const handleLang = () => {
    if($LangStore === "TR"){
        $LangStore = "EN"
    }else if($LangStore === "EN"){
        $LangStore = "TR"
    }
}
</script>


<div class="p-1 d-flex justify-content-between bg-light">
    <div class="text-primary fs-3">ACR Budget App</div>
    <div style="cursor: pointer;" on:click={handleLang} class="p-2 mb-1 bg-primary bg-gradient text-white rounded">{$LangStore === "EN" ? "TR" : "EN"} </div>
</div>