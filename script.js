function enquete() {
  if (document.form1.tfav[0].checked == false 
    && document.form1.tfav[1].checked == false
    && document.form1.tfav[2].checked == false) {
    window.alert("Escolha uma das opções para registrar seu voto");
    return false;
  } else {
    window.alert("Sua resposta foi registrada!");
    return true
  }

}

function newsletter() {
  let n = document.getElementById("nome")
  let e = document.getElementById("email")
  if (n.value.length == "" || e.value.length == ""){
    window.alert("Preencha os dois campos para registrar-se")
  } else {
    window.alert("Dados enviados com sucesso!")
  }
  
}