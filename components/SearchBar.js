import { useState } from "react";
import { useRouter } from 'next/router'

function SearchBar() {
    const [term,setTerm] = useState('');
    const router = useRouter();
    const handleSubmit = (e) => {
        e.preventDefault();
        router.push(`/search?q=${term}`)}


    return (
        <div>
            <form onSubmit={handleSubmit} className="flex items-center">
                <label htmlFor="search">Search:</label>
                <input
                type="text"
                id="search"
                className="ml-2 text-black outline-none rounded-lg"
                onChange={(e) => setTerm(e.target.value)}
                />
                </form>
            
        </div>
    )
}

export default SearchBar
