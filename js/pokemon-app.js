const MAP_SIZE = 500
const NU_CENTER = ol.proj.fromLonLat([-87.6753, 42.056])

// downtown center, uncomment to use downtown instead, or make your own
// const NU_CENTER = ol.proj.fromLonLat([-87.6813, 42.049])
const AUTOMOVE_SPEED = 1
const UPDATE_RATE = 100
/*
 Apps are made out of a header (title/controls) and footer
 and some number of columns
 If its vertical, the columns can become sections in one column
 */

let instructions = "Please select a landmark from the amp and answer the questions to earn points. Come visit again."
let landmarkCount = 0
let pokemon = [
	"Bulbasaur",
	"Ivysaur",
	"Venusaur",
	"Charmander",
	"Charmeleon",
	"Charizard",
	"Squirtle",
	"Wartortle",
	"Blastoise",
	"Caterpie",
	"Metapod",
	"Butterfree",
	"Weedle",
	"Kakuna",
	"Beedrill",
	"Pidgey",
	"Pidgeotto",
	"Pidgeot",
	"Rattata",
	"Raticate",
	"Spearow",
	"Fearow",
	"Ekans",
	"Arbok",
	"Pikachu",
	"Raichu",
	"Sandshrew",
	"Sandslash",
	"Nidoran♀",
	"Nidorina",
	"Nidoqueen",
	"Nidoran♂",
	"Nidorino",
	"Nidoking",
	"Clefairy",
	"Clefable",
	"Vulpix",
	"Ninetales",
	"Jigglypuff",
	"Wigglytuff",
	"Zubat",
	"Golbat",
	"Oddish",
	"Gloom",
	"Vileplume",
	"Paras",
	"Parasect",
	"Venonat",
	"Venomoth",
	"Diglett",
	"Dugtrio",
	"Meowth",
	"Persian",
	"Psyduck",
	"Golduck",
	"Mankey",
	"Primeape",
	"Growlithe",
	"Arcanine",
	"Poliwag",
	"Poliwhirl",
	"Poliwrath",
	"Abra",
	"Kadabra",
	"Alakazam",
	"Machop",
	"Machoke",
	"Machamp",
	"Bellsprout",
	"Weepinbell",
	"Victreebel",
	"Tentacool",
	"Tentacruel",
	"Geodude",
	"Graveler",
	"Golem",
	"Ponyta",
	"Rapidash",
	"Slowpoke",
	"Slowbro",
	"Magnemite",
	"Magneton",
	"Farfetchd",
	"Doduo",
	"Dodrio",
	"Seel",
	"Dewgong",
	"Grimer",
	"Muk",
	"Shellder",
	"Cloyster",
	"Gastly",
	"Haunter",
	"Gengar",
	"Onix",
	"Drowzee",
	"Hypno",
	"Krabby",
	"Kingler",
	"Voltorb",
	"Electrode",
	"Exeggcute",
	"Exeggutor",
	"Cubone",
	"Marowak",
	"Hitmonlee",
	"Hitmonchan",
	"Lickitung",
	"Koffing",
	"Weezing",
	"Rhyhorn",
	"Rhydon",
	"Chansey",
	"Tangela",
	"Kangaskhan",
	"Horsea",
	"Seadra",
	"Goldeen",
	"Seaking",
	"Staryu",
	"Starmie",
	"Mr. Mime",
	"Scyther",
	"Jynx",
	"Electabuzz",
	"Magmar",
	"Pinsir",
	"Tauros",
	"Magikarp",
	"Gyarados",
	"Lapras",
	"Ditto",
	"Eevee",
	"Vaporeon",
	"Jolteon",
	"Flareon",
	"Porygon",
	"Omanyte",
	"Omastar",
	"Kabuto",
	"Kabutops",
	"Aerodactyl",
	"Snorlax",
	"Articuno",
	"Zapdos",
	"Moltres",
	"Dratini",
	"Dragonair",
	"Dragonite",
	"Mewtwo",
	"Mew",
	"Chikorita",
	"Bayleef",
	"Meganium",
	"Cyndaquil",
	"Quilava",
	"Typhlosion",
	"Totodile",
	"Croconaw",
	"Feraligatr",
	"Sentret",
	"Furret",
	"Hoothoot",
	"Noctowl",
	"Ledyba",
	"Ledian",
	"Spinarak",
	"Ariados",
	"Crobat",
	"Chinchou",
	"Lanturn",
	"Pichu",
	"Cleffa",
	"Igglybuff",
	"Togepi",
	"Togetic",
	"Natu",
	"Xatu",
	"Mareep",
	"Flaaffy",
	"Ampharos",
	"Bellossom",
	"Marill",
	"Azumarill",
	"Sudowoodo",
	"Politoed",
	"Hoppip",
	"Skiploom",
	"Jumpluff",
	"Aipom",
	"Sunkern",
	"Sunflora",
	"Yanma",
	"Wooper",
	"Quagsire",
	"Espeon",
	"Umbreon",
	"Murkrow",
	"Slowking",
	"Misdreavus",
	"Unown",
	"Wobbuffet",
	"Girafarig",
	"Pineco",
	"Forretress",
	"Dunsparce",
	"Gligar",
	"Steelix",
	"Snubbull",
	"Granbull",
	"Qwilfish",
	"Scizor",
	"Shuckle",
	"Heracross",
	"Sneasel",
	"Teddiursa",
	"Ursaring",
	"Slugma",
	"Magcargo",
	"Swinub",
	"Piloswine",
	"Corsola",
	"Remoraid",
	"Octillery",
	"Delibird",
	"Mantine",
	"Skarmory",
	"Houndour",
	"Houndoom",
	"Kingdra",
	"Phanpy",
	"Donphan",
	"Porygon2",
	"Stantler",
	"Smeargle",
	"Tyrogue",
	"Hitmontop",
	"Smoochum"]
