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
        const tempPlayersObj = {...players}
        const length = Object.keys(players).length
         const newName =  `Player${length + 1}`
        // if increase
        // take the length and use that number for the new key
        
            tempPlayersObj[length   ] =  {[newName]: "normal" }
            setPlayers(tempPlayersObj)

        
   }

   const removePlayer = (e, index) => {
    const tempPlayers = {...players}
    delete tempPlayers[index]
    
    // for 0 loop until end of temp
    // set checked to false
    // if index == x 
    // set cheked to true and skip
    // all numbers are - 1
    let checked = false
    for (let pointer = 0; pointer < Object.keys(players).length - 1; pointer ++){
        if (index == pointer){
            checked = true

        }
        if (checked){
            const newNum = pointer - 1
            Object.defineProperty(tempPlayers, [newNum],

                Object.getOwnPropertyDescriptor(tempPlayers, pointer)


            )
            delete tempPlayers[pointer]

        }
    }
        
    
    console.log(tempPlayers,  "the new babeies")
    // setPlayers(tempPlayers)
   }

    
    return (
        <div>
            <button onClick={changePLayerAmount}>Click on me to increase </button>
            

            { Object.values(players).map((playerObject, index) => {
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
