import { select } from "d3-selection"

function buildContinentSelector() {
	var that = this

	this.topContinentCheckbox = select("#widget-continent-checkbox")
		.on("change", function() {
			that.props.groupByRegions = select(this).property("checked")

			that.buildSankey()
				.updateAll()
		})


	return this
}

export default { buildContinentSelector }