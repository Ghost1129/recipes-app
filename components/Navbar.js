import Link from 'next/link'
import { useTheme } from '../hooks/useTheme'
import SearchBar from './SearchBar'

function Navbar() {
    const {color,toggleColor} = useTheme()
    return (
        <div className="bg-black p-5 text-white" style={{background:color}}>
            <nav className="flex items-center max-w-7xl my-auto">
            <Link href="/">
            <h1 className="mr-auto no-underline text-3xl">Cook Ninja</h1>
            </Link>
            <SearchBar/>
            <Link href="/create" >
            <h2 className="no-underline ml-10 p-2 border border-white rounded hover:bg-white hover:text-black">Create Recipe</h2>
            </Link>
            </nav>
        </div>
    )
}

export default Navbar
