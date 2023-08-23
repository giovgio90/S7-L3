fetch("https://striveschool-api.herokuapp.com/books")
  .then((responseObj) => responseObj.json())
  .then((usersObj) => {
    const row = document.querySelector(".row");

    usersObj.forEach((books) => {
      const singleBook = books;

      const cardContainer = document.createElement("div");
      const col = document.createElement("div");
      col.className = "col-6 col-md-4 col-lg-3";

      col.innerHTML = `<div class="card my-4 text-center h-100" >
                            <img src=${singleBook.img} class="card-img-top custom-img" alt="copertina">
                            <div class="card-body d-flex flex-column">
                                <h5 class="card-title">${singleBook.title}</h5>
                                <p class="card-text">${singleBook.price}€</p>
                                <button class="btn btn-primary mt-auto">Acquista ora</button>
                                <button class="btn btn-danger scarta-btn mt-2">Scarta</button>
                            </div>
                        </div>
        `;

      row.appendChild(col);

      const scartaBtn = col.querySelector(".scarta-btn");
      scartaBtn.addEventListener("click", () => {
        row.removeChild(col);
      });
    });
  });
