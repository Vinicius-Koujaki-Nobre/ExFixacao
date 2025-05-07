import style from './Db.module.css'
import { api } from './api/api'
import { Card } from './components/card'

import { useState } from 'react'
import { useEffect } from 'react'

export default function Db(){
    const [data, setData] = useState([])
    const [page, setPage] = useState("")

    const [erro, setErro] = useState()

    useEffect(() => {
        api.get(`/characters?page=${page}`).then((response) => {
            const items = response.data.items || []
    
            if (items.length === 0) {
                setErro(true)
            } else {
                setErro(false)
            }
    
            setData(items);
        }).catch((error) => {
            console.error(error);
            setData([])
            if (error.response && error.response.status === 404) {
                setErro(true)
            }
        })
    }, [page])

    console.log(data)



    return(
        <>
        <section className={style.wrapPage}>
        <h5 className={style.header}><a className={style.a} href="/">VOLTAR</a></h5>
            <input className={style.input} type="text" placeholder='Digite uma página (1/6)' value={page} onChange={(e) => setPage(e.target.value)} />

            {erro && <h3 className={style.erro}>Página não encontrada</h3>}


            <div className={style.wrapCards}>
                {!erro && data.length > 0 ? (
                    data.map((item, index) => (
                        <div key={index}>
                            <Card 
                                name={item.name} 
                                image={item.image} 
                                ki={item.ki} 
                                race={item.race} 
                                gender={item.gender} 
                            />
                        </div>
                    ))
                ) : (
                    <div style={{ height: '90vh' }}></div>
                )}
            </div>
        </section>
        </>
    )
}