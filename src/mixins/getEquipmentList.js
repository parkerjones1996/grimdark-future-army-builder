export default {
	methods: {
		getEquipmentList(unit) {
			return unit.equipment
				.map((equipment) => {
					const equipmentRange = equipment.range ? `${equipment.range}"` : ''
					const equipmentAttacks = equipment.attacks ? `A${equipment.attacks}` : ''
					const equipmentRules = equipment.rules.join(' ')

					const equipmentDetailsString = [equipmentRange, equipmentAttacks, equipmentRules].filter(Boolean).join(', ')

					return `${equipment.name} (${equipmentDetailsString})`
				})
				.join(', ')
		},
	},
}
