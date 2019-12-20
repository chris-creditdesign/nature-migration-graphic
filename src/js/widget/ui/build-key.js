import { select } from "d3-selection"
import color from "../helpers/color"
import shortName from "../helpers/short-name"

function buildKey() {

	select("#temp-key")
		.selectAll("li")
		.data(this.data.destination_regions.map( d => shortName(d) ))
		.enter()
		.append("li")
		.html(d => `<span style="background-color: ${color(d)}"></span> ${d}`)

	return this
}

export default { buildKey }