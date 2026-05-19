"use client"

export default function AddPlayers({players, setPlayers}) {
    
   
   const handleChange = (e, index, role) => {
    console.log(e.target.value, index, "this is my update song ")
    const updatedName = e.target.value
    const updated_obj = {[updatedName] : role }
    const tempPlayers = {...players}
    tempPlayers[index] = updated_obj
    setPlayers(tempPlayers)
        
   }

   const changePLayerAmount = () => {
        const tempPlayersArray= [...players]
        const length = players.length
         const newName =  `Player${length + 1}`
        
        
            tempPlayersArray.push({[newName]: "normal" })
            setPlayers(tempPlayersArray)

        
   }

   const removePlayer = (e, index) => {
    const tempPlayersArray = [...players]
    tempPlayersArray.splice(index, 1)
    setPlayers(tempPlayersArray)
    
   
   
   
   }

    
    return (
        <div>
            <button onClick={changePLayerAmount}>Click on me to increase </button>
            

            { players.map((playerObject, index) => {
               const name = Object.keys(playerObject)
               const role = Object.values(playerObject)
                return(
                    <div key={index}>
                         <input type="text"  value={name} onChange={ (e) => handleChange(e, index, role)}  />
                         <button onClick={(e)=> removePlayer(e, index)}>remove player</button>

                    </div>
                   
                )
            })}
            
        </div>
    )
}
