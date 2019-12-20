import { select } from "d3-selection"
import "d3-transition"
import shortName from "../helpers/short-name"
import color from "../helpers/color"

function buildNodes() {
	var that = this

	if (!this.g_nodes) {
		// Only make the group if it doesn't already exist
		this.g_nodes = this.svg_g.append("g")
			.attr("class", "nodes")
	}

	this.nodes = this.g_nodes
		.selectAll(".node")
		.data(this.data.graph.nodes, d => d.name )
	
	// Enter	
	this.nodes.enter()
		.append("rect")
		.attr("class", "node")
		.attr("x", d => d.x)
		.attr("y", d => d.y )
		.attr("height", d => Math.max(1, d.dy) )
		.attr("width", this.sankey.nodeWidth() )
		.style("fill", d => color(shortName(d.region)) )
		.attr("cursor", "pointer")
		.on("mouseover", function (d) {
			that.buildTooltip(d, this)
		})
		.on("mouseout", () => {
			select("#widget-tooltip")
				.classed("hidden", true)
		})
		.on("click", d => {
			if (this.props.selectedCountry !== d.name) {
				this.props.selectedCountry = d.name;
			} else {
				this.props.selectedCountry = ""
			}

			this.topTenCheckbox.property("checked", false)

			this.updateAll()
		});

	// Update
	this.nodes
		.transition()
		.duration(this.props.duration)
		.attr("x", d => d.x)
		.attr("y", d => d.y )
		.attr("height", d => Math.max(1, d.dy) )
		.attr("width", this.sankey.nodeWidth())
		.style("fill", d => color(shortName(d.region)) )

	// Exit
	this.nodes
		.exit()
		.remove()

	return this
}

export default { buildNodes }
