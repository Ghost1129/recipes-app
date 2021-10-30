import { useRouter } from 'next/router'
import { useFetch } from '../../hooks/useFetch'

const Recipe = () => {
  const router = useRouter()
  const { id } = router.query

  const url = 'http://localhost:3000/recipes/' + id
  console.log(url)
  const {error, isPending , data} = useFetch(url)

  return (
      <div className="max-w-6xl my-10 mx-auto text-center bg-gray-100 p-10 box-border">
          {error && <p>{error}</p>}
          {isPending && <p>Loading...</p>}
          {data && (
              <>
              <h2 className="page-title text-2xl">{data.title}</h2>
              <p>Takes {data.cookingTime} to cook.</p>
              <ul className="flex p-4 justify-center mt-0">
                  {data.ingredients.map(ingredient => <li key={ingredient} className="mr-2 text-gray-400 list-none p-2">{ingredient}</li>)}
              </ul>
                <p>{data.method}</p>
              </>
          )}
      </div>
  )
}

export default Recipe