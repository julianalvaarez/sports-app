
export default function Contacto() {
    function handleSubmit(e) {
        e.preventDefault()
        e.reset()
    }
    const style = "bg-black text-white border-white focus:text-black p-2 focus:bg-gray-800 border-2 rounded-sm"

  return (
    <footer className="bg-black py-3 mt-5">
        <h2 className="text-white text-center font-semibold text-3xl font-mono">CONTACTO</h2>
        <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center w-full mt-4">
            <input className={style} type="text" placeholder="Ingrese su Nombre Completo" required/>
            <input className={`${style} my-4`} type="email" placeholder="Ingrese su Correo Electronico" required/>
            <input className={style} type="textarea" placeholder="Ingrese su mensaje" required/>
            <input type="submit" className="bg-black border-2 border-white rounded-sm text-white mt-5 px-10 py-1 hover:cursor-pointer active:bg-white active:text-black font-semibold"/>
        </form> 
    </footer>
  )
}
  