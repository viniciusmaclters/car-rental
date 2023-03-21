import { Header } from "./components/Header";
import { MainContent } from "./components/MainContent";

import '../styles/themes/default.css' 
import { BookCar } from "./components/BookCar";

export function App() {

  return (
    <div className="App">
      <Header />
      <MainContent />
      <BookCar />
    </div>
  )
}

