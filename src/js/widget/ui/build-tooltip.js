import { select } from "d3-selection"
import shortName from "../helpers/short-name"
import formatNumber from "../helpers/formatNumber"

function buildTooltip(d, node) {
	var that = this

	const value = formatNumber(d.value)
	const name = d.name ? shortName(d.name) : null
	const origin = d.origin ? shortName(d.origin) : null
	const destination = d.destination ? shortName(d.destination) : null

	select("#widget-tooltip")
		.classed("hidden", false)
		.style("top", () => {
			if (name) {
				return `${d.y + d.dy}px`
			} else {
				return `${node.getBBox().y + (node.getBBox().height / 2)}px`
			}
		})
		.style("left", function () {
			
			if (name) {
				// It is a node
				if (d.x > that.width / 2) {
					// It is on the right
					return `${that.width - select(this).node().getBoundingClientRect().width - that.sankey.nodeWidth()}px`
				} else {
					// It is on the left
					return `${that.sankey.nodeWidth() + 20}px`
				}
			} else {
				return `${(that.width / 2) - (select(this).node().getBoundingClientRect().width / 2)}px`
			}
		})
		.select("p")
		.text( () => d.name ?
						`${name}: ${value}`
						: `${origin} to ${destination}: ${value}`
		);
		
	return this
}

export default { buildTooltip }