

export default function Navbar(){
    return (
       <nav className="bg-red-500 w-full flex justify-between items-center p-5">
         <div>
            <h1 className="text-white text-xl">Design</h1>
         </div>
         <ul className="flex justify-center items-center gp-3">
            <li><a href="" className="text-white pl-3">Sign up</a></li>
            <li><a href="" className="text-white pl-3">Login</a></li>
            <li><a href="" className="text-white pl-3">Calendal</a></li>
            <li><a href="" className="text-white pl-3">Calculater</a></li>
            
         </ul>
       </nav>
    )
}