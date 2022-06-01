console.log("2) Creación de un objeto con propiedades")

const explorer = {

    name: "Luis",
    age: 31,
    mission: "NodeJS",
    stack: ["js", "node", "react", "vue"],
    blog: {
        url: "github.com/krocoloco/blog",
        post: 5
    } //esto es un objeto
}

console.log(explorer)

console.log("Accediendo a las propiedades de un objeto")
console.log(explorer.name)
console.log(explorer["age"])

const ajolonauta = {
    name: "Woopa",
    mission: "Node JS",
    sayHelloToExplorers: function(){
        console.log("Soy el ajolonauta, que onda!")
    }

}

console.log("Ajolonauta: ")
console.log(ajolonauta)
ajolonauta.sayHelloToExplorers()
