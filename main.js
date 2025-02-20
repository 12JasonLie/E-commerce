let cartItems = [];

const addToCart = document.querySelectorAll('.addToCart');

addToCart.forEach(btn => {
    btn.addEventListener('click', () => {
        const priceText = btn.parentElement.querySelector('h4').textContent;
        const priceMatch = priceText.match(/^Rp\.(\d+)$/);
        const price = parseFloat(priceMatch[1]);

        const product = {
            name: btn.parentElement.querySelector('h3').textContent,
            price,
            quantity: 1
        };
        // Handle existing products in the cart
        const existingCartItem = cartItems.find(item => item.name === product.name);
        if (existingCartItem) {
            existingCartItem.quantity++;
        } else {
            cartItems.push(product);
        }
        updateCartDisplay();
    });
});

//cancel order
function Cancelorder() {
    cartItems=[]
    updateCartDisplay();
}

//ucd
function updateCartDisplay() {
    const cartItemsElement = document.querySelector('.cart-items');
    cartItemsElement.innerHTML = '';

    cartItems.forEach(item => {
        const cartItemElement = document.createElement('li');
        cartItemElement.textContent = `${item.name} x ${item.quantity} - Rp.${(item.price * item.quantity).toFixed(0)}`; // Ensure consistent formatting
        cartItemsElement.appendChild(cartItemElement);
    });

    const totalElement = document.getElementById('total1');
    const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    totalElement.textContent = `${total.toFixed(0)}`; // Format total consistently
}

//onclick checkout
function checkout1() {
  var pemastian = confirm ("Are you sure to proceed")
  if (pemastian == true ) {
  var metode_pembayaran = document.querySelector ("#checkout")
  let tombol1 = document.createElement ("button")
  tombol1.innerText = "Pay Later";
  tombol1.onclick = ()=> {paylater()};
  metode_pembayaran.appendChild (tombol1)

  let tombol2 = document.createElement ("button")
  tombol2.innerText = "Pay Cash";
  tombol2.onclick = ()=> {paycash()};
  metode_pembayaran.appendChild (tombol2)

  let tombol3 = document.createElement ("button")
  tombol3.innerText = "Qris";
  tombol3.onclick = ()=> {Qris()};
  metode_pembayaran.appendChild (tombol3)

  let tombol4 = document.createElement ("button")
  tombol4.innerText = "Cancel";
  tombol4.onclick = ()=> {Cancel()};
  metode_pembayaran.appendChild (tombol4)
  }
  }

//cancel checkout
function Cancel() {
    var paylater = document.querySelector("#checkout")
    paylater.innerHTML = ""

}

//fiturpaylater
function paylater() {
    var paylater = document.querySelector("#box")
    paylater.innerHTML = ""
    paylater.innerHTML = "<input type='text' placeholder='nama'>"
                         +"<input type='text' placeholder='kelas dan no absen'>"
                         +"<input type='date'>"
                         + "<button> Submit </button> "

}

//fitur paycash
function paycash() {
    alert("Tolong tunjukkan device ini ke kasir")
    var paylater = document.querySelector("#checkout")
    paylater.innerHTML = ""
}

//fitur qris (pakai modal)
    const modal = document.querySelector("#modal");
    const openModal = document.querySelector(".open-button");
    const closeModal = document.querySelector(".close-button");

    function Qris() {
        modal.showModal();
    }
   
    closeModal.addEventListener("click", () => {
      modal.close();
    });

    //search button
    function searchProducts() {
        var search = document.querySelector("#search").value;
        var search2 = search.toLowerCase();
      //replace spasi ke - tidak jalan di codepen, tapi jalan di vscode  
      // var search3 = search2.replaceAll(" ", "-");
        window.location.href = "#"+search2
    }