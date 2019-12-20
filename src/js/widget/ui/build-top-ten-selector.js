import { select } from "d3-selection"

function buildTopTenSelector() {

	this.topTenCheckbox = select("#widget-top-10-checkbox")
		.on("change", () => {
			this.updateAll()
		})

	return this
}

export default { buildTopTenSelector }
