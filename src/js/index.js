const botaoFiltrar =  document.querySelector('.btn-filtrar')
botaoFiltrar.addEventListener('click', function() {;
const categoriaSelecionada = document.querySelector('#categoria').value;
console.log(categoriaSelecionada);
const precoMaximoSelecionado = document.querySelector('#preco').value;

const cartas = document.querySelectorAll('.carta');

cartas.forEach(function(carta) {
const categoriaCarta = carta.dataset.categoria;
const precoCarta = parseFloat(carta.dataset.preco);

let MostrarCarta = true;

console.log('categoriaSelecionada',categoriaSelecionada)


const temFiltroDecategoria = categoriaSelecionada !== '';

const cartaNaoBateComFiltroDeCategoria = categoriaSelecionada.toLowerCase() !== categoriaCarta.toLowerCase();

    if(temFiltroDecategoria && cartaNaoBateComFiltroDeCategoria) {
    MostrarCarta = false;
        }

        const temFiltroDePreco = precoMaximoSelecionado !== '';
        const cartaNaoBateComFiltroDePreco = precoCarta > parseFloat(precoMaximoSelecionado);

        if(temFiltroDePreco && cartaNaoBateComFiltroDePreco) {
            MostrarCarta = false;
        }

        if(MostrarCarta){
            carta.classList.add('mostrar');
            carta.classList.remove('esconder');  
        }else {
            carta.classList.remove('mostrar');
            carta.classList.add('esconder');
        }
    });
});