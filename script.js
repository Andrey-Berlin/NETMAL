let seeText = document.getElementById('seeText');

seeText.innerHTML = `

<p id="inText"></p>
 <!--p id ='p1'>©Postyk:)</p-->
`;

seeText.style.border = 'thick double #041b24c4';

let inputText = document.getElementById('inputText');

inputText.onclick = function () {
 
 let text = document.getElementById("text").value;

let inText = document.getElementById("inText");

    inText.innerHTML = text; 
  
};

function copyToClip(){

  let text2 = document.getElementById("text");
  text2.select();

  document.execCommand("Copy");

  console.log("copied");
}

let saveFile = document.getElementById('save');

saveFile.onclick = download;


function download() {

    let link = document.createElement('a');

    let str = document.getElementById("text").value;

    str = str.split("\u000A").join("\u000D\u000A");

    bl = new Blob([str]);

    link.href = URL.createObjectURL(bl);

    if (document.getElementById("text").name != "") {

        link.download = document.getElementById("text").name;

    } else {

        link.download = "text.txt";
    }

    let e = new MouseEvent("click");

    link.dispatchEvent(e);
}
//Открыть файл
let text1 = document.getElementById('text1');

text1.onchange = function() { 

    readfile(this.files) 

};

function readfile(files) {

    let text = files[0];

    document.getElementById("text1").name = text.name;

    console.dir(text);

    let reader = new FileReader();

    reader.onload = function(e) {

        document.getElementById("text").value = e.target.result;

    };

    reader.readAsText(text);
};




