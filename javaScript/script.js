function validar() {


    nome = document.getElementById("name").value
    num = document.getElementById("num").value
    datas = document.getElementById("datas").value




    if (nome == "") {
        alert('Preencha o campo com seu nome');
        document.getElementById("name").focus();
        return false;
    }
    if (num > 10 || num < 0) {
        alert('Preencha o campo com um número de 1 a 10');
        document.getElementById("num").focus();
        return false;
    }
    if (datas == "") {
        alert('Preencha o campo data no formato DD/MM/AAAA');
        document.getElementById("datas").focus();
        return false;
    }

    alert('Formulário enviado');
    

}

function mascaraData(campo) {
    var data = campo.value;


    if (data.length == 2) {
        campo.value = data += '/';
    }
    else if (data.length == 5) {
        campo.value = data += '/';
    }
    else
        campo.value = data;

}

function cria_json() {

    var obj_form = {
        name: document.getElementById("name").value,
        num: document.getElementById("num").value,
        datas: document.getElementById("datas").value,
        generos: document.getElementsByName("generos")
    }
    
    if (obj_form.generos[0].checked) {
          obj_form.generos = "Feminino";
    }else
        obj_form.generos = "Masculino"
         
        
    console.log(obj_form);

    var json = JSON.stringify(obj_form);
    console.log(json);
    document.write("<h1>Dados em Json</h1>");
    document.write(json);

    return json;

}

function limpar() {
    document.getElementById("datas").value = ""
    document.getElementById("num").value = ""
    document.getElementById("name").value = ""
    document.getElementById("Feminino").checked = true
}
