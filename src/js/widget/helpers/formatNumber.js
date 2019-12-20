import { format } from "d3-format"

function formatNumber(d) {
	var myFunc = format(",.0f")
	return myFunc(d) + " people"
};

export default formatNumber
