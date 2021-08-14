<template>
	<div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
		<h2>Roster</h2>

		<RosterUnit v-for="(unit, index) in units" :key="index" :unit="unit" />
	</div>
</template>

<script>
import RosterUnit from '@/components/RosterUnit.vue'

export default {
	name: 'Roster',
	components: {
		RosterUnit,
	},
	computed: {
		units() {
			return this.$store.state.roster.all
		},
	},
}
</script>
