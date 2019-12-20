import color from "../helpers/color"
import shortName from "../helpers/short-name"

function buildDefs() {

	/* Iterate through each of the colours and create a gradient for each combination */
	const def = this.svg_g.append("svg:defs")
	
	this.data.origin_regions.forEach((elem_o, index_o, array_o) => {
		this.data.destination_regions.forEach((elem_d, index_d, array_d) => {

				const gradient = def.append("svg:linearGradient")
						.attr("id", elem_o.toLowerCase().replace(/\s+/g, '-') + "-" + elem_d.toLowerCase().replace(/\s+/g, '-'))
						.attr("gradientUnits", "userSpaceOnUse")

				gradient.append("svg:stop")
					.attr("offset", "30%")
					.attr("stop-color", color(shortName(elem_o)) )
					.attr("stop-opacity", 1)

				gradient.append("svg:stop")
					.attr("offset", "70%")
					.attr("stop-color", color(shortName(elem_d)) )
					.attr("stop-opacity", 1)
		})
	});

	return this
}

export default { buildDefs }