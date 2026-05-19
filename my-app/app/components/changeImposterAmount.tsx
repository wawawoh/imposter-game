"use client"

import { useEffect, useState } from "react"

export default function ChangeImposterAmount({imposterAmount, setImposterAmount, players}) {

    
    const [imposterLimit, setImposterLimit] = useState(1)

      const calculateMaxImposter = () => {
        setImposterLimit(Math.floor(players.length / 2))
    }

    useEffect(()=> {
        calculateMaxImposter()

    }, [players])


  

    

    const increase = () => {
        if (imposterLimit != imposterAmount ) {
            setImposterAmount(prev => prev + 1)
            console.log("increase", imposterAmount)
        }
      
    }
    const decrease= () => {
        if (imposterAmount != 1) {
            setImposterAmount(prev => prev - 1)
        }
    }


    return <div>

        <button onClick={increase}>+</button>
        <p>{imposterAmount}</p>
        <button onClick={decrease}>-</button>
    </div>

}