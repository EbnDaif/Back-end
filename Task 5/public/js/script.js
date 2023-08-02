
let form = document.getElementById("form1");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  // console.log(document.getElementById('address').value)
  weatherFunction();
  form.reset();
});
const cityF = document.getElementById('city');
const lonF = document.getElementById("long");
const latF = document.getElementById("lat");
const tempF = document.getElementById("temp");
const weatherF = document.getElementById("weather");


// async --> function return promise
let weatherFunction = async () => {
  try {
    const address = document.getElementById("address").value;
    const res = await fetch("http://localhost:3000/weather?address=" + address);
    const data = await res.json();
    console.log(data);
    if (data.error) {
      console.log(data)
    } else {
        setTimeout(() => {
          cityF.innerText = `${data.location} ${data.forecast.name} `;

        },500 );
  setTimeout(() => {
    lonF.innerText = "longitude " + data.long;
    latF.innerText = "latitude " + data.lat;

  }, 1000);

      setTimeout(() => {
      tempF.innerText = data.forecast.temp + "°c";

      }, 1500);
            setTimeout(() => {
              weatherF.innerText = data.forecast.current ;
            }, 2000);
    }
  } catch (e) {
    console.log(data);
  }
};

// 3
