import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Firestore from '../../firestore.config'

import { PencilAltIcon } from '@heroicons/react/outline'
import { useTheme } from '../../hooks/useTheme'


const Recipe = () => {
  const router = useRouter()
  const { id } = router.query

  const[data,setData] = useState(null);
  const[isPending,setIsPending] = useState(false);
  const[error,setError] = useState(false);
  useEffect(() => {
    setIsPending(true);
    const unsub=Firestore.collection('recipes').doc(id).onSnapshot(doc => {
      if(doc.exists){
        setIsPending(false);
        setData(doc.data())
      }
      else{
        
        setIsPending(false)
        setError('Recipe Doesnt Exist')
      }
    })
    return () => unsub();
  },[])
  const {mode}=useTheme()

  // const handleEdit = () => {
  //   Firestore.collection('recipes').doc(id).update({

  //   })
  // }

  return (
    <div className="bg-gray-100 h-screen max-w-screen p-10" style={mode==='dark'?{}:{background:'black'}}>
      <div className="max-w-6xl pt-10 mx-auto text-center bg-gray-100 p-10 box-border rounded-md">
          {error && <p>{error}</p>}
          {isPending && <p>Loading...</p>}
          {data && (
              <>
              <h2 className="page-title text-2xl font-bold capitalize">{data.title}</h2>
              <p>Takes {data.cookingTime} to cook.</p>
              <ul className="flex p-4 justify-center mt-0">
                  {data.ingredients.map(ingredient => <li key={ingredient} className="mr-2 text-gray-400 list-none p-2">{ingredient}</li>)}
              </ul>
                <p>{data.method}</p>
                {/* <PencilAltIcon className="text-gray-400 h-5 w-5" onClick={handleEdit}/> */}
              </>
          )}
      </div>
      </div>
  )
}

export default Recipe