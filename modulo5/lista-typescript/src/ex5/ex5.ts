
type Users = {
    name: string ,
    email: string,
    role: ROLE,  
}

enum ROLE{
    ADMIN="admin",
    USER="user"
}
const usuarios: Users[] = [
    {name: "Rogério", email: "roger@email.com", role: ROLE.USER},
    {name: "Ademir", email: "ademir@email.com", role: ROLE.ADMIN},
    {name: "Aline", email: "aline@email.com", role: ROLE.USER},
    {name: "Jéssica", email: "jessica@email.com", role: ROLE.USER},  
    {name: "Adilson", email: "adilson@email.com", role: ROLE.USER},  
    {name: "Carina", email: "carina@email.com", role: ROLE.ADMIN}      
] 

const filterUsuarios = usuarios.filter((obj)=>{
    if(obj.role === ROLE.ADMIN){
        console.table(obj)
    }else{
        console.log("It not.")
      }
})

console.log(filterUsuarios)