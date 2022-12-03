<template>
  <cl-nav-action-group>
    <cl-nav-action-fa-icon
      :icon="['fa', 'database']"
      :tooltip="t('components.spider.actions.data.tooltip.dataActions')"
    />
    <cl-nav-action-item
      v-export="{
        target,
        conditions,
      }"
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
import {computed, defineComponent, ref, watch} from 'vue';
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

    return {
      allSpiderDict,
      spider,
      target,
      exportType,
      conditions,
      t,
    };
  },
});
</script>

<style lang="scss" scoped>

</style>
