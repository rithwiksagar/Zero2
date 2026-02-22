"use client"
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";



export default function ToggleTheme(){
    const { theme, setTheme } = useTheme();

    return (
        <button 
        onClick={()=> setTheme(theme === "dark"? "light": "dark")}
        className="pl-6 rounded-xl cursor-pointer absolute"
        >
        {theme === "dark"? <Moon className="size-4 text-white/90"/>: <Sun className="size-4 bg text-neutral-900"/>}
        </button>
    )
}