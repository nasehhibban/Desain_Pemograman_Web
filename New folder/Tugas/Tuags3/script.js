function tampil(){
    alert("Halo");
} //memunculkan button dengan nama "Halo"

let warna = document.getElementById('warna');
//-

warna.addEventListener('change', (event) =>{
    document.body.style.backgroundColor = warna.value
}); //untuk mengubah bg 

let x = window.prompt("Masukan Nama Anda");
window.alert('Halo~' + x);
//untuk memunculkan notif dan memasukan nama