// ===== ГҮЛДӨРДҮ САКТОО =====
let flowerCart = JSON.parse(localStorage.getItem("flowerCart")) || [];
let flowerTotal = JSON.parse(localStorage.getItem("flowerTotal")) || 0;

// ===== ГҮЛ КОШУУ =====
function addFlower(name, price) {
  price = parseInt(price);

  flowerCart.push({ name, price });
  flowerTotal += price;

  localStorage.setItem("flowerCart", JSON.stringify(flowerCart));
  localStorage.setItem("flowerTotal", flowerTotal);

  renderRoseCart();
}

// ===== ROSE.HTML ҮЧҮН =====
function renderRoseCart() {
  const cart = document.getElementById("flowerCart");
  const total = document.getElementById("flowerTotal");

  if (!cart || !total) return;

  cart.innerHTML = "";

  flowerCart.forEach(flower => {
    const li = document.createElement("li");
    li.textContent = `${flower.name} — ${flower.price} сом`;
    cart.appendChild(li);
  });

  total.textContent = flowerTotal;
}

// ===== BUKET.HTML ҮЧҮН =====
function renderBuket() {
  const list = document.getElementById("buketFlowers");
  const total = document.getElementById("buketTotal");

  if (!list || !total) return;

  list.innerHTML = "";

  if (flowerCart.length === 0) {
    list.innerHTML = "<li>Гүл тандалган эмес</li>";
  } else {
    flowerCart.forEach(flower => {
      const li = document.createElement("li");
      li.textContent = `${flower.name} — ${flower.price} сом`;
      list.appendChild(li);
    });
  }

  total.textContent = flowerTotal;
}

// ===== ТАЗАЛОО =====
function clearBuket() {
  localStorage.clear();
  location.reload();
}

// ===== АВТО ЖҮКТӨӨ =====
renderRoseCart();
renderBuket();

function showMessage(text, type) {
  const msg = document.getElementById("message");
  if (!msg) return;

  msg.textContent = text;
  msg.style.color = type === "success" ? "green" : "red";

  // 3 секунддан кийин жоголот
  setTimeout(() => {
    msg.textContent = "";
  }, 3000);
}

// ===== БУКЕТТИ САКТОО =====
function saveBuket() {
  if (flowerCart.length === 0) {
    showMessage("❌ Гүл тандалган эмес", "error");
    return;
  }

  showMessage("✅ Букет ийгиликтүү сакталды", "success");
}
