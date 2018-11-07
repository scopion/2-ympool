<template>
<div class="layout">
  <Layout>
    <Header :name="name"></Header>
    <section id="help">
      <Content>
        <div class="layout">
          <Layout>
            <Layout v-show="clintWidth<520" class="menu">
              <Select v-model="model" size="large" @on-change="listChange()">
                     <Option v-for="item in list" :value="item.value" :key="item.value">{{ item.label }}</Option>
              </Select>
            </Layout>
            <Layout>
              <Sider v-show="clintWidth>520">
                <Menu theme="light" active-name="1" width="auto" @on-select="select" placement="bottom-end">
                  <MenuGroup>
                    <MenuItem name="1">
                    <Icon type="md-document" /> ETH挖矿教程
                    </MenuItem>
                    <MenuItem name="2">
                    <Icon type="md-chatbubbles" /> 如何查看收益
                    </MenuItem>
                    <MenuItem name="3">
                    <Icon type="md-leaf" /> 什么是挖矿软件
                    </MenuItem>
                    <MenuItem name="4">
                    <Icon type="md-leaf" /> 什么是算力
                    </MenuItem>
                  </MenuGroup>
                </Menu>
              </Sider>
              <Layout class="content">
                <Content v-show="show==1">
                  <Divider orientation="center">ETH挖矿教程</Divider>
                  <Content class="text">
                    一.生成钱包地址</br>
                    <p @click="shenqing()" class="link">
                      a.点击查看申请流程链接
                    </p>
                    <Divider dashed />
                    二.下载挖矿软件</br>
                    <p @click="wakuang()" class="link">
                      b.点击下载挖矿软件
                    </p>
                    <p class="link">
                      c.详情可查看挖矿软件使用教程
                    </p>
                    <p class="link">
                      d.连接矿池（客户端挖矿地址 eth.ympool.com:8008）</p>
                    <Divider dashed />
                    <b>三.焱猫矿池挖矿介绍</b> </br>
                    挖矿模式：</br>
                    1.可支持单挖模式和双挖模式。</br>
                    2.主挖支持ETH和ETC，支持多种版本内核并保持更新。</br>
                    3.双挖支持SC、DCR、LBRY、PASC、XVG、MAX。</br>
                    4.集成多个矿池并支持自行添加。</br>
                    5.可更具需要调整显卡设置（例如：显卡优化、主挖强度、双挖强度等）。</br>
                    6.可更具需要一键设置虚拟内存。</br>
                    7.可更具需要灵活决定挖矿时长（挖矿一定时间后自动重启电脑，无盘环境下可缓解服务器回写盘压力）。</br>
                    8.出行异常状态时可更具预定方式自行处理。</br>
                    9.挖矿模式监控模式一键切换无需分开安装。</br>
                    <Divider dashed />
                    监控模式：</br>
                    1.实时监控客户机在线状态以及统计算力。</br>
                    2.可更具需要调整需要显示的数据（钱包、矿池、算力、显卡数、显卡温度等）。</br>
                    3.可对机器进行批量管理（开始或停止挖矿、修改挖矿设置、更新软件、重启或关闭客户端、重启或关闭计算机）。</br>
                    4.机器中如果安装TeamVierwer可支持一建远程客户机或者获取TeamVierwer用户ID和密码。</br>
                    5.一键导出离线列表方便维修。</br>
                    6.监控挖矿端状态并显示重要信息（例如：出现算力0、客户机MAC地址重复等）。</br>
                  </Content>
                </Content>
                <Content v-show="show==2">
                  <Divider orientation="center">如何查看收益</Divider>
                  <Content class="text">
                    <b>查看矿机状态和收益</b>
                    <img src="../../images/course1.png" width="100%"> <b>输入钱包地址后跳转到详情页</b>
                    <img src="../../images/course2.png" width="100%"> <b>展示矿机的信息</b>
                    <img src="../../images/course3.png" width="100%">
                  </Content>
                </Content>
                <Content v-show="show==3">
                  <Divider orientation="center">什么是挖矿软件</Divider>
                  <Content class="text">
                    1.挖矿软件就是比特币、以太坊等数字货币的算法。普通的电脑是计算速度慢，也难以得到什么收益，大多采用专业的矿机。</br>
                    <Divider dashed /> 2.比特币挖矿算法基于一种名为SHA-256的加密算法，这种算法直接导致了算力之间的狂热竞赛。
                    </br>
                    <Divider dashed /> 3.当比特币还是一个小众概念时，你可以在一个最基础的CPU上挖矿；普通的笔记本电脑就可以做到。但随着时间的推移，越来越多的人参与进来，更多人选用图形处理单器(GPU)开始挖矿。随着算力的不断增加，最终将会用极为昂贵的应用程序专用集成电路(ASICs)进行挖矿。算力的集中以及其高昂的价格已经把许多业余挖矿爱好者赶出了市场。
                    </br>
                    <Divider dashed /> 4.为了实现挖矿民主化，一些数字货币采取抵抗ASIC矿机的加密算法。CharlesLee发明的莱特币就是一个很好的例子。它使用了一种基于内存的挖矿算法，即Scrypt算法。与昂贵的ASIC设备相比，运行这类算法的成本要低很多。
                    </br>
                    <Divider dashed /> 5.Vitalik Buterin发明了基于智约的区块链技术，并创造和使用了自己的算法，即“ethash”。与Scrypt类似，ethash也基于内存，而非算力来挖矿。这也意味着富有的ASIC矿工无法主导挖矿竞赛。</br>
                    <Divider dashed /> 6.预计以太坊将在2017年完全改变其原有挖矿算法到Casper。Casper将逐步成为“权益证明”的机制。它可能会对矿工所持有的以太币数量而不是他们的算力进行奖励。
                    </br>
                    <Divider dashed /> 7.虽然以太坊和莱特币都是非ASIC化挖矿，但他们支持GPU挖矿。虽说在CPU上挖矿并不现实，但在GPU上挖矿依然备受欢迎。
                  </Content>
                </Content>
                <Content v-show="show==4">
                  <Divider orientation="center">什么是算力</Divider>
                  <Content class="text">
                    <b>数字货币挖矿</b>
                    </br>1. 我们经常提到的一个词就是 矿机的算力， 比如：蚂蚁矿机S9 算力13.5T， 蚂蚁矿机L3+ 504M，其实算力的意思很简单，他就是代表矿机的计算能力、计算性能的衡量，他具体代表的是每秒矿机的整体hash算法运算次数。
                    </br>
                    <Divider dashed /> 2.我们先要知道挖矿的本质就是解决一个数学计算，谁先算出来谁就获得奖（币），这个数学计算方式也很简单，就是一直不断的尝试碰撞结果，就类似于你暴力破解一个手机密（假设尝试多次手机不会被锁），你不断的尝试密码 从 111111 ~ 99999 一个一个的尝试直到你解锁成功。
                    </br>
                    <Divider dashed />3.如果你1秒内能尝试一次，你的算力就是1次/s， 1秒内能尝试两次，你的算力就是2次/s，你1秒内尝试的次数越多你的算力就越大， 你解锁的时间也就越短 。矿机也是一样， 矿机1秒内能计算的hash算法次数越多算力越大，挖的币越多，最开始比特币使用 CPU挖矿， 后来使用显卡GPU挖矿，到现在的使用ASIC专业定制芯片挖矿，计算速度一直不断提升。
                    </br>
                    <Divider dashed />
                    <b>算力单位</b>
                    </br>1K=1024h  1G=1024K  1T=1024G
                    </br>
                    <Divider dashed /> <b>不同币种的算力</b></br>
                    1.不同的币种的挖矿算法可能会不一样，比如比特币是sha256算法，莱特币是scrypt算法， 以太坊是Ethash算法，这就像 手机1的密码4位随便输入， 手机2的密码6位， 输一 次后 隔1s才能再次输入， 实际比这个要复杂的多。
                    </br>
                    <Divider dashed />2.解锁这两种不同的手机的方式是不一样的， 那我尝试解锁的速度也不一样， 解锁手机1 我会更快一点。不用的币种之间的算力是没有任何关系的， 比特币矿机是不能挖莱特，因 为算法不一样， 他不会解莱特币的题。
                  </Content>
                </Content>
                <Content v-show="show==5">
                  <Divider orientation="center">新手教程</Divider>
                  <Content class="text">
                    <b>1.挖矿的简单介绍</b> </br>
                    1.在说到挖矿，那么不得不先说一下“矿”是什么？所谓的“矿”就是虚拟货币，有很多种，比如比特币、门罗币等等。这些货币充当虚拟世界的金钱，有很大价值。在众多虚拟货币中，属比特币最负盛名。挖矿是参与维护比特币网络的节点，通过协助生成新区块来获取一定量新增的比特币的过程。 2.如果你想开始尝试挖矿，需要一台能联网的电脑。但是最初的时候，我们用电脑CPU就可以挖到比特币，比特币的创始人中本聪就是用他的电脑CPU挖出了世界上第一个创世区块。然而，CPU挖矿的时代早已过去，现在的比特币挖矿是AS IC挖矿和大规模集群挖矿的时代。
                    </br>
                    <Divider dashed />
                    <b>2.挖矿的发展历史</b> </br>
                    回顾挖矿历史，比特币挖矿总共经历了以下五个时代：CPU挖矿→GPU挖矿→FPGA挖矿→ASIC挖矿→大规模集群挖矿
                    </br>
                    <Divider dashed /> 1.比特币挖矿的用户数量非常庞大，而每10分钟产出的比特币又十分有限，形成了千万人抢1个区块的情况出现，所以，如果你用个人电脑单独挖矿，有可能一整年也抢不到一个区块，在这种情况下，人们就想出了一种组队挖矿的方法，所谓的组队挖矿，就是矿池。
                    </br>
                    <Divider dashed /> 2.矿池是一个通过特定算法而设计的服务器，所有连接到矿池服务器的用户，会组队进行挖矿，个人电脑的性能虽然渺小，但是成千上万的人进行组队挖矿，总体性能就会变得十分强大，在这种情况，挖矿的成功率会大大提升，一旦矿池中的队伍成功制造了一个区块，那么所有队伍中的人会根据每个人的电脑性能进行分红。比如：1000人在同一个矿池中挖矿，挖出一个区块后，这个区块产生的N个比特币的报酬，会根据这1000个人的电脑性能进行分红。如果你的电脑性能强劲，也许会分到100分之1，如果性能落后，也可能会分到10000分之1。
                    在这种情况，矿池的开发者一般会对每个用户收取1%-3%的费用作为手续费，但由于这种方法让大家更稳定得获得比特币，几乎所有人都会选择矿池挖矿，而不是单独挖矿。
                    </br>
                    <Divider dashed />
                    <b>3.挖矿的设备</b> </br>
                    <!-- 1.通过购买矿机开始挖矿。矿机挖矿 随着挖矿所需算力的不断上升， GPU也达到了算力的上限，为了突破这个局限，有人发明了专门挖矿的专业设备。这些设备虽然都是计算机，可是除了挖比特币，运行哈希运算之外，其他什么都干不了，我们叫它“矿机” -->
                    </br>
                    2.不同的币有不同的算法，在选择矿机的时候要注意它支持哪些币种，不要买了没法挖出你想要的币种。市面上主流的比特币矿机是比特大陆的蚂蚁矿机S9，官网地址：https://www.bitmain.com/ 。市面上主流莱特币矿机依然是比特大陆的L3+，官网地址：https://www.bitmain.com/ 。目前市场上质量可靠并且有保证的以太币矿机就是熊猫矿机PandaMiner B3 Plus，官网地址：https://www.pandaminer.com/ 。还有其他的矿机也是有一定市场的，如ASIC矿机蚂蚁s9i，ASIC矿机翼比特E10，神马M3，阿瓦隆821等等。</br>
                    <Divider dashed />
                    <b>3.矿机该如何选择</b> </br>
                    1.通过每T价格判断购买的矿机是否划算，之前某公司公布了旗下一款算力为5120T的矿机，整机价格约合人民币287万元。假设用这笔钱购买国内某14T矿机，可以购买410台，相当于5740T算力。所以，市面上一些主打超高算力的机器，在宣传中非常吸引眼球，但价格算下来却并不是特别实惠。有时购买多台小算力的矿机反倒会更划算。结论：在判断一款矿机价格是否合理时，可以参照每T算力的市场价，横向对比。 </br>
                    <Divider dashed /> 2.通过计算出币量和电费得出单台矿机的利润和回本周期 </br>
                    <Divider dashed /> 3.可以通过计算每日利润和回本周期评估一款矿机的净收益。 </br>
                    <Divider dashed /> 4.通过每瓦算力判断矿机运作的投入产出比 </br>
                    举个例子，某主流矿机算力为13.5T，功耗为1350W，计算得出每瓦算力为10G／W。而另一款算力为12T的其他品牌矿机，从算力上看似乎比前者差不了多少，但由于功耗达到2100W，因此每瓦算力只有5.85G/W，只达到了前者的一半。 </br>
                    结论：计算每瓦算力，能够看出投入的每度电能带来多少收益，防止被一些参数所蒙蔽。 </br>
                    <Divider dashed /> 5.通过显卡挖矿 挖矿机硬件要求，CPU和内存以及硬盘容量的要求不高，主要是主板要求是自带5个PCI-1插槽和1个PCI-E插槽，通过6个PCI-E 1X转16X转接卡能够搭配6张独立显卡即可，电源要求最好是满足6张显卡的功率。最重要就是显卡的要求，挖矿主要依靠GPU运算，最好GTX1060起步，GTX1070、GTX1080都可以，以及AMD的RX570、RX580都可以，显卡性能越好，那么算力越高，收益越高。此外，显卡的散热很重要，最好一台挖坑机配有电风扇或者添加几个机箱风扇。显卡选择非常重要。</br>
                    <Divider dashed /> 6.N卡阵营：GTX 780，GTX 980，GTX 980 Ti，GTX 1050，GTX 1050 Ti，GTX 1060，GTX 1070，GTX1080，GTX 1080 Ti
                    </br>
                    <Divider dashed />7.A卡阵营：R9 380X，R9 Fury，RX 460，RX 470D，RX470，RX 480，RX 560，RX 570，RX 580
                  </Content>
                </Content>
              </Layout>
            </Layout>
          </Layout>
        </div>
      </Content>
    </section>
    <Footer></Footer>
  </Layout>
