import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Firestore from '../../firestore.config'
import { useFetch } from '../../hooks/useFetch'

const Recipe = () => {
  const router = useRouter()
  const { id } = router.query

  const[data,setData] = useState(null);
  const[isPending,setIsPending] = useState(false);
  const[error,setError] = useState(false);
  useEffect(() => {
    setIsPending(true);
    Firestore.collection('recipes').doc(id).get().then(doc => {
      if(doc.exists){
        setIsPending(false);
        setData(doc.data())
      }
      else{
        
        setIsPending(false)
        setError('Recipe Doesnt Exist')
      }
    })
  },[])


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