let gameState = {
	currentLandmark: "",
	points: 0,
	captured: []
}

// Create an interactive map
// Change any of these functions

let map = new InteractiveMap({
	mapCenter: NU_CENTER,

	// Ranges
	ranges: [500, 200, 90, 1], // must be in reverse order

	initializeMap() {
		// A good place to load landmarks
		this.loadLandmarks("landmarks-akshay-nu", (landmark) => {
			// Keep this landmark?
			//console.log("here",landmark)
			// if(landmark.openMapData.highway=='traffic_signals')
			// {
			// 	return true
			// }
			// if(landmark.openMapData.highway=='stop')
			// {
			// 	return true
			// }
			// Keep all landmarks in the set
			return true

			// Only keep this landmark if its a store or amenity, e.g.
			// return landmark.properties.amenity || landmark.properties.store
		})

		// Create random landmarks
		// You can also use this to create trails or clusters for the user to find
		// for (var i = 0; i < 10; i++) {

		// 	// make a polar offset (radius, theta) 
		// 	// from the map's center (units are *approximately* meters)
		// 	let position = clonePolarOffset(NU_CENTER, 400*Math.random() + 300, 20*Math.random())
		// 	this.createLandmark({
		// 		pos: position,
		// 		name: words.getRandomWord(),
		// 	})
		// }
	},

	update() {
		// Do something each frame
	},

	initializeLandmark: (landmark, isPlayer) => {
		// Add data to any landmark when it's created

		// Any openmap data?
		if (landmark.openMapData) {
			console.log(landmark.openMapData)
			landmark.name = landmark.openMapData.name
		}
		
		// *You* decide how to create a marker
		// These aren't used, but could be examples
		landmark.idNumber = landmarkCount++
		landmark.color = [Math.random(), 1, .5]

		// Give it a random number of points
		landmark.points = Math.floor(Math.random()*10 + 1)
		return landmark
	}, 

	onEnterRange: (landmark, newLevel, oldLevel, dist) => {
		// What happens when the user enters a range
		// -1 is not in any range
		
		//console.log("enter", landmark.name, newLevel, oldLevel)
		if (newLevel == 2) {
			console.log("landmark entry:",landmark)
			// Add points to my gamestate
			//gameState.points += landmark.points

			gameState.currentLandmark = landmark.name
			// Have we captured this?
			if (!gameState.captured.includes(landmark.name)) {
				
				// Add a message
				//console.log(gameState.pokemon[gameState.pokemon.length-1])
				//window.alert("Congratulations you caught "+gameState.pokemon[gameState.pokemon.length-1])				
			
			console.log(landmark.idNumber)
			if(landmark.idNumber == 1)
			{
				const quiz = new Vue({
					template: `
					<div id="quiz">
					<header></header>
					<div id="quest-title"> Welcome to <span id="quest-location">{{gameState.currentLandmark}}</span></div>
					<p> Your Question is ... </p>
						<div id="quest-question"> The {{gameState.currentLandmark}} is which style patisserie</div>
						<button v-on:click="show" id="quest-choice">French</button>
						<button v-on:click="wrong" id="quest-choice">Italian</button>
						<button v-on:click="wrong" id="quest-choice">American</button>
						<button v-on:click="wrong" id="quest-choice">German</button>
					<footer></footer>
					</div>`,
			
					data() {
						return {
							map: map,
							gameState: gameState
						}
					},
					methods:{
						show:function(event){
							console.log("option 1 selected")
							gameState.points +=1
							window.alert("Kudos !! Carry onto the next location, traveller")
							gameState.captured.push(landmark.name)
							document.getElementById("quiz").style.display="none"

						},
						wrong:function(event){
							console.log("option 1 selected")
							
							window.alert("Alas, Wrong answer! Fear not traveller. Try again when you visit the location again.")
							document.getElementById("quiz").style.display="none"
							gameState.captured.pop();
							gameState.messages.pop();
							gameState.pokemon.pop();

						}
					},
	
					components: Object.assign({
						"location-widget": locationWidget,
					}),
			
					el: "#quiz"
				})
			}
			if(landmark.idNumber == 2)
			{
				const quiz = new Vue({
					template: `
					<div id="quiz">
					<header></header>
						<div id="quest-title"> Welcome to <span id="quest-location">{{gameState.currentLandmark}}</span></div>
						<p> Your Question is ... </p>
						<div id="quest-question"> How many startups were founded in {{gameState.currentLandmark}} ?</div>
						<button v-on:click="wrong" id="quest-choice" id="quest-choice">Around 100</button>
						<button v-on:click="wrong" id="quest-choice" id="quest-choice">100+ to 500</button>
						<button v-on:click="show" id="quest-choice">Around 1000</button>
						<button v-on:click="wrong" id="quest-choice" id="quest-choice">More than 2000</button>
					<footer></footer>
					</div>`,
			
					data() {
						return {
							map: map,
							gameState: gameState
						}
					},
					methods:{
						show:function(event){
							console.log("option 1 selected")
							gameState.points +=1
							window.alert("Kudos !! Carry onto the next location, traveller")
							document.getElementById("quiz").style.display="none"

						},
						wrong:function(event){
							console.log("option 1 selected")
							
							window.alert("Alas, Wrong answer! Fear not traveller. Try again when you visit the location again.")
							document.getElementById("quiz").style.display="none"
							gameState.captured.pop();
							gameState.messages.pop();
							gameState.pokemon.pop();

						}
					},
	
					components: Object.assign({
						"location-widget": locationWidget,
					}),
			
					el: "#quiz"
				})
			}
			if(landmark.idNumber == 3)
			{
				const quiz = new Vue({
					template: `
					<div id="quiz">
					<header></header>
						<div id="quest-title"> Welcome to <span id="quest-location">{{gameState.currentLandmark}}</span></div>
						<p> Your Question is ... </p>
						<div id="quest-question"> Where is this landmark located ?</div>
						<button v-on:click="wrong" id="quest-choice" id="quest-choice">Near Mudd Library</button>
						<button v-on:click="wrong" id="quest-choice" id="quest-choice">Near The Garage</button>
						<button v-on:click="show" id="quest-choice">Near Lakefill</button>
						<button v-on:click="wrong" id="quest-choice" id="quest-choice">Near Norris</button>
					<footer></footer>
					</div>`,
			
					data() {
						return {
							map: map,
							gameState: gameState
						}
					},
					methods:{
						show:function(event){
							console.log("option 1 selected")
							gameState.points +=1
							window.alert("Kudos !! Carry onto the next location, traveller")
							document.getElementById("quiz").style.display="none"

						},
						wrong:function(event){
							console.log("option 1 selected")
							
							window.alert("Alas, Wrong answer! Fear not traveller. Try again when you visit the location again.")
							document.getElementById("quiz").style.display="none"
							gameState.captured.pop();
							gameState.messages.pop();
							gameState.pokemon.pop();

						}
					},
	
					components: Object.assign({
						"location-widget": locationWidget,
					}),
			
					el: "#quiz"
				})
			}
			if(landmark.idNumber == 4)
			{
				const quiz = new Vue({
					template: `
					<div id="quiz">
					<header></header>
						<div id="quest-title"> Welcome to <span id="quest-location">{{gameState.currentLandmark}}</span></div>
						<p> Your Question is ... </p>
						<div id="quest-question"> What was the name of northwestern president who bought the lakefill area </div>
						<button v-on:click="wrong" id="quest-choice" id="quest-choice">George washington</button>
						<button v-on:click="show" id="quest-choice">J Roscoe Miller</button>
						<button v-on:click="wrong" id="quest-choice" id="quest-choice">Patrik G</button>
						<button v-on:click="wrong" id="quest-choice" id="quest-choice">Shirley V Ryan</button>
					<footer></footer>
					</div>`,
			
					data() {
						return {
							map: map,
							gameState: gameState
						}
					},
					methods:{
						show:function(event){
							console.log("option 1 selected")
							gameState.points +=1
							window.alert("Kudos !! Carry onto the next location, traveller")
							document.getElementById("quiz").style.display="none"

						},
						wrong:function(event){
							console.log("option 1 selected")
							
							window.alert("Alas, Wrong answer! Fear not traveller. Try again when you visit the location again.")
							document.getElementById("quiz").style.display="none"
							gameState.captured.pop();
							gameState.messages.pop();
							gameState.pokemon.pop();

						}
					},
	
					components: Object.assign({
						"location-widget": locationWidget,
					}),
			
					el: "#quiz"
				})
			}
			if(landmark.idNumber == 5)
			{
				const quiz = new Vue({
					template: `
					<div id="quiz">
					<header></header>
						<div id="quest-title"> Welcome to <span id="quest-location">{{gameState.currentLandmark}}</span></div>
						<p> Your Question is ... </p>
						<div id="quest-question"> Who lead the PSA group</div>
						<button v-on:click="show" id="quest-choice">Brent Hecht</button>
						<button v-on:click="wrong" id="quest-choice" id="quest-choice">Allen Lin</button>
						<button v-on:click="wrong" id="quest-choice" id="quest-choice">Nick Vincent</button>
						<button v-on:click="wrong" id="quest-choice" id="quest-choice">Isaac Johnson</button>
					<footer></footer>
					</div>`,
			
					data() {
						return {
							map: map,
							gameState: gameState
						}
					},
					methods:{
						show:function(event){
							console.log("option 1 selected")
							gameState.points +=1
							window.alert("Kudos !! Carry onto the next location, traveller")
							document.getElementById("quiz").style.display="none"

						},
						wrong:function(event){
							console.log("option 1 selected")
							
							window.alert("Alas, Wrong answer! Fear not traveller. Try again when you visit the location again.")
							document.getElementById("quiz").style.display="none"
							gameState.captured.pop();
							gameState.messages.pop();
							gameState.pokemon.pop();

						}
					},
	
					components: Object.assign({
						"location-widget": locationWidget,
					}),
			
					el: "#quiz"
				})
			}
			if(landmark.idNumber == 6)
			{
				const quiz = new Vue({
					template: `
					<div id="quiz">
					<header></header>
						<div id="quest-title"> Welcome to <span id="quest-location">{{gameState.currentLandmark}}</span></div>
						<p> Your Question is ... </p>
						<div id="quest-question">Delta Lab is the first interdisciplinary research lab and design studio at Northwestern University. They study, design, and build systems in the domain of social and crowd computing, human computer interaction, learning sciences, civics, and innovation. </div>
						<button v-on:click="show" id="quest-choice">True</button>
						<button v-on:click="wrong" id="quest-choice" id="quest-choice">False</button>
					<footer></footer>
					</div>`,
			
					data() {
						return {
							map: map,
							gameState: gameState
						}
					},
					methods:{
						show:function(event){
							console.log("option 1 selected")
							gameState.points +=1
							window.alert("Kudos !! Carry onto the next location, traveller")
							document.getElementById("quiz").style.display="none"

						},
						wrong:function(event){
							console.log("option 1 selected")
							
							window.alert("Alas, Wrong answer! Fear not traveller. Try again when you visit the location again.")
							document.getElementById("quiz").style.display="none"
							gameState.captured.pop();
							gameState.messages.pop();
							gameState.pokemon.pop();

						}
					},
	
					components: Object.assign({
						"location-widget": locationWidget,
					}),
			
					el: "#quiz"
				})
			}
			if(landmark.idNumber == 7)
			{
				const quiz = new Vue({
					template: `
					<div id="quiz">
					<header></header>
						<div id="quest-title"> Welcome to <span id="quest-location">{{gameState.currentLandmark}}</span></div>
						<p> Your Question is ... </p>
						<div id="quest-question"> {{gameState.currentLandmark}} was built in</div>
						<button v-on:click="show" id="quest-choice"> 1972</button>
						<button v-on:click="wrong" id="quest-choice">1987</button>
						<button v-on:click="wrong" id="quest-choice">2001</button>
						<button v-on:click="wrong" id="quest-choice">1982</button>
					<footer></footer>
					</div>`,
			
					data() {
						return {
							map: map,
							gameState: gameState
						}
					},
					methods:{
						show:function(event){
							console.log("option 1 selected")
							gameState.points +=1
							window.alert("Kudos !! Carry onto the next location, traveller")
							document.getElementById("quiz").style.display="none"

						},
						wrong:function(event){
							console.log("option 1 selected")
							
							window.alert("Alas, Wrong answer! Fear not traveller. Try again when you visit the location again.")
							document.getElementById("quiz").style.display="none"
							gameState.captured.pop();
							gameState.messages.pop();
							gameState.pokemon.pop();

						}
					},
	
					components: Object.assign({
						"location-widget": locationWidget,
					}),
			
					el: "#quiz"
				})
			}
			if(landmark.idNumber == 8)
			{
				const quiz = new Vue({
					template: `
					<div id="quiz">
					<header></header>
						<div id="quest-title"> Welcome to <span id="quest-location">{{gameState.currentLandmark}}</span></div>
						<p> Your Question is ... </p>
						<div id="quest-question">Which tool is not made by {{gameState.currentLandmark}}</div>
						<button v-on:click="show" id="quest-choice">ARScene</button>
						<button v-on:click="wrong" id="quest-choice">SceneVR</button>
						<button v-on:click="wrong" id="quest-choice">Juxatpose</button>
						<button v-on:click="wrong" id="quest-choice">Soundcit</button>
					<footer></footer>
					</div>`,
			
					data() {
						return {
							map: map,
							gameState: gameState
						}
					},
					methods:{
						show:function(event){
							console.log("option 1 selected")
							gameState.points +=1
							window.alert("Kudos !! Carry onto the next location, traveller")
							document.getElementById("quiz").style.display="none"

						},
						wrong:function(event){
							console.log("option 1 selected")
							
							window.alert("Alas, Wrong answer! Fear not traveller. Try again when you visit the location again.")
							document.getElementById("quiz").style.display="none"
							gameState.captured.pop();
							gameState.messages.pop();
							gameState.pokemon.pop();

						}
					},
	
					components: Object.assign({
						"location-widget": locationWidget,
					}),
			
					el: "#quiz"
				})
			}
			if(landmark.idNumber == 9)
			{
				const quiz = new Vue({
					template: `
					<div id="quiz">
					<header></header>
						<div id="quest-title"> Welcome to <span id="quest-location">{{gameState.currentLandmark}}</span></div>
						<p> Your Question is ... </p>
						<div id="quest-question"> {{gameState.currentLandmark}} was designed by</div>
						<button v-on:click="show" id="quest-choice">Walter Nesch</button>
						<button v-on:click="wrong" id="quest-choice">henry Crown</button>
						<button v-on:click="wrong" id="quest-choice">Patrick kellog</button>
						<button v-on:click="wrong" id="quest-choice">Charles Deering</button>
					<footer></footer>
					</div>`,
			
					data() {
						return {
							map: map,
							gameState: gameState
						}
					},
					methods:{
						show:function(event){
							console.log("option 1 selected")
							gameState.points +=1
							window.alert("Kudos !! Carry onto the next location, traveller")
							document.getElementById("quiz").style.display="none"

						},
						wrong:function(event){
							console.log("option 1 selected")
							
							window.alert("Alas, Wrong answer! Fear not traveller. Try again when you visit the location again.")
							document.getElementById("quiz").style.display="none"
							gameState.captured.pop();
							gameState.messages.pop();
							gameState.pokemon.pop();

						}
					},
	
					components: Object.assign({
						"location-widget": locationWidget,
					}),
			
					el: "#quiz"
				})
			}
			if(landmark.idNumber == 10)
			{
				const quiz = new Vue({
					template: `
					<div id="quiz">
					<header></header>
						<div id="quest-title"> Welcome to <span id="quest-location">{{gameState.currentLandmark}}</span></div>
						<p> Your Question is ... </p>
						<div id="quest-question"> Block cinema is free for all ?</div>
						<button v-on:click="show" id="quest-choice">True</button>
						<button v-on:click="wrong" id="quest-choice">False</button>
					<footer></footer>
					</div>`,
			
					data() {
						return {
							map: map,
							gameState: gameState
						}
					},
					methods:{
						show:function(event){
							console.log("option 1 selected")
							gameState.points +=1
							window.alert("Kudos !! Carry onto the next location, traveller")
							document.getElementById("quiz").style.display="none"

						},
						wrong:function(event){
							console.log("option 1 selected")
							
							window.alert("Alas, Wrong answer! Fear not traveller. Try again when you visit the location again.")
							document.getElementById("quiz").style.display="none"
							gameState.captured.pop();
							gameState.messages.pop();
							gameState.pokemon.pop();

						}
					},
	
					components: Object.assign({
						"location-widget": locationWidget,
					}),
			
					el: "#quiz"
				})
			}
			if(landmark.idNumber == 11)
			{
				const quiz = new Vue({
					template: `
					<div id="quiz">
					<header></header>
						<div id="quest-title"> Welcome to <span id="quest-location">{{gameState.currentLandmark}}</span></div>
						<p> Your Question is ... </p>
						<div id="quest-question"> {{gameState.currentLandmark}} was founded in</div>
						<button v-on:click="show" id="quest-choice">1942</button>
						<button v-on:click="wrong" id="quest-choice">1842</button>
						<button v-on:click="wrong" id="quest-choice">1943</button>
						<button v-on:click="wrong" id="quest-choice">1987</button>
					<footer></footer>
					</div>`,
			
					data() {
						return {
							map: map,
							gameState: gameState
						}
					},
					methods:{
						show:function(event){
							console.log("option 1 selected")
							gameState.points +=1
							window.alert("Kudos !! Carry onto the next location, traveller")
							document.getElementById("quiz").style.display="none"

						},
						wrong:function(event){
							console.log("option 1 selected")
							
							window.alert("Alas, Wrong answer! Fear not traveller. Try again when you visit the location again.")
							document.getElementById("quiz").style.display="none"
							gameState.captured.pop();
							gameState.messages.pop();
							gameState.pokemon.pop();

						}
					},
	
					components: Object.assign({
						"location-widget": locationWidget,
					}),
			
					el: "#quiz"
				})
			}
			if(landmark.idNumber == 12)
			{
				const quiz = new Vue({
					template: `
					<div id="quiz">
					<header></header>
						<div id="quest-title"> Welcome to <span id="quest-location">{{gameState.currentLandmark}}</span></div>
						<p> Your Question is ... </p>
						<div id="quest-question"> {{gameState.currentLandmark}} is modeled after which monument</div>
						<button v-on:click="show" id="quest-choice">King's College Chapel, England</button>
						<button v-on:click="wrong" id="quest-choice">Charles Deering Architectural Building</button>
						<button v-on:click="wrong" id="quest-choice">Ryan Musical Center</button>
						<button v-on:click="wrong" id="quest-choice">Chapel of the first, New England</button>
					<footer></footer>
					</div>`,
			
					data() {
						return {
							map: map,
							gameState: gameState
						}
					},
					methods:{
						show:function(event){
							console.log("option 1 selected")
							gameState.points +=1
							window.alert("Kudos !! Carry onto the next location, traveller")
							document.getElementById("quiz").style.display="none"

						},
						wrong:function(event){
							console.log("option 1 selected")
							
							window.alert("Alas, Wrong answer! Fear not traveller. Try again when you visit the location again.")
							document.getElementById("quiz").style.display="none"
							gameState.captured.pop();
							gameState.messages.pop();
							gameState.pokemon.pop();

						}
					},
	
					components: Object.assign({
						"location-widget": locationWidget,
					}),
			
					el: "#quiz"
				})
			}
			
			}
		}
	},

	onExitRange: (landmark, newLevel, oldLevel, dist) => {
		// What happens when the user EXITS a range around a landmark 
		// e.g. (2->1, 0->-1)
		//console.log('dist:',dist)
		if(oldLevel==2 && newLevel<2){
			gameState.currentLandmark=""
		document.getElementById("quiz").style.display="none"
		console.log("exit", landmark.name, oldLevel,newLevel)
		}
	},
	
	
	featureToStyle: (landmark) => {
		// How should we draw this landmark?
		// Returns an object used to set up the drawing

		if (landmark.isPlayer) {
			return {
				icon: "person_pin_circle",
				noBG: true // skip the background
			}
		}
		
		// Pick out a hue, we can reuse it for foreground and background
		let hue = landmark.points*.1
		return {
			label: landmark.name + "\n" + landmark.distanceToPlayer +"m",
			fontSize: 8,

			// Icons (in icon folder)
			icon: "person_pin_circle",

			// Colors are in HSL (hue, saturation, lightness)
			iconColor: [hue, 1, .5],
			bgColor: [hue, 1, .2],
			noBG: false // skip the background
		}
	},

	
})



window.onload = (event) => {


	const app = new Vue({
		template: `
		<div id="app">
		<header></header>
			<div id="main-columns">

				<div class="main-column">
					<div id="instructions">{{instructions}} <br><br> {{gameState}}</div>
					<div id="quiz"></div>
				</div>
				
				<div class="main-column">
					<location-widget :map="map" />
				
				</div>

			</div>	
		<footer></footer>
		</div>`,

		data() {
			return {
				map: map,
				gameState: gameState,
				instructions: instructions
			}
		},

		// Get all of the intarsia components, plus various others
		components: Object.assign({
			// "user-widget": userWidget,
			// "room-widget": roomWidget,
			"location-widget": locationWidget,
		}),

		el: "#app"
	})

};

