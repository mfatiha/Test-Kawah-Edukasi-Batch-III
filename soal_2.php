<?php
    $input1 = "hallo jesika24 selamat datang!"
    $input2 = "hallo anggun selamat datang!"
    $input3 = "hallo ** selamat datang!"
    $input4 = "hallo Mariage889120! selamat datang!"

    function validasi($str) {
        if (preg_match('#[0-9]#',$str)) {
            $str = preg_replace("/[^0-9]/","",$str);
            echo "Sistem Kami Menolak Untuk Inputan Berisikan Angkat : ".$str;
        } else {
            echo "Sistem Kami Memeriksa Data Anda Valid Dengan Ketentuan Kami Dengan Inputan : ".$str;
        }
    }

    echo "Hasil Inputan : ".$input1."<br>";
    // Melakukan Validasi
    validasi($input1);
    // Memberikan Jarak
    echo "<br>";
    echo "<br>";
    echo "Hasil Inputan : ".$input2."<br>";
    // Melakukan Validasi
    validasi($input2);
    // Memberikan Jarak
    echo "<br>";
    echo "<br>";
    echo "Hasil Inputan : ".$input3."<br>";
    // Melakukan Validasi
    validasi($input3);
    // Memberikan Jarak
    echo "<br>";
    echo "<br>";
    echo "Hasil Inputan : ".$input4."<br>";
    // Melakukan Validasi
    validasi($input4);
    // Memberikan Jarak
    echo "<br>";
?>