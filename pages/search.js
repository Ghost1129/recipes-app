import { useRouter } from 'next/router'
import RecipeList from '../components/RecipeList'
import { useFetch } from '../hooks/useFetch'

function search() {
    const router = useRouter()
    
    const url = 'https://ghost1129.github.io/json-server/db.json?q=' + router.query.q
    const {error, isPending , data} = useFetch(url)
    return (
        <div>
            <h2 className="page-title text-2xl pt-5">Recipes Including {router.query.q}</h2>
            {error && <p>{error}</p>}
            {isPending && <p>Loading...</p>}
            {data && <RecipeList recipes={data}/>}
        </div>
    )
}

export default search
