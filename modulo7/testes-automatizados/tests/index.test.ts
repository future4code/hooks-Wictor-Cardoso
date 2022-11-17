import { exec } from "child_process"
import { isEven, login, myAsyncFunc } from "../src"

describe.skip("Testes da função isEven", ()=>{

   test("Retorna true para número par", ()=>{
    const result =  isEven(2)
    expect(result).toBe(true)

   })

   it("Retorna false para número ímpar", ()=>{
    const result =  isEven(3)
    expect(result).toBe(false)
   })
})

describe.skip("Exemplos de matchers", ()=>{

    test("ToBe/ToEqual", ()=>{
        const number = 1
        const array = [1,2,3]

        expect(number).toBe(1)
        expect(number).toEqual(1)
       // expect(array).toBe([1,2,3]) não funciona
        expect(array).toEqual([1,2,3])
    })

    test("ToBeGreaterThan", ()=>{
        const result = 10

        expect(result).toBeGreaterThan(1)
        expect(result).toBeGreaterThanOrEqual(10) 
    })

    test("ToBeLessThan", ()=>{
        const result = 10

        expect(result).toBeLessThan(100)
        expect(result).toBeLessThanOrEqual(10) 
    })

    test("ToContain", ()=>{
        const result = [1, 50, "banana"]

        expect(result).toContain("banana")
        expect(result).toContain(50)   
    })

    test("ToContainEqual", ()=>{
        const result = [1, {nome: "Rodrigo"}, "banana"]

        expect(result).toContain("banana")
        expect(result).toContainEqual({nome: "Rodrigo"})   
    })

    test("not", ()=>{
        const result = 1000
        
        expect(result).not.toBe(1)
        expect(result).not.toBe(true)   
       
    })

})

describe.skip("Exemplo async", ()=>{
    test("Chamada da função", async ()=>{
        const result = await myAsyncFunc()

        expect(result).toBe("response") 
    })
    
})

describe("Testes na função Login", ()=>{
   

    it("Caso de sucesso no login", async ()=>{
       
        const result =  await login("senha correta")
        expect(result).toEqual({
            id: 1,
            name: "teste"
         })
    })

    it("Caso de erro no login",async () => {
        expect.assertions(3)
       try {
        const result = await login("senha incorreta")
        console.log(result)

       } catch (error:any) {
            expect(error).toBeDefined()
           expect(error.message).toBe("A senha está incorreta")
           expect(error).toBeInstanceOf(Error)
           
       } 

    })
})