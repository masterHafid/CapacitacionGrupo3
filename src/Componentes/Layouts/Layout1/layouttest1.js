import Topbar from '../Components/Layout1Components/topbar'
import Footer from '../Components/Layout1Components/footer'

const Layouttest1 = ({children}) =>{ //COMPONENTE REACT

    return (//SINTAXIS
    <>
        <Topbar />
           <main >{children}</main>
        <Footer/>
    </>)
}

export default Layouttest1