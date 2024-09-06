import Navbar from "./Component/Navbar.Jsx"
import Newsboard from "./Component/Newsboard.jsx"
import NewsItem from "./Component/NewsItem.jsx"


const App = () => {
  // const [category, setCategory] = useState("general") 
  return (
    <div><Navbar />
    <Newsboard />
    <NewsItem/>
    </div> 
  )
}

export default App