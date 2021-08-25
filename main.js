const bears = [
 {
  name: "Cubs",
  speed: 30,
  color: "Asiatic Black",
  imageUrl:
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCi5Z9hW_MMTwY9SYS4bTpAVOXMY0_F9vAfA&usqp=CAU",
  tracker: "Lady1",
},
{
	name: "Baby",
	speed: 20,
	color: "Earl Grey",
	imageUrl:
	"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgDT_LM1hkBuvctYbszbeAiDw1X8Dczmg6sZeVxOnvWeTCh9jpnD5sIjsYRjJl3_h9WBQ&usqp=CAU",
	tracker: "Lady2",
  },
  {
	name: "Brown Bear ",
	speed: 10,
	color: "Doo Doo Brown",
	imageUrl:
	"https://gray-ktuu-prod.cdn.arcpublishing.com/resizer/7Nte-pnAUYTOz6YpzYUsI06yTLc=/1200x675/smart/filters:quality(85)/cloudfront-us-east-1.images.arcpublishing.com/gray/W2NM36TFONGQ5LFCEBHBQJ2FVY.jpg",
	tracker: "Lady3",
  },
];
  
  const renderToDom = (divId, textToPrint) => {
    const selectedDiv = document.querySelector(divId);
    selectedDiv.innerHTML = textToPrint;
  };
  // display buttons on the DOM
  const buttons = () => {
    const domString = `
    <button type="button" class="btn btn-primary" id="All">All</button>
    <button type="button" class="btn btn-secondary" id="Lady1">Tracker1</button>
    <button type="button" class="btn btn-success" id="Lady2">Tracker2</button>
    <button type="button" class="btn btn-danger" id="Lady3">Tracker3</button>
    `;
  
    renderToDom("#buttonContainer", domString);
  };
  
  // display form on the DOM
  const bearForm = () => {
    const domString = `
      <form id="bearFormForm">
        <div class="mb-3">
          <label for="name" class="form-label">Name</label>
          <input required type="text" class="form-control" id="name">
       </div>
        <div class="mb-3">
        <label for="speed" class="form-label">Speed</label>
        <input required type="number" class="form-control" id="speed">
       </div>
       <div class="mb-3">
          <label for="color" class="form-label">Color</label>
          <input required type="text" class="form-control" id="color">
       </div>
       <div class="mb-3">
          <label for="imageUrl" class="form-label">Image URL</label>
          <input required type="url" class="form-control" id="imageUrl">
       </div>
       <div class="mb-3">
          <label for="tracker" class="form-label">Tracker</label>
          <input required type="text" class="form-control" id="tracker">
        </div>
       <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    `;
  
    renderToDom("#bearForm", domString);
  };
  
  const handleFormSubmit = (event) => {
    event.preventDefault();
  
    // TODO: Update the Id's in thie object
    const newBear = {
      name: document.querySelector("#name").value,
      speed: document.querySelector("#speed").value,
      color: document.querySelector("#color").value,
      imageUrl: document.querySelector("#imageUrl").value,
      tracker: document.querySelector("#tracker").value,
    
    };
	var bear ="taco"
    bears.push(newBear);
    bearBuilder(bears);
    //TODO: Add obj in newBear to the Bear Array!
    // TODO: Render bear with the new bear to the DOM
  
    console.log(bears);
  };
  
  const deleteBear = (event) => {
    const targetId = event.target.id;
    const targetType = event.target.type;
  
    if (targetType === "button") {
      bears.splice(targetId, 1);
      bearBuilder(bears);
    }
  };
  
  const bearFormEvents = () => {
    const bearFormElement = document.querySelector("#bearFormForm");
    bearFormElement.addEventListener("submit", handleFormSubmit);
  };
  
  const filterBears = (array, tracker) => {
    return array.filter((bearObject) => bearObject.tracker === tracker);
  };
  
  const handleButtonClick = (event) => {
    if (event.target.id === "All") {
      bearBuilder(bears);
    }
    if (event.target.id === "Lady1") {
      const lad1Bears = filterBears(bears, event.target.id);
      bearBuilder(lad1Bears);
    }
    if (event.target.id === "Lady2") {
      const lad2Bears = filterBears(bears, event.target.id);
      bearBuilder(lad2Bears);
    }
    if (event.target.id === "Lady3") {
      const lad3Bear = filterBears(bears, event.target.id);
     bearBuilder(lad3Bear);
    }
  };
  
  const bearBuilder = (bearsArray) => {
    let domString = "";
    bearsArray.forEach((bear, i) => {
      domString += `
      <div class="card" style="width: 18rem;">
        <img src="${bear.imageUrl}" class="card-img-top" alt="${bear.name}">
        <div class="card-body">
          <h5 class="card-title">${bear.name}</h5>
          <p class="card-text">${bear.tracker}</p>
          <button type="button" id=${i} class="btn btn-primary">Delete</button>
        </div>
      </div>
      `;
    });
  
    renderToDom("#bearsContainer", domString);
  };
  
  // Handles the button events
  const buttonEvents = () => {
    document
      .querySelector("#buttonContainer")
      .addEventListener("click", handleButtonClick);
  
    document.querySelector("#bearsContainer").addEventListener("click", deleteBear);
  };
  
  const init = () => {
    // this starts the app
    buttons(); // PUT DOM ELEMENTS FIRST
    buttonEvents(); // EVENT LISTNERS AFTER
    bearBuilder(bears);
    bearForm();
    bearFormEvents();
  };
  
  init();
  