<template>
<div>
  <Table v-if="tableData" :data="tableData" :loading="loading" highlight-row size="small" :columns="columns[0].title=='序号' ? paymentColumns:tableColumns" stripe border ellipsis></Table>
</div>
</template>
<script>
Array.prototype.indexOf = function(val) {
  for (var i = 0; i < this.length; i++) {
    if (this[i] == val) return i;
  }
  return -1;
};
Array.prototype.remove = function(val) {
  var index = this.indexOf(val);
  if (index > -1) {
    this.splice(index, 1);
  }
};
export default {
  data() {
    return {
      loading: true,
      tableData: this.data,
      clintWidth: document.body.clientWidth, //宽度
      tableColumns: [{
          title: this.columns[0].title,
          key: this.columns[0].key,
          align: 'left',
          width: document.body.clientWidth > 575 ? 100 : 0,
        },
        {
          title: this.columns[1].title,
          key: this.columns[1].key,
          align: 'left',
          width: 120,
          render: (h, params) => {
            return h('div', params.row.hr1s);
          }
        },
        {
          title: this.columns[2].title,
          key: this.columns[2].key,
          align: 'left',
          width: 120,
          render: (h, params) => {
            return h('div', params.row.hr2s);
          }
        },
        {
          title: this.columns[3].title,
          key: this.columns[3].key,
          align: 'left',
          width: 80,
          render: (h, params) => {
            return h('div', params.row.rejects);
          }
        },
        {
          title: this.columns[4].title,
          key: this.columns[4].key,
          align: 'left',
          width: 120,
          render: (h, params) => {
            return h('div',params.row.lastshares)
          }
        },
        {
          title: this.columns[5].title,
          key: this.columns[5].key,
          align: 'left',
          width: 150,
          render: (h, params) => {
            return h('div', this.common.formatDate(params.row.lastShare));
          }
        },
      ],
      paymentColumns: [{
          title: '序号',
          type: 'index',
          align: 'left',
          width: 65,
          fixed: 'left',
        },
        {
          title: this.columns[1].title,
          key: this.columns[1].key,
          align: 'left',
          width: 160,
          render: (h, params) => {
            return h('div', this.common.formatDate(params.row.time));
          }
        },
        {
          title: this.columns[2].title,
          key: this.columns[2].key,
          align: 'left',
          width: 120,
          render: (h, params) => {
            // console.log(params.row, 'params.row');
            return h('div', params.row.amountFloat);
          }
        },
        { //交易
          title: this.columns[3].title,
          key: this.columns[3].key,
          align: 'left',
          width: 550,
          render: (h, params) => {
            return h('div', params.row.txid);
          }
        },
        {
          title: this.columns[4].title,
          key: this.columns[4].key,
          align: 'left',
          width: 150,
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

    if (this.clintWidth < 575) {
      if (this.data[0].isOnline == 1) { //在线
        this.tableColumns.remove(this.tableColumns[3])
        this.tableColumns.remove(this.tableColumns[3])
        this.tableColumns.remove(this.tableColumns[3])
        console.log(this.tableColumns, 'tableColumns在线');

      } else if (this.data[0].isOnline == 0) { //离线
        this.tableColumns.remove(this.tableColumns[5])
        this.tableColumns.remove(this.tableColumns[1])
        this.tableColumns.remove(this.tableColumns[2])
        console.log(this.tableColumns, 'tableColumns离线');

      } else {

      }
    }
    console.log(this.tableData, "data");
  },
  beforeUpdate() {}
}
</script>
