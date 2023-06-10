import styles from "../styles/servicios.module.css"


const servicio = ()=>{//COMPONENTE
   //JS Tradicional
   //Emac6
    console.log("Hola mundo")

    let Login = "Login"

   
    return(// Sintaxis JSX html tradicional etiquetas class"clasesCSS"
        <>
            <div className={styles.contenedor}>
                <div className={styles.contenedorContenido}>

                    <div className={styles.contenedorElementos}>
                        
                        <h1>{Login}</h1>
                        <input placeholder="Usuario"/>
                        <input placeholder="Contraseña"/>
                    </div>
                </div>
            </div>

        </>
    )

}

export default servicio