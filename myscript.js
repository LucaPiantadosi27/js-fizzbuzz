const tableElement = document.querySelector("#table");

for (let i = 1; i <= 100; i++) {

    // inizializzo una variabile  vuota
    let output = "";

    // modifico html
    const newElement = document.createElement("div");



    if(i % 3 == 0) {

        output = "Fizz";

        // modifico la classe
        newElement.className = "fizz ";

    }
    
    // per i multipli di 5, AGGIUNGO  la parola "Buzz"
   
    if (i % 5 == 0) {   

        output += "Buzz";

        // modifico la classe
        newElement.className += "buzz ";
    } 
    
    
    if(output == "") {

        output = i;

    }

    console.log(output);

    newElement.innerText = output;

    //aggiungo una classe 
    newElement.className += "square";

    tableElement.append(newElement);
}