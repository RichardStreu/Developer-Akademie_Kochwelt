const recipeIncredientsList = document.querySelector(".recipeIncredientsList");
const amountListOfIncredients = recipeIncredientsList.querySelectorAll("span");
const inputNumberOfPortion = document.getElementById("recipeNumberOfPortion");

let defaultNumberofPortion = inputNumberOfPortion.value;
let newNumberofPortion;

function calculateAmount() {
  if (inputNumberOfPortion.value >= 1) {
    newNumberofPortion = inputNumberOfPortion.value;

    amountListOfIncredients.forEach((element) => {
      element.innerText =
        Math.round(
          ((element.innerText / defaultNumberofPortion) * newNumberofPortion) /
            0.5
        ) * 0.5;
    });

    defaultNumberofPortion = newNumberofPortion;
  }
  else {
    inputNumberOfPortion.value = defaultNumberofPortion;
    alert("Bitte wähle eine Portionsgröße die hungrigen Mägen gerecht wird =)");
    return;
  }
}

function enterToCalculat() {
  document
    .getElementById("recipeNumberOfPortion")
    .addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        event.preventDefault;
        calculateAmount();
      }
    });
}
