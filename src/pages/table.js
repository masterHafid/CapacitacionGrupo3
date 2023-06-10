//BSON -> nombre local para los archivos con sintaxis en js 
//JSON -> formato que se envia por http via internet 
//Objeto estructura:

//PERSONA
const Persona = {
    Nombre: "Pepe",
    Apellido: "Perez",
    Telefono: 2222222,
    email: "email@email.com"

}


const Personas = [
    {
        Nombre: "Nombre 1",
        Apellido: "Apellido 1",
        Telefono: 1111111111,
        Email: "email1@gmail.com"
    },
    {
        Nombre: "Nombre 2",
        Apellido: "Apellido 2",
        Telefono: 1111111111,
        Email: "email2@gmail.com"
    },
    {
        Nombre: "Nombre 3",
        Apellido: "Apellido 3",
        Telefono: 1111111111,
        Email: "email3@gmail.com"
    },
    {
        Nombre: "Nombre 4",
        Apellido: "Apellido 4",
        Telefono: 1111111111,
        Email: "email4@gmail.com"
    },
    {
        Nombre: "Nombre 5",
        Apellido: "Apellido 5",
        Telefono: 1111111111,
        Email: "email5@gmail.com"
    }
]
import Card from "@/Componentes/Card"

const table =()=>{//Sintaxis JS tradicional Codigo Tradicional

    console.log(Personas)

    return (//Sintaxis JSX componente para react
        <>
            {
             Personas.map((item, index)=>{
                return (<div key={index}>
                    <Card titulo={item.Nombre} descripcion={item.Apellido} icono={item.Email}></Card>
                    </div>)
             })   
            }

        </>
    )
}

//Servicio Tiene una lista de Productos Array Productos=[] 1-N


export default table