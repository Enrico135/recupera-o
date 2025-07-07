let totaldeTimes = 0;
let resultadoHTML = "";
function clique() {
    if (totaldeTimes >= 4) {
                alert(" Limite máximo é de 4 equipes. Não é possível cadastrar mais times.");
                return;
                }
    alert(`Cadastro da equipe ${totaldeTimes + 1}`);


let nomeEquipe = window.prompt("digite o nome da sua equipe : ").toUpperCase();
let nome1 = window.prompt("digite o nome do primeiro integrante : ").toLowerCase();
let nome2 = window.prompt("digite o nome do segundo integrante : ").toLowerCase();
let nome3 = window.prompt("digite o nome do terceiro integrante : ").toLowerCase();
let idade1 = Number(window.prompt("digite a idade do primeiro integrante : "));
let idade2 = Number(window.prompt("digite a idade do segundo integrante : "));
let idade3 = Number(window.prompt("digite a idade do terceiro integrante : "));
let media = (idade1 + idade2 + idade3) /3

 if(media > 15){
 alert ("essa equipe nao pode participar, ultrapassou a idade permitida (que é 15 anos).\nCadastre outro time.")
    return;
}
    totaldeTimes++

resultadoHTML +=
 
    `<h3><strong>${nomeEquipe}</strong></h3>
        <ul>
            <li>${nome1} - ${idade1} anos</li>
            <li>${nome2} - ${idade2} anos</li>
            <li>${nome3} - ${idade3} anos</li>
        </ul>

            <p><strong>Média das idades da Equipe:</strong> ${media} anos</p> 
           
        `;
    
     document.getElementById("resultado").innerHTML = resultadoHTML;
   
    }
