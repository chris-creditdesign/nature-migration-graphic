import buildProps from "./props/buildProps"
import updateProps from "./props/updateProps"
import buildSvg from "./svg/build-svg"
import buildData from "./build-data"
import buildSankey from "./sankey/build-sankey"
import buildDefs from "./svg/build-defs"
import buildLinks from "./svg/build-links"
import buildNodes from "./svg/build-nodes"
import buildText from "./svg/build-text"
import buildLabels from "./svg/build-labels"
import updateAll from "./update-all"
import buildKey from "./ui/build-key"
import buildTooltip from "./ui/build-tooltip"
import buildTopTenSelector from "./ui/build-top-ten-selector"
import buildContinentSelector from "./ui/build-continent-selector"
import resize from "./resize"
import removeSvg from "./svg/remove-svg"

const Widget = () => {
	return Object.assign(
			{},
			buildProps,
			updateProps,
			buildSvg,
			buildData,
			buildSankey,
			buildDefs,
			buildLinks,
			buildNodes,
			buildText,
			buildLabels,
			updateAll,
			buildKey,
			buildTooltip,
			buildTopTenSelector,
			buildContinentSelector,
			resize,
			removeSvg
		)
}


export default Widget