class Nota{
  
  static agregar(notita){
    let lanota = {};
    lanota.titulo = document.querySelector('#el_titulo').value;
    lanota.contenido = document.querySelector('#el_contenido').value;
    
    let inicializoNotas =  localStorage.getItem("notas");
    if ( inicializoNotas === null ){
      inicializoNotas = "[]";
    }
    let listaNotas = JSON.parse( inicializoNotas ); 
    listaNotas.push( lanota );
    localStorage.setItem( "notas", JSON.stringify( listaNotas ) );    
    Nota.mostrar();
  }
  static mostrar(){
     let listaNotas = JSON.parse( localStorage.getItem("notas") );
     let texto = ` ${listaNotas.map( notita => 
                       `<article>
                            <h3>${notita.titulo}</h3> 
                            <p>${notita.contenido}</p>
                        </article>` 
                      
                      ).join('')} 
                   
                 `;
     document.querySelector( '#panelNotas' ).innerHTML = texto;
  }
  
  
}