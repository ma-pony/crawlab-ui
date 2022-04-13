const metric: LComponentsMetric = {
  filters: {
    metricSource: '指标源',
    timeUnit: '时间单位',
    timeRange: '时间区间',
  },
  empty: {
    noMetricsSelected: '未选择指标，请在左边的侧边栏进行选择一个或多个指标',
  },
  dashboard: {
    columns: {
      name: '名称',
      type: '类别',
      status: '状态',
      metrics: {
        title: '指标',
        node: {
          cpu: 'CPU',
          memory: '内存',
          disk: '磁盘',
          net: '网络',
        },
        mongo: {},
      }
    },
  },
  type: {
    node: '节点',
    mongo: 'MongoDB',
    seaweedfs: 'SeaweedFS',
  },
  progress: {
    detail: {
      name: '指标名称',
      value: '指标数值',
    },
  },
  snapshot: {
    node: {
      cpu: 'CPU 使用率',
      mem: '内存使用率',
      disk: '磁盘使用率',
      net: '网络状态',
    },
    mongo: {
      fs: 'MongoDB 文件系统使用率',
      db: 'MongoDB 储存大小百分比',
    },
  },
  status: {
    danger: '危险状态，系统崩溃风险很高，需要立即采取措施',
    warning: '警告状态，潜在系统崩溃风险，需要密切关注',
    healthy: '健康状态，无需采取措施',
    unknown: '未知状态',
  },
  metrics: {
    'performance:node:cpu:percent': 'CPU 使用百分比',
    'performance:node:mem:total': '总内存大小字节数',
    'performance:node:mem:available': '可用内存大小字节数',
    'performance:node:mem:used': '已用内存大小字节数',
    'performance:node:mem:used_percent': '已用内存百分比',
    'performance:node:disk:total': '总磁盘空间字节数',
    'performance:node:disk:free': '可用磁盘空间字节数',
    'performance:node:disk:used': '已用磁盘空间字节数',
    'performance:node:disk:used_percent': '已用磁盘百分比',
    'performance:node:disk:io_read_bytes': '磁盘读取 IO 字节数',
    'performance:node:disk:io_read_count': '磁盘读取 IO 数量',
    'performance:node:disk:io_read_time': '磁盘读取 IO 时间',
    'performance:node:disk:io_write_bytes': '磁盘写入 IO 字节数',
    'performance:node:disk:io_write_count': '磁盘写入 IO 数量',
    'performance:node:disk:io_write_time': '磁盘写入 IO 时间',
    'performance:node:disk:io_read_bytes_rate': '每秒磁盘读取 IO 字节数',
    'performance:node:disk:io_read_count_rate': '每秒磁盘读取 IO 数量',
    'performance:node:disk:io_read_time_rate': '每秒磁盘读取 IO 时间',
    'performance:node:disk:io_write_bytes_rate': '每秒磁盘写入 IO 字节数',
    'performance:node:disk:io_write_count_rate': '每秒磁盘写入 IO 数量',
    'performance:node:disk:io_write_time_rate': '每秒磁盘写入 IO 时间',
    'performance:node:net:io_bytes_sent': '网络 IO 总发送字节数',
    'performance:node:net:io_bytes_recv': '网络 IO 总接收字节数',
    'performance:node:net:io_packets_sent': '网络 IO 总发送数据包数',
    'performance:node:net:io_packets_recv': '网络 IO 总接收数据包数',
    'performance:node:net:io_errin': '网络接收总错误数',
    'performance:node:net:io_errout': '网络发送总错误数',
    'performance:node:net:io_dropin': '网络传入数据包总丢弃数',
    'performance:node:net:io_dropout': '网络传出数据包总丢弃数 (OSX/BSD 始终为0)',
    'performance:node:net:io_fifoin': '网络接收 FIFO 缓冲区总错误数',
    'performance:node:net:io_fifoout': '网络发送 FIFO 缓冲区总错误数',
    'performance:node:net:io_bytes_sent_rate': '每秒网络 IO 发送字节数',
    'performance:node:net:io_bytes_recv_rate': '每秒网络 IO 接收字节数',
    'performance:node:net:io_packets_sent_rate': '每秒网络 IO 发送数据包数',
    'performance:node:net:io_packets_recv_rate': '每秒网络 IO 接收数据包数',
    'performance:node:net:io_errin_rate': '每秒网络接收错误数',
    'performance:node:net:io_errout_rate': '每秒网络发送错误数',
    'performance:node:net:io_dropin_rate': '每秒网络传入数据包丢弃数',
    'performance:node:net:io_dropout_rate': '每秒网络传出数据包丢弃数 (OSX/BSD 始终为0)',
    'performance:node:net:io_fifoin_rate': '每秒网络接收 FIFO 缓冲区错误数',
    'performance:node:net:io_fifoout_rate': '每秒网络发送 FIFO 缓冲区错误数',
    'performance:mongo:size:fs_total_size': 'MongoDB 所在文件系统总磁盘空间字节数',
    'performance:mongo:size:fs_used_size': 'MongoDB 所在文件系统已用磁盘空间字节数',
    'performance:mongo:size:total_size': 'MongoDB 总大小字节数',
    'performance:mongo:size:total_free_storage_size': 'MongoDB 总可用储存大小字节数',
    'performance:mongo:size:storage_size': 'MongoDB 储存大小字节数',
    'performance:mongo:size:data_size': 'MongoDB 数据大小字节数',
    'performance:mongo:size:free_storage_size': 'MongoDB 可用储存大小字节数',
    'performance:mongo:size:index_free_storage_size': 'MongoDB 索引可用储存大小字节数',
    'performance:mongo:size:index_size': 'MongoDB 索引大小字节数',
    'performance:mongo:size:avg_obj_size': 'MongoDB 平均对象大小字节数',
    'performance:mongo:size:fs_used_size_percent': 'MongoDB 所在文件系统已用磁盘空间百分比',
    'performance:mongo:size:total_size_percent': 'MongoDB 总大小百分比',
    'performance:mongo:size:total_free_storage_size_percent': 'MongoDB 总可用储存大小百分比',
    'performance:mongo:size:storage_size_percent': 'MongoDB 储存大小百分比',
    'performance:mongo:size:data_size_percent': 'MongoDB 数据大小百分比',
    'performance:mongo:size:free_storage_size_percent': 'MongoDB 可用储存大小百分比',
    'performance:mongo:size:index_free_storage_size_percent': 'MongoDB 索引可用储存大小百分比',
    'performance:mongo:size:index_size_percent': 'MongoDB 索引大小百分比',
    'performance:mongo:count:collections': 'MongoDB 集合数',
    'performance:mongo:count:objects': 'MongoDB 对象数',
    'performance:mongo:count:views': 'MongoDB 视图数',
    'performance:mongo:other:scale_factor': 'MongoDB 比例因子',
  },
};

export default metric;
