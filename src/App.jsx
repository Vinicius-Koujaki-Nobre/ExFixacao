import style from './App.module.css'
import { useState, useRef } from 'react'


import { Menu } from './components/menu'
import photoSlogan from './assets/images/FotoSlogan.jpg'

function App() {

  const [Message, setMessage] = useState('')

  const showMesssage = () => {
    setMessage('Genki Dama é um poderoso ataque em Dragon Ball, considerado o ataque mais poderoso da série, mas depende do número de organismos suportando seu uso. No manga, é usado apenas um total de três vezes.');
  }

  const hideMessage = () => {
    setMessage('')
  }

  // function VideoComponent() {
  //   const [showVideo, setShowVideo] = useState(false);
  //   const videoRef = useRef(null);
  
  //   const handleClick = () => {
  //     setShowVideo(true);
  //     // Optional: Play the video automatically when it appears
  //     if (videoRef.current) {
  //       videoRef.current.play();
  //     }
  //   };
  

  return (
    <>
      <Menu option01='Vídeo' option02='Personagens'/>

      <section className={style.sections1} id='s1'>
        <img src={photoSlogan} alt="genkidama" className={style.img} width={800} height={800} />
        <h3>"Precisam levantar suas mãos para o céu. E assim reuniremos forças para derrotar Majin Boo. Por tudo que mais amam. Precisamos que mandem sua energia."</h3>
        <button onClick={showMesssage}>Saiba mais</button>
        {Message && <p>{Message}</p>}
      </section>

      <section className={style.sections2} id='s2'>
        <button>Clique para assistir o vídeo</button>
        {/* {showVideo && (
        <video width="320" height="240" controls ref={videoRef}>
          <source src="your-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )} */}
      </section>
    </>
  )
}

export default App
