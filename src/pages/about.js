import Card from '../Componentes/Card'
import styles from '../styles/about.module.css'

const about = () => {
    //JS Emac6
    return (//JSX
        <>
            <div className={styles.container}>
                <div className={styles.containerContent}>
                    <Card
                        icono='Icono 1'
                        titulo='Titulo 1'
                        descripcion='Descrpcion 1'
                    ></Card>

                    <Card
                        icono='Icono 2'
                        titulo='Titulo 2'
                        descripcion='Descrpcion 2'
                    ></Card>
                </div>
            </div>
        </>
    )
}

export default about

//localhost:3000/Componentes/Card