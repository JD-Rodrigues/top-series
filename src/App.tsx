import { useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Layout } from "./components/layout"
import { AiringToday } from "./pages/home"
import { Releases } from "./pages/releases"
import { Search } from "./pages/search"
import { ShowInfo } from "./pages/showInfo"
import { TopPopular } from "./pages/topPopular"
import { TopRated } from "./pages/topRated"


function App() {
  const [search, setSearch] = useState("")
  const [showId, setShowId] = useState(0)
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout setSearch={setSearch} />}>
                <Route index element={<AiringToday setShowId={setShowId} />}/>
                <Route path="top-popular" element={<TopPopular setShowId={setShowId} />} />
                <Route path="top-rated" element={<TopRated setShowId={setShowId} />} />
                <Route path="releases" element={<Releases setShowId={setShowId} />} />
                <Route path="show-info" element={<ShowInfo showId = {showId}/>} />
                <Route path="search" element={<Search setShowId={setShowId} search={search} />} />
            </Route>
        </Routes> 
      </BrowserRouter>
    </div>
)
}

export default App
