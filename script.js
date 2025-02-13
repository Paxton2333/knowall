import { KeywordInfoManager } from './keyword-info.js';

class KnowAllSearch {
  constructor() {
    this.searchBar = document.getElementById('searchBar');
    this.searchButton = document.getElementById('searchButton');
    this.suggestionsContainer = document.getElementById('suggestions');
    this.p4xtonButton = document.getElementById('p4xton-button');
    this.confirmationModal = document.getElementById('confirmation-modal');
    this.yesButton = document.getElementById('yes-button');
    this.noButton = document.getElementById('no-button');
    
    // Define a set of known keywords with both original and capitalized versions
    this.keywords = [
      { original: 'Karos Meyster', aliases: ['Karos', 'Meyster'] },
      { original: 'Kames', aliases: ['Kames'] },
      { original: 'Litem', aliases: ['Litem'] },
      { original: 'The Lover', aliases: ['The Lover', '「The Lover」'] },
      { original: 'Geneti Phulst', aliases: ['G', 'Geneti', 'Phulst'] },
      { original: 'Paxton', aliases: ['Paxton'] },
      { original: 'Kasi', aliases: ['Kasi'] },
      { original: 'Dak', aliases: ['Dak'] },
      { original: 'Shadow', aliases: ['Shadow'] },
      { original: 'Cosmosphere Taskforce', aliases: ['CT', 'Cosmosphere', 'Taskforce'] },
      { original: 'Universe Empire', aliases: ['UE', 'Universe', 'Empire'] },
      { original: 'Universal Club', aliases: ['UC', 'Universal', 'Club'] },
      { original: 'G Foundation', aliases: ['G', 'Foundation'] },
      { original: 'Allocation Task Force', aliases: ['ATF', 'Allocation', 'Task', 'Force'] },
      { original: 'DAKASI', aliases: ['DAKASI'] },
      { original: 'Universal Assassin Organisation', aliases: ['UAO', 'Universal', 'Assassin', 'Organisation'] }
    ];

    this.keywordInfoManager = new KeywordInfoManager();
    
    this.suggestionsContainer.addEventListener('click', (event) => {
      const suggestionItem = event.target.closest('.suggestion-item');
      if (suggestionItem) {
        const keyword = suggestionItem.textContent.trim();
        this.keywordInfoManager.showKeywordInfo(keyword);
      }
    });

    this.initEventListeners();
  }

  initEventListeners() {
    this.searchButton.addEventListener('click', () => this.performSearch());
    this.searchBar.addEventListener('keypress', (event) => {
      if (event.key === 'Enter') {
        this.performSearch();
      }
    });

    this.searchBar.addEventListener('input', () => this.updateSuggestions());
    this.p4xtonButton.addEventListener('click', () => this.showConfirmationModal());
    this.yesButton.addEventListener('click', () => this.goToPaxtonSeries());
    this.noButton.addEventListener('click', () => this.hideConfirmationModal());
  }

  performSearch() {
    const query = this.searchBar.value.trim();
    if (query) {
      console.log(`Searching for: ${query}`);
      // Future: Implement actual search functionality
    }
  }

  updateSuggestions() {
    const query = this.searchBar.value.trim();
    if (query.length > 1) {
      const suggestions = this.generateSuggestions(query);
      this.renderSuggestions(suggestions);
    } else {
      this.clearSuggestions();
    }
  }

  generateSuggestions(query) {
    const normalizedQuery = query.toLowerCase();
    const matchingSuggestions = this.keywords.filter(entry => 
      entry.original.toLowerCase().includes(normalizedQuery) ||
      entry.aliases.some(alias => alias.toLowerCase().includes(normalizedQuery))
    );

    // Transform suggestions to capitalize first letters
    return matchingSuggestions.map(entry => 
      this.capitalizeWords(entry.original)
    );
  }

  capitalizeWords(str) {
    return str.split(' ').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
  }

  renderSuggestions(suggestions) {
    // Limit suggestions to first 5
    const limitedSuggestions = suggestions.slice(0, 5);
    
    this.suggestionsContainer.innerHTML = limitedSuggestions.map(
      suggestion => `<div class="suggestion-item">${suggestion}</div>`
    ).join('');
    
    this.suggestionsContainer.classList.add('active');
  }

  clearSuggestions() {
    this.suggestionsContainer.innerHTML = '';
    this.suggestionsContainer.classList.remove('active');
  }

  showConfirmationModal() {
    this.confirmationModal.classList.add('show');
  }

  hideConfirmationModal() {
    this.confirmationModal.classList.remove('show');
  }

  goToPaxtonSeries() {
    window.location.href = 'https://paxton2333.github.io/ttou/';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new KnowAllSearch();
});