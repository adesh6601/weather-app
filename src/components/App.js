import { Grid, responsiveFontSizes } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import React, { useState } from 'react'

const inputBoxStyle = {
	fontSize: "18px",
	fontStyle: "italic",
	padding: "5px 10px",
	width: "50%",
	outline: "none",
	background: "#FFFFFF",
	color: "#000000",
	border: "1px solid #C4D1EB",
	borderRadius: "20px"
}

const searchButtonStyle = {
	borderRadius: "20px",
	color: "#000000",
	fontSize: "16px",
	padding: "8px 12px 8px 12px"
}


const App = () => {
	let api_key = "fd7d6306f73f4bfc86c94216241503";

	const [weatherData, setWeatherData] = useState(null);

	const search = async () => {
		const city = document.getElementById("input-box").value;
		if (city === "") {
			let data = {
				current: {
					temp_c: 0,
					humidity: 0,
					wind_kph: 0
				}
			}
			setWeatherData(data);
			return 0;
		}
		// console.log(city);
		let api_url = `http://api.weatherapi.com/v1/current.json?key=${api_key}&q=${city}&aqi=no`;

		let response = await fetch(api_url);
		let data = await response.json();
		if (data !== undefined) {
			setWeatherData(data);
		}
		// setWeatherData(data);
		console.log(data);
	}

	return (
		<div>
			<Grid container item xs={12}>
				<Grid item xs={12} style={{ height: "25vh" }}></Grid>
			</Grid>

			<Grid container item xs={12}>
				<Grid item xs={4}></Grid>

				<Grid item xs={4} style={{ background: "#00ace6", height: "50vh", borderRadius: "30px" }}>
					<Grid container item xs={12}>
						<Grid item xs={12} style={{ textAlign: "center", height: "10vh" }}>
							<div style={{ padding: "1rem" }}>
								<input type="text" id="input-box" placeholder="Search Location" style={inputBoxStyle}></input> <button id="search-button" onClick={search} style={searchButtonStyle}> Search </button>
							</div>
						</Grid>
					</Grid>

					<Grid container item xs={12}>
						<Grid item xs={12} style={{ height: "15vh", background: "" }}>
							<div style={{ textAlign: "center", fontSize: "100px" }}>
								{weatherData ? weatherData.current.temp_c : "0"}
							</div>
						</Grid>
					</Grid>

					<Grid container item xs={12}>
						<Grid item xs={12} style={{ height: "10vh", background: "" }}>
							<div style={{ textAlign: "center", fontSize: "30px" }}>
								Temperature (°C)
							</div>
						</Grid>
					</Grid>

					<Grid container item xs={12}>
						<Grid item xs={6} style={{ height: "10vh", background: "" }}>
							<div>
								<div style={{ textAlign: "center", fontSize: "40px" }}>
									{weatherData ? weatherData.current.humidity : "0"}
								</div>
								<div style={{ textAlign: "center", fontSize: "30px" }}>
									Humidity (%)
								</div>
							</div>
						</Grid>

						<Grid item xs={6} style={{ height: "10vh", background: "" }}>
							<div>
								<div style={{ textAlign: "center", fontSize: "40px" }}>
									{weatherData ? weatherData.current.wind_kph : "0"}
								</div>
								<div style={{ textAlign: "center", fontSize: "30px" }}>
									Wind Speed (Km/Hr)
								</div>
							</div>
						</Grid>
					</Grid>

				</Grid>

				<Grid item xs={4}></Grid>
			</Grid>

			<Grid container item xs={12}>
				<Grid item xs={12} style={{ height: "25vh" }}></Grid>
			</Grid>
		</div>
	)
}

export default App
