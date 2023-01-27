import { v4 as uuidv4 } from 'uuid';
import ProjectImg from '../images/projectImg.png';
import UTrackerImg from '../images/utracker.jpg';
import GreenCtgImg from '../images/greenctg.jpg';
import CoinTrackerImg from '../images/cointracker.jpg';
import CavinImg from '../images/cavinimg.jpg';
import Epicor from '../images/epicor.png';

const projects = [
  {
    id: uuidv4(),
    name: 'Urban CV',
    desc:
      'Web application for applicants that contains a summary of applicant data that has previously applied on the web.',
    img: UTrackerImg,
  },
  {
    id: uuidv4(),
    name: 'Extended Maintenance',
    desc:
      'Mobile application for machine repair where the user will record the machine to be repaired, and there is an approval process for the repair of the machine.',
    img: GreenCtgImg,
  },
  {
    id: uuidv4(),
    name: 'eMate',
    desc:
      'Time entry management mobile application, where users can input office task activities.',
    img: CoinTrackerImg,
  },
  {
    id: uuidv4(),
    name: 'UKK - Kontrak',
    desc:
      'Approval management web application for purchasing goods/materials with special conditions.',
    img: CavinImg,
  },
  {
    id: uuidv4(),
    name: 'RSIS',
    desc:
      'RSIS is a web application for HRD which includes functions to manage data related to recruitment systems such as job vacancies, job criteria, import export data, etc.',
    img: ProjectImg,
  },
  {
    id: uuidv4(),
    name: 'EPICOR',
    desc: 'Developing and costumize Epicor ERP function.',
    img: Epicor,
  },
];

export default projects;
