'use strict';

class ArticleList {
    constructor(container) {
        this.container = container,
            this.articleArr = [];
    }

    addArticle(article) {
        this.articleArr.push(article)
    }

    removeArticle(article) {
        this.articleArr.splice(this.articleArr.indexOf(article), 1);
    }

    render() {
        for (let i = 0; i < this.articleArr.length; i++) {
            let title = document.createElement('div');
            let author = document.createElement('div');
            let text = document.createElement('div');
            title.textContent = this.articleArr[i].title;
            author.textContent = this.articleArr[i].author;
            text.textContent = this.articleArr[i].text;
            this.container.append(title, author, text);
        }
    }
}
