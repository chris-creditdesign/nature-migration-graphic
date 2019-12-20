import { csv } from "d3-fetch"
import { select } from "d3-selection"
import Widget from "./widget/widget";

const localUrl = "./data/refugee-data-refine.csv";

function getWidth() {
	return document.getElementById("outerwrapper").getBoundingClientRect().width;
}

const init = () => {
	csv(localUrl).then( data => {

		select("#outerwrapper")
			.style("display", "block");

		select("#status-message")
			.style("display", "none");

		let didResize = false;
		let width = getWidth();
		const myWidget = Widget()

		myWidget.buildProps({
			target: "#sankey-chart",
			width: width,
			margin: {'top': 20, 'left': 10, 'bottom': 10, 'right': 10},
			groupByContinents: false
		})
		.buildData(data)
		.buildSvg()
		.buildSankey()
		.buildDefs()
		.buildLinks()
		.buildNodes()
		.buildText()
		.buildLabels()
		.buildKey()
		.buildTopTenSelector()
		.buildContinentSelector()

		if (getWidth() !== width) {
			width = getWidth();
			myWidget.resize(width);
		}


		select(window).on("resize", function() {

			didResize = true;

			/* Throttle the resize */
			setTimeout(function () {
				if (didResize) {
					width = getWidth();
					myWidget.resize(width);
					didResize = false;
				}
			}, 60)

		})

	}).catch( error => {
		console.error(error)

		select("#outerwrapper")
			.style("display", "none");

		select("#status-message")
			.style("display", "block");
		
	})
}

document.addEventListener("DOMContentLoaded", init)
