document.getElementById("blog-btn").addEventListener("click", function () {
	window.location.href = "home.html";
});
document.getElementById("btn-one").addEventListener("click", function () {
	const text = parseFloat(textValue("text-one"));
	const input = parseFloat(inputValue("input-one"));
	const balance = parseFloat(textValue("main-balance"));
	if (input <= 0 || isNaN(input)) {
		alert("Not a number,try to number input");
		return;
	}

	const addBalance = text + input;
	document.getElementById("text-one").innerText = addBalance;
	const currentBalance = balance - input;
	document.getElementById("main-balance").innerText = currentBalance;
});
