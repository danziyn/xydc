<template>
  <div id="cate">
    <div class="con">
      <h3>{{list_tit[dataID]}}</h3>
    </div>
    <div class="phone">
      <!-- <scroll class="content" ref="scroll">  -->
      <datlist class="datlist" :list="datalist" :spec="list[dataID]" />
      <!-- </scroll> -->
    </div>
    <div class="pc">
      <datlist class="datlist" :list="datalist" :spec="list[dataID]" />
    </div>
    <!-- <scroll ref="scroll" class="cate-scroll" :probeType='3'> -->
    <!-- </scroll> -->
  </div>
</template>

<script>
import datlist from "./children/datlist";
// import scroll from 'components/common/scroll/scroll'
export default {
  data() {
    return {
      dataID: "",
      list: ["near", "meng", "xue", "ju", "tian", "conv"],
      list_tit: [
        "周边美食",
        "梦华苑",
        "学致苑",
        "学聚苑",
        "甜点奶茶",
        "快餐炒饭"
      ],
      datalist: []
    };
  },

  created() {
    if (this.$route.query.dataID == undefined) {
      this.dataID = 1;
    } else {
      this.dataID = this.$route.query.dataID;
    }
    this.$store.state.page = this.$route.query.dataID;
    // 根据点击不同的对象发送不同的对象的ajax请求
    this.getData();
  },
  mounted() {
    // console.log(this.$refs.scroll)
  },
  methods: {
    getData() {
      this.$ajax.get("/data/redata", "请求数据").then(res => {
        const mess = res.data.filter(item => {
          // console.log(item)
          return item.hasOwnProperty(this.list[this.dataID]);
        });
        this.datalist = mess;
      });
    }
    // imgloads() {
    //     // console.log('图片加载完成')
    //     this.$refs.scroll.refresh()
    // }
  },
  components: {
    datlist
    // scroll
  }
};
</script>

<style scoped>
@media screen and (min-width: 430px) {
  h3 {
    padding: 2vw 1.3vw;
    font-size: 1.8vw;
    border-bottom: 3px solid #7f8c8d;
  }

  .phone {
    display: none;
  }
}

@media screen and (max-width: 430px) {
  .pc {
    display: none;
  }

  .content {
    height: 300px;
    overflow: hidden;
  }
  h3 {
    padding: 3.1vw;
    text-align: center;
    border-bottom: 1px solid #cacaca;
  }
  .con {
    margin-top: 12.8vw;
  }

  .datlist {
    margin-bottom: 15.62vw;
  }
}
</style>