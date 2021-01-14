function gerarJSON(){

  var cnpj = document.querySelector('#cnpj').value;
  var razaoSocial = document.querySelector('#razaoSocial').value;
  var nomeFantasia = document.querySelector('#nomeFantasia').value;
  var dataCriacaoEmpresa = document.querySelector('#dataCriacaoEmpresa').value;
  var cpf = document.querySelector('#cpf').value;

  var myObj = { "cnpj":cnpj, "razaoSocial":razaoSocial, "nomeFantasia":nomeFantasia, "dataCriacaoEmpresa":dataCriacaoEmpresa, "cpf":cpf};

  var myJSON = JSON.stringify(myObj);

  console.log(myJSON);   

  desabilitaBtn = false;
  let btnJson = document.querySelector("#exibir");
  btnJson.disabled = desabilitaBtn;

  alert('JSON gerado e exibido no console.log. Pronto para exibir na tela.')

  
};



function exibirJSON(){


  var cnpj = document.querySelector('#cnpj').value;
  var razaoSocial = document.querySelector('#razaoSocial').value;
  var nomeFantasia = document.querySelector('#nomeFantasia').value;
  var dataCriacaoEmpresa = document.querySelector('#dataCriacaoEmpresa').value;
  var cpf = document.querySelector('#cpf').value;

  var myObj = { "cnpj": cnpj, "razaoSocial": razaoSocial, "nomeFantasia": nomeFantasia, "dataCriacaoEmpresa": dataCriacaoEmpresa, "cpf": cpf };

    var myJSON2 = JSON.stringify(myObj);

  console.log(typeof(myJSON2));
  console.log(myJSON2);

  document.getElementById("demo2").innerHTML = "O JSON criado foi :" + myJSON2;

  

}


