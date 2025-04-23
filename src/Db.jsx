import style from './Db.module.css'
import { api } from './api/api'
import { Card } from './components/card'
import { Menu } from './components/menu'

import { useState } from 'react'
import { useEffect } from 'react'

export default function Db(){
    const [data, setData] = useState([])
    const [page, setPage] = useState("")
    const [searchName, setSearchName] = useState("")

    const [erro, setErro] = useState(false)

    useEffect(() => {
        api.get(`/characters?page=${page}&name=${searchName}`).then((response) => {
            setData(response.data.items)
        }).catch((error) => {
            if(error.response.status === 404){
                setErro(true)
            }
            console.error(error)
        })
    }, [page, searchName])




    return(
        <>
        <Menu option01='Voltar a página principal'/>
        <section className={style.wrapPage}>

            <input className={style.input} type="text" placeholder='Digite uma página (1/6)' value={page} onChange={(e) => setPage(e.target.value)} />
            <input className={style.input} type="text" placeholder='Digite um nome' value={searchName} onChange={(e) => setSearchName(e.target.value)} />

            {erro && <p>Página não encontrada</p>}

            <div className={style.wrapCards}>
                {data && data.map((item,index) => (
                    <div key={index}>
                        <Card name={item.name} image={item.image} ki={item.ki} race={item.race} gender={item.gender}/>
                    </div>
                ))}
            </div>
        </section>
        </>
    )
}