'use strict';

class ArticleList {
    constructor(container) {
        this.container = container,
            this.articleArr = [];
    }

    addArticle(article) {
        article.id = this.articleArr.length;
        this.articleArr.push(article);
        console.log(this.articleArr)
    }

    removeArticle(article) {
        this.articleArr.splice(this.articleArr.indexOf(article), 1);
        console.log(this.articleArr)
    }

    render(query) {
        this.container.innerHTML = '';
        for (let i = 0; i < this.articleArr.length; i++) {
            let article = new Article(this.articleArr[i].author, this.articleArr[i].text, this.articleArr[i].title);
            let selfContainer = document.createElement('div');
            let author = document.createElement('div');
            let text = document.createElement('div');
            let title = document.createElement('div');
            let h = document.createElement('h3');
            author.innerHTML = this.articleArr[i].author;
            text.innerHTML = this.articleArr[i].text;
            h.innerHTML = this.articleArr[i].title;
            title.append(h);
            selfContainer.append(title, author, text);
            let removeBtn = document.createElement('button');
            removeBtn.innerText = 'x';
            selfContainer.append(removeBtn);
            removeBtn.id = `${this.articleArr[i].id}`;

            if (!query) {
                this.container.append(selfContainer);

            } else if (article.matches(query)) {
                this.container.append(selfContainer);
            }
        }
    }
}
