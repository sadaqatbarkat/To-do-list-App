var input = document.getElementById("input")


var list = document.getElementById("list")

function add() {

if(input.value){
	list.innerHTML += "<li id='li' class='lst'>" + input.value + "</li>";
list.innerHTML += "<button id='dele' onclick='hatana(this)'><i class='fa-solid fa-trash-can' ></i></button>";
list.innerHTML += "<button id='ed' onclick='edit(this)'><i class='fa-regular fa-pen-to-square' ></i></button>";


}else{
	document.getElementById("empty").style.display = "block"
}

	input.value = ''

}

function hatana(element) {
	

	element.previousElementSibling.remove()
	element.nextElementSibling.remove()
	element.remove()
}


function edit(element) {
var s = element.previousElementSibling.previousElementSibling.innerText  ;
document.getElementById("input").value = s





}







