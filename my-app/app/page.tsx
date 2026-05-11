'use client'


import { useEffect, useState } from "react";

export default function Home() {

  const words = ["toast", "avocado", "spaghetii", "grass" ]
  const [chosenWord, setChosenWord] = useState("")

  const [players, setPlayers] = useState({})

  const update = ((chosen: string)=> {
    setChosenWord(chosen)
  })

  useEffect(()=> {
    const index = Math.floor(Math.random() * words.length)
    const chosen = words[index]
    console.log(chosen)
    update(chosen)
   
  }, [])
  
  
   
  return (
    
    <div>
      <p>Hello this is the game</p>
      <p> this sit eh word {chosenWord}</p>

    </div>
  );
}
