// TODO: Do some error checking for the champ number
// TODO: Allow users to select champs they own, and export a list of them

var champArr = [];

// Pull champ data from json file
const getChampData = async () => {
  const champRequest = await fetch('champion.json');
  const champ = await champRequest.json();

  // Loop through champ objects, assign champ name to 
  // an outside array for manipulation
  for (const key of Object.keys(champ.data)) {
    champArr.push(`${champ.data[key].image.full}`);
  }
}

function shuffleChampList(arr) {
  // spread operator 
  // Making a dup of a
  // c = copy (of original array)
  let c = [...arr];

  // Looping through 
  for (let i=c.length-1;i>0;i--) {
    // Selecting a random index
    const j = Math.floor(Math.random() * (i + 1));
    // Swapping the current array index with the randomized index
    [c[i], c[j]] = [c[j], c[i]];
  }
  return c;
}

function createChampImg(champ) {
  let img = document.createElement('img');
  img.className = 'rounded-circle';
  img.src = champ;
  document.getElementById("champArea").appendChild(img);
}

function getAllChamps() {
  document.getElementById("champArea").innerHTML = "</br>";

  for(let i=0;i<champArr.length;i++) {
    let imgLocation = (`./img/${champArr[i]}`);
    createChampImg(imgLocation);
  }
}

function getRandomChamps(e) {
  document.getElementById("champArea").innerHTML = "";

  let inputNum = document.getElementById("number").value;
  let randoArr = shuffleChampList(champArr);

  for(let i=0;i<inputNum;i++) {
    let imgLocation = (`./img/${randoArr[i]}`);
    createChampImg(imgLocation);
  }
  return false;
}