</div>
</template>
<script>
import Header from '../../components/header/header.vue' //公共头
import Footer from '../../components/footer/footer.vue' //公共尾
export default {
  data() {
    return {
      name: 'help',
      show: 1,
      clintWidth: document.body.clientWidth,
      model: '1',
      list: [{
          value: '1',
          label: 'ETH挖矿教程'
        },
        {
          value: '2',
          label: '如何查看收益'
        },
        {
          value: '3',
          label: '什么是挖矿软件'
        },
        {
          value: '4',
          label: '什么是算力'
        },
        {
          value: '5',
          label: '新手教程'
        },
      ],
    }
  },
  components: {
    Header: Header,
    Footer: Footer
  },
  methods: {
    select: function(val) {
      this.show = val
    },
    zhangguo: function(val) {
      console.log(val);
    },
    shenqing: function() {
      window.open("http://baijiahao.baidu.com/s?id=1593334868404805446&wfr=spider&for=pc&qq-pf-to=pcqq.discussion");
    },
    wakuang: function() {
      window.open("http://www.ymminer.com/");
    },
    listChange: function(val) {
      this.show = this.model
    }
  },
  mounted() { // 组件初始化后执行
  },
  // props: [],
  // propsData: {},
  // computed: {},
  // methods: {},
  // watch: {},
  // el() {},
  // template: '',
  // render() {},
  // beforeCreate() {},
  // created() {},
  // beforeMount() {},
  // mounted() {},
  // beforeUpdate() {},
  // updated() {},
  // activated() {},
  // deactivated() {},
  // beforeDestroy() {},
  // destroyed() {},
  // directives: {},
  // filters: {},
  // components: {},
  // parent: null,
  // mixins: [],
  // name: '',
  // extends: {},
  // delimiters: ['{{', '}}'],
  // functional: false
}
</script>

<style lang="less" scoped>
@import "../../style/help/help.less";
</style>
