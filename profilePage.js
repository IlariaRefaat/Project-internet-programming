function editProfile(){
    document.getElementById("myForm").style.display = "block";
    document.getElementById("M").style.opacity=0.1;


}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
    document.getElementById("M").style.opacity=1;
}

function Submit() {
    document.getElementById("myForm").style.display = "none";
    document.getElementById("M").style.opacity=1;
    var x=document.getElementById("nName").value;
    document.getElementById("N").innerHTML=x;
    document.getElementById("N").style.fontSize="xx-large";
    document.getElementById("N").style.fontWeight="bold";
    const nodeList = document.querySelectorAll(".Memo");
    for (let i = 0; i < nodeList.length; i++) {
    nodeList[i].innerHTML=x;
    }
}
