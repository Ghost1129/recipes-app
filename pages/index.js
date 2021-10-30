import RecipeList from "../components/RecipeList"
import { useFetch } from "../hooks/useFetch"


export default function Home() {
  const {data, isPending, error} = useFetch('http://localhost:3000/recipes')
  return (
    <div className="max-w-7xl mx-auto my-14">
      {error && <p>{error}</p>}
      {isPending && <p>Loading...</p>}
      {data && <RecipeList recipes={data} />}
      
    </div>
  )
}
