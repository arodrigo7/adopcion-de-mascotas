class Mascota {
    constructor( nombre, color_pelo,peso,altura,raza,estadoAdopcion){
        this.nombre=nombre;
        this.color_pelo=color_pelo;
        this.peso=peso;
        this.altura=altura;
        this.raza=raza;
        this.estadoAdopcion="En Adopción";
    }
    //set modificar el estado de adopcion
    ModificarEstadoAdopcion(estado){
        return this.estadoAdopcion = estado 
    }

    //get informar el estado de adopcion
    informarEstadoAdopcion(){
        return this.estadoAdopcion
    }
}

mascota1= new Mascota ("chochi","marron",71,60,"pitbull","En Adopción");
mascota2=new Mascota("pirulo","marron caca",30,20,"caniche","En Adopción");
console.log(mascota1.estadoAdopcion);
console.log(mascota1);
mascota1.estadoAdopcion= "Adoptado";
console.log(mascota1.estadoAdopcion);
