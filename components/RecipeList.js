import Link from 'next/link'
import { TrashIcon } from '@heroicons/react/outline'
import Firestore from '../firestore.config'


function RecipeList({recipes}) {
    const handleDelete = (id) => {
        Firestore.collection('recipes').doc(id).delete()
    }

    if (recipes.length === 0) {
        return (
            <div>
                <p className="text-center m-4 text-lg text-gray-400">No recipes found</p>
            </div>
        )
    }
    return (

        <div className="grid grid-cols-3 gap-10 max-w-6xl mx-auto p-10">
            {recipes.map(recipe => (
                <div key={recipe.id} className="p-5 rounded shadow-lg relative bg-white text-black transition duration-75 ease-in-out transform hover:rotate-3">
                    <h3 className="text-gray-700 mb-1">{recipe.title}</h3>
                    <p className="text-gray-400 text-sm">{recipe.cookingTime} To Make..</p>
                    <div className="text-xs text-gray-500 my-5 mx-0 leading-6">{recipe.method.substring(0,100)}...</div>
                    <Link href={`/recipe/${recipe.id}`}><a className="bg-gray-200 text-gray-600 block no-underline text-sm w-24 p-2 rounded text-center mx-auto mt-3">Cook This</a></Link>
                    <TrashIcon
                    onClick={() => {handleDelete(recipe.id)}}
                    className="absolute top-5 right-5 text-black cursor-pointer h-5 w-5 hover:scale-150"
                    />
                </div>
            ))}
        </div>
    )
}

export default RecipeList
