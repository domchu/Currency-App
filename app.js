let key = "cba58c00-79e9-11ec-bbf0-8bdae800b12b"; //importing the key from the dashboard
let convertBtn = document.querySelector(".convertBtn"); //selecting all classes from the html.
let firstCurrency = document.querySelector(".firstcurrency");
let result = document.querySelector(".result");
let user = document.querySelector(".user");

convertBtn.addEventListener("click", () => {
  let userValue = user.value;
  let base = firstCurrency.value;
  let api = `https://freecurrencyapi.net/api/v2/latest?apikey=${key}&base_currency=${base}`;
  fetch(api)
    .then(function (res) {
      return res.json();
    })
    .then(function (mdata) {
      let secondCurrency = document.querySelector(".secondcurrency");
      let sCurrency = secondCurrency.value;
      console.log(mdata);
      console.log(mdata.data);
      if (user.value == "") {
        result.textContent = mdata.data[sCurrency];
      } else {
        result.textContent = userValue * mdata.data[sCurrency];
      }
    });
});
