const searchText = document.querySelector("#search-box");
const googleSearch =document.querySelector("#google-search")
searchText.addEventListener("keydown", function(event){
    if(event.code === "Enter"){
        search();
    }
});
googleSearch.addEventListener("click", function(event){
    const input = searchText.value;
    
    search();
});
function search() {
    const input = searchText.value;

    window.location.href = "https://www.google.com/search?q=" + input + "&rlz=1C1CHZL_enIN813IN813&oq=" + input + "&aqs=chrome..69i57j46i433j0i433j46i433j69i60l4.1148j0j7&sourceid=chrome&ie=UTF-8";
}