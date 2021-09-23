function trocarimagem(filename, carname) {
    document.querySelector('.imagem').setAttribute('src', 'fotos/' +filename );
    document.querySelector('.imagem').setAttribute('data-car', carname);
}
function selecionar() {
   let car = document.querySelector('.imagem').getAttribute('data-car');
    alert (car);
}