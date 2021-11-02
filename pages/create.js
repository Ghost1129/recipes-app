import { useEffect, useRef, useState } from "react";
import Firestore from "../firestore.config";
import { useRouter } from 'next/router'


function Create() {
    const [title, setTitle] = useState('');
    const [method, setMethod] = useState('');
    const [cookingtime, setCookingTime] = useState('');
    const [newingredient, setNewIngredient] = useState('');
    const [ingredients, setIngredients] = useState([]);
    const ingredientInput = useRef(null);
    
    const history = useRouter();

    const handleAdd = (e) => {
        e.preventDefault();
        const ing = newingredient.trim()

        if (ing && !ingredients.includes(ing)) {
            setIngredients(prevIngredients => [...prevIngredients, ing])
        }
        setNewIngredient('')
        ingredientInput.current.focus()
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const doc={ title, ingredients, method, cookingtime: cookingtime + ' minutes' }
        
        try{
            Firestore.collection('recipes').add(doc)
            history.push('/')
        }catch(err){
            console.log(err)
        }
    }

    // useEffect(() => {
    //     if (data) {
    //         history.push('/')
    //     }
    // }, [data])

    return (
        <div className="w-screen h-full bg-gray-100 mx-auto">
            <h2 className="page-title text-2xl pt-5">Add a new recipe</h2>
            <form onSubmit={handleSubmit} className="flex flex-col items-center mt-8">

                <label>
                    <span className="block mt-1 mx-2 p-1 text-center">Recipe title:</span>
                    <input
                        type="text"
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                        required
                    />
                </label>

                <label>
                    <span className="block mt-6 mx-2 p-2 text-center">Recipe Ingredients:</span>
                    <div className="flex items-center">
                        <input
                            type="text"
                            onChange={(e) => setNewIngredient(e.target.value)}
                            value={newingredient}
                            ref={ingredientInput}
                        />
                        <button
                            className="block ml-2 w-24 text-base py-1 px-3 rounded cursor-pointer no-underline my-1 mx-auto border border-black hover:bg-black hover:text-white"
                            onClick={handleAdd}>Add</button>
                    </div>
                </label>
                <p>Current Ingredients: {ingredients.map(i => <em key={i}>{i}, </em>)}</p>

                <label>
                    <span className="block mt-8 mx-2 p-2 text-center">Recipe method:</span>
                    <textarea
                        onChange={(e) => setMethod(e.target.value)}
                        value={method}
                        required
                    />
                </label>

                <label>
                    <span className="block mt-8 mx-2 p-2 text-center">Cooking Time(min):</span>
                    <input
                        type="number"
                        onChange={(e) => setCookingTime(e.target.value)}
                        value={cookingtime}
                        required
                    />
                </label>

                <button className="block w-24 text-base py-2 px-5 rounded cursor-pointer no-underline my-5 mx-auto border border-black hover:bg-black hover:text-white">Submit</button>
            </form>
        </div>
    )
}

export default Create
