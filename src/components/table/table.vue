<template>
<div class="">
  <Table :data="tableData" highlight-row size="small" :columns="tableColumns" stripe border ellipsis></Table>
  <div style="margin: 10px;overflow: hidden">
    <div style="float: right;">
      <Page :total="100" :current="1" @on-change="changePage"></Page>
    </div>
  </div>
</div>
</template>
<script>
export default {
  data() {
    return {
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
      ]
    }
  },
  props: ['columns', 'data'],
  methods: {
    changePage(val) {
      //获取数据
      this.$emit('con','傻逼弄东西')
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
    console.log(this.data);
    console.log(this.columns);
  }
}
</script>
