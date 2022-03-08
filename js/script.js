//-----------------membuat class------------------

        class Gempa {

            //-----------------membuat constructor------------------

            constructor(lokasi, skala) {
                this.lokasi = lokasi;
                this.skala = skala;
            }

            mencetak() {

                var dampak = "";

                if (this.skala <= 2) {
                    dampak = "Dampaknya Tidak Terasa";
                } else if (this.skala > 2 && this.skala <= 4) {
                    dampak = "Dampaknya Bangunan Retak - Retak";
                } else if (this.skala > 4 && this.skala <= 6) {
                    dampak = "Dampaknya Bangunan Roboh";
                } else {
                    dampak = "Dampaknya Bangunan Roboh Dan Berpotensi Tsunami";
                }

                var baris = `<tr>
                                <td>${this.lokasi}</td>
                                <td class = "celCenter">${this.skala}</td>
                                <td>${dampak}</td>
                            </tr>`;
                document.getElementById("cetak").innerHTML += baris;
            }
        }

        //---------------ciptakan object------------------

        var gempa = {
            "Jakarta": 1,
            "Bandung": 2,
            "Semarang": 3,
            "Yogyakarta": 4,
            "Surabaya": 5,
            "Bali": 6,
            "Jogja": 7,
            "Solo": 6,
            "Malang": 13,
            "Pekanbaru": 1
        };

        //---------------mencetak object------------------

        for (let gmp of Object.keys(gempa)) {
            let G = new Gempa(gmp, gempa[gmp]);
            G.mencetak();
        }