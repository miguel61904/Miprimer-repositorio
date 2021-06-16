let carsList = [
    {
      marca: "reanult",
      modelo: "reverse",
      año: 2021
    },
    {
      marca: "",
      modelo: "",
      año: ""
    },
    {
      marca: "",
      modelo: "",
      año: ""
    },
  ];
  

let updateFlag = false;
let updateIndex = null;

  let carsListUI = document.getElementById("carList");
  let carForm = document.getElementById("addCar");
  
  const renderList = () => {
      carsListUI.innerHTML = "";
      carArray = carsList;
  carArray.forEach((cars, index) => {
    const carContDiv = document.createElement("div");
    carContDiv.setAttribute("class", "carCont");
    carsListUI.appendChild(carContDiv) ;
    
    const infoCar = document.createElement("div");
    infoCar.setAttribute("class", "userInfo");
    carContDiv.appendChild(infoCar);

   const marcaCarro = document.createElement("h3");
   const modeloCarro = document.createElement("h3");
   const carroYear = document.createElement("h3");
   const checkCars =  document.createElement("input");
   checkCars.type="checkbox";
   marcaCarro.innerText = `${cars.marca}`;
   modeloCarro.innerText = `${cars.modelo}`;
   carroYear.innerText = `${cars.año}`;
   

 
   infoCar.appendChild(marcaCarro);
   infoCar.appendChild(modeloCarro);
   infoCar.appendChild(carroYear);
   infoCar.appendChild(checkCars);

   const actionButtons = document.createElement("div");
   actionButtons.setAttribute("class", "actions");
   carContDiv.append(actionButtons);

   const updateBtn = document.createElement("button");

   updateBtn.setAttribute("class", "update");
   updateBtn.addEventListener("click", () => updateCars(index, cars));
   updateBtn.setAttribute("id", "update");
   updateBtn.innerText = "Editar";

   const deleteBtn = document.createElement("button");

   deleteBtn.setAttribute("class", "delete");
   deleteBtn.addEventListener("click", () => elminarBtn(index));
   deleteBtn.innerHTML = "Eliminar";
   deleteBtn.setAttribute("id", "delete");

   actionButtons.appendChild(updateBtn);
   actionButtons.appendChild(deleteBtn);

   let elimAll = document.getElementById("btnEliminar");
   elimAll.addEventListener("click", () => eliminarAll(index));

   });
};


const createUpdateCar = event =>{
    event.preventDefault();
    if( updateFlag){
       let updateCars = {
        marca: document.getElementById("vehiculo").value,
        modelo: document.getElementById("modelo").value,
        año: document.getElementById("year").value
       };    
       carsList[updateIndex] = updateCars;
  
       updateFlag = false;
       updateIndex = null;
       renderList();
     } else {
        let cars = {
            marca: document.getElementById("vehiculo").value,
            modelo: document.getElementById("modelo").value,
            año: document.getElementById("year").value
          };
        carsList.push(cars);
        renderList();
     }
     carForm.reset();
};

const updateCars = (index, cars) => {
    document.getElementById("vehiculo").value = cars.marca;
    document.getElementById("modelo").value = cars.modelo;
    document.getElementById("year").value = cars.año;
    updateFlag = true;
    updateIndex = index;
  };
  
  const elminarBtn = index => {
    carsList.splice(index, 1);
    renderList();
  };

  const eliminarAll = index => {
    carsList.splice(0);
    renderList();
  };
  

carForm.addEventListener("submit", createUpdateCar);
document.addEventListener("DOMContentLoaded", renderList);

