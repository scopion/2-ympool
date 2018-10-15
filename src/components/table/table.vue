<template>
<div class="">
  <Table :data="tableData" highlight-row size="large" :columns="tableColumns" stripe border></Table>
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
          key: 'mill',
          align: 'center',
          width: 230,
          fixed: 'left',
        },
        {
          title: this.columns[1].title,
          key: 'hr1',
          align: 'center',
          width: 230,
          render: (h, params) => {
            console.log(params.row, 'params.row');
            return h('div', params.row.hr1);
          }
        },
        // {
        //   title: this.columns[1].title,
        //   key: 'hr1',
        //   align: 'center',
        //   width: 230,
        //   render: (h, params) => {
        //     const row = params.row;
        //     const color = row.hr1 === 1 ? 'primary' : row.hr1 === 2 ? 'success' : 'error';
        //     const text = row.hr1 === 1 ? 'Working' : row.hr1 === 2 ? 'Success' : 'Fail';
        //
        //     return h('Tag', {
        //       props: {
        //         type: 'dot',
        //         color: color
        //       }
        //     }, text);
        //   }
        // },
        // {
        //   title: this.columns[3].title,
        //   key: 'age',
        //   align: 'center',
        //   width: 230,
        //   render: (h, params) => {
        //     return h('Poptip', {
        //       props: {
        //         trigger: 'hover',
        //         title: params.row.age.length + 'customers',
        //         placement: 'bottom'
        //       }
        //     }, [
        //       h('Tag', params.row.age.length),
        //       h('div', {
        //         slot: 'content'
        //       }, [
        //         h('ul', this.tableData[params.index].age.map(item => {
        //           return h('li', {
        //             style: {
        //               textAlign: 'center',
        //               padding: '4px'
        //             }
        //           }, item.n + '：' + item.c + 'People')
        //         }))
        //       ])
        //     ]);
        //   }
        // },
        {
          title: this.columns[2].title,
          key: 'hr2',
          align: 'center',
          width: 230,
          render: (h, params) => {
            console.log(params.row, 'params.row');
            return h('div', params.row.hr2);
          }
        },
        {
          title: this.columns[3].title,
          key: 'rejects',
          align: 'center',
          width: 230,
          render: (h, params) => {
            return h('div', params.row.rejects);
          }
        },
        {
          title: this.columns[4].title,
          key: 'lastShare',
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
