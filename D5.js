// definizione di un oggetto 

const student = { // l'oggetto si 
    name: "Aldo",
    surname: "Altomare", // ogni proprietà ha un nome ed un valore
    age: 31,
    class:"fs0523",
    hasWebcam: false
}


console.log(student.name) //dot notation

console.log(student["surname"]) //square brackets notation

console.log(student.age)

console.log(student["hasWebcam"])


student["email"] = "aldoaltomare91@gmail.com" // aggiungere proprietà all'oggetto
// alternativa con dot notation --> student.email = "aldoaltomare91@gmail.com"
console.log(student.email)


delete student["hasWebcam"] // eliminare proprietà dell'oggetto
// alternativa con dot notation --> delete student.hasWebcam
console.log(student.hasWebcam)


// const student2 = student // copiare un oggetto in questo modo crea qualche problema
// student2.name = "Beppe"

console.log(student.name) // js usa una reference nella stessa area di memoria per cui cambiando il nuovo oggetto si cambia anche l'originale

const student3 = Object.assign(student)

console.log(student.name)

// oppure

const student4 = { ...student}

console.log(student4.name)

// questi invece sono gli array, ossia liste di valori racchiusi tra parentesi quadre

const animali = ["cane", "gatto", "pappagallo", "tigre", "leone"]
console.log(animali)
console.log(animali[2]) // per richiamare un elemento dell'array si usa la sua posizione, anche detta "indice", tra parentesi quadre

animali.sort()
console.log(animali)

if(animali[3] === "pappagallo"){
console.log("è un pappagallo")
}else if(animali[3] === "tigre"){
    console.log("è una tigre")
}else{console.log("non è un pappagallo nè una tigre")}


// FUNZIONI keyword dedicata "function", nome, parametri (input), {body}
//  definire una funzione significa assegnarle un nome e indicare le istruzioni da eseguire
//  invocare una funzione significa richiamarla tramite il nome, se non invocata non ha effetto

console.log(somma(23,-47)) // 23 e 47 sono gli ARGOMENTI assefgnati ai parametri

function somma(n1,n2){
return n1+n2; // return restituisce il valore relativo all'esecizione della funzione e la interrompe
}

console.log(somma(23,-47)) // 23 e 47 sono gli ARGOMENTI assefgnati ai parametri


// METODI DI MANIPOLAZIONE DELLE STRINGHE
const saluto = "Ciao studenti. Salutiamo tutti gli studenti"
const pos = saluto.indexOf("studenti",10) // indexOf ci permette di trovare la prima posizione di quel pezzo di stringa (se inseriamo il secondo argomento indichiamo la posizione da cui partire per la ricerca )
const pos1 = saluto.lastIndexOf("studenti",0) // lastIndexOf ci permette di trovare l'ultima posizione di quel pezzo di stringa
const pos2 = saluto.search("Ciao") //search() non accetta secondo parametro di posizione
const lunghezzaStringa = saluto.length


console.log(pos)
console.log(pos1)
console.log(pos2)
console.log(lunghezzaStringa) // inclusi gli spazi


/* METODI PER ESTRARRE PARTE DI STRINGHE

slice() accetta due parametri: posizione di inizio e posizione di fine estrazione
                    slice(10,15) / slice(-10,-15) / slice(8)

substring() analogo a slice() ma non accetta parametri negativi
                    substring(10,15) / substring(8)

substr() analogo a slice() ma il secondo parametro indica la lunghezza esatta della stringa da estrarre
                    substr(10,15) / substr(-10) / substr(8)

*/

const slice1 = saluto.slice(7,12)
const slice2 = saluto.slice(-12, -9)
const slice3 = saluto.slice(7)
const substring1 = saluto.substring(7,12)
// const substring2 = saluto.substring(-12, -9) // non funziona
const substring3 = saluto.substring(7)
const substr1 = saluto.substr(7,12)
const substr2 = saluto.substr(-12)
const substr3 = saluto.substr(7)

console.log(slice1)
console.log(slice2)
console.log(slice3)
console.log(substring1)
// console.log(substring2) // non funziona
console.log(substring3)
console.log(substr1)
console.log(substr2)
console.log(substr3)


/* METODI PER SOSTITUIRE PARTE DI STRINGHE

replace("string0","string1") accetta due parametri: parola da sostituire e parola 
                    sostituisce solo la prima occorrenza
                    case sensitive

replaceAll("string0","string1")
                    sostituisce tutte le occorrenze
*/

const newStr = saluto.replaceAll("studenti","discenti")
const newStr1 = saluto.replace("Studenti//","discenti")
console.log(newStr)
console.log(newStr1)

/* METODI PER MODIFICARE I CARATTERI

toUpperCase() trasforma riga in maiuscolo

toLowerCase() trasforma riga in minuscolo

*/

const newStr2 = saluto.toUpperCase()
const newStr3 = saluto.toLowerCase()
console.log(newStr2)
console.log(newStr3)


/* METODI PER UNIRE I CARATTERI

string.concat("stringToAdd") unisce alla stringa iniziale la stringa tra parentesi

*/

const newStr4 = saluto.concat(" che si chiamano Aldo")
console.log(newStr4)






// const i = 3

// switch(i){
//     case 0:
//         console.log("i è zero");
//         break;
//     case 1:
//         console.log("i è uno");
//         break;
//     case 2:
//         console.log("i è due");
//         break;
//     default: 
//         console.log("i non è 0, 1, o 2")}

// let i = 0

// while (i<=10){
//     console.log(i)
//     i++
// }

// alternativa

// let j = 0

// do{
//     console.log(j)
//     j++
// }while (j<=10)

// for loop

// const numeri = [4,9,16,25,29]
// let somma = 0

// for(let a = 0; a < numeri.length; a++){
//     somma += numeri[a];
// }

// console.log("la somma dei numeri è",somma)


// for(let a = 0; a < numeri.length; a++){ --> for richiede tre elementi:
// 1 inizializzazione, 2 condizione, 3 incremento
//     somma += numeri[a];
// }