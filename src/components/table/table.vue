<template>
<div>
  <Table :data="tableData" :loading="loading" highlight-row size="small" :columns="data[0].amountFloat? paymentColumns:tableColumns" stripe border ellipsis></Table>
</div>
</template>
<script>
export default {
  data() {
    return {
      loading: true,
      tableData: this.data,
      tableColumns: [{
          title: this.columns[0].title,
          key: this.columns[0].key,
          align: 'center',
          width: 230,
          fixed: 'left',
        },
        {
          title: this.columns[1].title,
          key: this.columns[1].key,
          align: 'center',
          width: 230,
          render: (h, params) => {
            return h('div', params.row.hr1s);
          }
        },
        {
          title: this.columns[2].title,
          key: this.columns[2].key,
          align: 'center',
          width: 230,
          render: (h, params) => {
            // console.log(params.row, 'params.row');
            return h('div', params.row.hr2s);
          }
        },
        {
          title: this.columns[3].title,
          key: this.columns[3].key,
          align: 'center',
          width: 230,
          render: (h, params) => {
            return h('div', params.row.rejects);
          }
        },
        {
          title: this.columns[4].title,
          key: this.columns[4].key,
          align: 'center',
          width: 230,
          render: (h, params) => {
            return h('div', this.common.formatDate(params.row.lastShare));
          }
        }
      ],
      paymentColumns: [{
          title: '序号',
          type: 'index',
          align: 'center',
          width: 100,
          fixed: 'left',
        },
        {
          title: this.columns[1].title,
          key: this.columns[1].key,
          align: 'center',
          width: 180,
          render: (h, params) => {
            return h('div', this.common.formatDate(params.row.time));
          }
        },
        {
          title: this.columns[2].title,
          key: this.columns[2].key,
          align: 'center',
          width: 150,
          render: (h, params) => {
            // console.log(params.row, 'params.row');
            return h('div', params.row.amountFloat);
          }
        },
        { //交易
          title: this.columns[3].title,
          key: this.columns[3].key,
          align: 'center',
          width: 500,
          render: (h, params) => {
            return h('div', params.row.txid);
          }
        },
        {
          title: this.columns[4].title,
          key: this.columns[4].key,
          align: 'center',
          width: 230,
          render: (h, params) => {
            const row = params.row;
            return h('Tag', {
              props: {
                type: 'dot',
                color: 'success'
              }
            }, "交易正常");
          }
        }
      ]
    }
  },
  props: ['columns', 'data'],
  methods: {
    changePage(val) {
      //获取数据
      this.tableData = this.data;
      console.log(this.data);
      console.log(val);
    },
  },
  watch: {
    data: function(val, oldVal) {}
  },
  created() {},
  mounted() {
    if (this.data) {
      this.loading = false
    }
    console.log(this.data);
    console.log(this.columns);
  }
}
</script>
