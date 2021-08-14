<template>
	<div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8 mt-12">
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
					<ArmyUnit v-for="(unit, index) in units" :unit="unit" :key="index" />
					<!-- Odd row -->
					<!-- <tr v-for="(unit, index) in units" :key="index" class="bg-white">
						<td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{{ unit.name }}</td>
						<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ unit.quality }}+</td>
						<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ unit.defense }}+</td>
						<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ getEquipmentList(unit) }}</td>
						<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ getRuleList(unit) }}</td>
						<td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
							<button type="button" @click="addUnitToArmy(unit)" class="text-indigo-600 hover:text-indigo-900">Add</button>
						</td>
						<td></td>
					</tr> -->

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
</template>

<script>
import battleBrothers from '@/assets/armies/battle_brothers.json'
import ArmyUnit from '@/components/ArmyListUnit.vue'

export default {
	name: 'ArmyList',
	components: {
		ArmyUnit,
	},
	data() {
		return {
			units: battleBrothers.units,
		}
	},
}
</script>
