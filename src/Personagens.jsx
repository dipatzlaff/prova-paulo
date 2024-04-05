import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Header from './Header'
import './Home.css'

function Personagens() {
  const { id } = useParams()
  const [Personagens, setPersonagens] = useState([])

  useEffect(() => {
    

    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('ERRO!')
        }
        return response.json()
      })
      .then((data) => {
        setPersonagens(data)

        console.log(data)
      })
      .catch((error) => {
        console.error(error)
        setPersonagens(null)
      })
  }, [])

  const mudarResolucao = (imagem) => {
    const formato = imagem.replace('FORMATO', '220x220')
    return formato
  }
console.log(Personagens)
  if (!Personagens || Personagens == null) return <div>ERRO</div>


  return (
    <>
      <Header />
      <div className='container'>
        <div>
     
        {Personagens != '' ? <></> : <h1>Carregando</h1>}
      {
        Personagens != null && (
          <>
            <img src={Personagens .image}></img>
            <p>Nome: {Personagens .name}</p>
            <p>Status: {Personagens .status}</p>
            <p>Especie: {Personagens .species}</p>
          </>

        )
      }
        </div>
      </div>
    </>
  )
}

export default Personagens 
