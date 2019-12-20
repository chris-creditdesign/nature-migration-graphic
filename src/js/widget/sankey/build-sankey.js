import sankey from "../../lib/sankey"

function buildSankey() {
	this.sankey = sankey()
		.nodeWidth(30)
		.nodePadding(5)
		.size([this.props.width, this.props.height])
		.groups(this.data.regions)
		.groupByGroups(this.props.groupByRegions)
		.nodes(this.data.graph.nodes)
		.links(this.data.graph.links)
		.layout(32)

	this.path = this.sankey.link()

	return this
}

export default { buildSankey }