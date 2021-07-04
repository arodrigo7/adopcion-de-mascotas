function cargar_perro(){

class Mascota {
    constructor( nombre, color_pelo,peso,altura,raza,estadoAdopcion){
        this.nombre=nombre;
        this.color_pelo=color_pelo;
        this.peso=peso;
        this.altura=altura;
        this.raza=raza;
        this.estadoAdopcion=estadoAdopcion;
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

let mascotaNueva
//array de mascotas
cantMascotas=[];
cantMascotas.push(mascota1);
cantMascotas.push(mascota2);
let continuar = true
while(continuar== true){
    let nombre=prompt("agregar Nombre de Mascota Nueva");
    let color_pelo=prompt("agregar color de pelo de Mascota Nueva");
    let peso=prompt("agregar peso de Mascota Nueva");
    let altura=prompt("agregar altura de Mascota Nueva");
    let raza=prompt("agregar raza de Mascota Nueva");
    let estadoAdopcion=prompt("agregar estado de adopción de Mascota Nueva");
    mascotaNueva=new Mascota(nombre,color_pelo,peso,altura,raza,estadoAdopcion);
    
    cantMascotas.push(mascotaNueva);
    console.log(cantMascotas);
    continuar = window.confirm("Desea cargar otro Perro");    
}

//console.log()

//
//dato=mascota3
////dato2=mascota4
//cantMascotas.push(dato);
//cantMascotas.push(dato2);

}

function cantEnAdopcion(){
var newArr = cantMascotas.filter(function(el){
return (el.estadoAdopcion=== "En Adopción")
})
console.log(newArr);
}