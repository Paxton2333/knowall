export class KeywordInfoManager {
  constructor() {
    this.keywordInfoModal = document.getElementById('keyword-info-modal');
    this.keywordInfoContainer = document.getElementById('keyword-info-container');
    this.closeKeywordInfoButton = document.getElementById('close-keyword-info');

    this.keywordData = {
      'Paxton': {
        title: 'Paxton',
        description: `
          <div class="keyword-details">
            <p><strong>Name:</strong> Paxton</p>
            <p><strong>Age:</strong> 10 (or even more, is unknown)</p>
            <p><strong>Gender:</strong> Male</p>
            <p><strong>Race:</strong> Human (or no)</p>
            <p class="description">Paxton serves as the supreme leader of the Cosmosphere Taskforce (CT), one of the three dominant forces shaping the balance of power in the universe. As the highest-ranking authority within CT, he possesses unparalleled command over its vast operations, strategic decisions, and military forces. His influence extends far beyond the organization itself, granting him significant control over major cosmic affairs, interstellar politics, and the overall stability of the universe. With his leadership, CT remains a formidable force, capable of shaping the future of civilizations across countless star systems.</p>
            <div class="keyword-tags">
              <span class="tag" data-keyword="Cosmosphere Taskforce">CT</span>
              <span class="tag" data-keyword="The Underworld">The Underworld</span>
              <span class="tag" data-keyword="Nathan">Nathan</span>
            </div>
          </div>
        `
      },
      'Karos Meyster': {
        title: 'Karos Meyster',
        description: 'Karos Meyster is a complex character with a rich background. Their actions and motivations play a significant role in the overarching plot of the story.'
      },
      'Kames': {
        title: 'Kames',
        description: 'Kames is an intriguing character whose role and significance are gradually revealed throughout the narrative.'
      },
      'Litem': {
        title: 'Litem',
        description: 'Litem is a notable character with unique characteristics that contribute to the depth of the story.'
      },
      'The Lover': {
        title: 'The Lover',
        description: 'A mysterious and enigmatic character whose presence adds complexity to the storyline.'
      },
      'Geneti Phulst': {
        title: 'Geneti Phulst',
        description: 'Geneti Phulst is a character with significant importance in the narrative, bringing unique perspectives and actions to the story.'
      },
      'Kasi': {
        title: 'Kasi',
        description: 'Kasi is a character whose role and impact are crucial to the unfolding events.'
      },
      'Dak': {
        title: 'Dak',
        description: 'Dak represents an important element in the story, with actions and motivations that drive the plot forward.'
      },
      'Shadow': {
        title: 'Shadow',
        description: 'A mysterious character whose presence adds intrigue and depth to the narrative.'
      },
      'Cosmosphere Taskforce': {
        title: 'Cosmosphere Taskforce (CT)',
        description: 'The Cosmosphere Taskforce is a significant organization with a complex role in the storyline.'
      },
      'Universe Empire': {
        title: 'Universe Empire (UE)',
        description: 'The Universe Empire is a powerful entity that plays a crucial role in the larger narrative.'
      },
      'Universal Club': {
        title: 'Universal Club (UC)',
        description: 'The Universal Club is an organization with important implications in the story.'
      },
      'G Foundation': {
        title: 'G Foundation',
        description: 'The G Foundation is a key organization with significant influence in the narrative.'
      },
      'Allocation Task Force': {
        title: 'Allocation Task Force (ATF)',
        description: 'The Allocation Task Force is an important group that contributes to the complexity of the story.'
      },
      'DAKASI': {
        title: 'DAKASI',
        description: 'DAKASI is a significant element in the narrative, with far-reaching implications.'
      },
      'Universal Assassin Organisation': {
        title: 'Universal Assassin Organisation (UAO)',
        description: 'The Universal Assassin Organisation is a powerful and mysterious group that plays a critical role in the story.'
      },
      'CT': {
        title: 'Cosmosphere Taskforce (CT)',
        description: 'The Cosmosphere Taskforce is a powerful organization led by Paxton, playing a crucial role in maintaining universal balance and strategic operations.'
      },
      'The Underworld': {
        title: 'The Underworld',
        description: 'A mysterious realm or organization with significant implications in the broader narrative, connected to various key characters and events.'
      },
      'Nathan': {
        title: 'Nathan',
        description: 'Nathan is a character with an intriguing background, whose role and significance are gradually unfolding in the narrative.'
      },
      'Red Dust': {
        title: 'Red Dust',
        description: 'Red Dust represents a significant element in the story, potentially a location, phenomenon, or group with important narrative implications.'
      },
      'The LordGods': {
        title: 'The LordGods',
        description: 'The LordGods appear to be a powerful entity or group that plays a crucial role in the overarching cosmic narrative.'
      },
      '333': {
        title: '333',
        description: 'A mysterious number or concept that holds significance within the story\'s universe, potentially representing a key event, group, or symbolic meaning.'
      },
      'Core of Universe': {
        title: 'Core of Universe (CoU)',
        description: 'The Core of Universe represents a fundamental concept or location that is central to the cosmic narrative, potentially holding immense strategic or metaphysical importance.'
      },
      'CoU': {
        title: 'Core of Universe (CoU)',
        description: 'The Core of Universe represents a fundamental concept or location that is central to the cosmic narrative, potentially holding immense strategic or metaphysical importance.'
      },
      'Inuza': {
        title: 'Inuza',
        description: 'Inuza is a character or entity with unique characteristics that contribute to the depth and complexity of the story.'
      },
      'Jokod': {
        title: 'Jokod',
        description: 'Jokod is an intriguing element in the narrative, whose significance adds layers to the unfolding plot.'
      },
      'Trasy': {
        title: 'Trasy',
        description: 'Trasy represents an important component of the story, bringing unique perspectives or actions to the narrative.'
      },
      'Sirys': {
        title: 'Sirys',
        description: 'Sirys is a character or concept that plays a meaningful role in the broader storyline.'
      },
      'The Holyght': {
        title: 'The Holyght',
        description: 'The Holyght appears to be a significant entity or concept with profound implications in the narrative.'
      }
    };

    this.initEventListeners();
  }

  initEventListeners() {
    this.closeKeywordInfoButton.addEventListener('click', () => this.hideKeywordInfo());
    this.keywordInfoModal.addEventListener('click', (event) => {
      if (event.target === this.keywordInfoModal) {
        this.hideKeywordInfo();
      }
    });
    this.keywordInfoContainer.addEventListener('click', (event) => {
      const tagElement = event.target.closest('.tag');
      if (tagElement) {
        const keyword = tagElement.getAttribute('data-keyword');
        this.showKeywordInfo(keyword);
      }
    });
  }

  showKeywordInfo(keyword) {
    const info = this.keywordData[keyword];
    if (info) {
      this.keywordInfoContainer.innerHTML = `
        <h2 class="keyword-info-title">${info.title}</h2>
        <p class="keyword-info-description">${info.description}</p>
      `;
      this.keywordInfoModal.classList.add('show');
    }
  }

  hideKeywordInfo() {
    this.keywordInfoModal.classList.remove('show');
  }
}