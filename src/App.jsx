import { Header } from "./components/Header";
import { MainContent } from "./components/MainContent";

import '../styles/themes/default.css' 

export function App() {

  return (
    <div className="App">
      <Header />
      <MainContent />
    </div>
  )
}

