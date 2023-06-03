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


function somma(n1,n2){
return n1+n2; // return restituisce il valore relativo all'esecizione della funzione e la interrompe
}

console.log(somma(23,-47)) // 23 e 47 sono gli ARGOMENTI assefgnati ai parametri


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