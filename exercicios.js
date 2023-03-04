//DOM -> manipulação de HTML

var cidades = ["Curitiba","Pinhais","Araucária","Colombo"];

function imprimir()
{

    var div = document.getElementById("resposta");
    console.log(div);

    // Limpa o HTML    
    div.innerHTML = "";

    var ini = 0;
    var fim = cidades.length;

    while(ini<fim)
    {
    div.innerHTML += cidades[ini] + "<br />";
    //div.innerHTML = div.innerHTML + cidades[ini];
    ini += 1;
    // ini = ini + 1;
    }
}

function ordenado()
{
    var div = document.getElementById("resposta");
    div.innerHTML = "";

    cidades.sort();
    var fim = cidades.length;

    for (var ini = 0;ini < fim; ini+=1)
    {
        div.innerHTML += cidades[ini] + "<br />";
    }
}

function add()
{
    var nova = prompt("Escreva uma nova cidade:");

    if(nova != "")
    {
        if (cidades.includes(nova) ==false)
        {
        cidades.push(nova);
        } 
    }else{

    }

    imprimir();
}