const { createElement, getUserInputs, checkAndGenerate } = require("./lib.js");

const init = () => {
  const newPostButton = document.querySelector("#addNewPostBtn");
  newPostButton.addEventListener("click", addPost);
};

const addPost = () => {
  const { useridInput, titleInput, articleInput } = getUserInputs();

  const resultText = checkAndGenerate(
    useridInput.value,
    titleInput.value,
    articleInput.value
  );

  if (!resultText) {
    alert("Invalid input! Please fill all fields correctly.");
    return;
  }

  const element = createElement("p", resultText);
  const articleList = document.querySelector(".article-list");
  articleList.appendChild(element);
};

// Check and generate (Define locally in this file for now)
// const checkAndGenerate = async (userIdValue, titleValue, articleValue) => {
//   if (
//     !validateInput(userIdValue, true, true) ||
//     !validateInput(titleValue, true, false) ||
//     !validateInput(articleValue, true, false)
//   ) {
//     return false;
//   }

//   // Temporarily skip server functionality
//   const resultText = generateResult(userIdValue, titleValue);
//   return resultText;
// };

init();
