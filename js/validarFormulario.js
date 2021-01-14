function validateForm() {
    let desabilitaBtn = false;
    var x = document.forms["myForm"]["cnpj"].value;
    if (x == "") {
        alert("Favor preencher o CNPJ.");
        desabilitaBtn = true;
        return false;
    }

    var y = document.forms["myForm"]["razaoSocial"].value;
    if (y == "") {
        alert("Favor preencher a Razao Social.");
        desabilitaBtn = true;
        return false;
    }

    var z = document.forms["myForm"]["nomeFantasia"].value;
    if (z == "") {
        alert("Favor preencher o Nome Fantasia.");
        desabilitaBtn = true;
        return false;
    }

    var w = document.forms["myForm"]["dataCriacaoEmpresa"].value;
    if (w == "") {
        alert("Favor preencher o Dada da Criação da Empresa.");
        desabilitaBtn = true;
        return false;
    }

    var k = document.forms["myForm"]["cpf"].value;
    if (k == "") {
        alert("Favor preencher o CPF do proprietário.");
        desabilitaBtn = true;
        return false;
    }

    let btnJson = document.querySelector("#gerar");
    btnJson.disabled = desabilitaBtn;

    alert('Formulário pronto para gerar JSON');

    return true;

}