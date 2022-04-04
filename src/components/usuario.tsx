import { useState } from "react"

// esto es algo que no sabia  asi lo resolvió el profesor con interface 

interface User {
    name: string; 
    uid: string; 
}

export const Usuario = () => {

    const [user, setUser] = useState<User>() // la diferencia principal es que no me renderizo las llaves
    const login = () => {
        setUser ({
            uid: "ABCD123",
            name: "Kevin Mijares",
        });
    }
  return (
    <div className="mt-5">
        <h3>usuario: useState </h3>
        <button className="btn btn-outline-primary" onClick={login}> Loging</button>
        
        {
            (!user)
            ?<pre>No hay Usuario</pre>
            :<pre>{JSON.stringify(user)}</pre>
        }
        </div>
  )
}




// asi lo resolvi yo! 
// export const Usuario = () => {

//     const [user, setUser] = useState(Object)
//     const login = () => {
//         setUser ({
//             uid: "ABCD123",
//             name: "Kevin Mijares",
//         });
//     }
//   return (
//     <div className="mt-5">
//         <h3>usuario: useState </h3>
//         <button className="btn btn-outline-primary" onClick={login}> Loging</button>
//         <pre>{JSON.stringify(user)}</pre>
//         </div>
//   )
// }
