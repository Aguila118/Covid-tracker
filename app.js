async function conseguirdatos(pais) {
  try {
    let resultado = await fetch('https://api.covid19api.com/summary');
    let data = await resultado.json();
    let arg = data.Countries[pais];
    let resultadobusqueda = '';

    resultadobusqueda += `<div class="new">
      <header class="pais">Pais:                 ${arg.Country}</header>
      <p class="casos">Casos Nuevos Confirmados: ${arg.NewConfirmed}</p>
      <p class="casos">Total casos Confirmados:  ${arg.TotalConfirmed}</p>
      <p class="casos">Total Muertos:            ${arg.TotalDeaths}</p>
    </div>`

      let insertar = document.getElementsByClassName('datos');
      insertar[0].insertAdjacentHTML('beforeend', resultadobusqueda);

  }catch (error) {
    console.log(error);
  };
};

document.addEventListener("DOMContentLoaded", ()=>{

  conseguirdatos(6);
  conseguirdatos(34);
  conseguirdatos(178);

});