import { useTheme } from "../hooks/useTheme"
import { MoonIcon } from '@heroicons/react/outline'



function ThemeSelector() {
    const themeColors = ['#58249c','green','#b70233']
    const{toggleColor,toggleMode,mode} = useTheme()

    const Mode =()=>{
        toggleMode(mode==='dark'?'light':'dark')
    }
    console.log(mode)
    return (
        <div className="flex justify-end items-center p-4 mx-auto bg-gray-200" style={mode==='dark'?{}:{background:'black'}}>
            <div className="flex ">
                <div onClick={Mode}>
                    <MoonIcon className="h-5 w-5  text-black cursor-pointer" style={{filter:mode==='dark'?'invert(0%)':'invert(100%)'}}/>
                </div>
                {themeColors.map(color => (
                    <div
                    className="inline-block w-5 h-5 cursor-pointer rounded-full ml-2"
                    key= {color}
                    onClick = {() => toggleColor(color)}
                    style = {{background: color}}
                    ></div>
                ))}
            </div>
            
        </div>
    )
}

export default ThemeSelector
