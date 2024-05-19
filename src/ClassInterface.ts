interface User {
    getName():string
    getAge():number
}


class Users implements User {
   private name:string ;
   private age:number ; 

    constructor(name:string , age :number){
        this.name = name ; 
        this.age = age
    }

    public getName():string{
        return this.name
    }

    public setName(name : string){
        this.name = name
    }

    public getAge() : number{
        return this.age
    }

    public setAge(age : number){
        return this.age = age
    }

}

const user = new Users("ayoub",258);

console.log(user.getName())
console.log(user.getAge())


  

    
