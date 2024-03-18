const city = "London"

const button = document.getElementById("button");

async function api_call(city) {
    let data = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=fd7d6306f73f4bfc86c94216241503&q=london&aqi=no`
    )

    return await data.json()
}

async function call(city) {
    const res = await api_call(city);
    console.log(res);
}

button.addEventListener("click", call)

