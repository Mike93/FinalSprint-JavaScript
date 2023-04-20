let data;

fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(displayResult(getRecordCount(data)));
    console.log(displayResult(getAverageAge(data)));
    console.log(displayResult(getFavoriteColors(data)));

    data.forEach((item) => {
      console.log(item.firstName);
    });
  })
  .catch((error) => console.error(error));

function getRecordCount(data) {
  return `There is ${data.length} record in the JSON file.`;
}

function getAverageAge(data) {
  const totalAge = data.reduce((acc, item) => acc + item.age, 0);
  const averageAge = totalAge / data.length;
  return `The average age of the individuals in the JSON file is ${averageAge}.`;
}

function getFavoriteColors(data) {
  const favoriteColors = [];
  data.forEach((item) => {
    if (item.favoriteColors) {
      item.favoriteColors.forEach((color) => {
        favoriteColors.push(color);
      });
    }
  });
  return `The favorite colors in the JSON file are: ${favoriteColors.join(
    ", "
  )}`;
}

function displayResult(result) {
  const resultElement = document.createElement("p");
  resultElement.innerText = result;
  document.getElementById("result").appendChild(resultElement);
  console.log(result);
}
