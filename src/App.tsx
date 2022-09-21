import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom"
import { Layout } from "./components/layout"
import { AiringToday } from "./pages/home"
import { Releases } from "./pages/releases"
import { SearchResults } from "./pages/searchResults"
import { ShowInfo } from "./pages/showInfo"
import { TopPopular } from "./pages/topPopular"
import { TopRated } from "./pages/topRated"


function App() {
  return (
    <div className="App">
      {/* <BrowserRouter> */}
      <HashRouter>
        <Routes>
            <Route path="/top-series" element={<Layout />}>
                <Route index element={<AiringToday />}/>
                <Route path="top-popular" element={<TopPopular/>} />
                <Route path="top-rated" element={<TopRated/>} />
                <Route path="releases" element={<Releases/>} />
                <Route path="shows/:title" element={<ShowInfo/>} />
                <Route path="search/:name" element={<SearchResults/>} />
            </Route>
        </Routes> 
      </HashRouter>
      {/* </BrowserRouter> */}
    </div>
)
}

export default App
