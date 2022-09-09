function askingAge()
{
  let age = prompt("Quel âge as-tu, toi?");

  if (age < 18)
  {
    alert("Hello, kid!");
  }
  else
  {
    alert("Hello!");
  }
}

function deLavoisier()
{
  alert("Antoine Laurent Lavoisier");
  askingAge();
}
function avogadro()
{
  alert("Amedeo Avogadro");
  askingAge();
}
function pasteur()
{
  alert("Louis Pasteur");
  askingAge();
}
function nobel()
{
  alert("Alfred Bernhard Nobel");
  askingAge();
}
function mendeleïeve()
{
  alert("Dmitri Ivanovitch Mendeleïev");
  askingAge();
}
function curie()
{
  alert("Marie Curie");
  askingAge();
}

let alertDeLavoisier = document.querySelector("#deLavoisier");
alertDeLavoisier.addEventListener("click", deLavoisier);
let alertAvogadro = document.querySelector("#avogadro");
alertAvogadro.addEventListener("click", avogadro);
let alertPasteur = document.querySelector("#pasteur");
alertPasteur.addEventListener("click", pasteur);
let alertNobel = document.querySelector("#nobel");
alertNobel.addEventListener("click", nobel);
let alertMendeleïeve = document.querySelector("#mendeleïeve");
alertMendeleïeve.addEventListener("click", mendeleïeve);
let alertCurie = document.querySelector("#curie");
alertCurie.addEventListener("click", curie);