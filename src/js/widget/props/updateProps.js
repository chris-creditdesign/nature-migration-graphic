const updateProps = function(options) {
	this.props.totalWidth = options.width ?
					options.width 
					: this.props.totalWidth
	this.props.totalHeight = options.height ? 
					options.height 
					: this.props.totalHeight
	this.props.margin = options.margin ? 
					options.margin 
					: this.props.margin
	this.props.width = this.props.totalWidth - this.props.margin.left - this.props.margin.right
	this.props.height = this.props.totalHeight - this.props.margin.top - this.props.margin.bottom
	this.props.groupByRegions = options.hasOwnProperty("groupByRegions") ? 
					options.groupByRegions 
					: this.props.groupByRegions

	return this
}

export default { updateProps }