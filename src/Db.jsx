import style from './Db.module.css'
import { api } from './api/api'
import { Card } from './components/card'

import { useState } from 'react'
import { useEffect } from 'react'

export default function Db(){
    const [data, setData] = useState([])
    const [page, setPage] = useState("")

    const [erro, setErro] = useState(false)

    useEffect(() => {
        api.get(`/characters?page=${page}`).then((response) => {
            setData(response.data.items)
        }).catch((error) => {
            if(error.response.status === 404){
                setErro(true)
            }
            console.error(error)
        })
    }, [page])



    return(
        <>
        <section className={style.wrapPage}>
        <h5 className={style.header}><a className={style.a} href="/">VOLTAR</a></h5>
            <input className={style.input} type="text" placeholder='Digite uma página (1/6)' value={page} onChange={(e) => setPage(e.target.value)} />

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