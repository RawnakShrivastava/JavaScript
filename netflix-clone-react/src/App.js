import './App.css';
import Row from "./Row";
import requests from './Requests';
import Banner from './Banner';
import Nav from './Nav';


function App() {
  return (
    <div className="App">
      <Nav />
      <Banner fetchUrl={requests.fetchTrending}/>
      <Row 
        title = "Trending Now" 
        fetchUrl={requests.fetchTrending} 
        isLargeRow={true} 
      />
      <Row 
      title = "Top Rated"
      fetchUrl = {requests.fetchTopRated}
      isLargeRow={true} 
      />
      <Row 
      title = "Action Movies"
      fetchUrl = {requests.fetchActionMovies}
      isLargeRow={true} 
      />
      <Row 
      title = "Comedy Movies"
      fetchUrl = {requests.fetchComedyMovies}
      isLargeRow={true} 
      />
      <Row 
      title = "Horror Movies"
      fetchUrl = {requests.fetchHorrorMovies}
      isLargeRow={true} 
      />
      <Row 
      title = "Romance Movies"
      fetchUrl = {requests.fetchRomanceMovies}
      isLargeRow={true} 
      />
      <Row 
      title = "Documentaries"
      fetchUrl = {requests.fetchDocumentarties}
      isLargeRow={true} 
      />
        
    </div>
  );
}

export default App;
