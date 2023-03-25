let passwordLenght = document.getElementById("passwordLength");
let password = document.getElementById("password");
// let saveButton = document.getElementById("saveButton");

const generatorPassword = (len) => {
  const lowerAlphabet = "abcdefghijklmnopqrstuvwxyz";
  const upperalphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const number = "123456890";
  const symbol = "!@#$%^*(){}<>?'|,./[]-_=+:;'`";

  const data = lowerAlphabet + upperalphabet + number + symbol;
  let generator = "";
  for (let index = 0; index < len; index++) {
    generator += data[~~(Math.random() * data.length)];
  }
  return generator;
};

const getPassword = () => {
  const newPassowrd = generatorPassword(passwordLenght.value);
  password.value = newPassowrd;
};

// const savePassword = () => {
//   document.title = password.value;
//   saveButton.setAttribute(
//     "href",
//     "data:text/plain;charset=utf-8," +
//       encodeURIComponent(`password saya: ${document.title}`)
//   );
//   saveButton.setAttribute("download", "MyPasswordGeneratorLOG.txt");
// };

function download(filename, text) {
  var element = document.createElement("a");
  element.setAttribute(
    "href",
    "data:text/plain;charset=utf-8," + encodeURIComponent(text)
  );
  element.setAttribute("download", filename);

  element.style.display = "none";
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}

// Start file download.
document.getElementById("saveButton").addEventListener(
  "click",
  function () {
    // Generate download of hello.txt file with some content
    const text = `Password saya: ${password.value}`;
    var filename = "MyPasswordGenerator.txt";

    download(filename, text);
  },
  false
);
