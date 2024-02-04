
import './App.css';
import {orginal,action,comedyMovie,HorrorMovie} from './urls'
import NavBar from './Components/NavBar/NavBar';
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';

import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
     <NavBar/>
     <Banner/>
     <RowPost url={orginal} title='Netflix Orginals'/>
     <RowPost url={action} title='Action' isSmall={true}/>
     <RowPost url={comedyMovie} title='Comedy Movie' isSmall={true}/>
     <RowPost url={HorrorMovie} title='Horror Movie' isSmall={true}/>
     <Footer></Footer>
    </div>
    
  );
}

export default App;
