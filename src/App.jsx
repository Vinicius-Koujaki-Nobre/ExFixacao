import style from './App.module.css'
import { Menu } from './components/menu'
import photoSlogan from './assets/images/FotoSlogan.jpg'

function App() {
  

  return (
    <>
      <Menu option01='Vídeo' option02='Personagens'/>
      <section className={style.section} id='s1'>
        <img src={photoSlogan} alt="genkidama" className={style.img} width={800} height={800} />
        <h3>"Precisa levantar suas mãos para o céu. E reuniremos forças para derrotar Majin Go. Por tudo que mais amam. Precisamos que mandem sua energia."</h3>
        <button>Saiba mais</button>
      </section>
      <section className={style.section} id='s2'>
        <button>Clique para assistir o vídeo</button>
      </section>
    </>
  )
}

export default App
