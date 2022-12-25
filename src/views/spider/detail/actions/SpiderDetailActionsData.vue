<template>
  <cl-nav-action-group class="spider-detail-actions-data">
    <cl-nav-action-fa-icon
      :icon="['fa', 'database']"
      :tooltip="t('components.spider.actions.data.tooltip.dataActions')"
    />
    <cl-nav-action-item>
      <el-tooltip :content="t('components.spider.actions.data.tooltip.displayAllFields')">
        <cl-switch
          class="display-all-fields"
          v-model="displayAllFields"
        />
      </el-tooltip>
    </cl-nav-action-item>
    <cl-nav-action-item
      v-export="colName"
    >
      <cl-fa-icon-button
        :icon="['fa', 'download']"
        :tooltip="t('components.spider.actions.data.tooltip.export')"
        type="primary"
        id="export-btn"
        class-name="export-btn"
      />
    </cl-nav-action-item>
    <cl-nav-action-item>
      <cl-fa-icon-button
        :icon="['fa', 'table']"
        :tooltip="t('components.spider.actions.data.tooltip.inferDataFieldsTypes')"
        type="warning"
        class-name="infer-data-fields-types-btn"
        @click="onClickInferDataFieldsTypes"
      />
    </cl-nav-action-item>
  </cl-nav-action-group>
</template>

<script lang="ts">
import {defineComponent, ref, watch} from 'vue';
import {ExportTypeCsv} from '@/constants/export';
import {useStore} from 'vuex';
import {translate} from "@/utils";
import {inferDataFieldTypes} from "@/utils/dataFields";
import {ElMessage, ElMessageBox} from "element-plus";

const t = translate;

export default defineComponent({
  name: 'SpiderDetailActionsData',
  setup() {
    // store
    const ns = 'spider';
    const nsDc = 'dataCollection';
    const store = useStore();
    const {
      spider: spiderState,
      dataCollection: dataCollectionState,
    } = store.state as RootStoreState;

    // spider col name
    const colName = () => spiderState.form.col_name as string;

    // export type
    const exportType = ref<ExportType>(ExportTypeCsv);

    // display all fields
    const displayAllFields = ref<boolean>(spiderState.dataDisplayAllFields);
    watch(displayAllFields, (val) => {
      store.commit(`${ns}/setDataDisplayAllFields`, val);
    });

    const inferFields = async () => {
      let fields = store.getters[`${nsDc}/resultFields`] as DataField[];
      const data = dataCollectionState.resultTableData as Result[];
      fields = inferDataFieldTypes(fields, data);
      const form = {
        ...dataCollectionState.form,
        fields,
      };
      store.commit(`${nsDc}/setForm`, form);
      await store.dispatch(`${nsDc}/updateById`, {
        id: form._id,
        form,
      });
      await store.dispatch(`${nsDc}/getById`, form._id);
    };

    const onClickInferDataFieldsTypes = async () => {
      await ElMessageBox.confirm(t('common.messageBox.confirm.proceed'), t('common.actions.inferDataFieldsTypes'), {type: 'warning'});
      await inferFields();
      await ElMessage.success(t('common.message.success.action'));
    };

    watch(() => JSON.stringify(dataCollectionState.resultTableData), async () => {
      if (!dataCollectionState.form?.fields?.length && dataCollectionState.resultTableData?.length) {
        await inferFields();
      }
    });

    return {
      exportType,
      colName,
      displayAllFields,
      onClickInferDataFieldsTypes,
      t,
    };
  },
});
</script>

<style scoped>
.spider-detail-actions-data >>> .display-all-fields {
  margin-right: 10px;
}
</style>
