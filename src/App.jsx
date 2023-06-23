import Header from "./component/header/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Movies from "./pages/Movies";
import Footer from "./component/footer/Footer";
// import SearchBar from "./SearchBar";
// import SearchResults from "./SearchResults";
// import Herosection from "./pages/Herosection";
const App = () => {
    return (
        <>
            {/* <SearchBar setresult={setresult} />
            <SearchResults result={result} /> */}
            <Header />
            <Routes>
                <Route exact path="/" Component={Home} />
                <Route path="/about" Component={About} />
                <Route path="/contact" Component={Contact} />
                <Route path="/services" Component={Services} />
                <Route path="/movies" Component={Movies} />
            </Routes>
            <Footer />
        </>
    );
};

export default App;
