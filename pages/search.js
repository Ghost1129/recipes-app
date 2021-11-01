import { useRouter } from 'next/router'
import RecipeList from '../components/RecipeList'
import { useFetch } from '../hooks/useFetch'
import { useTheme } from '../hooks/useTheme'

function Search() {
    const router = useRouter()
    const {mode} = useTheme()
    
    const url = 'https://my-json-server.typicode.com/ghost1129/json/recipes?q=' + router.query.q
    const {error, isPending , data} = useFetch(url)
    return (
        <div style={mode==='dark'?{}:{background:'black'}}>
            <h2 className="page-title text-2xl pt-5" style={mode==='dark'?{}:{color:'white'}}>Recipes Including {router.query.q}</h2>
            {error && <p>{error}</p>}
            {isPending && <p>Loading...</p>}
            {data && <RecipeList recipes={data}/>}
        </div>
    )
}

export default Search
