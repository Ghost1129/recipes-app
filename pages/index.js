import RecipeList from "../components/RecipeList"
import { useFetch } from "../hooks/useFetch"


export default function Home() {
  const {data, isPending, error} = useFetch('https://my-json-server.typicode.com/ghost1129/json/recipes')
  console.log(data)
  return (
    <div className="max-w-7xl mx-auto my-14">
      {error && <p>{error}</p>}
      {isPending && <p>Loading...</p>}
      {data && <RecipeList recipes={data} />}
      
    </div>
  )
}
