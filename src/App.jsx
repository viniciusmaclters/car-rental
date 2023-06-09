import { Header } from "./components/Header";
import { MainContent } from "./components/MainContent";
import { BookCar } from "./components/BookCar";
import { Details } from "./components/Details";
import { RentalFleet } from "./components/RentalFleet";
import { CrossLine } from "./components/CrossLine";
import { Testimonial } from "./components/Testimonial";
import { Questions } from "./components/Questions";
import { Footer } from "./components/Footer";

export function App() {
  return (
    <div className="App">
      <Header />
      <MainContent />
      <BookCar />
      <Details />
      <RentalFleet />
      <CrossLine />
      <Testimonial />
      <Questions />
      <Footer />
    </div>
  )
}

