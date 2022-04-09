import { v4 as uuidv4 } from 'uuid';
// import ProjectImg from '../images/projectImg.png';
import PortfolioImg from '../images/portfolio.jpeg';
import GreenCtgImg from '../images/greenctg.jpg';
// import CoinTrackerImg from '../images/cointracker.jpg';
// import CavinImg from '../images/cavinimg.jpg';

const projects = [
  {
    id: uuidv4(),
    name: 'React Portfolio',
    desc:
      'A personal portfolio application. Includes information about me',
    img: PortfolioImg,
  },
  {
    id: uuidv4(),
    name: 'Simons Game ',
    desc:
      'A simple but fun game, made using JS. It is played by remembering sequence',
    img: GreenCtgImg,
  },
  // {
  //   id: uuidv4(),
  //   name: 'Coin Tracker',
  //   desc:
  //     'Using this app you can track any e coin. Also you will get a good advise about investment form the professional',
  //   img: CoinTrackerImg,
  // },
  // {
  //   id: uuidv4(),
  //   name: "Cavin's Portfolio",
  //   desc:
  //     'A portfolio for Cavin jr. A artist from New york city. The portfolio is made using ReactJs and GatsbyJs.',
  //   img: CavinImg,
  // },
  // {
  //   id: uuidv4(),
  //   name: 'Tracking Soft',
  //   desc:
  //     'A tracking website that will show the performance of the website. Also you will get some useful advice to improve the performance.',
  //   img: ProjectImg,
  // },
];

export default projects;
