function updateAll() {

	this.showTopTen = this.topTenCheckbox.property("checked")

	if (this.showTopTen) {
		this.props.selectedCountry = ""
	}
	
	this.buildLinks()
		.buildNodes()
		.buildText()

	return this
}

export default { updateAll }