import './App.css';
import Navbar from '../src/separates/Navbar';
import Card from './separates/Card';
import data from './data';



function App() {
  const cards = data.map(item=>{
    
    return(
      <Card
        title={item.title}
        location = {item.location}
        googleMapUrl ={item.googleMapUrl}
        startDate = {item.startDate}
        endDate = {item.endDate}
        description ={item.description}
        imageUrl={item.imageUrl}
        
      />
    )
  })
  return (
    <div className="App">
      <Navbar/>
      {cards}
     
      
    </div>
  );
}

export default App;
