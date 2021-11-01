import { ThemeProvider } from "../context/ThemeContext"
import Navbar from "./Navbar"
import ThemeSelector from "./ThemeSelector"

function Layout({children}) {
    return (
        <ThemeProvider>
        <div className="h-screen" >
            
            <Navbar/>
            {children}
        </div>
        </ThemeProvider>
    )
}

export default Layout
