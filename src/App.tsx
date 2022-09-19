import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Layout } from "./components/layout"
import { Home } from "./pages/home"
import { Releases } from "./pages/releases"
import { ShowInfo } from "./pages/showInfo"
import { TopPopular } from "./pages/topPopular"
import { TopRated } from "./pages/topRated"


function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path="/top-series" element={<Layout/>}>
                <Route index element={<Home />}/>
                <Route path="top-popular" element={<TopPopular/>} />
                <Route path="top-rated" element={<TopRated/>} />
                <Route path="releases" element={<Releases/>} />
                <Route path=":slug" element={<ShowInfo/>} />
            </Route>
        </Routes> 
      </BrowserRouter>
    </div>
)
}

export default App
