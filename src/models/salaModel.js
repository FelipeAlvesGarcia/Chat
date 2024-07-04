function listarSalas (){
    return [
        {
            "_id": {
                "$oid" : "643ece43ea11e6e5b0421f10"
            },
            "nome" : "Info631a",
            "tipo" : "publica"    
        }, 
        {
            "_id": {
                "$oid" : "643ece43ea11e6e5b0421f12"
            },
            "nome" : "pingpong",
            "tipo" : "publica"  
        }, 
        {
            "_id": {
                "$oid" : "643ece43ea11e6e5b0421f18"
            },
            "nome" : "TCC - Clean Beach",
            "tipo" : "privada",
            "chave" : "at8q4haw"    
        }
    ]
}

module.exports = {listarSalas};