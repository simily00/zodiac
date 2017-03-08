var zodiac = [
	{
		sign: "aquarius",
		fortune: "Knowledge, Humanitarian, Serious, Insightful, Duplicitous",
		image: "img/aquarius2.PNG"
	},
	{
		sign: "aries",
		fortune: "Active, Demanding, Determined, Effective, Ambitious",
		image: "img/aries2.PNG"
	},
	{
		sign: "cancer",
		fortune: "Emotion, Diplomatic, Intensity, Impulsive, Selective",
		image: "img/cancer2.PNG"
	},
	{
		sign: "capricorn",
		fortune: "Determination, Dominance, Perservering, Practical, Willful",
		image: "img/cap2.PNG"
	},
	{
		sign: "gemini",
		fortune: "Communication, Indecision, Inquisitive, Intelligent, Changeable",
		image: "img/gemini2.PNG"
	},
	{
		sign: "leo",
		fortune: "Ruling, Warmth, Generosity, Faithful, Initiative",
		image: "img/leo2.PNG"
	},
	{
		sign: "libra",
		fortune: "Balance, Justice, Truth, Beauty, Perfection",
		image: "img/libra2.PNG"
	},
	{
		sign: "pisces",
		fortune: "Fluctuation, Depth, Imagination, Reactive, Indecisive",
		image: "img/pisces2.PNG"
	},
	{
		sign: "sagittarius",
		fortune: "Philosophical, Motion, Experimentation, Optimism",
		image: "img/sag2.PNG"
	},
	{
		sign: "scorpio",
		fortune: "Transient, Self-Willed, Purposeful, Unyielding",
		image: "img/scorpio2.jpg"
	},
	{
		sign: "taurus",
		fortune: "	Security, Subtle strength, Appreciation, Instruction, Patience",
		image: "img/taurus2.PNG"
	},
	{
		sign: "virgo",
		fortune: "Analyzing, Practical, Reflective, Observation AND Thoughtful",
		image: "img/virgo2.PNG"
	}
]
document.getElementById("Analyzing, Practical, Reflective, Observation, Thoughtful").style.color = "#FFFFFF";



function horoscope() {
	var sign = document.getElementById("sign").value.toLowerCase()

	for(i = 0; i < zodiac.length; i++) {
		if(sign === zodiac[i].sign) {
			document.getElementById("yourSign").innerHTML = zodiac[i].sign
			document.getElementById("icon").src = zodiac[i].image
			document.getElementById("yourHoroscope").innerHTML = "You're best attributes are: " + zodiac[i].fortune
			return
		} else {
			document.getElementById("yourSign").innerHTML = "Umm, what's this? Try again!"
			document.getElementById("yourHoroscope").innerHTML = ""
			document.getElementById("icon").src = ""
		}
	}
}
// stars animation//
