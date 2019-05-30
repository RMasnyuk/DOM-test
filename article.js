'use strict';

class Article {
    constructor(title, author, text) {
        this.titleName = title,
            this.author = author,
            this.text = text
    }

    matches(query) {
        if (this.titleName.indexOf(query) > -1 || this.author.indexOf(query) > -1 || this.text.indexOf(query) > -1) {
            return true;
        } else {
            return false;
        }
    }
}

