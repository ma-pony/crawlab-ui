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
  </cl-nav-action-group>
</template>

<script lang="ts">
import {defineComponent, onBeforeUnmount, ref, watch} from 'vue';
import {ExportTypeCsv} from '@/constants/export';
import {useStore} from 'vuex';
import {translate} from "@/utils";

const t = translate;

export default defineComponent({
  name: 'SpiderDetailActionsData',
  setup() {
    // store
    const ns = 'spider';
    const nsDs = 'dataCollection';
    const store = useStore();
    const {
      spider: spiderState,
    } = store.state as RootStoreState;

    // spider col name
    const colName = () => spiderState.form.col_name as string;

    // export type
    const exportType = ref<ExportType>(ExportTypeCsv);

    // display all fields
    const displayAllFields = ref<boolean>(spiderState.dataDisplayAllFields);
    onBeforeUnmount(() => {
      store.commit(`${nsDs}/setDataDisplayAllFields`, false);
    });
    watch(displayAllFields, (val) => {
      store.commit(`${ns}/setDataDisplayAllFields`, val);
    });

    return {
      exportType,
      colName,
      displayAllFields,
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
