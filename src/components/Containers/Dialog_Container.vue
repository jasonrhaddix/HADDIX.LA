<template>
    <v-dialog
        transition="transition-slide-up"
        content-class="dialog-container"
		:width="getWidth"
        v-model="openState">

        <template>
			<div class="dialog-container__content">
				<component
					:is="loadComponent"
					v-bind="dialogProps"/>

				<v-btn
					light fab small
					class="close-btn"
					@click="closeDialog">
					<v-icon>close</v-icon>
				</v-btn>
			</div>
        </template>
    </v-dialog>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'

import {
	VUEX_UI_DIALOG_CONTAINER_HIDE
} from '@/store/constants/ui'

export default {
	name: 'dialog-container',

	computed: {
		...mapState({
			dialogOpenState: state => state.ui.dialogContainer.openState,
			dialogComponent: state => state.ui.dialogContainer.component,
			dialogWidth: state => state.ui.dialogContainer.width,
			dialogProps: state => state.ui.dialogContainer.props
		}),

		...mapGetters({
			appAuthenticated: 'appAuthenticated'
		}),

		getWidth () {
			return this.dialogWidth
		},

		loadComponent () {
			return this.dialogComponent ? this.$root.loadComponent(this.dialogComponent) : null
		},

		openState: {
			get () { return this.dialogOpenState },
			set (val) { this.$store.commit('VUEX_UI_DIALOG_CONTAINER_SET_STATE', val) }
		}
	},

	methods: {
		...mapActions({
			closeDialog: VUEX_UI_DIALOG_CONTAINER_HIDE
		})
	}
}
</script>
