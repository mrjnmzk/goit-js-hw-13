import axios from 'axios';

export default {
    page: 1,
    searchQuery: '',
    apiKey: '12458134-20b5567be8a652ea1761bced6',
    async getImages() {
        const result = await axios.get(
            `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.query}&page=${this.page}&per_page=12&key=${this.apiKey}`,
        );
        this.page += 1;
        return result.data.hits;
    },
    resetPage() {
        this.page = 1;
    },
    incrPage() {
        this.page += 1;
    },
    get query() {
        return this.searchQuery;
    },
    set query(newQuery) {
        this.searchQuery = newQuery;
    },
};