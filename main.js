'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('#article-list');
    const articleList = new ArticleList(container);
    document.querySelector('body').append(container);

    const xhr = new XMLHttpRequest();
    xhr.open('GET', ' http://my-json-server.typicode.com/mate-academy/literary-blog/articles', false);
    xhr.send();
    let text = JSON.parse(xhr.responseText);

    for (let i = 0; i < text.length; i++) {
        articleList.addArticle(text[i]);
    }
    articleList.render();

    document.addEventListener('click', function (event) {
        if (event.target.nodeName !== 'BUTTON') {
            return;
        }
        event.target.parentNode.remove();
        let findArticle = articleList.articleArr.find((e) => {
            return e.id === +event.target.id;
        });
        articleList.removeArticle(findArticle);
    });

    let input = document.querySelector('input');
    input.addEventListener('input', () => {
        let value = input.value.trim();
        articleList.render(value);
    });

});




