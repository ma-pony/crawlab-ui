<template>
  <div class="spider-detail-tab-data">
    <cl-result-list
      :id="form?.col_id"
      :data-source-id="form?.data_source_id"
      :display-all-fields="displayAllFields"
      no-actions
      embedded
    />
  </div>
</template>
<script lang="ts">
import {computed, defineComponent, watch} from 'vue';
import {useStore} from 'vuex';
import useSpider from '@/components/spider/spider';

export default defineComponent({
  name: 'SpiderDetailTabTasks',
  setup() {
    // store
    const nsDc = 'dataCollection';
    const store = useStore();
    const {
      spider: state,
    } = store.state;

    const displayAllFields = computed<boolean>(() => state.dataDisplayAllFields);

    watch(() => state.form?.col_id, (val) => {
      if (val) {
        store.dispatch(`${nsDc}/getById`, val);
      }
    });

    return {
      ...useSpider(store),
      displayAllFields,
    };
  },
});
</script>

<style scoped>
.spider-detail-tab-data >>> .el-table {
  border: none;
}
</style>
