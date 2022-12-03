<template>
  <cl-detail-layout no-sidebar store-namespace="task">
    <template #actions>
      <cl-task-data-actions-common/>
      <cl-task-data-actions-logs v-if="activeTabName === 'logs'"/>
      <cl-task-data-actions-data v-if="activeTabName === 'data'"/>
    </template>
  </cl-detail-layout>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import useTaskDetail from '@/views/task/detail/taskDetail';

export default defineComponent({
  name: 'TaskDetail',
  setup() {
    return {
      ...useTaskDetail(),
    };
  },
});
</script>

<style lang="scss" scoped>

</style>
