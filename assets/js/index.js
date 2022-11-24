const propiedadesJSON = [
  {
    name: "Casa de campo",
    description: "Un lugar ideal para descansar de la ciudad",
    src: "https://www.construyehogar.com/wp-content/uploads/2020/02/Dise%C3%B1o-casa-en-ladera.jpg",
    rooms: 2,
    m: 170,
  },
  {
    name: "Casa de playa",
    description: "Despierta tus días oyendo el oceano",
    src: "https://media.chvnoticias.cl/2018/12/casas-en-la-playa-en-yucatan-2712.jpg",
    rooms: 2,
    m: 130,
  },
  {
    name: "Casa en el centro",
    description: "Ten cerca de ti todo lo que necesitas",
    src: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
    rooms: 1,
    m: 80,
  },
  {
    name: "Casa rodante",
    description: "Conviertete en un nómada del mundo sin salir de tu casa",
    src: "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
    rooms: 1,
    m: 6,
  },
  {
    name: "Departamento",
    description: "Desde las alturas todo se ve mejor",
    src: "https://www.adondevivir.com/noticias/wp-content/uploads/2016/08/depto-1024x546.jpg",
    rooms: 3,
    m: 200,
  },
  {
    name: "Mansión",
    description: "Vive una vida lujosa en la mansión de tus sueños ",
    src: "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
    rooms: 5,
    m: 500,
  },
];

const divPropiedades = document.getElementById("divPropiedades");

//create function that will help the code to be more reusable when is needed to write a new Propiedad

const writePropiedad = (obj) => {
  let newPropiedad = `
  <div class="propiedad">
    <div class="img" style="background-image:url('${obj[Object.keys(obj)[2]]}')">
    </div>
    <section>
      <h5>${obj[Object.keys(obj)[0]]}</h5>
      <div class="d-flex justify-content-between">
        <p>Cuartos: ${obj[Object.keys(obj)[3]]}</p>
        <p>Metros: ${obj[Object.keys(obj)[4]]}</p>
      </div>
    <p class="my-3">${obj[Object.keys(obj)[1]]}</p>
    <button class="btn btn-info">Ver más</button>
    </section>
  </div>
  `;
  return newPropiedad;
};

//iterate to every real state in the propiedadesJSON array, so they can be displayed on the html
for (let propiedad of propiedadesJSON) {
  divPropiedades.innerHTML += writePropiedad(propiedad);
}

//elements required for searching
const roomQty = document.getElementById("roomQty");
const minSquaredMeters = document.getElementById("minSquaredMeters");
const maxSquaredMeters = document.getElementById("maxSquaredMeters");
const totalSearch = document.getElementById("totalSearch");
totalSearch.textContent = propiedadesJSON.length;
const btnSearch = document.getElementById("btnSearch");

//addEventListener to search for the real state that fulfill the requeriments.
btnSearch.addEventListener("click", (e) => {
  e.preventDefault();
  //validate if empty fields and clean the inputs if needed
  if (roomQty.value === "" || minSquaredMeters.value === "" || maxSquaredMeters.value === "") {
    alert("Tienes que rellenar todos los campos");
    roomQty.value = "";
    minSquaredMeters.value = "";
    maxSquaredMeters.value = "";
  } else {
    //filter all the properties to meet the requeriments of the inputs values
    const filteredPropiedades = propiedadesJSON.filter(
      (propiedad) =>
        propiedad.rooms == roomQty.value &&
        propiedad.m >= minSquaredMeters.value &&
        propiedad.m <= maxSquaredMeters.value
    );

    let newDivPropiedades = "";

    for (let propiedad of filteredPropiedades) {
      newDivPropiedades += writePropiedad(propiedad);
    }
    //update the total
    totalSearch.textContent = filteredPropiedades.length;

    //write all the new propiedades in the div
    divPropiedades.innerHTML = newDivPropiedades;
  }
});
