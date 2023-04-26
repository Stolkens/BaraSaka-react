import Container from "./components/Container/Container";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Onas from "./components/Onas/Onas";
import Oferty from "./components/Oferty/Oferty";
import PropertyDetails from "./components/PropertyDetails/PropertyDetails";




function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Container>
      <Routes>
          <Route path="/" element={<Onas />} />
          <Route path="/oferty" element={<Oferty />} />
          {/* <Route path="/zgloszenia" element={<Zgloszenia />} />
          <Route path="/kredyty" element={<Kredyty />} /> 
          <Route path="/cennik" element={<Cennik />} />
          <Route path="*" element={<NotFound />} /> */}
          <Route path="/nieruchomosc/:id" element={< PropertyDetails/>} />
        </Routes>        
      </Container>
    </main>
    
      
     
    
  
  );
}

export default App;
