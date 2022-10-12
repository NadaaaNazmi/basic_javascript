//Rabu, 12 oktober 2022
var color = 6
/*
  1. Light
  2. Dark
  3. Nocturne
  4. Terminal
  5. Indigo
  */
switch (color) {
    case 1:
        console.log("Light")
        break
    case 2:
        console.log("Dark")
        break
    case 3:
        console.log("Nocturne")
        break
    case 4:
        console.log("Terminal")
        break
    default:
        console.log("indigo")

    //ternary
    console.log( color == 1 ? "Light" :
    (color == 2 ? "Dark":
    (color == 3 ? "Nocturne" :
    color == 4 ? "Terminal" : "Indigo")))
}