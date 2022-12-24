<template>
  <cl-nav-action-group class="task-detail-actions-data">
    <cl-nav-action-fa-icon
      :icon="['fa', 'database']"
      :tooltip="t('components.task.actions.data.tooltip.dataActions')"
    />
    <cl-nav-action-item>
      <el-tooltip :content="t('components.task.actions.data.tooltip.displayAllFields')">
        <cl-switch
          class="display-all-fields"
          v-model="displayAllFields"
        />
      </el-tooltip>
    </cl-nav-action-item>
    <cl-nav-action-item
      v-export="{
        target,
        conditions,
      }"
    >
      <cl-fa-icon-button
        :icon="['fa', 'download']"
        :tooltip="t('components.task.actions.data.tooltip.export')"
        type="primary"
        id="export-btn"
        class-name="export-btn"
      />
    </cl-nav-action-item>
  </cl-nav-action-group>
</template>

<script lang="ts">
import {computed, defineComponent, onBeforeUnmount, ref, watch} from 'vue';
import {useI18n} from 'vue-i18n';
import {ExportTypeCsv} from '@/constants/export';
import {useStore} from 'vuex';
import useSpider from '@/components/spider/spider';
import useRequest from '@/services/request';
import {FILTER_OP_EQUAL} from '@/constants';

const {
  get,
} = useRequest();

export default defineComponent({
  name: 'TaskDetailActionsData',
  setup() {
    // i18n
    const {t} = useI18n();

    // store
    const ns = 'task';
    const nsDs = 'dataCollection';
    const store = useStore();
    const {
      task: taskState,
    } = store.state as RootStoreState;

    const {
      allDict: allSpiderDict,
    } = useSpider(store);

    // spider
    const spider = computed(() => allSpiderDict.value.get(taskState.form.spider_id as string));

    // spider collection name
    const colName = ref<string>();
    watch(() => spider.value, async () => {
      if (!spider.value) return;
      const res = await get(`/spiders/${spider.value._id}`);
      colName.value = (res.data as Spider)?.col_name;
    });

    // target
    const target = () => colName.value;

    // conditions
    const conditions = () => [{key: '_tid', op: FILTER_OP_EQUAL, value: taskState.form._id}];

    // export type
    const exportType = ref<ExportType>(ExportTypeCsv);

    // display all fields
    const displayAllFields = ref<boolean>(taskState.dataDisplayAllFields);
    onBeforeUnmount(() => {
      store.commit(`${nsDs}/setDataDisplayAllFields`, false);
    });
    watch(displayAllFields, (val) => {
      store.commit(`${ns}/setDataDisplayAllFields`, val);
    });

    return {
      allSpiderDict,
      spider,
      target,
      exportType,
      conditions,
      displayAllFields,
      t,
    };
  },
});
</script>

<style scoped>
.task-detail-actions-data >>> .display-all-fields {
  margin-right: 10px;
}
</style>
