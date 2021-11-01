import RecipeList from "../components/RecipeList"
import { useFetch } from "../hooks/useFetch"
import { useTheme } from "../hooks/useTheme"



export default function Home() {
  const {data, isPending, error} = useFetch('https://my-json-server.typicode.com/ghost1129/json/recipes')
  const {mode} =useTheme()
  return (
    <div className="max-w-7xl mx-auto" style={mode==='dark'?{}:{background:'black'}}>
      {error && <p>{error}</p>}
      {isPending && <p>Loading...</p>}
      {data && <RecipeList recipes={data} />}
      
    </div>
  )
}
