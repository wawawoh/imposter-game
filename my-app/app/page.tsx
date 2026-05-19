'use client'



import { useEffect, useState } from "react";
import AddPlayers from "./components/addPLayers";
import ChangeImposterAmount from "./components/changeImposterAmount";

export default function Home() {

  const words = ["toast", "avocado", "spaghetii", "grass" ]
  const [chosenWord, setChosenWord] = useState("")
  const [imposterAmount, setImposterAmount] = useState(1)

  

  const newTempPlayers = [
   {"alice":"normal"},
   {"sanskrit":"normal"},
   {"william":"normal"},
  ]


  const [players, setPlayers] = useState(newTempPlayers)

  const update = ((chosen: string)=> {
    setChosenWord(chosen)
  })

  useEffect(()=> {
    const url = "https://random-words-api.kushcreates.com/api?words=1&category=animals&lanuage=english"
    async function fetchData ()  {
      try {
        const response = await fetch(url)
        if (response.ok) {
          const data = await response.json()
          console.log(data[0].word)
        }
        else {
          throw new Error("there was an error fetching")
        }

    }catch(error) {
      console.error(error)

    }


      
    }
    fetchData()
    // fetch from array 
    
    const index = Math.floor(Math.random() * words.length)
    const chosen = words[index]
    console.log(chosen)
    update(chosen)
   
  }, [])

  const startGame = () => {
    // chooses imposter numbers
    const imposterNumbers = new Set([])
    while (imposterNumbers.size < imposterAmount) {
      const randomIndex = Math.floor(Math.random() * (players.length ))
      imposterNumbers.add(randomIndex)
      console.log("daw")
    }
    console.log(imposterNumbers)
    
    const tempPlayerArray = [...players]
    for (const index of imposterNumbers) {
      console.log(index)
      const keyName = Object.keys(tempPlayerArray[index]) 
      const mutatedObj = {[keyName]: "imposter"}
      tempPlayerArray.splice(index, 1, mutatedObj)

      
      
    }
    console.log(tempPlayerArray)
    // choose a word
    // assign an imposter
  }
  
  
   
  return (
    
    <div>
      <p>Hello this is the game</p>
      <p> this sit eh word {chosenWord}</p>
      <AddPlayers players = {players} setPlayers = {setPlayers} />
      <ChangeImposterAmount imposterAmount = {imposterAmount} setImposterAmount = {setImposterAmount} players = {players} />
      <button onClick={startGame}>start game</button>

    </div>
  );
}
