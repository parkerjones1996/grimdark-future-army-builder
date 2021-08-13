<template>
	<div class="max-w-7xl mx-auto my-12 flex flex-col">
		<div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
			<div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
				<h2>Unit List</h2>
				<div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
					<table class="min-w-full divide-y divide-gray-200">
						<thead class="bg-gray-50">
							<tr>
								<th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
								<th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quality</th>
								<th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Defense</th>
								<th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Equipment</th>
								<th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rules</th>
								<th scope="col" class="relative px-6 py-3"></th>
							</tr>
						</thead>
						<tbody>
							<!-- Odd row -->
							<tr v-for="(unit, index) in units" :key="index" class="bg-white">
								<td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{{ unit.name }}</td>
								<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ unit.quality }}</td>
								<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ unit.defense }}</td>
								<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ getEquipmentList(unit) }}</td>
								<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ getRuleList(unit) }}</td>
								<td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
									<button type="button" @click="addUnitToArmy(unit)" class="text-indigo-600 hover:text-indigo-900">Add</button>
								</td>
								<td></td>
							</tr>

							<!-- Even row -->
							<!-- <tr class="bg-gray-50">
								<td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Cody Fisher</td>
								<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Product Directives Officer</td>
								<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">cody.fisher@example.com</td>
								<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Owner</td>
								<td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
									<a href="#" class="text-indigo-600 hover:text-indigo-900">Edit</a>
								</td>
							</tr> -->

							<!-- More people... -->
						</tbody>
					</table>
				</div>
			</div>

			<div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8 mt-12">
				<h2>Army List</h2>
				<div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
					<table class="min-w-full divide-y divide-gray-200">
						<thead class="bg-gray-50">
							<tr>
								<th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
								<th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quality</th>
								<th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Defense</th>
								<th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Equipment</th>
								<th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rules</th>
								<th scope="col" class="relative px-6 py-3"></th>
							</tr>
						</thead>
						<tbody>
							<!-- Odd row -->
							<tr v-for="unit in army" :key="unit.id" class="bg-white">
								<td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{{ unit.name }}</td>
								<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ unit.quality }}</td>
								<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ unit.defense }}</td>
								<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ getEquipmentList(unit) }}</td>
								<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ getRuleList(unit) }}</td>
								<td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
									<button type="button" @click="getAvailableUpgrades(unit)" class="text-indigo-600 hover:text-indigo-900">Upgrades</button>
								</td>
								<td></td>
							</tr>

							<!-- Even row -->
							<!-- <tr class="bg-gray-50">
								<td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Cody Fisher</td>
								<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Product Directives Officer</td>
								<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">cody.fisher@example.com</td>
								<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Owner</td>
								<td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
									<a href="#" class="text-indigo-600 hover:text-indigo-900">Edit</a>
								</td>
							</tr> -->

							<!-- More people... -->
						</tbody>
					</table>
				</div>
			</div>
		</div>

		<div class="mt-12 max-w-7xl mx-auto">
			<h2>Available Upgrades</h2>
			<div>
				<!-- <div v-for="(upgrade, key) in getAvailableUpgrades()" :key="key" class="bg-white px-4 py-5 border-b border-gray-200 sm:px-6">
					<h3 class="text-lg leading-6 font-medium text-gray-900">Job Postings</h3>
				</div> -->
			</div>
		</div>
	</div>
</template>

<script>
import battleBrothers from '../assets/armies/battle_brothers.json'
export default {
	data() {
		return {
			units: battleBrothers.units,
			upgrades: battleBrothers.upgrades,
			availableUpgrades: [],
			army: [],
		}
	},
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
		getRuleList(unit) {
			return unit.rules.join(', ')
		},
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
		addUnitToArmy(unit) {
			this.army.push({
				...unit,
				id: Math.floor(Math.random() * 1000),
			})
		},
	},
	mounted() {
		// console.log(battleBrothers)
		console.log(this.getAvailableUpgrades(this.units[0]))
	},
}
</script>
