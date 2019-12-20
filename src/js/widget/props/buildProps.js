const buildProps = function (options) {
	this.props = {}
	this.props.totalWidth = options.width ?
						options.width
						: 630
	this.props.totalHeight = options.height ?
						options.height 
						: 2500
	this.props.margin = options.margin ?
						options.margin 
						: {'top': 20, 'left': 10, 'bottom': 10, 'right': 10}
	this.props.width = this.props.totalWidth - this.props.margin.left - this.props.margin.right
	this.props.height = this.props.totalHeight - this.props.margin.top - this.props.margin.bottom
	this.props.target = options.target ?
						options.target 
						: "body"
	this.props.selectedCountry = ""
	this.props.showTopTen = false
	this.props.groupByRegions = options.hasOwnProperty("groupByRegions") ?
						options.groupByRegions 
						: false
	this.props.duration = 500
	this.props.textLimit = 40000

	return this
}

export default { buildProps }