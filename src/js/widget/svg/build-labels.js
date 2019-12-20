import { symbol, symbolTriangle } from "d3-shape"

function buildLabels() {
	var label_width = {
		left: 0,
		right: 0
	}

	var triangle = symbol().type(symbolTriangle).size(30)

	this.g_labels = this.svg_g.append("g")
			.attr("class", "labels")

	this.g_labels.append("text")
		.attr("x", 0)
		.attr("y", 0)
		.attr("dy", "-0.5em")
		.attr("text-anchor", "start")
		.text("ORIGIN")
		.select(function() {
			label_width.left = this.getBBox().width;
		})

	this.g_labels.append("text")
		.attr("x", this.props.width)
		.attr("y", 0)
		.attr("dy", "-0.5em")
		.attr("text-anchor", "end")
		.text("DESTINATION")
		.select(function() {
			label_width.right = this.getBBox().width
		})

	this.g_labels.append("line")
		.style("stroke", "#ffffff")
		.attr("x1", label_width.left + 10 )
		.attr("y1", this.props.margin.top * -0.6 )
		.attr("x2", this.props.width - (label_width.right + 10) )
		.attr("y2", this.props.margin.top * -0.6 )

	this.g_labels.append("path")
		.attr("d", triangle())
		.attr("fill", "#ffffff")
		.attr("transform", `translate(${this.props.width - (label_width.right + 10)},${this.props.margin.top * -0.6}) rotate(90 0 0)`)

	return this
}

export default { buildLabels }