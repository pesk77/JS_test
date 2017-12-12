var ukoly;

ukoly = ["Zaplatit účet za telefon.", "Npasat nejprodávanější román.", "Jít na procházku se psem."];

var klic, data;
data = {
    krestniJmeno: "James",
    prijmeni: "Kirk",
    povolani: "kapitán"
}
for (klic in data) {
    alert(klic + " je " + data[klic]);
}
