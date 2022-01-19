let myLeadJs = [];
let textInputBoxJs = document.getElementById("text-input-box");
let saveButtonJs = document.getElementById("save-btn");
let leadListJs = document.getElementById("list-of-leads");

saveButtonJs.addEventListener("click", function () {
    leadListJs.innerHTML += `
        <li>  <a target="_blank" href="${textInputBoxJs.value}"> ${textInputBoxJs.value} </a>  </li>
    `
    myLeadJs.push(textInputBoxJs.value)
    myLeadJs = JSON.stringify(myLeadJs);

    localStorage.setItem("lead", myLeadJs);
    myLeadJs = JSON.parse(myLeadJs);
    textInputBoxJs.value = "";
    console.log(myLeadJs);
})