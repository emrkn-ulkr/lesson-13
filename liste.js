let isimler = ["Ali", "Ayşe", "Mehmet", "Fatma", "Ahmet"];
let terstenIsimler = ["Ali", "Ayşe", "Mehmet", "Fatma", "Ahmet"];
sayac = 0;
while (sayac < isimler.length) {
    console.log(isimler[sayac]);
    sayac++;
}

let terstenIsımler = isimler.reverse();
console.log(terstenIsımler);

//while ile tersten yazdırma

let sayac1 = terstenIsimler.length - 1;
while (sayac1 >= 0) {
    console.log(terstenIsimler[sayac1]);
    sayac1--;
}