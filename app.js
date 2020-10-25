const listaStvari = document.querySelector(".listeItema");
const vrijednost = document.querySelector("#todolist");
let dugmeMalo = document.querySelector(".dugme");
let brisanjeListe = document.querySelector(".brisanje");
const ispod = document.querySelector(".ispod");


dugmeMalo.addEventListener("click", ()=>{
    if (vrijednost.value == "") {
        ispod.style.visibility = "visible";
    } else if(vrijednost.value != "") {
        ispod.style.visibility = "hidden";
        var lista = document.createElement("li");
        var imePosla = document.createElement("p");
        var dugmeZaListe = document.createElement("button");
        dugmeZaListe.classList.add("dugmeListeStyle")
        dugmeZaListe.innerText = "Izbrisi";
        lista.classList.add("styleListe");
        let text = document.createTextNode(vrijednost.value);
        imePosla.innerText = vrijednost.value;
        lista.appendChild(imePosla);
        lista.appendChild(dugmeZaListe);
        listaStvari.appendChild(lista);
        vrijednost.value = "";
        dugmeZaListe.addEventListener("click", ()=> {
            listaStvari.removeChild(lista);
        })
         brisanjeListe.addEventListener("click", ()=> {
            ispod.style.visibility = "hidden";
             listaStvari.removeChild(lista);
         })
    }   
})




