<template>
  <cl-nav-action-group class="task-detail-actions-common">
    <cl-nav-action-fa-icon :icon="['fa', 'tools']"/>
    <cl-nav-action-item>
      <cl-task-status :status="form.status" size="large"/>
    </cl-nav-action-item>
    <cl-nav-action-item>
      <cl-fa-icon-button
        :icon="['fa', 'redo']"
        :tooltip="t('common.actions.restart')"
        type="warning"
        @click="onRestart"
      />
    </cl-nav-action-item>
    <cl-nav-action-item>
      <cl-fa-icon-button
        v-if="cancellable"
        :icon="['fa', 'pause']"
        :tooltip="t('common.actions.cancel')"
        type="info"
        @click="onCancel"
      />
      <cl-fa-icon-button
        v-else
        :icon="['fa', 'trash-alt']"
        :tooltip="t('common.actions.delete')"
        type="danger"
        @click="onDelete"
      />
    </cl-nav-action-item>
  </cl-nav-action-group>
</template>

<script lang="ts">
import {computed, defineComponent} from 'vue';
import {useStore} from 'vuex';
import {isCancellable} from '@/utils/task';
import useTask from '@/components/task/task';
import {ElMessage, ElMessageBox} from 'element-plus';
import useRequest from '@/services/request';
import useTaskDetail from '@/views/task/detail/useTaskDetail';
import {useRouter} from 'vue-router';
import {useI18n} from 'vue-i18n';

const {
  post,
} = useRequest();

export default defineComponent({
  name: 'TaskDetailActionsCommon',
  setup() {
    // i18n
    const {t} = useI18n();

    // router
    const router = useRouter();

    // store
    const ns = 'task';
    const store = useStore();

    // use task
    const {
      form,
    } = useTask(store);

    // use task detail
    const {
      activeId,
    } = useTaskDetail();

    // restart
    const onRestart = async () => {
      await ElMessageBox.confirm('Are you sure to restart?', 'Restart', {type: 'warning'});
      await post(`/tasks/${activeId.value}/restart`);
      await ElMessage.success('Restarted successfully');
      await store.dispatch(`${ns}/getById`, activeId.value);
    };

    // cancel
    const onCancel = async () => {
      await ElMessageBox.confirm('Are you sure to cancel?', 'Cancel', {type: 'warning'});
      await ElMessage.info('Attempt to cancel');
      await post(`/tasks/${activeId.value}/cancel`);
      await store.dispatch(`${ns}/getById`, activeId.value);
    };

    // delete
    const onDelete = async () => {
      await ElMessageBox.confirm('Are you sure to delete?', 'Delete', {
        type: 'warning',
        confirmButtonClass: 'el-button--danger'
      });
      await store.dispatch(`${ns}/deleteById`, activeId.value);
      await router.push('/tasks');
    };

    // cancellable
    const cancellable = computed<boolean>(() => isCancellable(form.value?.status));

    return {
      ...useTask(store),
      onRestart,
      onCancel,
      onDelete,
      cancellable,
      t,
    };
  },
});
</script>

<style scoped>
.task-detail-actions-common >>> .task-status {
  margin-right: 10px;
}
</style>
