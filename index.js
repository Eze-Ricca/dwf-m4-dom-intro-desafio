const cosasQueAprendimos = [
  {
    tema: "terminal",
    class: "",
  },
  {
    tema: "node",
    class: "",
  },
  {
    tema: "oop",
    class: "",
  },
  {
    tema: "typescript",
    class: "",
  },
  {
    tema: "css",
    class: "",
  },
  {
    tema: "dom",
    class: "special",
  },
];

function main() {
  const listaEl = document.querySelector(".lista");
  const itemsEls = document.querySelectorAll(".lista li");
  // console.log(listaEl);
  // listaEl.forEach((el) => console.log(el));
  setTimeout(() => {
    for (let el of itemsEls) {
      el.remove();
    }
  }, 3000);
  setTimeout(() => {
    for (const item of cosasQueAprendimos) {
      // console.log(item);
      const newLiel = document.createElement("li");
      // console.log(newLiel);
      newLiel.textContent = item.tema;
      // console.log(newLiel);
      const laClaseQueLeVoyAAsignarAlli = item.class || "item";
      // console.log(laClaseQueLeVoyAAsignarAlli);
      newLiel.classList.add(laClaseQueLeVoyAAsignarAlli);
      // console.log(newLiel);
      listaEl.appendChild(newLiel);
    }
  }, 4000);
}

main();
