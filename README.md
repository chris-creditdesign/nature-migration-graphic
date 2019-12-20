# Interactive test

OpenRefine GREL input to format CSV file

	value.replace("NorthAmerica","North America")
		.replace("FmrUSSR","Former Soviet Union")
		.replace("WestAsia","West Asia")
		.replace("SouthAsia","South Asia")
		.replace("EastAsia","East Asia")
		.replace("SoutheastAsia","Southeast Asia")
		.replace("LatinAmerica","Latin America")
		.replace("Ivory Coast","Côte d'Ivoire")
		.replace("DR Congo","Democratic Republic of the Congo")
		.replace("other Africa","Other Africa")
		.replace("other Fmr USSR","Other former Soviet Union")
		.replace("Palestina","Palestinian territories")
		.replace("stateless","Stateless")
		.replace("other West Asia","Other West Asia")
		.replace("other South Asia","Other South Asia")
		.replace("other Southeast Asia","Other Southeast Asia")
		.replace("other Oceania","Other Oceania")
		.replace("other Latin America","Other Latin America")

Also change column names and remove entries with a value of zero.

Before running 

	npm run build 

Open a server at port 8080

	python -m SimpleHTTPServer 8080

Link for CoreMedia

	https://infographics.live.cf.private.springer.com/interactive/interactive-test/index.html