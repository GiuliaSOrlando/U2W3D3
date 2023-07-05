const getMyData = function () {
  fetch("https://striveschool-api.herokuapp.com/books")
    .then((res) => {
      if (res.ok) {
        console.log(res)
        return res.json()
      } else {
        throw new Error("Errore nella chiamata!")
      }
    })
    .then((data) => {
      console.log(data)
      let row = document.querySelector("#library-shelf")
      data.forEach((book) => {
        let newCol = document.createElement("div")
        newCol.classList.add("col", "col-4")
        newCol.innerHTML = `
        <div class="card shadow mb-4">
            <img src="${book.img}" class="card-img-top" height="500px"/>
            <div class="card-body bg-dark" style="height: 200px">
                <h5 class="card-title text-white">${book.title}</h5>
                <p class="card-text text-white-50"> Price: 
                ${book.price}
                $</p>
                
                <button type="button" class="btn btn-outline-light buy">Compra</button>
                <button type="button" class="btn btn-secondary remove">Scarta</button>
            </div>
        </div>
        `
        row.appendChild(newCol)
        let deleteButton = document.querySelectorAll(".remove")
        deleteButton.forEach((element) => {
          element.addEventListener("click", function () {
            element.parentElement.parentElement.remove()
          })
        })
        let buyButton = document.querySelectorAll(".buy")
        buyButton.forEach((element) => {
          element.addEventListener("click", function () {
            console.log(element)
          })
        })
      })
    })
    .catch((err) => {
      console.log("ERRORE", err)
    })
}

getMyData()
