/** @format */

function addCard() {
  const template = (
    document.getElementById('portfolio-card-template') as HTMLTemplateElement
  )?.content.cloneNode(true) as Element | null;

  const cardTitle = template?.querySelector('.card-title');
  if (cardTitle) {
    cardTitle.innerHTML = 'My Card Title';
  }
  const cardList = template?.querySelector('.card-title');
  if (cardTitle) {
    cardTitle.innerHTML = 'The Da Vinci code';
  }
  // template?.querySelector('.card-title')?.innerText = 'My Card Title';
  // template.querySelector('.card-text').innerText = 'lorem ipsum ble bla';

  if (template) {
    document.querySelector('#card-list')?.appendChild(template);
  }
}

const artist = {
  name: 'Leonardo da Vinci',
  birthYear: 1853,
  deathYear: 1890,
  nationality: 'Dutch',
  portfolio: [
      {
        url:'https://hips.hearstapps.com/hmg-prod/images/portrait-of-leonardo-da-vinci-1452-1519-getty.jpg',
        title: 'Leonardo Da Vinci',
        text: 'Leonardo di ser Piero da Vinci was a self-educated Italian polymath of the High Renaissance who was active as a painter, draughtsman, engineer, scientist, theorist, sculptor, and architect',
      },
    {
      url: 'https://media.cnn.com/api/v1/images/stellar/prod/140204170128-mona-lisa.jpg?q=w_2000,h_3000,x_0,y_0,c_fill',
      title: 'The Mona Lisa, 1503',
      text:'The Mona Lisa is a half-length portrait painting considered an archetypal masterpiece of the Italian Renaissance, it has been described as "the best known, the most visited, the most written about, the most sung about, and the most parodied work of art in the world"'
    },
    {
      url: 'https://arthive.net/res/media/img/orig/article/8ff/7567073@2x.jpg',
      title: 'The Last Supper, 1495–1498',
      text:'The painting represents the scene of the Last Supper of Jesus with the Twelve Apostles, as it is told in the Gospel of John, specifically the moment after Jesus announces that one of his apostles will betray him.'
    },
  ],
};




// Define the Model for the artist's data
class ArtistModel {
  // Initially has no artist data
  private data = null;
  name: ArtistModel | null | undefined | any;
  portfolio: ArtistModel | null | undefined | any;

  // TODO: Implement a method to set the artist's data
  setData(artistData?: any) {
    this.data = artistData;
    // This method should update the artist's data
  }

  // TODO: Implement a method to get the artist's data
  getData() {
    return this.data;
    // This method should return the artist's data
  }
}

// Define the View for the artist's portfolio
class ArtistView {
  private template: HTMLTemplateElement;

  constructor(templateId: string) {
    // Attempt to grab the template element
    this.template = document.getElementById(templateId) as HTMLTemplateElement;
  }

  // TODO: Implement a method to render the artist's data
  render(artistData?: ArtistModel) {
    // This method should render the artist's portfolio cards
    const portfolioContainer = document.getElementById('portfolio-container');
    const artistName = document.getElementById(
      'artist-name'
    ) as HTMLElement | null;

    if (artistName && artistData && artistData.name) {
      artistName.innerText = artistData.name;
    }

    if (portfolioContainer && artistData && artistData.portfolio) {
      portfolioContainer.innerHTML = '';

      artistData.portfolio.forEach((item) => {
        const clonedNode = this.template.content.cloneNode(true) as HTMLElement;

        const titleElement = clonedNode.querySelector(
          '.card-title'
        ) as HTMLElement | null;

        if (titleElement) {
          titleElement.innerText = item.title;
        }
        
        const textElement = clonedNode.querySelector(
          '.card-text'
        ) as HTMLElement | null;

        if (textElement) {
          textElement.innerText = item.text;
        }

        // Set the URL for the image
        const imgElement = clonedNode.querySelector(
          '.card-img'
        ) as HTMLElement | null;
        if (imgElement instanceof HTMLImageElement) {
          imgElement.src = item.url;
          imgElement.alt = item.title;
        }

        portfolioContainer.appendChild(clonedNode);
      });
    }
  }
}

// Define the Controller to glue the Model and View together
class ArtistController {
  private model: ArtistModel;
  private view: ArtistView | any;

  constructor(model: ArtistModel, view: ArtistView) {
    this.model = model;
    this.view = view;
  }

  // TODO: Implement a method to initialize the controller
  init() {
    this.updateView();
    // This method should set up event listeners and initial data
  }

  // TODO: Implement a method to update the view when data changes
  updateView() {
    // This method should trigger a re-render of the view with the current data
    const artistData = this.model.getData();
    this.view.render(artistData);
  }
}

// Check the interaction between model, view, and controller
// Initially, functionality is not fully implemented
const artistModel = new ArtistModel();
const artistView = new ArtistView('portfolio-card-template');
const artistController = new ArtistController(artistModel, artistView);

artistController.init();

artistModel.setData(null);
artistController.updateView();

artistModel.setData(artist);
artistController.updateView();


