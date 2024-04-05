import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './Home.css'
import Personagens from './Personagens.jsx'
import Header from './Header'

function Home() {
  const [personagens, setPersonagens] = useState([])
  const [status, setStatus] = useState([])
const personagensFiltrados = personagens.filter(personagem => status == "" ? true : personagem.status.toLowerCase() == status)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://rickandmortyapi.com/api/character/`)
        const data = response.data.results
        console.log(data)
        setPersonagens(data)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [])

  return (
    <>
      <Header />
      <h1>lista de Personagens</h1>
      <input
        type='text'
        onChange={(evento) => setPersonagens(evento.target.value)}
      />
      <button >Pesquisar</button>
      <select  onChange={(evento) => setStatus(evento.target.value)}>
        <option value="alive">Vivo</option>
        <option value="dead">Morto</option>
        <option value="unknown">Desconhecido</option>
        <option selected value="">todos</option>
      </select>
      {
        personagensFiltrados.length > 0 && (
          <div>
            {status}
            {personagensFiltrados.map((item, index) =>
              <div key={index} className='box'>
                {item.name}
                <br></br>

                {<Link to={`./Personagens/${item.id}`}>
                  <img src={item.image}></img>
                </Link>}
              </div>
            )
            }
          </div>
        )
      }
    </>
  )
}

export default Home
