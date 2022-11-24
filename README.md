# Arrays & Objects Challenge - Desafio Latam

The meaning of this challenge is to validate JS knowledge on objects and arrays by modifying the DOM.

Site of deploy: https://arekkusu17.github.io/arreglos-y-objetos-Desafio-Latam/



## Work Done
- Write the html structure and the script.
It was easier to write first the script and modify the DOM as needed for every task, I isolated my work by working on only a task each time, this was very helpful to avoid mistakes in the conditionals statements. The styles were made later    

I decided to write a function that would let me write a Propiedad reusing HTML and having and object as an argument. Since I already knew how was the object written, i could use the Object.keys
```
objectExample={
    name: "text",
    description:"text",
    src: "url-text",
    rooms: number,
    m: number
}


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
```
Then i did a For Loop to iterate through the whole array of objects.
- Add Event Listeneres.
First thing to do was check if all the fields had an input value. Had to add an alert as needed.
 ```
if (roomQty.value === "" || minSquaredMeters.value === "" || maxSquaredMeters.value === "")
 ```
Once it was checked, the it was needed to filter the Propiedades to meet the requeriments : an exact quantity of rooms and squareds meters between a Min and Max.
```
const filteredPropiedades = propiedadesJSON.filter(
      (propiedad) =>
        propiedad.rooms == roomQty.value &&
        propiedad.m >= minSquaredMeters.value &&
        propiedad.m <= maxSquaredMeters.value
    );
```
Finally had to write again the right Propiedades using the function and the filtered array
```
for (let propiedad of filteredPropiedades) {
      newDivPropiedades += writePropiedad(propiedad);
    }
```
- Add the Readme.
