import React, { useState } from 'react'
import cl from "./AdventagesCircle.module.css"

function AdventagesCircle({children}) {
    const [coords, setCoords] = useState({x: 500, y: 500})
    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect()
        setCoords({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        })
    }

    const handleMouseLeave = () => { 
        setCoords({
                    x: 500,
                    y: 500
                })
    }

    const adventagesStyle = {
        background: `radial-gradient(circle at ${coords.x}px ${coords.y}px, #ED1C24, transparent 80%), #2E51A4`,
        transition: "background 0.1s"
    }
  return (
    <li 
        style={adventagesStyle}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={cl.advantages_item}>
        {children}
    </li>
  )
}

export default AdventagesCircle
