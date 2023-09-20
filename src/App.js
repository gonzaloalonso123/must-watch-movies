import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { MovieList } from "./pages/MovieList";
import { Header } from "./components/Header";

function App() {
  return (
    <div className="min-h-screen w-screen">
      <Header />
      <MovieList />
    </div>
  );
}

export default App;
