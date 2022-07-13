function BintangSegitigaAtas(boolean) {
    let Hasil = "";
    for (let i = 0; i < boolean; i++) {
        for (let l = 0; l <= i; l++) {
            Hasil += "* ";
        }
        Hasil += "\n";
    }
    return Hasil;
}

console.log(BintangSegitigaAtas(6));

function BintangSegitigaBawah(boolean) {
    let Hasil = "";
    for (let i = 0; i < boolean; i++) {
        for (let l = boolean; l > i; l++) {
            Hasil += "* ";
        }
        Hasil += "\n";
    }
    return Hasil;
}

console.log(BintangSegitigaBawah(6));