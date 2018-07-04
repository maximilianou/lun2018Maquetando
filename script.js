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
  }
  
}