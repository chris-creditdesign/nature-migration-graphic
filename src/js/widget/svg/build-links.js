import { select, selectAll } from "d3-selection"
import "d3-transition"
import shortName from "../helpers/short-name"

function buildLinks() {
	var that = this
	var filterdLinks
	var notSelectedColor = "#fff"

	function isSelected (elem) {
		if (that.props.selectedCountry.slice(-2) === "-o") {
			return elem.origin === that.props.selectedCountry
		} else if (that.props.selectedCountry.slice(-2) === "-d") {
			return elem.destination === that.props.selectedCountry
		} else {
			return true
		}
	}

	function isTopTen (elem) {
		return that.data.topLinks.indexOf(elem.id) > -1
	}

	function shouldHaveGradient () {
		return that.props.selectedCountry.length > 0 || that.props.showTopTen
	}

	function buildGradient (d) {
		return "url(#" + d.origin_region.toLowerCase().replace(/\s+/g, '-') + "-" + d.destination_region.toLowerCase().replace(/\s+/g, '-') + ")"
	}

	if (this.showTopTen) {
		filterdLinks = this.data.graph.links.filter(isTopTen)
	} else {
		filterdLinks = this.data.graph.links.filter(isSelected)
	}

	if (!this.g_links) {
		// Only make the group if it doesn't already exist
		this.g_links = this.svg_g.append("g")
			.attr("class", "links")
	}

	this.links = this.g_links
		.selectAll("path")
		.data(filterdLinks, function(d) {
			return d.id
		})
	
	// Enter	
	this.links.enter()
		.append("path")
		.attr("d", this.path)
		.style("stroke-width", function(d) {
			return Math.max(1, d.dy) // Set the stroke to the dy value - making sure it is at least 1
		})
		.style("stroke", (d) => {
			return shouldHaveGradient() ?  buildGradient(d) : notSelectedColor
		})
		.attr("class", () => {
			return shouldHaveGradient() ? "link gradient" : "link"
		})
		.on("mouseover", function(d) {
			that.buildTooltip(d, this)
		})
		.on("mouseout", function() {
			select("#widget-tooltip")
				.classed("hidden", true)
		})

	// Update
	this.links
		.transition()
		.duration(this.props.duration)
		.attr("d", this.path)
		.style("stroke-width", function(d) {
			return Math.max(1, d.dy) // Set the stroke to the dy value - making sure it is at least 1
		})
		.style("stroke", (d) => {
			return shouldHaveGradient() ?  buildGradient(d) : notSelectedColor
		})
		.attr("class", () => {
			return shouldHaveGradient() ? "link gradient" : "link"
		})

	// Exit
	this.links.exit()
		.remove()

	return this
}

export default { buildLinks }