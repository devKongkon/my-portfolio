import { useEffect, useState } from "react"
import { ThemeProvider } from "./contexts/ThemeContext"
import { Navbar } from '../src/index'

function App() {
    const [themeMode, setThemeMode] = useState("light")
    const lightTheme = () => {
        setThemeMode("light")
    }

    const darkTheme = () => {
        setThemeMode("dark")
    }

    useEffect(() => {
        document.querySelector('html').classList.remove("light", "dark")
        document.querySelector('html').classList.add(themeMode)
    }, [themeMode])

    return (
        <>
            <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
                <Navbar/>
            </ThemeProvider>
        </>
    )
}

export default App;
