let affichage = document.getElementById("input");
let chiffres = document.querySelectorAll(".chiffre");
let operations = document.querySelectorAll(".operation");
let egal = document.querySelector(".egal");
let effacer = document.querySelector(".clear");
let touteffacer = document.querySelector(".clearall");
let varnom = "";
let nombrecourant = "";
let operation = "";
chiffres.forEach((element) => {
  element.addEventListener("click", () => {
    varnow = element.textContent;
    // console.log(varnow);
    if (varnow === "." && nombrecourant.includes(".")) {
      nombrecourant = nombrecourant.toString();
    } else {
      nombrecourant += varnow;
      affichage.value = nombrecourant;
      // console.log(nombrecourant);
    }
  });
});
let nombreprev = "";
operations.forEach((element) => {
  element.addEventListener("click", () => {
    if (nombrecourant !== "") {
      nombreprev = nombrecourant;
      nombrecourant = "";
    }
    operation = element.textContent;
  });
});
let res = "";
egal.addEventListener("click", () => {
  if (nombrecourant === "" || nombreprev === "") {
    return;
  }
  if (operation === "+") {
    res = parseFloat(nombreprev) + parseFloat(nombrecourant);
    // console.log("le resultat est : " + res);
    nombrecourant = res.toString();

    affichage.value = res;
  } else if (operation === "-") {
    res = parseFloat(nombreprev) - parseFloat(nombrecourant);
    // console.log("le resultat est : " + res);
    affichage.value = res;
    nombrecourant = res.toString();
  } else if (operation === "x") {
    res = parseFloat(nombreprev) * parseFloat(nombrecourant);
    // console.log("le resultat est : " + res);
    affichage.value = res;
    nombrecourant = res.toString();
  } else if (operation === "/") {
    if (nombrecourant != 0) {
      res = parseFloat(nombreprev) / parseFloat(nombrecourant);
      // console.log("le resultat est : " + res);
      affichage.value = res;
      nombrecourant = res.toString();
    } else {
      console.log("Error");
      affichage.value = "Error";
    }
  } else if (operation === "%") {
    res = parseFloat(nombreprev) / 100;
    // console.log("le resultat est : " + res);
    affichage.value = res;
    nombrecourant = res.toString();
  }
});
effacer.addEventListener("click", () => {
  nombrecourant = nombrecourant.substring(0, nombrecourant.length - 1);
  // console.log("le nombre est : " + nombrecourant);
  affichage.value = nombrecourant;
});

touteffacer.addEventListener("click", () => {
  nombrecourant = "";
  nombreprev = "";
  operation = "";
  affichage.value = "";
});
