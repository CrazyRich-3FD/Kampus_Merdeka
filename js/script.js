function kosong1() {
    let frm = document.getElementById("kalkulator");
    frm.a1.value = "";
}

function kosong2() {
    let frm = document.getElementById("kalkulator");
    frm.a2.value = "";
}

function reset() {
    let frm = document.getElementById("kalkulator");
    frm.a1.value = "0";
    frm.a2.value = "0";
    frm.hasil.value = "0";
}

function hitung(hitung) {
    let frm = document.getElementById("kalkulator");
    let a1 = parseInt(frm.a1.value);
    let a2 = parseInt(frm.a2.value);
    let hasil;

    let formatNilai = new Intl.NumberFormat('id-ID');

switch(hitung) {
    case "+": hasil = a1 + a2; break;
    case "-": hasil = a1 - a2; break;
    case "*": hasil = a1 * a2; break;
    case "/": hasil = a1 / a2; break;
    case "^": hasil = a1 ** a2; break;
     default: hasil = "0";
    }

    if (isNaN(a1) || a1 == "" || isNaN(a2) || a2 == "") {
        alert ("Data Kosong / Inputan Harus Berupa Angka");
        reset();
    }
    else {
        frm.hasil.value = formatNilai.format(hasil);
    }

}

