import { checkAndGenerate, createElement, getUserInputs } from './lib.js';

const init = () => {
  const newPostButton = document.querySelector('#addNewPostBtn');
  newPostButton.addEventListener('click', addPost);
};

const addPost = async () => {
  const { useridInput, titleInput, articleInput } = getUserInputs();

  const resultText = await checkAndGenerate(
    useridInput.value,
    titleInput.value,
    articleInput.value
  );

  if (!resultText) {
    alert('Invalid input! Please fill all fields correctly.');
    return;
  }

  const element = createElement('p', resultText);
  const articleList = document.querySelector('.article-list');
  articleList.appendChild(element);
};

init();
