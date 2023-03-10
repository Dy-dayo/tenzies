import React from "react"

export default function Die(props) {
    const styles = {
        backgroundColor: props.isHeld ? "#59E391" : "white"
    }
   let images = "./images/die-one.png" 
   if(props.value === 1){
       images = "./images/dice-one-solid.svg" 
   }else if(props.value ===2){
       images = "./images/dice-two-solid.svg"
   }else if(props.value ===3){
       images = "./images/dice-three-solid.svg"
   }else if(props.value ===4){
       images = "./images/dice-four-solid.svg"
   }else if(props.value ===5){
      images = "./images/dice-five-solid.svg"
   }else if(props.value ===6){
       images = "./images/dice-six-solid.svg"
   }

    return (
        <div 
            className="die-face" 
            style={styles}
            onClick={props.holdDice}
        >
            <div className="die-num"><img src={images} alt="die"/></div>
            
        </div>
    )
}