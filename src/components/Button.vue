<template>
	<div>
		<el-button type="primary" @click="dialog = true">ボタン</el-button>
		<el-dialog title="ダイアログ" :visible.sync="dialog" width="30%">
			<el-form ref="form" :model="form" label-width="160px">
				<el-form-item label="テキスト">
					<el-input v-model="form.text"></el-input>
				</el-form-item>
				<el-form-item label="セレクト">
					<el-select v-model="form.select">
						<el-option label="セレクト1" value="1"></el-option>
						<el-option label="セレクト2" value="2"></el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="日時">
					<el-col :span="11">
						<el-date-picker type="date" v-model="form.date" style="width: 100%;"></el-date-picker>
					</el-col>
					<el-col class="line" :span="2">-</el-col>
					<el-col :span="11">
						<el-time-picker v-model="form.time" style="width: 100%;"></el-time-picker>
					</el-col>
				</el-form-item>
				<el-form-item label="スイッチ">
					<el-switch v-model="form.switch"></el-switch>
				</el-form-item>
				<el-form-item label="チェックボックス">
					<el-checkbox-group v-model="form.check">
						<el-checkbox label="チェック1" name="check"></el-checkbox>
						<el-checkbox label="チェック2" name="check"></el-checkbox>
						<el-checkbox label="チェック3" name="check"></el-checkbox>
						<el-checkbox label="チェック4" name="check"></el-checkbox>
					</el-checkbox-group>
				</el-form-item>
				<el-form-item label="ラジオボタン">
					<el-radio-group v-model="form.radio">
						<el-radio label="ラジオ1"></el-radio>
						<el-radio label="ラジオ2"></el-radio>
					</el-radio-group>
				</el-form-item>
				<el-form-item label="テキストエリア">
					<el-input type="textarea" v-model="form.textarea"></el-input>
				</el-form-item>
			</el-form>
			<span slot="footer" class="dialog-footer">
				<el-button @click="dialog = false">キャンセル</el-button>
				<el-button type="primary" @click="dialog = false">OK</el-button>
			</span>
		</el-dialog>
	</div>
</template>

<script>

export default {
	props: [
		'event'
	],
	components: {},
	data() {
		return {
			dialog: false,
			form: {
				text: '',
				select: '',
				date: '',
				time: '',
				switch: '',
				check: [],
				radio: '',
				textarea: ''
			}
		};
	},
	computed: {

	},
	watch: {

	},
	methods: {

	},
	mounted() {

	}
}
</script>

<style lang="scss" scoped>
</style>

