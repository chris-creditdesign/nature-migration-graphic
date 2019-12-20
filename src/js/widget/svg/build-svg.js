import { select, selectAll } from "d3-selection"
import "d3-transition"

function buildSvg() {
	const props = this.props

	this.svg = select(props.target).append("svg")
		.attr("width", props.width + props.margin.left + props.margin.right)
		.attr("height", props.height + props.margin.top + props.margin.bottom)

	this.svg_g = this.svg.append("g")
		.attr("transform", "translate(" + props.margin.left + "," + props.margin.top + ")")

	return this
}

export default { buildSvg }