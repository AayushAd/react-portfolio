import { v4 as uuidv4 } from 'uuid';
import PortfolioImg from '../images/portfolio.jpeg';
import SimonImg from '../images/simons_game.jpg';


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
    img: SimonImg,
  },

];

export default projects;
