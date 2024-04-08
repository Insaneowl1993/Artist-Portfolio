import PortfolioItem from './portfolio-item'

const artist = {
  name: 'Da Vinci',
  portfolio: [
    {
      title: 'portrait',
      url: 'https://hips.hearstapps.com/hmg-prod/images/portrait-of-leonardo-da-vinci-1452-1519-getty.jpg',
    },
    {
      url: 'https://media.cnn.com/api/v1/images/stellar/prod/140204170128-mona-lisa.jpg?q=w_2000,h_3000,x_0,y_0,c_fill',
      title: 'The Mona Lisa, 1503',
    },
  ],
}

// ... [rest of the ArtistModel and ArtistView code]
class ArtistModel {
  // Initially has no artist data
  private data: any = null;

  setData(artistData?: any) 
  {
    this.data = artistData
  }

  getData() {
    return this.data
  }
}

// Define the View for the artist's portfolio
class ArtistView {
    private container: HTMLElement | null;
  
    constructor(containerId: string) {
      // Attempt to grab the container element
      this.container = document.getElementById(containerId);
    };

  render(artistData: any) {
    // Use custom 'portfolio-item' elements instead of template
    if (this.container) {
      const artistName = document.getElementById(
        'artist-name'
      ) as HTMLElement | null

      if(artistName && artistData && artistData.name) {
        artistName.innerText = artistData.name
      }

      this.container.innerHTML = ''
      artistData?.portfolio.forEach((item) =>{
      const portfolioItem = document.createElement(
        'portfolio-item'
      ) as PortfolioItem

      portfolioItem.setData({
        title: item.title,
        url: item.url,
      })
      this.container?.appendChild(portfolioItem)
      });
      }else {
        console.error('container with id not found')
    }
  }; 
}
  
class ArtistController {
  private model: ArtistModel;
  private view: ArtistView;

  constructor(model: ArtistModel, view: ArtistView) {
    this.model = model;
    this.view = view;
  }

  //implement a method to initialize the controller
  init() {
    this.updateView()
  }

  updateView() {
    const artistData = this.model.getData()
    this.view.render(artistData)
  }
}

// create instances of model view and controller
const artistModel= new ArtistModel()
const artistView = new ArtistView('portfolio-container')
const artistController = new ArtistController(artistModel, artistView)

  // ... [rest of the ArtistController code]
  // Initialize the controller
  artistController.init();

  //Stimulate setting data and updating the view
  artistModel.setData(null) //set data to null (initial state)
  artistController.updateView() // should render an empty portfolio initially

  artistModel.setData(artist)
  artistController.updateView()// should render as an empty portfolio initially
