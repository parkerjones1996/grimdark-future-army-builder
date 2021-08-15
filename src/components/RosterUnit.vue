<template>
	<div class="max-w-none mx-auto">
		<div class="bg-white overflow-hidden border sm:rounded-lg sm:shadow-sm">
			<div class="bg-white px-4 py-5 border-b border-gray-200 sm:px-6">
				<div class="-ml-4 -mt-2 flex items-center justify-between flex-wrap sm:flex-nowrap">
					<div class="flex items-center space-x-5 ml-4 mt-2">
						<h3 class="text-lg leading-6 font-medium text-gray-900">{{ unit.name }}</h3>
						<div class="flex items-center space-x-3">
							<div class="flex items-center space-x-3">
								<span class="inline-flex items-center px-3 py-0.5 rounded-full font-medium bg-green-100 text-green-800">
									{{ `Q${unit.baseUnit.quality}+` }}
								</span>
								<span class="inline-flex items-center px-3 py-0.5 rounded-full font-medium bg-blue-100 text-blue-800">
									{{ `D${unit.baseUnit.defense}+` }}
								</span>
							</div>
						</div>
					</div>
					<div class="ml-4 mt-2 flex-shrink-0">
						<button
							type="button"
							class="
								relative
								inline-flex
								items-center
								px-4
								py-2
								border border-transparent
								shadow-sm
								text-sm
								font-medium
								rounded-md
								text-white
								bg-indigo-600
								hover:bg-indigo-700
								focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
							"
						>
							Upgrade
						</button>
					</div>
				</div>
			</div>

			<ul class="divide-y divide-gray-200">
				<li v-for="(groupedModel, index) in groupedModels" :key="index">
					<a href="#" class="block hover:bg-gray-50">
						<div class="px-4 py-4 sm:px-6">
							<div class="flex items-center">
								<div class="font-medium text-indigo-600 truncate">
									{{ `${groupedModel.count}x  ${groupedModel.baseModel.name}` }}
								</div>
							</div>
							<div class="mt-2 flex justify-between">
								<div class="sm:flex">
									<div class="flex items-center font-medium text-gray-500">
										{{ getEquipmentList(groupedModel.baseModel) }}
									</div>
								</div>
								<div class="ml-2 flex items-center font-medium text-gray-500">
									{{ getRuleList(groupedModel.baseModel) }}
								</div>
							</div>
						</div>
					</a>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
import getEquipmentList from '@/mixins/getEquipmentList'
import getRuleList from '@/mixins/getRuleList'

export default {
	name: 'RosterUnit',
	props: ['unit'],
	mixins: [getEquipmentList, getRuleList],
	computed: {
		groupedModels() {
			// Convert the models to JSON strings for simple comparison
			const stringifiedModels = this.unit.models.map((model) => JSON.stringify(model))

			let groupedModels = []

			stringifiedModels.forEach((model) => {
				// If the grouped models does not already contain the current model, add it to the array with a count of 1
				if (!groupedModels.some((groupedModel) => groupedModel.baseModel === model)) {
					groupedModels.push({
						count: 1,
						baseModel: model,
					})
				} else {
					// If the model already exists in the array, find the index of that model and increment the count
					const existingModelIndex = groupedModels.findIndex((groupedModel) => {
						return groupedModel.baseModel === model
					})

					groupedModels[existingModelIndex].count++
				}
			})

			// Map through the models and turn their baseModel property back into an object
			return groupedModels.map((groupedModel) => {
				return { ...groupedModel, baseModel: JSON.parse(groupedModel.baseModel) }
			})
		},
	},
}
</script>
