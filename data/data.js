function leDados(callback){
    setTimeout(() => {
        console.log("Carregou os dados")
        callback( [{
            nome: "Prog 1",
            icone: "./data/home.svg"
        },{
            nome: "Prog 2",
            icone: "./data/folder.svg"
        },{
            nome: "Prog 3",
            icone: "./data/config.svg"
        }] )
    }, 2500);
}