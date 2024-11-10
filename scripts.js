
const searchInput = document.getElementById ("search")

searchInput.addEventListener("input", (event) => {
    const value = event.target.value;
 
})

function formatString(value){
    return value
    .toLowerCase()
    .trim();
}