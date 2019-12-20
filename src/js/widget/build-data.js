import onlyUnique from "./helpers/only-unique"
import compareValue from "./helpers/compareValue"
import shortName from "./helpers/short-name"

function buildData(data) {

	const origins = data.map( d => d.origin )
						.filter(onlyUnique)

	const destinations = data.map( d => d.destination )
						.filter(onlyUnique)

	const states = origins.concat(destinations)

	const origin_regions = data.map( d => d.origin_region )
						.filter(onlyUnique)

	const destination_regions = data.map( d => d.destination_region )
						.filter(onlyUnique)

	const regions = origin_regions.concat( destination_regions )
						
	const nodes = states.map( d => {
				return { 
					name: d
				}
			})

	const links = data.map( d => {
				return {
					source: states.indexOf(d.origin), 
					target: states.indexOf(d.destination), 
					origin: d.origin,
					destination: d.destination,
					origin_region: d.origin_region,
					destination_region: d.destination_region,
					value: parseInt(d.value, 10),
					id: `${shortName(d.origin)} to ${shortName(d.destination)}`
				}
			})

	// Create an array with the ids of the top ten links
	const topLinks = links.sort(compareValue).slice(0,10).map( x => x.id )

	this.data = {
		graph: {
			links,
			nodes
		},
		origin_regions,
		destination_regions,
		regions,
		topLinks
	}

	return this
}

export default { buildData }
