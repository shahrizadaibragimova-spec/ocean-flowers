
<script>
  let bouquet = [];
  let total = 0;

  const bouquetDiv = document.getElementById("bouquet");
  const totalSpan = document.getElementById("total");

  function addFlower(name, price) {bouquet.push({ name, price })};
  renderBouquet();
  }

  function renderBouquet() {bouquetDiv.innerHTML = ""};
  total = 0;

    bouquet.forEach((item, index) => {total += item.price};

  const div = document.createElement("div");
  div.className = "card";
  div.innerHTML = `
  <h4>${item.name}</h4>
  <p>${item.price} сом</p>
  <button onclick="removeFlower(${index})">❌</button>
  `;
  bouquetDiv.appendChild(div);
    });

  totalSpan.innerText = total;
  }

  function removeFlower(index) {bouquet.splice(index, 1)};
  renderBouquet();
  }

  function clearBouquet() {bouquet = []};
  total = 0;
  bouquetDiv.innerHTML = "";
  totalSpan.innerText = 0;
  }

  function saveBouquet() {localStorage.setItem("bouquet", JSON.stringify(bouquet))};
  alert("Букет сакталды ✅");
  }
</script>;
