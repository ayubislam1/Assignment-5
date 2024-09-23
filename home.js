document.getElementById("blog-btn").addEventListener("click", function () {
	window.location.href = "home.html";
});
// balance add start
document.getElementById("btn-one").addEventListener("click", function () {
	const text = parseFloat(textValue("text-one"));
	const input = parseFloat(inputValue("input-one"));
	const balance = parseFloat(textValue("main-balance"));
	const title = textValue("title-one");
	if (input <= 0 || isNaN(input)) {
		alert("Invalid Donation amount");
		return;
	}

	const addBalance = text + input;
	document.getElementById("text-one").innerText = addBalance;
	document.getElementById("input-one").value = "";
	const currentBalance = balance - input;
	if (currentBalance < 0) {
		alert("Out of main balance range");
		return;
	}
	document.getElementById("main-balance").innerText = currentBalance;

	const div = document.createElement("div");
	div.className = "p-5 bg-white collapse space-y-2  mb-5 border ";
	div.innerHTML = `<h1 class="font-bold text-xl">${input} Taka is ${title}</h1>
   <p>${new Date().toString()}</p>`;
	const history = document.getElementById("contain");
	history.insertBefore(div, history.firstChild);

	cardClicker("btn-one")
});
document.getElementById("btn-two").addEventListener("click", function () {
	const text = parseFloat(textValue("text-two"));
	const input = parseFloat(inputValue("input-two"));
	const balance = parseFloat(textValue("main-balance"));
	const title = textValue("title-two");
	if (input <= 0 || isNaN(input)) {
		alert("Invalid Donation amount");
		return;
	}

	const addBalance = text + input;
	document.getElementById("text-two").innerText = addBalance;
	document.getElementById("input-two").value = "";
	const currentBalance = balance - input;
	if (currentBalance < 0) {
		alert("Out of main balance range");
		return;
	}
	document.getElementById("main-balance").innerText = currentBalance;

	const div = document.createElement("div");
	div.className = "p-5 bg-white collapse space-y-2  mb-5 border ";
	div.innerHTML = `<h1 class="font-bold text-xl">${input} Taka is ${title}</h1>
   <p>${new Date().toString()}</p>`;
	const history = document.getElementById("contain");
	history.insertBefore(div, history.firstChild);

    cardClicker("btn-two")
});
document.getElementById("btn-three").addEventListener("click", function () {
	const text = parseFloat(textValue("text-three"));
	const input = parseFloat(inputValue("input-three"));
	const balance = parseFloat(textValue("main-balance"));
	const title = textValue("title-three");
	if (input <= 0 || isNaN(input)) {
		alert("Invalid Donation amount");
		return;
	}

	const addBalance = text + input;
	document.getElementById("text-three").innerText = addBalance;
	document.getElementById("input-three").value = "";
	const currentBalance = balance - input;
	if (currentBalance < 0) {
		alert("Out of main balance range");
		return;
	}

	document.getElementById("main-balance").innerText = currentBalance;

	const div = document.createElement("div");
	div.className = "p-5 bg-white collapse space-y-2  mb-5 border bg-base-100";
	div.innerHTML = `<h1 class="font-bold text-xl">${input} Taka is ${title}</h1>
   <p>${new Date().toString()}</p>`;
	const history = document.getElementById("contain");
	history.insertBefore(div, history.firstChild);
    cardClicker("btn-three")
});
// balance add end

// history start
const historyTap = document.getElementById("history-tap");
historyTap.addEventListener("click", function () {
	historyTap.className = "btn px-5 text-xl font-semibold bg-primary";
	document.getElementById("donation-tap").classList.remove("bg-primary");

	const history = document.getElementById("contain");
	history.classList.remove("hidden");
	document.getElementById("main-container").classList.add("hidden");
});
const donationTap = document.getElementById("donation-tap");
donationTap.addEventListener("click", function () {
	donationTap.className = "btn px-5 text-xl font-semibold bg-primary";
	historyTap.classList.remove("bg-primary");
	document.getElementById("main-container").classList.remove("hidden");
	document.getElementById("contain").classList.add("hidden");
});
