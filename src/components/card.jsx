import style from './card.module.css'

export const Card = ({name, image, ki, race, gender}) => {
    return(
        <>
            <h5 className={style.title}>{name}</h5>
            <img className={style.imgstyle} src={image} alt={name} />
            <p className={style.text}>{ki}</p>
            <p className={style.text}>{race}</p>
            <p className={style.text}>{gender}</p>
        </>
    )
}