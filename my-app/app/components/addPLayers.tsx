"use client"

export default function AddPlayers({players}) {
    
   
   const handleChange = (e, index) => {
    console.log(e.target.value, index, "this is my update song ")
    console.log()
   }

    
    return (
        <div>
            <button>Click on me </button>

            { Object.keys(players).map((player, index) => {
               
                return(
                    <input type="text" key={index} value={player} onChange={ (e) => handleChange(e, index)}  />
                )
            })}
            
        </div>
    )
}
