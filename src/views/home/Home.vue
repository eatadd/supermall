<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <div id="home">
    <nav-bar class="home-nav">
      <template v-slot:center>
        <div>首页</div>
      </template>
    </nav-bar>
    <scroll class="content"
            ref="scroll"
            :probe-type="3"
            :pull-up-load="true"
            @scroll="contentScroll"
            @pullingUp="loadMore">
      <swiper :banners="banners"></swiper>
      <recommend-view :recommends="recommend"></recommend-view>
      <feature-view :dKeyword="dKeyword"></feature-view>
      <tab-control class="tab-control" @tabClick="tabClick" :titles="['流行','新款','精选']"></tab-control>
      <good-list :goods="goods[currentType].list"></good-list>
    </scroll>
    <back-top v-show="isShow" @click.native="backCLick"/>
  </div>
</template>

<script>
  import Swiper from './childComps/HomeSwiper'
  import RecommendView from './childComps/RecommendView'
  import FeatureView from "./childComps/FeatureView";

  import NavBar from '@/components/common/navbar/NavBar'
  import TabControl from '@/components/content/tabControl/TabControl'
  import GoodList from '@/components/content/goods/GoodList'
  import Scroll from '@/components/common/scroll/SCroll'
  import BackTop from '@/components/content/backTop/BackTop'

  import {getHomeMultidata, getHomeGoods} from "@/network/home";

  export default {
    name: "Home",
    components: {
      FeatureView,
      NavBar,
      Swiper,
      RecommendView,
      TabControl,
      GoodList,
      Scroll,
      BackTop
    },
    data() {
      return {
        banners: null,
        recommend: null,
        dKeyword: {},
        goods: {
          'pop': {page: 0, list: []},
          'new': {page: 0, list: []},
          'sell': {page: 0, list: []},
        },
        currentType: 'pop',
        isShow: false
      }
    },
    created() {
      this.getHomeMultidata();
      this.getHomeGoods('pop');
      this.getHomeGoods('new');
      this.getHomeGoods('sell');
    },
    methods: {
      /*
      * 事件监听
      * */
      tabClick(index) {
        switch (index) {
          case 0:
            this.currentType = 'pop';
            break;
          case 1:
            this.currentType = 'new';
            break;
          case 2:
            this.currentType = 'sell';
            break;
        }
      },
      backCLick() {
        this.$refs.scroll.scrollTo();
      },
      contentScroll(position) {
        // position.y < -1000 ? this.isShow = true : this.isShow = false
        this.isShow = (-position.y) > 1000
      },
      loadMore() {
        this.getHomeGoods(this.currentType);
        this.$refs.scroll.scroll.refresh();
      },
      /*
      * 网络请求
      * */
      getHomeMultidata() {
        getHomeMultidata().then(res => {
          // console.log(res);
          this.banners = res.data.banner.list;
          this.recommend = res.data.recommend.list;
          this.dKeyword = res.data.dKeyword.context;
        })
      },
      //列表数据
      getHomeGoods(type) {
        const page = this.goods[type].page + 1;
        getHomeGoods(type, page).then(res => {
          this.goods[type].list.push(...res.data.list);
          this.goods[type].page += 1;
          this.$refs.scroll.finishPullUp()
        })
      }
    }
  }
</script>

<style scoped>
  #home {
    padding-top: 44px;
  }

  .home-nav {
    background: var(--backgroundcolor);
    color: #FFF;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 2;
  }

  .tab-control {
    position: sticky;
    top: 44px;
  }

  .content {
    height: calc(100vh - 93px);
    overflow: hidden;
  }
</style>