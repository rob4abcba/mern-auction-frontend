import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AuctionItem from "./components/AuctionItem";

function App() {
  useEffect(() => {
    console.log("in useEffect");
    const fetchData = async () => {
      let resp = await fetch("/houses.json");
      let data = await resp.json();
      // console.log(' date from json - ');
      console.log(data);
      setHousesData(data);
      // console.log('data from state');
      console.log(housesData);
      //write the data to the state so we can use it anywhere in the component
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>mern-auction-frontend App.js</h1>
      <Header />
      <AuctionItem />
      <Footer />
    </div>
  );
}

export default App;
