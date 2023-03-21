import { Header } from "./components/Header";
import { MainContent } from "./components/MainContent";

import '../styles/themes/default.css' 
import { BookCar } from "./components/BookCar";
import { Details } from "./components/Details";
import { RentalFleet } from "./components/RentalFleet";

export function App() {

  return (
    <div className="App">
      <Header />
      <MainContent />
      <BookCar />
      <Details />
      <RentalFleet />
    </div>
  )
}

