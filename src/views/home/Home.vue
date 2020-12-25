<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <div id="home">
    <nav-bar class="home-nav">
      <template v-slot:center>
        <div>首页</div>
      </template>
    </nav-bar>
    <swiper :banners="banners"></swiper>
    <recommend-view :recommends="recommend"></recommend-view>
    <feature-view :dKeyword="dKeyword"></feature-view>
    <tab-control class="tab-control" @click="getHomeGoods()" :titles="['流行','新款','精选']"></tab-control>
    <ul>
      <li>我是1</li>
      <li>我是2</li>
      <li>我是3</li>
      <li>我是4</li>
      <li>我是5</li>
      <li>我是6</li>
      <li>我是7</li>
      <li>我是8</li>
      <li>我是9</li>
      <li>我是10</li>
      <li>我是11</li>
      <li>我是12</li>
      <li>我是13</li>
      <li>我是14</li>
      <li>我是15</li>
      <li>我是16</li>
      <li>我是17</li>
      <li>我是18</li>
      <li>我是19</li>
      <li>我是20</li>
      <li>我是21</li>
      <li>我是22</li>
      <li>我是23</li>
      <li>我是24</li>
      <li>我是25</li>
      <li>我是26</li>
      <li>我是27</li>
      <li>我是28</li>
      <li>我是29</li>
      <li>我是30</li>
      <li>我是31</li>
      <li>我是32</li>
      <li>我是33</li>
      <li>我是34</li>
      <li>我是35</li>
      <li>我是36</li>
      <li>我是37</li>
      <li>我是38</li>
      <li>我是39</li>
      <li>我是40</li>
      <li>我是41</li>
      <li>我是42</li>
      <li>我是43</li>
      <li>我是44</li>
      <li>我是45</li>
      <li>我是46</li>
      <li>我是47</li>
      <li>我是48</li>
      <li>我是49</li>
      <li>我是50</li>
      <li>我是51</li>
      <li>我是52</li>
      <li>我是53</li>
      <li>我是54</li>
      <li>我是55</li>
      <li>我是56</li>
      <li>我是57</li>
      <li>我是58</li>
      <li>我是59</li>
      <li>我是60</li>
      <li>我是61</li>
      <li>我是62</li>
      <li>我是63</li>
      <li>我是64</li>
      <li>我是65</li>
      <li>我是66</li>
      <li>我是67</li>
      <li>我是68</li>
      <li>我是69</li>
      <li>我是70</li>
      <li>我是71</li>
      <li>我是72</li>
      <li>我是73</li>
      <li>我是74</li>
      <li>我是75</li>
      <li>我是76</li>
      <li>我是77</li>
      <li>我是78</li>
      <li>我是79</li>
      <li>我是80</li>
      <li>我是81</li>
      <li>我是82</li>
      <li>我是83</li>
      <li>我是84</li>
      <li>我是85</li>
      <li>我是86</li>
      <li>我是87</li>
      <li>我是88</li>
      <li>我是89</li>
      <li>我是90</li>
      <li>我是91</li>
      <li>我是92</li>
      <li>我是93</li>
      <li>我是94</li>
      <li>我是95</li>
      <li>我是96</li>
      <li>我是97</li>
      <li>我是98</li>
      <li>我是99</li>
      <li>我是100</li>
    </ul>
  </div>
</template>

<script>
  import Swiper from './childComps/HomeSwiper'
  import RecommendView from './childComps/RecommendView'
  import FeatureView from "./childComps/FeatureView";

  import NavBar from '@/components/common/navbar/NavBar'
  import TabControl from '@/components/content/tabControl/TabControl'

  import {getHomeMultidata, getHomeGoods} from "@/network/home";

  export default {
    name: "Home",
    components: {
      FeatureView,
      NavBar,
      Swiper,
      RecommendView,
      TabControl
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
        }
      }
    },
    created() {
      this.getHomeMultidata();
      this.getHomeGoods('pop');
      this.getHomeGoods('new');
      this.getHomeGoods('sell');
    },
    methods: {
      getHomeMultidata() {
        getHomeMultidata().then(res => {
          // console.log(res);
          this.banners = res.data.banner.list;
          this.recommend = res.data.recommend.list;
          this.dKeyword = res.data.dKeyword.context;
        })
      },
      getHomeGoods(type) {
        const page = this.goods[type].page + 1;
        getHomeGoods(type, page).then(res => {
          this.goods[type].list.push(...res.data.list);
          this.goods[type].page += 1;
          // console.log(this.goods[type].list);
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
</style>