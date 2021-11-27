// function abrirMenu(){
//     document.getElementById('menu-lateral').style.width = '250px';
// }
// function fecharMenu(){
//     document.getElementById('menu-lateral').style.width = '0px';
// }
// function itensMenu(){
//     document.getElementById('menu-lateral').style.width = '0px';
// }

function abrirMenu(){
    const toggleMenu = document.querySelector('.menu-cell-lista')
    toggleMenu.classList.toggle('active')
}