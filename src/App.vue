<template>
	<div class="max-w-7xl mx-auto my-12 flex flex-col">
		<Roster />
		<div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
			<ArmyList />
		</div>
	</div>
</template>

<script>
import ArmyList from '@/components/ArmyList.vue'
import Roster from '@/components/Roster.vue'

export default {
	components: {
		ArmyList,
		Roster,
	},
	methods: {
		getAvailableUpgrades(unit) {
			const upgradeLists = this.upgrades.filter((list) => unit.upgrades.includes(list.id))

			// Combine all of the upgrades from the upgrade lists into a single array
			const upgrades = [].concat(...upgradeLists.map((list) => list.options))

			this.availableUpgrades = upgrades.filter((upgrade) => {
				const requirements = upgrade.requirements

				// If the upgrade doesn't have any requirements return true
				if (requirements.length === 0) return true

				// Check if the unit has all of the equipment that is specified in the upgrade's requiment
				const meetsRequirements = requirements.reduce((requirement) => {
					return unit.equipment.includes(requirement)
				}, true)

				return meetsRequirements
			})
		},
		singularizeModelName(modelName) {
			if (modelName.substring(modelName.length - 1) !== 's') return modelName

			return modelName.slice(0, -1)
		},
	},
}
</script>
