console.log('starting tweak');
const product1 = document.getElementById("product1");
const wrapper = document.getElementById("wrapper");
const newBox = document.getElementById("newBox");
const sale = document.getElementById("sale");
const cta = document.querySelector('.cta');
const sort = document.querySelector('.sort-container');
const productBox1 = document.getElementById("productBox1");
const productBox2 = document.getElementById("productBox2");
const productBox3 = document.getElementById("productBox3");
const productBox4 = document.getElementById("productBox4");
const productBox5 = document.getElementById("productBox5");
const productBox6 = document.getElementById("productBox6");

// CARA CLOSE KE 2

function close(nomor) {
  window.location.reload();
  }

function getDetail(nomor) {
  console.log('produk: ', nomor);
  newBox.style.display = "block"
  wrapper.style.display = "none"
  sale.style.display = "none"
  // cta.style.display = "none"
  sort.style.display = "none"

if (nomor === 1) {
  productBox1.style.display = "flex"
} else if (nomor === 2) {
  productBox2.style.display = "flex"
} else if (nomor === 3) {
  productBox3.style.display = "flex"
} else if (nomor === 4) {
  productBox4.style.display = "flex"
} else if (nomor === 5) {
  productBox5.style.display = "flex"
} else {
  productBox6.style.display = "flex"
}

}


const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');
const modelViewer = document.querySelector('model-viewer');

menuToggle.addEventListener('click', function() {
    nav.classList.toggle('slide');
    modelViewer.classList.toggle('unactive');
});

let loader = document.getElementById('preloader');

window.addEventListener('load', function() {
  loader.style.display = "none";
});
