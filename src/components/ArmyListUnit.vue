<template>
	<tr class="bg-white">
		<td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{{ unit.name }}</td>
		<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ unit.quality }}+</td>
		<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ unit.defense }}+</td>
		<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ getEquipmentList(unit) }}</td>
		<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ getRuleList(unit) }}</td>
		<td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
			<button type="button" @click="addUnitToRosterStore(unit)" class="text-indigo-600 hover:text-indigo-900">Add</button>
		</td>
		<td></td>
	</tr>
</template>

<script>
import getEquipmentList from '@/mixins/getEquipmentList.js'
import getRuleList from '@/mixins/getRuleList.js'

export default {
	name: 'ArmyUnit',
	mixins: [getEquipmentList, getRuleList],
	props: ['unit'],
	methods: {
		addUnitToRosterStore(unit) {
			this.$store.commit('addUnitToRoster', unit)
		},
	},
}
</script>
