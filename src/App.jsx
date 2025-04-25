import style from './App.module.css'
import { useState } from 'react'


import { Menu } from './components/menu'
import photoSlogan from './assets/images/FotoSlogan.jpg'

function App() {

  const [Message, setMessage] = useState('')
  const [showVideo, setShowVideo] = useState(false)

  const showMesssage = () => {
    setMessage(!Message);
  }

  const showVideoYT = () =>{
    setShowVideo(!showVideo)
  }

  return (
    <>
      <Menu option01='Vídeo' option02='Personagens'/> 

      <section className={style.sections1} id='s1'>
        <img src={photoSlogan} alt="genkidama" className={style.img} />
        <h3 className={style.h3}>"Precisam levantar suas mãos para o céu. E assim reuniremos forças para derrotar Majin Boo. Por tudo que mais amam. Precisamos que mandem sua energia."</h3>
        <button className={style.button} onClick={showMesssage}>Saiba mais</button>
        {Message && (
          <p>Genki Dama é um poderoso ataque em Dragon Ball, considerado o ataque mais poderoso da série, mas depende do número de organismos suportando seu uso. No manga, é usado apenas um total de três vezes.</p>
          )}
      </section>

      <section className={style.sections2} id='s2'>
        <button className={style.button} onClick={showVideoYT}>Clique para assistir o vídeo</button>
          {showVideo && (
            <div className={style.video}>
            <iframe
              width="80%"
              height="400"
              src="https://www.youtube.com/embed/zIwNsWjpGUU" 
              title='Goku usa a Genki Dama'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen>
            </iframe>
          </div>
          )}
      </section>
    </>
  )
}

export default App
