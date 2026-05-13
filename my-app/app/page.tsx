'use client'


import { useEffect, useState } from "react";
import AddPlayers from "./components/addPLayers";

export default function Home() {

  const words = ["toast", "avocado", "spaghetii", "grass" ]
  const [chosenWord, setChosenWord] = useState("")

  const tempPlayers = {
    "alice": "imposter",
    "gred": "normal", 
    "tom": "normal"
  }

  const [players, setPlayers] = useState(tempPlayers)

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
      <AddPlayers players = {players} />

    </div>
  );
}
