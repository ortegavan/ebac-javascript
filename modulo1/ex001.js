let origem = ["lobo", "cabra", "alfafa"];
let destino = [];
let barco = ["homem"];

console.log("1. Leva-se a cabra para o destino...");
let item = origem.splice(1,1);
destino.push(item);

exibirStatus(origem, destino, barco);

console.log("2. Leva-se o lobo para o destino, ao chegar lá coloca-se a cabra no barco");
item = origem.splice(0,1);
destino.push(item);
item = destino.splice(0,1);
barco.push(item);

exibirStatus(origem, destino, barco);

console.log("3. Leva-se alfafa para o destino, deixando a cabra na origem");
item = origem.splice(0,1);
destino.push(item);
item = barco.splice(1,1);
origem.push(item);

exibirStatus(origem, destino, barco);

console.log("4. Leva-se a cabra para o destino, homem desce do barco");
item = origem.splice(0,1);
destino.push(item);
item = barco.splice(0,1);
destino.push(item);

exibirStatus(origem, destino, barco);

function validarMargemDoRio(margem) {
    if ((margem.includes("lobo") && margem.includes("cabra") && !margem.includes("homem")) ||
        (margem.includes("cabra") && margem.includes("alfafa") && !margem.includes("homem")))
        return false;
    return true;
}

function exibirStatus(origem, destino, barco) {
    console.log();
    console.log("Origem: " + origem);
    console.log("Destino: " + destino);
    console.log("Barco: " + barco);
    console.log("Origem e destino válidos? " + validarMargemDoRio(origem) + " e " + validarMargemDoRio(destino));
    console.log();
}