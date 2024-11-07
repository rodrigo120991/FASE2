 



document.addEventListener("DOMContentLoaded", function (){
    
    const codigoidInput = document.getElementById("codigo");
    const tituloInput = document.getElementById("titulo");
    const descripcionInput = document.getElementById("descripcion");
    const fechaInput = document.getElementById("fecha");
    const nombreInput = document.getElementById("nombre");
    const proyectoInput = document.getElementById("proyecto");
    const comentariosInput = document.getElementById("comentarios");
    const statusInput = document.getElementById("status");
    const agregarBtn = document.getElementById("agregar")
    const tablaCuerpo = document.getElementById("tablaCuerpo")
    const buscarInput = document.getElementById("actualizar")
    const actualizarBtn = document.getElementById("actualizarBtn")

    agregarBtn.addEventListener("click", function () {
        try {
            const codigo = codigoidInput.value;
            const titulo = tituloInput.value;
            const fecha = fechaInput.value;
            const nombre = nombreInput.value;
            const proyecto = proyectoInput.value;
            const comentarios= comentariosInput.value;
            const status = statusInput.value;
        
            if(!codigo || !titulo || !descripcion || !fecha || !nombre || !proyecto || !comentarios || !status){
                throw new Error("por favor llenar todos los campos.");
            }
        
            agregarFila(codigo,titulo,descripcion,fecha,nombre,proyecto,comentarios,status, function () {
            
                codigoidInput.value= "";
                tituloInput.value= "";
                descripcionInput.value= "";
                fechaInput.value= "";
                nombreInput.value= "";
                proyectoInput.value= "";
                comentariosInput.value= "";
                statusInput.value= "";
            });

        } catch (error){
            alert(error.message);
        }
    });

    tablaCuerpo.addEventListener("dblclick", function (event){
        const fila =event.target.parentNode;
        if(fila.tagName ==="TR") {  
            if (confirm("Estas seguro de eliminar este registro")){
                tablaCuerpo.removeChild(fila);
            }
        }
    }); 

    function agregarFila (codigo,titulo,descripcion,fecha,nombre,proyecto,comentarios,status, callback) {
        
        const nuevaFila = document.createElement("tr");

        const celdacodigo =document.createElement("td");
        const celdatitulo =document.createElement("td");
        const celdadescripcion =document.createElement("td");
        const celdafecha =document.createElement("td");
        const celdanombre =document.createElement("td");
        const celdaproyecto =document.createElement("td");
        const celdacomentarios =document.createElement("td");
        const celdastatus =document.createElement("td");

        celdacodigo.textContent= codigo;
        celdatitulo.textContent=titulo; 
        celdadescripcion.textContent=descripcion;
        celdafecha.textContent=fecha;
        celdanombre.textContent=nombre;
        celdaproyecto.textContent=proyecto;
        celdacomentarios.textContent=comentarios;
        celdastatus.textContent=status;

        nuevaFila.appendChild(celdacodigo);
        nuevaFila.appendChild(celdatitulo);
        nuevaFila.appendChild(celdadescripcion);
        nuevaFila.appendChild(celdafecha);
        nuevaFila.appendChild(celdanombre);
        nuevaFila.appendChild(celdaproyecto);
        nuevaFila.appendChild(celdacomentarios);
        nuevaFila.appendChild(celdastatus);

        tablaCuerpo.appendChild(nuevaFila);

        if( typeof callback === "function"){
            callback ();
        }
    }

    actualizarBtn.addEventListener("click", function () {
        const textoBusqueda =buscarInput.value.toLowerCase ()
        buscarEnTabla(textoBusqueda);

    });
    
    function buscarEnTabla(
        textoBusqueda,
        filas =tablaCuerpo.getElementsByTagName("tr")
    ) {
        for (const fila of filas) {
            const celdas =fila.getElementsByTagName("td")
            let encontrado = false;
        
            for (const celda of celdas) {
                if (celda.textContent.toLocaleLowerCase().includes(textoBusqueda)){
                    encontrado = true;
                    break;
                }
            }

            if (encontrado) {
              fila.style.backgroundColor = "yellow";
            } else {
                fila.style.backgroundColor= " ";
            }
        }
    }

});
