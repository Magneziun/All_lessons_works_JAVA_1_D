class News {
    constructor(title, text, tags, date) {
        this.title = title;
        this.text = text;
        this.tags = tags; 
        this.date = date; 
    }

    formatDate() {
        const day = String(this.date.getDate()).padStart(2, '0');
        const month = String(this.date.getMonth() + 1).padStart(2, '0');
        const year = this.date.getFullYear();
        return `${day}.${month}.${year}`;
    }

    print() {
        const formattedDate = this.formatDate();
        const tagsStr = this.tags.join(', ');
        return `
            <div class="news-item">
                <div class="news-title">${this.title}</div>
                <div class="news-date">${formattedDate}</div>
                <div class="news-text">${this.text}</div>
                <div class="news-tags">Теги: ${tagsStr}</div>
            </div>
        `;
    }
}

class NewsFeed {
    constructor() {
        this.newsArray = [];
    }

    get count() {
        return this.newsArray.length;
    }

    displayAll(containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;
        
        if (this.newsArray.length === 0) {
            container.innerHTML = '<p>Новостей пока нет.</p>';
            return;
        }
        
        let html = '';
        for (let i = 0; i < this.newsArray.length; i++) {
            html += this.newsArray[i].print();

            html += `<button class="delete-btn" data-index="${i}">Удалить</button>`;
        }
        container.innerHTML = html;
        
        const deleteBtns = document.querySelectorAll('.delete-btn');
        deleteBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const index = parseInt(btn.getAttribute('data-index'));
                this.removeNews(index);
                this.displayAll('newsFeed');

                if (window.currentDisplayFunction) {
                    window.currentDisplayFunction();
                }
            });
        });
    }

    addNews(news) {
        if (news instanceof News) {
            this.newsArray.push(news);
        }
    }

    removeNews(index) {
        if (index >= 0 && index < this.newsArray.length) {
            this.newsArray.splice(index, 1);
        }
    }

    sortByDate() {
        this.newsArray.sort((a, b) => b.date - a.date);
    }

    searchByTag(tag) {
        return this.newsArray.filter(news => 
            news.tags.some(t => t === tag)
        );
    }
}

const feed = new NewsFeed();

const now = new Date();

feed.addNews(new News("123", "123", ["1", "2"], now));
feed.addNews(new News("Мне поставят 12 за дз", "типа описание", ["Правда", "не фейк", "100%"], now));
feed.addNews(new News("новости недели", "Что то случилось на прошлой неделе", ["интересное", "важное", "проверенная информация"], now));

let currentFilteredNews = null;

function refreshDisplay() {
    const container = document.getElementById('newsFeed');

    if (currentFilteredNews !== null) {
        if (currentFilteredNews.length === 0) {
            container.innerHTML = '<p>Новости по данному тегу не найдены.</p>';
            return;
        }
        
        let html = '';
        currentFilteredNews.forEach((news, i) => {
            const originalIndex = feed.newsArray.findIndex(n => n === news);
            html += news.print() + `<button class="delete-btn" data-original-index="${originalIndex}">Удалить</button>`;
        });
        container.innerHTML = html;
        
        document.querySelectorAll('.delete-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const origIndex = parseInt(btn.dataset.originalIndex);
                feed.removeNews(origIndex);
                const tag = document.getElementById('searchTagInput').value;
                currentFilteredNews = feed.searchByTag(tag);
                refreshDisplay();
            });
        });
    } else {
        feed.displayAll('newsFeed');
    }
}


document.getElementById('addBtn').addEventListener('click', () => {
    const title = document.getElementById('titleInput').value;
    const text = document.getElementById('textInput').value;
    const tagsStr = document.getElementById('tagsInput').value;
    
    if (!title || !text) {
        alert('Заголовок и текст новости обязательны');
        return;
    }
    
    const tags = tagsStr ? tagsStr.split(',').map(t => t.trim()) : [];
    const newNews = new News(title, text, tags, new Date());
    feed.addNews(newNews);
    
    document.getElementById('titleInput').value = '';
    document.getElementById('textInput').value = '';
    document.getElementById('tagsInput').value = '';
    
    currentFilteredNews = null;
    refreshDisplay();
});


document.getElementById('sortBtn').addEventListener('click', () => {
    feed.sortByDate();
    currentFilteredNews = null;
    refreshDisplay();
});


document.getElementById('searchBtn').addEventListener('click', () => {
    const searchTag = document.getElementById('searchTagInput').value.trim();
    if (!searchTag) {
        alert('Введите тег для поиска');
        return;
    }
    currentFilteredNews = feed.searchByTag(searchTag);
    refreshDisplay();
});


document.getElementById('resetBtn').addEventListener('click', () => {
    currentFilteredNews = null;
    document.getElementById('searchTagInput').value = '';
    refreshDisplay();
});

refreshDisplay();