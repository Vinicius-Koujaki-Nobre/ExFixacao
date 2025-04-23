import style from './card.module.css'

export const Card = ({name, image, ki, race, gender}) => {
    return(
        <>
            <div className={style.card}>
                <h5 className={style.title}>{name}</h5>
                <img className={style.imgstyle} src={image} alt={name} />
                <p className={style.text}>KI: {ki}</p>
                <p className={style.text}>RACE: {race}</p>
                <p className={style.text}>GENDER: {gender}</p>
            </div>
        </>
    )
}