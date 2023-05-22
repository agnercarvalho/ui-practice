dados = dados()

//Simula um tempo de carregamento
main()

//Cria os principais elementos da página
function main(progs){
    const body = document.querySelector("body")

    const container = document.createElement("div")
    container.classList.add("ui-container")
    body.appendChild(container)

    const barra = document.createElement("div")
    barra.classList.add("barra-superior")
    container.appendChild(barra)
    criarBarra(barra)

    const desktop = document.createElement("div")
    desktop.classList.add("desktop")
    container.appendChild(desktop)

    const dock = document.createElement("div")
    dock.classList.add("dock")
    container.appendChild(dock)
    criarDock(dock)
}

function criarBarra(barra){
    const data = document.createElement("div")
    atualizarHora(data)
    data.classList.add("data")
    barra.appendChild(data)
}

function atualizarHora(data){
    const date = new Date()
    data.innerText = date.getDate() + "/" + date.getMonth() + " - " + date.getHours() + ":" + date.getMinutes()
    setInterval(() => {
        data.innerText = date.getDate() + "/" + date.getMonth() + " - " + date.getHours() + ":" + date.getMinutes()
    }, 10000);
}

function criarDock(dock){
    
    dados.forEach(dado => {    
        const item = document.createElement("div")
        item.classList.add("item-prog")

        const nomeProg = document.createElement("div")
        nomeProg.classList.add("nome-prog")
        nomeProg.innerHTML = `<p>${dado.nome}</p>`
        item.appendChild(nomeProg)

        const iconeProg = document.createElement("img")
        iconeProg.classList.add("icone-prog")
        iconeProg.src = `${dado.icone}`
        item.appendChild(iconeProg)

        dock.appendChild(item)
    });

}