// Traversing the DOM
const btns = document.querySelectorAll(".question-btn");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const articles = document.querySelectorAll(".question");
    articles.forEach(function (article) {
      article.classList.remove("show-text");
    })
    const question = e.currentTarget.parentElement.parentElement;
    question.classList.toggle("show-text");
  });
});
