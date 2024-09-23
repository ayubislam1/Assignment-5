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
function cardClicker(id) {
	let existingCard = document.getElementById("confirmation-card");
	if (!existingCard) {
		const card = document.createElement("div");
		card.className = "card bg-base-100 w-96 shadow-xl";
		card.id = "confirmation-card";
		card.innerHTML = `
      <div class="card-body text-center">
        <h2 class="text-2xl font-bold">Congrats!</h2>
        <img src="./assets/coin.png" alt="coin" class="w-10  ml-36"/>
        <p>You Have Donated For Humankind</p>
        <p class="font-semibold ">Successfully</p>
        <div class="card-actions justify-center">
          <button id="close" class="btn">Close Confirmation</button>
        </div>
      </div>`;

		const cardContain = document.getElementById("card-container");
		cardContain.appendChild(card);
	}
	document.getElementById("card-container").classList.remove("hidden");
	document.getElementById("close").addEventListener("click", function () {
		document.getElementById("card-container").classList.add("hidden");
	});

	return id;
}

