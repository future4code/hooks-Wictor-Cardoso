
function checaRenovacaoRG(anoAtual:number, anoNascimento:number, anoEmissao:number ): string {
    let idade = anoAtual - anoNascimento
    let tempoCarteira = anoAtual - anoEmissao
   
     if(idade <= 20 ) {
         return tempoCarteira >= 5 ? "passou dos 5 anos precisa renovar" : "ainda não passou os 5 anos"
       
      }else if(idade >= 20 || idade <= 50) {
         return tempoCarteira >= 10 ? "passou dos 10 anos precisa renovar" : "ainda não passou os 10 anos"
       
      }else if(idade > 50) {
         return tempoCarteira >=15 ? "passou dos 15 anos precisa renovar" : "ainda não passou os 15 anos"
       
       }else {
           return "error"
       }
   }
   
   console.log(checaRenovacaoRG(25, 2011, 2012))


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

