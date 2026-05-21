'use client'




import { useEffect, useState } from "react";
import AddPlayers from "./components/addPLayers";
import ChangeImposterAmount from "./components/changeImposterAmount";
import Link from "next/link";

export default function Home() {

  const words = ["toast", "avocado", "spaghetii", "grass" ]
  const [chosenWord, setChosenWord] = useState("")
  const [imposterAmount, setImposterAmount] = useState(1)
  const [data, setData] = useState([])

  

  const newTempPlayers = [
   {"alice":"normal"},
   {"sanskrit":"normal"},
   {"william":"normal"},
  ]


  const [players, setPlayers] = useState(newTempPlayers)

  const update = ((chosen: string)=> {
    setChosenWord(chosen)
  })

  // fetches words from api upon load
  useEffect(()=> {
    const url = "https://random-words-api.kushcreates.com/api?words=20&category=animals&language=en"
    async function fetchData ()  {
      try {
        const response = await fetch(url)
        if (response.ok) {
          const temp = await response.json()

          for (const object of temp ) {
            setData(prev => [...prev, object.word]) 
          }
          
          

         
        }
        else {
          throw new Error("there was an error fetching")
        }

    }catch(error) {
      console.error(error)

    }


      
    }
    fetchData()
   
    
   
   
  }, [])

  
  
  return (
    
    <div className="startPage">
      <h1>Imposter</h1>
      {/* <button>Begin </button>
      <p> this sit eh word {chosenWord}</p>
      <AddPlayers players = {players} setPlayers = {setPlayers} />
      <ChangeImposterAmount imposterAmount = {imposterAmount} setImposterAmount = {setImposterAmount} players = {players} /> */}
      <Link href={"/choosePlayers"}>
       <button className="border-solid border-foreground border-2 px-4 py-2 text-white rounded-sm" >start game</button>

      </Link>
     

    </div>
  );
}
