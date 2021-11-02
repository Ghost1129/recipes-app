import { useEffect, useState } from "react";
import RecipeList from "../components/RecipeList"
import Firestore from "../firestore.config";

import { useTheme } from "../hooks/useTheme"



export default function Home() {
  const[data,setData] = useState(null);
  const[isPending,setIsPending] = useState(false);
  const[error,setError] = useState(false);

  useEffect(() => {
    setIsPending(true);
    const unsub=Firestore.collection('recipes').onSnapshot(snapshot => {
      if(snapshot.empty) {
        setError('No Recipes To Load');
        setIsPending(false);
      }else{
        const recipes = [];
        snapshot.docs.forEach(doc => {
          recipes.push({id:doc.id,...doc.data()});
        })
        setData(recipes);
        setIsPending(false);
      }
      },(err)=>{
        setError(err.message);
        setIsPending(false);
    })
    return () => unsub();
  },[])
  
  const {mode} =useTheme()
  return (
    <div className="max-w-screen mx-auto h-screen" style={mode==='dark'?{}:{background:'black'}}>
      {error && <p>{error}</p>}
      {isPending && <p>Loading...</p>}
      {data && <RecipeList recipes={data} />}
      
    </div>
  )
}
