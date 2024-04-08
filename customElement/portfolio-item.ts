export default class PortfolioItem extends HTMLElement {
  private data: {title: string; url: string} | null = null
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
    }
  
    connectedCallback() {
      this.render();
    }
  
    render() {
      // TODO: Implement the render function that populates the shadow DOM
      // with the portfolio item's structure and data
      if (!this.shadowRoot || !this.data) return

      const{ title, url } = this.data

      this.shadowRoot.innerHTML = `
        <style>
          /* Scoped styles for portfolio item */
          .portfolio-item {
            border: 1px solid #ddd;
            padding: 10px;
            margin-bottom: 10px;
            border-radius: 5px;
            box-shadow: 2px 2px 5px rgba(0,0,0,0.2);
          }
  
          .portfolio-image {
            width: 100%;
            height: auto;
          }
  
          .portfolio-title {
            font-size: 1.2em;
            margin-top: 5px;
          }
        </style>
        <div class="portfolio-item">
          <img class="portfolio-image" src="${url}" alt="Artwork">
          <h2 class="portfolio-title">${title}</h2>
        </div>
      `
    }
  
    setData(data) {
      this.data = data
      this.render()
    }

    getData() {
      return this.data || {title: 'Title Placeholder', url:''}
    }
  }
  
  // This line will initially throw an error because the custom element is not fully implemented
  window.customElements.define('portfolio-item', PortfolioItem);
  
  // check if 'portfolio-item' is defined and if it renders correctly
  // initially the render function is incomplete
  