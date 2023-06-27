import React, { useState } from "react"
import CardForm from "./components/CardForm/CardForm"
import { CardContainer } from "./components/CardForm/CardFormStyles"
import { ButtonSbumit } from "./components/CardForm/Submit"
import Config from "./components/ConfigComponent/Config"
import { useDispatch } from "react-redux"

function App() {

  const [active, setActive] = useState('')

  const handleClick = () =>{
    setActive("true")
  }

  return (
    <>
    {active &&
    <>
    <CardForm/>
    <Config/>
    </>

    }
    {!active && 
    <CardContainer>
          <ButtonSbumit onClick={handleClick} >Ingresar</ButtonSbumit>
    </CardContainer>
    }


    </>
    // 
  )
}

export default App
