var data1 = [1, 1, 1, 2, 2, 4, 1, 1 ]
var data2 = [2, 1, 2, 2, 2, 8, 1, 1 ]
var data3 = [3, 3, 3, 3, 2, 4, 1, 1 ]

function NilaiTerbanyak(str) {
    let x = 1;
    let y = 0;

    let number;
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < str.length; j++) {
            if (str[i] == str[j]) {
                y++;
                if (y > x) {
                    x = y;
                    number = str[i];
                }
            }
        }
        y =0;
    }
    return number;
}

function countNumber(arr, value) {
    return arr.filter((Angka) => (Angka === value)).length
}

console.log("Total Data Yang Paling Banyak Keluar Adalah : ", NilaiTerbanyak(data1), "Dengan Jumlah ", countNumber(data1, 1))
console.log("Total Data Yang Paling Banyak Keluar Adalah : ", NilaiTerbanyak(data2), "Dengan Jumlah ", countNumber(data2, 2))
console.log("Total Data Yang Paling Banyak Keluar Adalah : ", NilaiTerbanyak(data3), "Dengan Jumlah ", countNumber(data3, 3))
