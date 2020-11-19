function chatbox(){
    let pesan = document.getElementById("pesan");
    let output = document.getElementById("output");
    let button = document.getElementById("button");

    button.addEventListener("click", function(){
        let pesan_baru = document.createElement("p");//membuat elemen pada pesan yg akan di cetak nanti contohnya "p".
        pesan_baru.innerHTML = output.value;
        pesan.appendChild(pesan_baru);//menampilkan value pesan_baru ke browser.
        output.value = "";//agar setiap value yg di masukan tetap berjumlah satu
    });
}
