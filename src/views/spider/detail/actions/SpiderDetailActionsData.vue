<template>
  <cl-nav-action-group>
    <cl-nav-action-fa-icon
      :icon="['fa', 'database']"
      :tooltip="t('components.spider.actions.data.tooltip.dataActions')"
    />
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
import {defineComponent, ref} from 'vue';
import {useI18n} from 'vue-i18n';
import {ExportTypeCsv} from '@/constants/export';
import {useStore} from 'vuex';

export default defineComponent({
  name: 'SpiderDetailActionsData',
  setup() {
    // i18n
    const {t} = useI18n();

    // store
    const store = useStore();
    const {
      spider: spiderState,
    } = store.state as RootStoreState;

    // spider col name
    const colName = () => spiderState.form.col_name as string;

    // export type
    const exportType = ref<ExportType>(ExportTypeCsv);

    return {
      exportType,
      colName,
      t,
    };
  },
});
</script>

<style lang="scss" scoped>

</style>
