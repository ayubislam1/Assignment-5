document.getElementById("home-btn").addEventListener("click", function () {
	console.log("hello");
	window.location.href = "index.html";
});
function textValue(id) {
	return document.getElementById(id).innerText;
}
function inputValue(id) {
	return document.getElementById(id).value;
}
