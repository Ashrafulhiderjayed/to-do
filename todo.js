let count = 0;
function inputBtn(){
    const inputValue = document.getElementById("input-value").value;
    // console.log(inputValue)
    count += 1;

    const parent = document.getElementById("content-container");

    const tr = document.createElement("tr");
    tr.innerHTML = `
    <td>${count}</td>
    <td>${inputValue}</td>
    <td>
    <button class="btn btn-primary">Done</button>
    <button class="btn btn-danger deletebtn">Delete</button>
    </td>
    `
    parent.appendChild(tr);
    document.getElementById("input-value").value = " ";

            //Delete Button section-------------
    const elements = document.querySelectorAll(".deletebtn");
    // console.log(elements)
    for(const value of elements){
        value.addEventListener("click", function(event){
            event.target.parentNode.parentNode.style.display = "none";//2টা parentNode দিলে html অনুসারে ২ ধাপ উপরে গিয়ে tr এ যাবে
        })
    }
}

        //clear all section-------------
document.getElementById("clear-btn").addEventListener("click", function(e){
    console.log(e.target.parentNode);
    e.target.parentNode.style.display = "none";
})