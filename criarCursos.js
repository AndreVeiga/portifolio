function createCard(curso) {
  var divCard = document.createElement('div');
  divCard.className = "card";
  divCard.style = "margin-top: 1%; margin-bottom: 1%; background-color: #015958;";

  var divCarHeader = document.createElement('div');
  divCarHeader.className = "card-header";

  var iconeNomeCurso = document.createElement('i');
  iconeNomeCurso.className = "fa-solid fa-award";
  var spanNomeCurso = document.createElement('span');
  spanNomeCurso.innerText = curso.nome;
  spanNomeCurso.style = "margin-left: 1%;"

  var paragNomeCurso = document.createElement('p');
  paragNomeCurso.appendChild(iconeNomeCurso);
  paragNomeCurso.appendChild(spanNomeCurso);

  divCarHeader.appendChild(paragNomeCurso)
  divCard.appendChild(divCarHeader)


  var divCardBody = document.createElement('div');
  divCardBody.className = "card-body";

  /** Lugar */
  var iconeLugarCurso = document.createElement('i');
  iconeLugarCurso.className = "fa-solid fa-school";

  var spanLugarCurso = document.createElement('span');
  spanLugarCurso.innerText = curso.lugar;
  spanLugarCurso.style = "margin-left: 1%;"

  var paragLugarCurso = document.createElement('p');
  paragLugarCurso.appendChild(iconeLugarCurso)
  paragLugarCurso.appendChild(spanLugarCurso)

  divCardBody.appendChild(paragLugarCurso)

  /** Data */
  var iconeDataCurso = document.createElement('i');
  iconeDataCurso.className = "fa-regular fa-calendar";

  var spanDataCurso = document.createElement('span');
  spanDataCurso.innerText = curso.data;
  spanDataCurso.style = "margin-left: 1%;"

  var paragDataCurso = document.createElement('p');
  paragDataCurso.appendChild(iconeDataCurso)
  paragDataCurso.appendChild(spanDataCurso)

  divCardBody.appendChild(paragDataCurso)

  /** Certificado */
  var iconeCertiCurso = document.createElement('i');
  iconeCertiCurso.className = "fa-solid fa-certificate";

  var spanCertiCurso = document.createElement('a');
  spanCertiCurso.href = curso.certificado;
  spanCertiCurso.target = "_blank";
  spanCertiCurso.innerText = curso.certificado;
  spanCertiCurso.style = "margin-left: 1%; color: #FFF;"

  var paragCertiCurso = document.createElement('p');
  paragCertiCurso.appendChild(iconeCertiCurso)
  paragCertiCurso.appendChild(spanCertiCurso)

  divCardBody.appendChild(paragCertiCurso)

  divCard.appendChild(divCardBody)
  return divCard
}
