import React, {useState, useEffect} from "react"
export default function useWindowHeight(){
    const [height, setHeight] = useState(window.innerHeight);

    useEffect(() => {
        const handleHeightReize = () => setHeight(window.innerHeight);
        window.addEventListener("resize", handleHeightReize)

        return() => window.removeEventListener("resize", handleHeightReize)
    }, [])
    return(height)
}