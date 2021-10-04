const cachorros = require('./database/cachorros.json');
const fs = require('fs');
const { isNullOrUndefined } = require('util');

module.exports = {
    listar: function(){
        console.table(cachorros);
    },
    descrever: function(pos){
        if (pos >= cachorros.length || pos < 0 ){
            console.error('Cachorro inexistente!');
            return;
        }
        let c = cachorros[pos];
        console.log (`Nome: ${c.nome}`);
        console.log (`Sexo: ${c.sexo}`);
        console.log (`Peso: ${c.peso}`);
        console.log (`Data de nascimento: ${c.dataDeNascimento}`);
        if(c.castrado){
            console.log("Castrado: sim")
        }else{
            console.log("Castrado: não");
        }
        console.log("Vacinas:")
        console.table(c.vacinas);
        console.log("Serviços:")
        console.table(c.servicos)
        

    },
    adicionar: function($nome, $sexo, $castrado, $dataDeNascimento, $peso){
        let dog = {
            nome: $nome,
            sexo: $sexo,
            castrado: $castrado,
            dataDeNascimento: $dataDeNascimento,
            peso: $peso,
            vacinas:[],
            servicos:[],
        }
        cachorros.push(dog)
         
        // fs.writeFilesSync('./database/cachorros.json', JSON.stringify(cachorros));
        fs.writeFileSync('./database/cachorros.json', JSON.stringify(cachorros));
    
    },
    vacinar: function (pos, nomeDaVacina){
        if(pos >= cachorros.length || pos < 0){
            console.log ("Cachorro inexistente");
            return;
        }
        let novaVacina = {
            nome: nomeDaVacina,
            data: (new Date()).toISOString().substr(0,10)

        }
        cachorros[pos].vacinas.push(novaVacina);

        fs.writeFileSync('./database/cachorros.json', JSON.stringify(cachorros,null,4));
    }
    

}


