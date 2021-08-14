const state = () => ({
	all: [],
})

const mutations = {
	addUnitToRoster(state, unit) {
		const rosterUnit = {
			id: Math.floor(Math.random() * 1000),
			name: unit.name,
			baseUnit: unit,
			models: Array(unit.size)
				.fill()
				.map(() => unit),
		}

		state.all.push(rosterUnit)
	},
}

export default {
	state,
	mutations,
}
