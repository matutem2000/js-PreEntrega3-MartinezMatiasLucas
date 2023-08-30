document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("loginForm");
  
    // Obtengo el valor del desplegable
    const selectElement = document.querySelector('.form-select[name="perfil"]');
    selectElement.addEventListener('change', function() {
        const selectedValue = selectElement.value;
        sessionStorage.setItem('selectedPerfil', selectedValue);
    });
  
    loginForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Evita que el formulario se envíe de manera tradicional
    
        const usuario = document.getElementById("usuario").value;
        const password = document.getElementById("password").value;
        
        // Valida usuario y contraseña
        if (usuario === "usuario" && password === "contraseña") {
            const storedPerfil = sessionStorage.getItem('selectedPerfil');
            if (storedPerfil) {
                switch (storedPerfil) {
                    case "1":
                        console.log('Ingresaste como Administrador');
                        window.location.href = "./pages/IndexAdministrador.html";
                        break;
                    case "2":
                        console.log('Ingresaste como Repositor');
                        window.location.href = "./pages/IndexRepositor.html";
                        break;
                    case "3":
                        console.log('Ingresaste como Cliente');
                        window.location.href = "./pages/IndexCliente.html";
                        break; 
                    default:
                        // No lo necesito porque traigo el dato controlado del formulario con un menú desplegable
                }
            } 
        } else {
            alert("Credenciales incorrectas. Inténtalo de nuevo.");
            window.location.reload(); 
        }
    });
});
