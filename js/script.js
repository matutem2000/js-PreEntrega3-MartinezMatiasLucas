
let perfil;

for(let i=0; i<3; i++){
    perfil = prompt(`Seleccione el número del perfil adecuado
                    1. Administrador
                    2. Repositor
                    3. Cliente
                    4. Calculadora`);
        switch(perfil) {
            case "1":
                window.location.href="./pages/IndexAdministrador.html";
            break;
            case "2":
                window.location.href="./pages/IndexRepositor.html";
            break;
            case "3":
                window.location.href="./pages/IndexCliente.html";
            break;
            case "4":
                window.location.href="./pages/calculadora.html";
            break;
            default:
            
            alert("No ha ingresado una opción correcta");
            break;
        } 
        console.log(i);
}
console.log("¡¡¡Se ha denegado el acceso!!!")



