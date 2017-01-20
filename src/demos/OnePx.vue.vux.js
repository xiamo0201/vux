<template>
  <div class="vux-demo">
    <br/>
    <flexbox class="vux-1px-tb" :gutter="0">
      <flexbox-item class="vux-1px-r test"><div>{{ $t('北京') }}</div></flexbox-item>
      <flexbox-item class="vux-1px-r test"><div>{{ $t('上海') }}</div></flexbox-item>
      <flexbox-item class="vux-1px-r test"><div>{{ $t('广州') }}</div></flexbox-item>
      <flexbox-item class="vux-1px-r test"><div>{{ $t('深圳') }}</div></flexbox-item>
    </flexbox>
    <flexbox class="vux-1px-b" :gutter="0">
      <flexbox-item class="vux-1px-r test"><div>{{ $t('天津') }}</div></flexbox-item>
      <flexbox-item class="vux-1px-r test"><div>{{ $t('西安') }}</div></flexbox-item>
      <flexbox-item class="vux-1px-r test"><div>{{ $t('重庆') }}</div></flexbox-item>
      <flexbox-item class="vux-1px-r test"><div>{{ $t('杭州') }}</div></flexbox-item>
    </flexbox>
    <flexbox class="vux-1px-b" :gutter="0">
      <flexbox-item class="vux-1px-r test"><div>{{ $t('南京') }}</div></flexbox-item>
      <flexbox-item class="vux-1px-r test"><div>{{ $t('武汉') }}</div></flexbox-item>
      <flexbox-item class="vux-1px-r test"><div>{{ $t('成都') }}</div></flexbox-item>
      <flexbox-item class="vux-1px-r test"><div></div></flexbox-item>
    </flexbox>
    <br/>
    <br/>
    <flexbox class="vux-1px-tb" :gutter="0">
      <flexbox-item class="vux-1px-r">
        <a class="item item1">
          <div class="img meishi"></div>
          <div class="text">{{ $t('美食') }}</div>
        </a>
      </flexbox-item>
      <flexbox-item class="vux-1px-r">
        <a class="item item2">
          <div class="img dianying"></div>
          <div class="text">{{ $t('电影') }}</div>
        </a>
      </flexbox-item>
      <flexbox-item class="vux-1px-r">
        <a class="item item3">
          <div class="img jiudian"></div>
          <div class="text">{{ $t('酒店') }}</div>
        </a>
      </flexbox-item>
      <flexbox-item>
        <a class="item item4">
          <div class="img yule"></div>
          <div class="text">{{ $t('休闲娱乐') }}</div>
        </a>
      </flexbox-item>
    </flexbox>
    <flexbox class="vux-1px-b" :gutter="0">
      <flexbox-item class="vux-1px-r">
        <a class="item item5">
          <div class="img huoguo"></div>
          <div class="text">{{ $t('火锅') }}</div>
        </a>
      </flexbox-item>
      <flexbox-item class="vux-1px-r">
        <a class="item item6">
          <div class="img lvyou"></div>
          <div class="text">{{ $t('旅游') }}</div>
        </a>
      </flexbox-item>
      <flexbox-item class="vux-1px-r">
        <a class="item item7">
          <div class="img daijinquan"></div>
          <div class="text">{{ $t('代金券') }}</div>
        </a>
      </flexbox-item>
      <flexbox-item>
        <a class="item item8">
          <div class="img ktv"></div>
          <div class="text">{{ $t('KTV') }}</div>
        </a>
      </flexbox-item>
    </flexbox>
    <br/>
    <br/>
    <div style="padding: 10px;">
      <p>{{ $t('对比不做处理的1px边框') }}</p>
      <br/>
      <div style="height:10px;border:1px solid #e0e0e0"></div>
    </div>
  </div>
</template>

<i18n>
北京:
  en: Beijing
上海:
  en: Shanghai
广州:
  en: Guangzhou
深圳:
  en: Shenzhen
天津:
  en: Tianjin
西安:
  en: Xian
重庆:
  en: Chongqing
杭州:
  en: Hangzhou
南京:
  en: Nanjing
武汉:
  en: Whuhan
成都:
  en: Chendu
美食:
  en: Food
电影:
  en: Movie
酒店:
  en: Hotel
休闲娱乐:
  en: Entertainment
火锅:
  en: Hot pot
旅游:
  en: Travel
代金券:
  en: Coupon
KTV:
  en: KTV
对比不做处理的1px边框:
  en: Original Ugly borders
</i18n>

<script>
import Flexbox from '../components/flexbox/flexbox.vue'
import FlexboxItem from '../components/flexbox/flexbox-item.vue'

export default {
  components: {
    Flexbox,
    FlexboxItem
  }
}
</script>

<style scoped lang="less">
@import '~vux/src/styles/1px.less';

.vux-demo .test{
  height:50px;
  text-align:center;
  line-height: 50px;
}

.vux-demo .vux-flexbox {
  background-color: #fff;
}

.item {
  display: block;
  box-sizing: border-box;
  font-size: 12px;
  color: #303030;
  position: relative;
  margin-bottom: 10px;
}


.img {
  width: 40px;
  height: 40px;
  margin: 8px auto 5px;
  background-repeat: no-repeat;
  background-size: 40px auto!important;
  background-position: center;
}

.text {
  font-size: 13px;
  text-align: center;
  line-height: 1em;
}


.meishi {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAAt1BMVEUAAAD9Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl7/////+/v/9/f9YmL9Z2f+zMz+u7v+kpL9eHj/4+P/7e3/6Oj/3Nz+v7/+trb+srL+mpr+iYn9c3P9a2v9X1//2Nj+09P/8fEgsZRxAAAAJHRSTlMAC+P18ncfFuzf251PRta9uKhZB2xI6dFccMjGmJSQKSSSFBJnGfpEAAACkUlEQVRYw6TU126rQBAG4AGDacYtbulR9K8BY5ym9PP+z3UmTkBGHsMC3wXauZif1TaqcR/OrkfDhYWe6y1H17PwntozBjdLHFneDAxqI5z0cEJvEjae3LmHSt650STOdlHLtbUjpya0mFPS0R9D27hPtVYWGrBWVO0sQEPBGVVwLtHYpVOxfD5a8E8u5K2JVsxbEt2ZaMm8I4HjozXfEfb3Ah1cHO91gE6Co/OMjlZU0rfQkVU+PGN0NqYDU8iydLeOdmmGX0qp/Tcflk2pYJiQxC9rtbd+iTUCTYNytpz3rQrfcX0g7GKCLgSfG3Vg81kf6OZTnEHyqtjjNkm2j4q91gdiRr88COIH7nlKwJInHj7E9YEe7YWQbLklesfee8TFtj4Qc/oxgeSZW9K8SLl41gicEDN6kOy45S0v3rjYaQT2DA4cQPSPWz7y4oOLSCMQAw68gmjNLXGxQ4rpBF5xoA9R1GqGPpEDtF1DiUNzoO0uS+ZkA23PocSmAKzzTSkENALTvcslkIxoCKb52kTqQATJkBY4Jf5Sha8ErPwLSBZkIVf/YmeRKkQZJBahSpYqlmZFvYn+4jYZZP+bM4MUBmEgin6wMVVDRG0sXYriCbz/2YrNIqsElLfoXwbytjP/jaqtmPN35iUDfLLAhxoWOOvNAr16FtirY4GdDAs0CiwwyLJAK7UksI1DigCmIeVIoIuDngCmQa+BAw46Ezhg0C8NBWwU86KAn7QSE8C0EsswQFOsFWkJ2zMvhVqhMQs89v0ovqSMfDXjyyNfb/kCzisCXmLwmoUXQSm1v8PztbJZ78i0VYVMy1XeMqkcd01IOlqZwlKX1s6wGGfV/T8cF2JsPH9U21bN/jx/WJXzBaE7wxSmWFkJAAAAAElFTkSuQmCC) no-repeat
}

.dianying {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAAxlBMVEUAAAD/qzP/qzP/qzP/qzP/qzP/qzP/qzP/qzP/qzP/qzP/qzP/qzP/qzP/qzP/qzP/qzP/qzP/qzP/qzP/qzP/qzP/qzP/qzP/qzP/qzP/qzP/qzP/qzP/qzP/qzP/qzP/qzP/////5L7/+/X/rTj/+vL//fr/xG//vV3/uFL/v2P/37D/1Zr/u1n/+e//9+v/rz3/t1H/9OT/8Nn/687/4rj/uFP/skL/8d3/2qX/wGX/t1D/58T/yn//zof/y4D/6Mf/15wdca20AAAAIHRSTlMA8wvgRyCbbhYI6tuST9a9uHZZAu3k0afIxnhcKRSoXSwatFIAAAMsSURBVFjDxZnpVupADIBbilDZQcQNNEA3pCiuLILo+7/UJUUow2Sm25xzv19OTomZJJNJUy2CXr5YqddKOkC73KlXivmelp5ctdIBjk6lmkuj7SJ/pYMA/Sp/kdS4ogFSjGISM8+bJYik1DyPq69lQCyMVix1Zw2ITeMsWt+dDgnQ76K8V4CEFKSeNG8gMTemxH1lSEFZ6MjuJaTisiuwD/Wl00jaaJYhNWWTiO81ZOCaj3UBMlHg8hkycncSEB0yorOBaUBmGkx9ATHW0h/Mbcex5wN/aYGY1lE5FderydjuH2GPJ+JqFpbcplDdqs+xEqpsHgwsCTa7cPoEzkKw8fbexCKQfL3tFDyPN97MsmbeZvy8k7x9AUnx736jPeg99ZF399ge9z0QPnm0F3d3YZ7WN8RfvrqncvcV5UNaYz5QeEXuN7DvYwoc04/ARnLX90FIdCoegf/8/fJlMBwOXvYrP/AjFRkdw1IFggX+5ne/GtlBDo72619cLoCgKigzEwf3e1gO+gGDgwB37UwERYeqqyuMR+i/bXweH7eRCP2IkVlRlVbTTMpAtMcFsUJw8QnKRJNMmjHmHwC/5RDMxzGZOLdEiG3WQPjcBeUTWBNtItC3VEyWeN6Yh0eYNiPmn+IpXFJRqfNCn98O7RafF9e1Gi9El234fGYl68CpHDWNKF3z7bPeST5bFrASb/vHnGhDNeLg4TGescH9dpxvVjLDA00cPg148JhYTPpNtyJnyiSkhYcFeOIptFChFU9hW/WWDVFQwnzeByWUyILSodNmzedzKJGljfLEFh89Mp+jj560OJAVOywOQ6o4KC9fWQqsRxVY+gr4iXMF/FBXgPJLSnqN+qKK7Uuu0eiLnsvwqIteu1faiqhvlqLbOUjQzkkbzpdDw7neNZzrQ8M5kjacWq4tb4lpnl2iJY5u2mUa6aY9+rUirkIjl+jFJ3rLLdWvZupfHhkeICMPql/AlY8IVA8xlI9ZSLoGpMLoCkdVNUhBTTLz66UZpvWk474KJKQSNTittiEB7arqkanioa7qsbPiwbji0f3//7jwh3n4/KGXavj5w9Tk/AOdOYKawb/jQgAAAABJRU5ErkJggg==) no-repeat
}

.jiudian {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAAgVBMVEUAAABMpP5MpP5MpP5MpP5MpP5MpP5MpP5MpP5MpP5MpP5MpP5MpP5MpP5MpP5MpP5MpP5MpP5MpP5MpP5MpP5MpP5MpP5MpP5MpP5MpP5MpP5MpP5MpP5MpP5MpP5MpP7////u9v/0+f/F4v9erf7M5f9nsv5msf72+/+Avv5/vv7trVlKAAAAH3RSTlMAC/Pe6+N3bh/YT5VGx7ionFkmFAdI0VwWvruQnfkSrqgnKwAAAhFJREFUWMPNmV1vskAQhQ+7CCyoYBXF1vZY7cfb/v8f+IbGhgjswsJc9LnQC8MTzEwG5iwG2C7j7NGEis+h3j9m8XKL6QTp054d9k9pgCksc0ULKl9631ys6UTHgY8uCjlIGI1WbhYcxWKDMSRrjmadYJCDogfqADe7Ez057eCgWtGbVQUrieYEdAILDwtOYvFg90kat5qT0due+q44g1W31gVnUXT6mTM5tBpGcSbqvnnWnM36br5QgE3jC9od+Hm9nHu5XD/t3djMx4j3fDS6rvKDNiLcCNrz+Xp2cKWN8PcWY7a4uIT/aCW+CTVb1Ne9v7HD23v9C63o2/OSfcLa1zW6hSxRk/cK2cuAMAeAQMkJVQAgtV12+2o+h4VMAWSSwgyAkRQaoKKkkBVKUqooNSUiWWGEwlfonjsFjr5C99w5wvgWxT13DEJfoXvuhFDeQufcUaC30D138DyxbazCUFaooGWFIfayQoOjb1HcwiMKWWGBSFYYoZQVlqhki1IBWlJoABSSwgxAKilMAQRKRNg86JHLCXPUlHLCEj9oKaHuf+H8fj2P5PWbd8T9r8SNb9jY/0qMSEYYWdaKr/F/+au1VggvPtKrmfjyKL3eCi/gJ/GIQDrEkI5ZxIMgC4nhBEwCKy9TwrQXONhl9CTbwU3qF0im0pGpcKgrHTsLB+Oy0f1fOFxoHX9QhWbM8cd/o/xelxZNdwAAAAAASUVORK5CYII=) no-repeat
}

.yule {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAAsVBMVEUAAAD/qzP/qzP/qzP/qzP/qzP/qzP/qzP/qzP/qzP/qzP/qzP/qzP/qzP/qzP/qzP/qzP/qzP/qzP/qzP/qzP/qzP/qzP/qzP/qzP/qzP/qzP/qzP/qzP/qzP/qzP/qzP/qzP/qzP/qzP/////xnP/8+L/rTf//Pj/0pD/+O3/4LT/0Ir/+fH/687/47z/uVX/s0X/rzv/6s3/6cr/3rD/zYT/yXr/w23/wGX/vmH/8uELPQ/JAAAAInRSTlMAC93jmxX0uW7skk/xItZ2WQdIRx7p0VymyMa+eCmo+UUShokM0QAAAoRJREFUWMPN2ddW4zAQBuCJe+zEIRUWQvsVp5DQlrLl/R9slQI+HI+H2J6L/W50/hsfgeSRNaFv+DdRHKbjANdtZxLG0Y1P9bWSeIKCSZy0qI7hWYASwdmw8uQiByInalV5XK+Nb7V7Rz/yxMVR3BM6xijE0cIRfeu0gwo6pyTre6jI65PAP0dl5z6V6jqowelSiUsXtbiXJfNzUZPLztF3UJvjM+v7Aw38KK61h0a8wn5GQ6f0xaiDhjpf38IQjYVf6gsUnNCnlgsFbl4fe2CsV6u1EBi9zwm2UTQz1i8hFLU/phiBcW+sn0JgRLTngLEw1kIIDId2htB6IAa0dQatPxlXZLUCQGVRrGC7LAkAnW1jJVyZaVp0HChyiHzw1sZaC4Hn0wC8zFiZEHgDmkLVlDyo8ugCnPlfs5PNhcC5oBScmTmYCYGT0hicB3PwIATOmDpgzBfmYDEXAiMgcH4bY+6AOzv8EQKHrsFYGmOWh0EIHGqDsZ3AbL8Ar0JgBMyrfCh5j8CjHV6EwC7KBIzt2/UEPNkhEwIj5Tf2xhjzDDzbYSMExgX/6hnrYxQCw6Op7gOnfPky+R9mhMAY8AV2k//rN0Jg+PwRkOWbIxNCkVNySN3n2/dFCEVeyTF6l79gr0IoSkoO+mVeApZC4A96uuKrzWqO1bamCIH/FKFBST18e8tLIBu4TbPjaFVsl/YirTMlKv8knmf52SYE9pOY/2h/NzvvQijoqV8r1C8++lezXLf55bGrfb3VvoCrtwi0mxjabRb9RhBvlKKGdESlbus0025J0I9RUdwnWVKtIZkot0y7yk1d7bazcmNct3X/P/y4sOcPDz9/IBinYRwNfZL9A8ZHohfA02LYAAAAAElFTkSuQmCC) no-repeat
}

.huoguo {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAAulBMVEUAAAD9Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl7/////8PD9Zmb/4uL+v7/+jY39dXX/+vr/9/f+i4v/2dn+x8f+sLD+kZH/6ur+np7+mJj+zMz9Y2P+s7P+1NT9g4P9a2v/8vL+qan/5ub9fn7+o6NSiy7pAAAAIXRSTlMA6+NHCZta9Ll3HxYM39tP8dbHqAJs0XAHvpSQKSQU+ZLUEo5MAAADEklEQVRYw6TU21KDMBAG4AXKyRZKj551/oC2tVVb60wd3//BDNDRMYQlwHfBHZnsv7uhBg/O4iaYWD4erWgZ3CycB+puML5domJ5Ox5QB3Nn5qOGP3Pm1M7oMgIruhy1qTW00MgKjSv3bBixPTJxEcBYcGFwvQQtJF5Tei5actkkh1O0Nh0y8cXoIK4N8s5GJ/Ydad3b6Mi+1+YXo7NYk+PVFD1Mr0jloheXFB568pSBSdBT8n94AvQWtCh4mwop3RoXPbDBSkUhBcv+2+oQrLU4W4MV0tnIAutbnH2DZY2otABvJ8/a7+VnB96CCvMIrC8hPT8L6QusaE45B7yDkN7fhXQAz6HcDLyjkLJMSEfwZiQNfLA+N3l6ZZKbT7D8vC1j8Ipa34C3onLwxgbPTNGNE3AqemPw6MRoXpMXSC/Ny4KYaAje6bcZx/KqvKFuaD6E6lCOj2qrG5xQV6RqXa60QhdAqOlJtqn5MTU40KXr5gPTFQor9cRNBtU1TVDxKpofgp2QXlExIQsVW5FbgbGqa4pFCaqehLTPUCvbC+kJVT7pt00pSBuKfg9/ijOj3QZhGIqm0jqkgoR42dqn1SZAgDExCqis3f//1hS6PWQEWxRQzwdYQLDv9Y14Awst3hp4hA/UtGBDWMe/ym4VqXqZAusr63E92iyFhAGywJ7KriviBaw02FMmg/MtsacBK4E4EFNL854Y5fT/R82xg9iSX14TxtX1XNfnaxXrVqHPa0uIfJXhCFlFiD2heapFK62idM8l9STCARGpKy4nAXmRGvOlyBkJ4EVK5s3p0qVpdzk1uQRepHyYBC+jngOL4Xi8FVGRcSKKtiK8WZIlGkQ1aZZ4O9fgP75IO8caTjnolo54xFfeEn+bkz4iPeLGI0y7vcKnrk/0Mb9WhIiZNL9ASKwV/OKThObki7Xqj/C89Gq2+PK47no7fwFfOiJ4WjvEmB+zrB8EaXYB3EGwIzLhe8I0MjfeH2Eix72g8acFkv6qken8UHfV2Hl+ML5wdP/4y4Vf3L/rD3A2gb7+cAXND4l/jLN+XT+jAAAAAElFTkSuQmCC) no-repeat
}

.zizhucan {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAAtFBMVEUAAAD9Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl7/////8PD+jIz/9vb9g4P/+fn+zMz+yMj+lpb9d3f/+/v/4+P+s7P9fn79dHT9ZGT+vb3/6ur+1NT+09P+kpL+1dX+sbH+np7+nZ39amr+vr4DQqc2AAAAIHRSTlMAC/PjRxSbWunf208i1r24qAcC7XZsHtGUeHDIxpAp+VBdpKEAAAK4SURBVFjDrNQJUsJAEAXQySTBJMgisrj7WyZCgiAoKuD972UmVVgUzJKFd4Cu7vq/mln43uCm3Qo4nq/DUftm4PmsOqf5OMKJ0WPTYRX0vC6HBu96vbLL3YUwCu+cMuP6AayCfuGRFy4KcS9YEcMOCusMC6zHUQK3LXnVQEmNK2ONH1Dag6HqlxEqiC6ZxpOLStwnzX4uKnKVO/oRKot8Rb73qOH+NOsGammc9Bk1HTV8yFETH7JDHdTW0R9c/2jHxRm4Dtvr4yz6/wsGsHifCDF5h8X1fsUBLFJBGZHCYsByvRAWE8pNYBH2mOTBRhDFMZGAjcek7vkGdvNIOM51MriMpQmz5Xj+PaPM7Hs+XsKsaX0z4+krHXidjq1PJ4Le1xudePuCXsSYb6jzmpTWhor7htIkgnIfq2SxWy53i2T1QTmRGIpzC40fkmbTGAfi6YykH2jcajNZkfSZ4kj6SdKvNpU2lOZ5phsobPLc51BqsxZUEsq8LKC0eKFMApUWC5T5CjkvhUYqJwpl1gHjUFjLe2NoxfLqNRQ4U/aZMlsYbCmjbPhfcebXgiAMRfFNRII0ipFZL10noqRI+v0/XA7f8uDUDvR7HsPr7t9z1VPmtO59ZRH31i280ID4zUdeniTu/LFAJoN0XY9na0H4Dx3UbZ6v3B8vxUPp3u0N3OYELR7EywBtPqkIBkkvXnoYLhFIDhUKAxxMFUgOIXSaTrx00HFCkGBtvho7T7CgBDT5ahpQAlTE/MIIldHCrr6vQGVUB0Ij0FMrQuOMmiVn8V6bQ9TO2XwDFrVz6sq68KEmtOGYbDS/aeePFfzBhz+aTcS/D48xe7xlD+B0iYAtYrBlFr4QhEkT2UGS0sW0BS6ZbCS7qGWORjZgjmTJNCaLulzZ+a7JwjhZuv//cuF7/SHBIVmz/vgAqTp3WrM6X+4AAAAASUVORK5CYII=) no-repeat
}

.daijinquan {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAA3lBMVEUAAAD/pyD/pyD/pyD/pyD/pyD/pyD/pyD/pyD/pyD/pyD/pyD/pyD/pyD/pyD/pyD/pyD/pyD/pyD/pyD/pyD/pyD/pyD/pyD/pyD/pyD/pyD/pyD/pyD/pyD/pyD/pyD/pyD/pyD/pyD/pyD/pyD/pyD/////qyr/68r/rS3/7dL//fn/xWr/1JH/9eb/+/T//Pf/9+z/vFT/tUP/t0f/sjz/+e//xGj/uEv/5Lr/3an/vln/qSX/6MT/1pf/043/yXX/wF7/8Nn/5r7/0If/zYD/rzT/4bH/2qD/6cZoepA5AAAAJXRSTlMAC+MUm/Xxd+zf208f1r24WQJsSAnp0ZRcp3BHB8jGkEUpJKgdTy/f7wAAA4VJREFUWMPFmYlu4jAQhl0CCUc5CuXosb3HgYZyBgIFSilHd9//hdYObC0SJ57QRf0l1AqJT/b8kxl7QhTS7orVXLasQyKZquSqxTuNHK6TzG0FfKrcZk4OoZ1dXSQgQImLq7Ooi7tMQahSl1GWeW4kQamkcY7lFWKAUqyAwp3mAa38qZpX0yGC9JoqenGIqHhoJLUbiKwbLSR8aThA6cBA3sfgIMXu5bwHHw9NfJDGLw0HKy2J4/Uv+IZ+XfuAqHyZDgZmQPb48hmBM393KK0HEGuehNERvDrlqoNU+n7y5NE8+hr0XO/VFzyPvkGACoJ3EkPyhs/s0wfblGajKLkGkve8mbbYn1aAM8bXApNIXgOg16ZcM2kN/7fEIprHZC+twEAWd/0theU5c2DasEDO5Z1r2wuvsLyNRV+A6Z3Srg0TSRxLLvACvd/mlmhyZzoyZx5dSxJIniBOts6M/ScAbksGzRNEe9xh367ApwwvM3ieIELjg9K1vOikUTxBFM60RlPHE8c0IVo0nnCmS5l8zmikhOINRsAlcebVmzgGgjf64FVw0dsn9pcSoEHiiPU1KLUai07bQ1xIgHGSw8SPPWy8/H+IXVs2N5rJgT3lSFa53/G6/0a5WgMRRwcaz7KykyVl1frm/Dnb8URldXmSllUmumq//N8dr9eemeE80IkyfoP12E2Q4YgX1085T4gk1Pm86FCXyHjdvoIHJInitZwhpRieTlIqntl14/dOmZp+ns+USmC93/6a9yXuxy6OCh5kfYn9ueP1LeuLuOV1h+xjhvMg5330+m6G8P2+UE7caczjNxpaTQUP4t7i0KRM7c++h2jOuB8jR8UDg5T8IeTIiZeo8FeULw2kxK5v1ygeaP4WYDrTXovSdxBEPC8d0KTWvM4JIpoH8YA2uuIVZmwLIpIHmYBGP6ZcHeGMmicaPXmUlocOz0dTEFU8cRSR9j1zAqOucGaD40Ep9Dg3Z864gLmD5KXOQg+cvJFYS1sZP6HL8CPxbPvM9LA8cSQmRlCjco/oUyQPDNW1wrTBHlK6QvJiJ5iLDw8kjgcF1NXsFc3L4y6PdSxPP1Veb0U1+6PmQQ17ATeX9dVUzYv/7xHB+XGHGN8fsxx3ECT0lD2El3064jDN73U1Kq96TcKViTaQzBxxZHr8oW70sfNPDMbxo/uff7mw//ojAZAoZzGvP/4CWXPlbGBaMMwAAAAASUVORK5CYII=) no-repeat
}

.ktv {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAAw1BMVEUAAABwZ+JwZ+JwZ+JwZ+JwZ+JwZ+JwZ+JwZ+JwZ+JwZ+JwZ+JwZ+JwZ+JwZ+JwZ+JwZ+JwZ+JwZ+JwZ+JwZ+JwZ+JwZ+JwZ+JwZ+JwZ+JwZ+JwZ+JwZ+JwZ+JwZ+JwZ+JwZ+L////49/7g3/mUjurq6fv8/P53buPGwvR5ceSGf+eXkerU0vZ1bONyauPd2vjLyPWJgud+duXT0Pa2sfHBvfOyrvCkn+3u7fy9uPKtqO/z8v2cluvn5frZ1veOh+iDe+bmhqTeAAAAIHRSTlMA3+tHCZta9fK5dx8M208U49bHAmzRlBancAe+kCkkqEg3GqEAAAMrSURBVFjDxZnpdqowFIUBtSAOrdahtdMWmdSq1dZWezu9/1NdEwRWBZIDXtf9/gg/3OskZ+ckOSgSzkudXrWlGdA1tVvtdUrnSnHKzdsuEnRvm+UiapelKx0Z6Fely5xy9WsVQtTrep6xmhqkaCZ55GcqSKhnJLlaFWSqNUJ4BnJgyIIsV5CTinAm+23kpt0XTF8DBWhkTuTdBQpxcZeud8/0iinep5aBBgrTSCkZgzaOoD1ICFZwFJWEn3EkZweGMUDC9h3XdfwpEhi/zVMFhcliuGcxSa7r/AO2rWGEZYsGXVZJ8TG9WDERoxqvahMURkzn0fY8+5E9jXCIGdV7DQSmTOUFnBf2nMiMFu4KHVDwWXzYw2L0cUhnv7+poODsNOwoP7sXB4eowV5YAgl3p+Fhj7d7cZGgxAWvQMIiCD5wz+j4V0OGztLSBI2nw6Q8IUmTVmbmntw2cdFpQMp6NA6N/cyM/RwaO0Fjt9FByvvu32P50uP0Caax3SFTFBeH2DgmsSbwGEeh3miCdExpTlbMLqEipr7jWlGBTc3KjSTBrKZGinJulJbMfYzXBVWxpWgQ8cr1tvCoippiQMAH13uKlEceJBgKBHxb3MtztjQ4/hwyFF2Q4A2Paoa5z+Xcd8gRzOGMu+5zjNlj4OUp5BiKiiz4it2sMA7s7ExAQFO6yGDLo1riJ3D2YgwKrUxjv3G9byz/xOkgGbsiqAjuB2yLnA5OJaM4/PC43vDmhukgYqaXr7HDFxzeg3QsQaaUXmC573xsg3SsQKefvgVYbMHNWGFgv6DTSN+kZnwCv4JCgzxUMrZRJ6r0HyASb6N1PdWEnA09HfFGrzwgSeDm0Qr5eMg8LLk7M2+2M+SkFB/nkoIe6MTHOU4nNSs2cnOdfSRexwcjOlo9+9C+dKODEX3opuha4UcHI4eaarUsuvjMv4YhVMUz8dVsvg4FfZp7qtLL43LtuNbnegkSRu0E19sTXsCPbxGUT9zEOL7NcvpGEKfWQgFaNUFPuEgzTdg3HvSQk95AEdPM15BsnrRlenxT9/Rt59M3xumt+///ceH35w8d0LUW5fPHX9VjfATvxQFPAAAAAElFTkSuQmCC) no-repeat
}

.xiaochi {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAAwFBMVEUAAAD9Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl7//////Pz/7+//39//+fn/6+v/9PT+u7v9Z2f9YmL+jIz9f3/9e3v9dnb9cHD/6Oj+w8P+l5f9YGD/2dn+lJT+nZ3+hob/29v9goL+y8v+s7P+tbX+tLT+paX+oqIHOmGKAAAAIHRSTlMAC+Hrm1r18dtuFghPRiLWvbiodkge5NGUeMjGkCkUEpSb2gUAAAMKSURBVFjDzZnbQuIwEIYj1ALlDCqgotNWSlsolJMHUPf932pNu6u79k96yoXfXUozTDLJP8mUpXDXbox73WqN9Gp91Bs32nesOGet2xElGN22zgqZaw90EqAP2rmda1RISqWRx83msEqpVIfNrPbOgXfQy/NM5i77lJn+ZQb3apSDWpqTTY1yokln0rih3NwYYnudOhWg3hHZm15RIa6mAv+4vWIWoY9GnQpTN0B8r6kE18lYa1QKLbGeqSTn3/ZbjUpS+38X9qk0fTBgZYM+E+nV09vetsx/sOz965NIzb4kd0iQx9CEhI8EGX46CPV5/WAKeVhDDf/rYgOOdm5KmMNxN1gM2nMLK+7oLtY+feKtFm78R9YCzeKffAl+Ws14r9nJowTeKf5tBbpdRAYHlGAXzZ8TECRwonncUYJBFBIdxDeytyYB68giiLXOw9ICPUI+piUJWfJRh+CHFpaZJ+7AiSSc+Bsg0hqO8RuPr0cSPB7rN6C0jBng9f3H2y5JcT9e2YPnBrsAT+dmJuZw4UzAUzMjoOuEaWoNaqyH9p2dxZyNdl+PdUkpXVYlpVSZJDvtfj1b8/3jLtkINrbpbAKUqxgJ+FLY5/X3xrsVS9gW9GJJaXj+UJKlv3z40mfcwKII5vDF+uzw7gka+yCyG4Ihg4S3jfvNDlFjhhqSoIzA09XGMe3NKq2Bl02PlNJjGilFA+JQautNoHwBe9Aiki8gsKXUxuApQKHBOk5SfLX5JMXjSx3EBKdRnkVfSMoLT9wgjeJEf8yWpI4g0eOjyJaPJyAJAd+dW3wUAQvHd/iiCCT2bP6CLzgsAX04RPLiLj0Yj6UbqccBH+fwgfPVTOUVHDjFR+Kdm2bP3YEjsezQfghl5kKkiEP5tcLfHh0LGbOc49aXXivUX3zUX81Yp/zlsaP6eqv6Aq68RKC6iKG8zAKZVqgQlamw0lfo9NmV1PzuixTT7qXlvjHlZJxWOG3lK0i2FJdMO4qLumrLzpOm4sK42tL9T/i4EGPEnz90Ir3a5Z8/DCbnN/EpfWbwFk+qAAAAAElFTkSuQmCC) no-repeat
}

.dangao {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAAkFBMVEUAAAD9Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl7/////7+//9vb/8PD+jY3+y8v+jIz9dnb9bm7/7u7+p6f+0dH/29v+vr7+sbH9ZWXsrHB1AAAAH3RSTlMAC+Dr9LqbWm4fFttP8UbWqCYHdkjj0ciUeJDD5RQS0sp7AwAAAmRJREFUWMPNmdlyozAQRZs1GLAhhniJk1x5S+Ks//93M6pRivJguiWsh5w32cWpRk0LqSGBx1m2SqooRhwVi2SVzR5pPEF5v0CPxX0Z0BhmdYwB4nrmHFwWgiXMAhddE0EkaqyVNyGsCG/IhkkCa5KJRXhTODCVgpyncCSdE0O+hDPLnJm+AiMoBify9gGjeLgd8N1hJHcXjXmB0RT5hfwucQXLfq5TXEXae55xJTd0xmSKK5mePzwJribp3bDHmw5CSLy9QSLs1scGEgelDpBoyBBEEPg+KXX6hkD0E2Im37D6i3zTmRHKM/ihhR/yLJr3JUR2WriDSEuaGiJ7LdxDpNa+IIavOUSs01LCgk+lPmFBab3MfH1ZLzoFPFIQ5eB4Oe7UGbvjCzhyallfp+uUrLGlNRiO6gJHMKz5nPQCFB/wlF9a9fXvr9349V3/wi+zlSTUvs4oCSuKJCH3S5+Ipn6FMcGvEBT7FkZWRWJdLjGFFkXiUC4RLeQicSmXihK5SFzKZUOpZZFYlktKa7sisS2XNbWMEO7/tZTzFz1vt88wmBErzIkKVrhVaguDGXHCgohSSbg3oZkRK0yJqGSFh/3pYEIzI1ZYmhc9P/EmND4p3YuealFoQpOFNWlaf49Na7ZzvoThwIZT51SJ6Lz/Rza0JTY6UTm0JaZmnHCPc5r+saLLqawzee8IA/8HH/9HM/+HR//HW/8HcP8tAv9NDP9tls7ox9cxqTCCiun5PW3gzOaJGOYrOLKaE0/p1pAsfbdMPTd1/bad14Hnxrjf1v1v+Ljwj/zn8wfiqNKfP3Li+QPK9l+Ht9TpiwAAAABJRU5ErkJggg==) no-repeat
}

.shenghuo {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAAjVBMVEUAAABMpP5MpP5MpP5MpP5MpP5MpP5MpP5MpP5MpP5MpP5MpP5MpP5MpP5MpP5MpP5MpP5MpP5MpP5MpP5MpP5MpP5MpP5MpP5MpP5MpP5MpP5MpP5MpP5MpP5MpP5MpP5MpP7///+DwP71+/+l0f5zuP5frv7P5//t9v/T6f/M5f/F4v9nsv7u9v+fzv4OtEAYAAAAIHRSTlMAC+u6m/Xydx/h209G39bHqFkmFAdsSOTRlFwWcP6QEjqpXI0AAAJZSURBVFjDzdltk5owEAfw5UkEBPGJU/HuFmjRU6/f/+N1yjFNrUl2Q2Dm/q+cYfhNDLAhCxDZLHYHL3NnGLjx3jvsFhsYHid527/if3ndvyXOIG6RB6hIkC+MB3dKUZv05JhwoYtk3JBNriJkJVqxuLmH7Hhz2jvO0CCzI8FtfTSMv9V55RKNsyw10xfjgMTKiVy/4KC8rDmevbiJcXDijeT6LtEiy+dr7aNV/Kf7GS1zfPTmM1tw9njzeGgd76G+4AhZCc+h6lV7bs4tBUaiPoaoT32uqurjByWGfwfoEl71FUp0nR7ckR5T3PVgSnlcMe3XS4ZX48+GIRYdmHM8ZIl5d0kCjscTAwcAEo7HFRNRZkhPiETRiWmPL8YAJe2ZiCUUpGckFhBSnpkYgk97otrQog8ew8Ou2iBH9CBjeNgRyBEzcGlPjJAWXZCtTh/Ce55DIf6SrVWAknxWX0FF+sMXlARkpeHCAz+loHIOabCW/uVUcxKaH3NhPy6YgUeeVF+qPpeaBD3wSbDzepEEfQhJsPonJBhCwQGvLWJ75YAFlByw7R4XDlgCxBQoftBgLBYpW1AsUsmYYCIWeltQLPSQjwfm8CeFEmzlYKsEC+iSqsBrKwPbqwqMdC+cTaVNg5KcdK/ENz14070SS5/ne6Md4F32HOu3Ffdbo+RuMi9yxt74jL01G33zOO321n4DPnGLwL6JMWmbRYjRMC9aK1tV2RAv0/T83oc0095Bk+3B1DtsQZ/ErCGZTNoytW/qTt52nr4xzm/df4ePCw+fPwLEwM04nz9+A7UDc4H5zc1aAAAAAElFTkSuQmCC) no-repeat
}

.gouwu {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAABCFBMVEUAAAD/L2D/L2D/L2D/L2D/L2D/L2D/L2D/L2D/L2D/L2D/L2D/L2D/L2D/L2D/L2D/L2D/L2D/L2D/L2D/L2D/L2D/L2D/L2D/L2D/L2D/L2D/L2D/L2D/L2D/L2D/L2D/L2D/L2D/L2D/L2D/L2D/L2D/L2D/L2D/L2D/L2D/L2D/L2D/L2D/L2D/L2D/L2D/L2D/L2D/L2D/////+vv/OGf//f3/7/P/6u//ZIn/Vn7/NGT/3eX/wtD/fJv/XoT/1N7/prv/iaX/P2z/rsH/qr7/orj/kKr/gJ7/eZn/cpP/MmL/9/n/x9X/vc3/m7P/RnL/0dv/tsf/g6D/TXf/8/b/4ej/t8j9bqdtAAAAMnRSTlMABPTB4NIpDp+Z+81fFhAJ6Lxx5LFORUDtqXfw6tejj4R8Y1g5JBsL99q4yJRsW1VJNMPcgFIAAANFSURBVFjDrdjnVuJgEAbgCRDqAoIoxa6Ivb2hSBOwYq+7e/93svk8HJeSGVJ4/nlyMn5lCkBTxBePDlMrcz7s5vb01OHRYpzc21lY0zFBX1vYIRe007wPDF/+VCNnQukARIF0yMleCzlMlSvY3vnWPGyZ3yI7tlOwLbVNU/3ywQHfL5Ilw3AonBTTOAbHYkKqBwNwIRBk483BlbkgE28ZLi1bRizNw7X5ksX9xuCBPnnXq/BklcZswqPNsXrzwSPfaBX64Zl/pIAxA0NlHZqe0c3H6fn9v+VuQFTpt2tG9bzdr0C0QQOJJUguzo2B8wtIlhKDgGlxr9fGkOsmBIXBfBNr7sYYcSNWoEbKgrhfFaXc61QqnV7ZMIm7XiAlI91HTR1dA98a6jBr0s1kyBTaBa+v1tfAQEOtsQ/ersqcEwhezAg9/OiZf7YhOCEicSz9MSN08KOjDkAcWUQkzpEnM0JzKIfUCYjzhagEBwEr0wKiJCTNfatqWKm27oXE4ev40+B98vXM3sljTQhYe2RvhW2tX4bki2+zK8yTumG6bE7Wzqt60AFjhbjp/mC+1oIVdRYP7Mwnbjpdmq+9wEpXLZ2dVQSG2tktW46v4LABr9l13KpGywfk2n+bPalLqUMs0RzAnlSDva4uO/pIZ56oZnoFKw2p5azQPvPErOMnWLpS9QxGiiL8Wy1Y+80sXolQGuy+nmGtxRyvkqZFvvJuhASoM88WKRFlx+cdN6r5aRpNEHPNd+ZLXB+94/+ZTkRrTDnw27pnqxJrRMwhfpgvvTEB1ez74I6QSMvBwrOZa1xbfmMzIKeRKcKkRrkpBGwxWagUuS7aq1jn/F81VWClSN9imFQ2BNx0jgkf2d8N2bv0sV0LWFRKVYxXtUqpgCZ9jap3y/x+u3X5y5QWwwzoGv3IYgayNCQMz8I0LBGAR4EEjchG4Uk0S2MK8KRAs/1Kv0qTtBRc82tkIeQ6G2MhspTwu1xfghjJDFzIJImlReBYRHPy86H3HxApqMMBPUhTJdejtstjPUl2BPdhy36Q7Mr6bSRLlpwo5qPiZvNFciqePgDjIB0nV+JbkT2M2YtsxcmL0NnxejiT8vsz+cj68VmIpvgHxdTVimWzl58AAAAASUVORK5CYII=) no-repeat
}

.lvyou {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAA21BMVEUAAAAz0Zgz0Zgz0Zgz0Zgz0Zgz0Zgz0Zgz0Zgz0Zgz0Zgz0Zgz0Zgz0Zgz0Zgz0Zgz0Zgz0Zgz0Zgz0Zgz0Zgz0Zgz0Zgz0Zgz0Zgz0Zgz0Zgz0Zgz0Zgz0Zgz0Zgz0Zgz0Zgz0Zgz0Zgz0Zj///8+1J72/fvg+fA30ppG1qJ74rzx/PjI8+O/8d+g6s/6/v3S9ehQ16c605zq+/S58NyB48Bt3rZn3bLl+fKy7tl04Llg26+s7dWQ5sdb2q2m69OF5MFU2anV9urN9OaK5cTb9+2W6Mqa6MyZ6Mx0HWwcAAAAI3RSTlMAC+MUm/R3btvsT/HfIta9qFkHArhIRx7p0ZRcyMaQKflFtwmd2OAAAAO9SURBVFjDxdlrd6IwEAZgKt5bL+222rr3fQMqCCoKaq1r7XX//y/aw4hVSSAox93nS23P6ZwJmWRCVCTUn4VWrXqbw49S8a7WKvxUleOdlb/dgXP3rXx2TLRPjXoOEXL1xqdDkytcINZF4eyQcPkSpEr5xCEvM0gkc5koXPMXErtuyuN9PscBzj9Lwl1lcaDsVWwZf8XBvsaUeqWIIxQrUfG+Z3CUzPeI/CjeURGFOapFHK2oCub3C1L4ws91FqlkuXpGSqEKb54jpfP9VXiN1K739hdEmz8MnqxFF1KXO/tfdAU6D4z0l9KQme3+mEeUTo9tmAYk8h8JlsJhjHFv/OKnZLM1fbxw72U5ljYpFrCvO1gHsZ0VW7M1JFEI+luoH2ltFpg+M+IimYt1L2xg34yFjFyvi0RuKGAde34zkYFBybtjy14hUp2mJNTPx+bMna9+TwbhkN3Om06fFoiS86elHJrhhUP1Z7Gw9h9rysijPxDXEMxUOWqb0QaMNwOGFs1/13v1f7jCTacYW8+BgT3us74/NRRxUwf33E6rKCoE7FC8B786e8z1Zk8m22Fyo1aVG/CGfbZn6lDa1oht9QzPsNsLvnDyCRKchQqevNNWxK1n4Zy8ciP2vTPW1tnWUtwKauDRiHWrt3leY/pre7Dan30DvJpSBY+e9wpw3hl5Ws+8E1pHow44VeUWPP/hv9Gne0q27/gBHW5heuDcKqLuNGaMDUFc5ptg4z7I2dLFazCngEP/pe8GZzY2llRGc2AuDgjlBwTarI1A1/QjYGPqPzvazJ5pofABSxDw2AAbL7tjnm9/sZmuiYZ8AZHl03Zdj6i01x6oKskjsyGalDtxt1tiL0XdoY+a6W81IEZbg6hsahDaKTFNpy2QstpZIMYKwsLOQobG+bqeLKqnOFlxkxd0GS8owp6s2d9AihJ7DjYNQ9b3VMj9oWKhBPuSlq9SC0g0ZqabpnTExSRnYe1tZ6c23zTZybiMeJNpqB9MEK3MNXrOC+O8xDd6pY4YBiO9x2GnM3zsMWLEHkViC2eoUxuefIy/TdMzjCqa0HGOR239WduZITrhWZHHOVKITpDy0/jTozjFAn8kFh0VQ713Tp069kgcvZ77LEJfuI7lrxUskvC1Qv7i442Y0MgD7/JUr2akkv7lsXLa19v0L+AnvyJIf4lx+muW9BdBvGYVR6g2/9FlGrlq4UCtKyVe+bALybIi1bw+YP1WTnqpm/7a+ZQX4+mv7v//lwsBtRF8/YHcbbXWKjRUJd5fzaC+oF7mul8AAAAASUVORK5CYII=) no-repeat
}

.xiyu {
  background: url(data:image/png;base64,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) no-repeat
}

.jinri {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAAwFBMVEUAAAD/zTT/zTT/zTT/zTT/zTT/zTT/zTT/zTT/zTT/zTT/zTT/zTT/zTT/zTT/zTT/zTT/zTT/zTT/zTT/zTT/zTT/zTT/zTT/zTT/zTT/zTT/zTT/zTT/zTT/zTT/zTT/zTT/zTT/////++7/89D/3nn/0ED/zzn//vr/0kX/11n/zjX//fT/55v/3HH/993/9NL/6qj/6qr/5JH/4on/8L//6aL/00v/22v/2GD/+eT/8cf/7bP/+ur/4IL/33plJB4nAAAAIXRSTlMAC99HFPSbWuzbT/Ei49bHvbh2BwJsHumU0KdwkHgpqNJkyWttAAAC1klEQVRYw8WZa1PqMBCGQ0uRm4AgF+/nTbRAWxBERFT0//+r0zDAOdBs0kJmfL4wA8zbze5mN9kyA3m33WvUuh68onPV6LXdPDueXPn2Cgmubss5dgSX7rUHAu/avcxq3I0DLc5NLotcswgjxWZqyTMHqXDOWBo6F0jNRSeFeRVkoGIyslVARgotbRrXkZm6JtWrJRxBqcoI7s9xFOf3hH2UnllRaWO+hKMpKfzYquME6slYF3AShUQ+40QOMrxTwYlU9nehaf8+8kfjvs60YM55lkXnHBuCzr/62IQNQTR3BhaBU30oKW5NbCMr769Q0d70N6UH3z6HoHji/E3pxUsmcaHglfPnjWJ/PJ2IwUBMpuP+Vo9/QoXLJNfKRfFY0QfgjwTfIUbyK7F+mIqHdUg8alk8iD8E30M8ATNKD54MS5lylJghfOEJXkIEPgjK+jITzrlkMP9eLobBz1fEJfNQX3RKIJlyydcCG/zRYG0jSEqM5aHJjphojP8IPuR3TyDJMxcUvpB6AfYYSkXhg8Jld6AY8ZgxDgikI0eguKNj0hfSf8qU56JPR6UBgrGM70LxoNXacIIGq+lCPKdcMQVBjXXpisW5sqgs4x8mIOiyilLpEZAuXCqdK524/dshHkMCLgFkDi+gIoqdu/1bAuaFhIV6QcpCMLL8yyUHyiUP5JIJPOaAYBILfkNBoA/KH13afEHBTJs2+sSOfCQIn7WJrd16yl70o996huIwSGTicKUvDqbytVoc2D0xlC9jgf0I9uybmAqstgWsW1Q02zksfBWmFpCqSYm3dx/oL2cf5iaVuo1GUdo2ar/RsweLRxHrhyXrxznLB84b60di24d269cK+xcf+1ezHdXTL49V29db2xdw6yMC20MM22MW64Mggk4NR1Dr2B+m0bR6yEivxfSUsw0ky5ZHplXLQ13bY2fLg3HLo/vff7lw+PoDXreW5vXHX8MzjyYiwaJpAAAAAElFTkSuQmCC) no-repeat
}

.gengduo {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAAqFBMVEUAAAAmyPAmyPAmyPAmyPAmyPAmyPAmyPAmyPAmyPAmyPAmyPAmyPAmyPAmyPAmyPAmyPAmyPAmyPAmyPAmyPAmyPAmyPAmyPAmyPAmyPAmyPAmyPAmyPAmyPAmyPAmyPAmyPAmyPAmyPD///+67vry/P47zfJe1/T0/f7A7/tI0fJH0PIwy/Hh+P3P8/xF0PInyPCp6fmP4/fe9/3J8fuw6/qo6flJ0fJpqpjBAAAAInRSTlMAC93jR5ta9G4fCHfsFPHWvbioAunRlBZNyMaQUCkk+VF1P5t+xgAAAptJREFUWMPFmWtzqkAMhuOCgqCieMG29nIiFuut2tv5///sDOxYWhI0wM6c50Or74zvBDabsAGu0Lfd2TCYOPjYU9PhzLX7UJ/W/G6KhOndvAU1GNuhgyU4oT2uGpyr8CLKrRKm96eHV+n5HgjpWCjC6oCE7gjFjLqC8AZYgcG1IL02VqR98U5Gt1iZ2+jC7VNYA1V6I+8trIV1DywPFtbEemDLgMLaqD6zvjfYgBu61m1sRJvkMzakU0iYATZk8Dt5RtiYEblggxfdstAAVl5yfSzyGq+W36zi17OefO2Xy/1Xghz+d4CkPm+1XW65zeTNx1n42CCldw7RxSLxskCchbfOhTUXpKv9xnTPrYqG6zS+X+qKiVHpXmgjIf3FyzNmPL+k3xCPhyzUZLdLMuVwRIINKSFvmPppR22YpP/etPSWfk6QEGZL4vCGxW+nNOqfN/mEBCddlgXKDPd5UDrcPVIWuswIDPXf3VnaaY0tOkpouJYYKoAIhYbvkkvGCGyp4afO73xRPpHBZvaxPG0YfLImksSO88SmqzIkmnDr/UWOIQRUlBcHSgATpOhgaCXYHM7CQQuUCfDdaRv/jCbeouaYnPbL9fspOWIJDqBh4NG0YQ8ptKewGofDbWW+p1CNX5QpFbm04TVKIE1sXqMMpVuP1yhtaXHgNYovLV+8RplDZNYwAlAmDRVpUg0N26SNNjRciBs9q/GNHkJzaRNCim0usW3yONds61ljyHBNFQe39JGY9hROK30kJvuZ9hRWK+IbP1aYPviYPpoZPzyaPt6aPoAbHxGYH2KYH7OYHwRRugHWIOhCKf06w7Q+XMCbYUVmHlzmqdpA8sn0yNT0UFeI5zcdOzcfjDcf3f//lwvF1x/oTALJ649/ZM+dgjoXHXsAAAAASUVORK5CYII=) no-repeat
}

.liren {
  background: url(data:image/png;base64,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) no-repeat
}

.yanchu {
  background: url(http://newebapp0.nuomi.bdimg.com/static/img/29dc256d21296a9476b03a5183eccdff.png) no-repeat
}

.chuancai {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAAqFBMVEUAAAD9Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl7/////7+///f3+jIz+o6P+jY3/8PD/9fX9YWH+ysr+lJT9fHz9a2v/7u7/4+P/4OD+rq79ZmbcTD/zAAAAJXRSTlMAC+sU9fF3SOHf2x/Wx72oWQcCuJxs5NGUXFBwmJBNRSkknR23l0YTtAAAAkhJREFUWMPFmWmPokAQhltuEEVQR8U5HGdf8Z5x9vr//2yRZLejDAUFlezzyZj0k6aP6q5qVYP5Mp0PQ8OGZfiz4Xz6Yqr29J6fZigxe3rutbElbmShAityE27nlj5I/GWPo3MM1GI4jZUjD43wRo10/W9ozLhf71vYYGAvFE28BpN1TC7jAdgMTGL4ArQgqBzI1QNa8bD62veqfVzj65fjF6A1gVn2xQN0YFCe6wk6MSmtZ3RkcbdgbHTEvl08Y3RmfBNfwGSXZTvcMdK+ngcm2WaTlaKZjo9OTUfKbHJwj/OvgwbdES2nhcbfLk6RQ3REy2khpqog8euE+jct9JNC6EJKCLcQRnLCqJgSS05oXaclhZwQaS58lBQ+5sJAUhgoZUJSCFO5skJXObJCR01khRM1lBUOVSgrDJUhKzSULSu0FWSFUJa00JD+ZJ/wnfNmW+6kzGSFIbmwP/NmJ+bCJrfeJW/2g7n1yOCwz5u9M4MDGb7e82Z7bvgyiSHc5s0uzABLHQG/iiFkCQPqkPo86S/mHFIpNYKn3zxhShz0+43uIOOgr7yKfFxn5OeZJ4yIy9LVd7qAJ3Qrr3O77LqND+AJ/aTywln4Pu7/OtYIl9VX4qzkw+H4/VB3JS5f2nXr7R5laKFDphXnurTiSKQV/MRHf79mJJ2aiSeP0umtcAK+Fi8RyBcx5MssZVYeWuGtVAVvIVoQvokX0wjiOZjMY0WT8gqSqaqlP2bs375wUVe67CxcGBcu3f//x4Xb5w8LsIywyfPHH/8s05dRRCWCAAAAAElFTkSuQmCC) no-repeat
}

.meishi-1 {
  background: url(http://newebapp0.nuomi.bdimg.com/static/img/08190c94440e7f89f64431b0b190e242.png) no-repeat
}

.dianying-1 {
  background: url(http://newebapp0.nuomi.bdimg.com/static/img/119f0b497f0e056cb9d528a36752eb8e.png) no-repeat
}

.jiudian-2 {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAAflBMVEUAAABMpP5MpP5MpP5MpP5MpP5MpP5MpP5MpP5MpP5MpP5MpP5MpP5MpP5MpP5MpP5MpP5MpP5MpP5MpP5MpP5MpP5MpP5MpP5MpP5MpP5MpP5MpP5MpP5MpP5MpP5MpP5MpP5MpP5MpP5MpP5MpP5MpP5MpP5MpP5MpP5MpP7E/8ELAAAAKXRSTlMAC+zhF0eUd/T5ShHx3Ncrm27mr2hZHwe4JQXFqI9qXDq9PdHIhlAviStd2KwAAAMVSURBVFjDrJTpcqMwEIRHCjcYQvAZDL7iePv9X3BnlEoVrCUMLN8Pl42h6TnU9ALPL4NLriPEenW7BKXv0XxU0tzwxK1JFM3BP0ZwEB39yebKNxjiOmiTwlN8ySuSNqhjGN5KNUUu1BDy+3VH/7C73nMIOhwtuTHudPMgB49GG5cbGsN2b25eq8Ea1ual+y295JSJu/aTXvDZisvsRMPs3sEEKY0gDcC87wbXuJZqzzSSs9RdewPtWwGoUhpNWgFYORtZfPDfIU0iBPBRkJUDFxBvaCKbmJt0sPaP6438GUc04qo9yxp8sT+fZuCzx6/nWcu+nGgWJ9ke28WQZhI+m9lmQEWzOQJZf3n2PKqUZqN4oPve7AFc6T84s8Cm8wLewKC3klUGK1l1ICsBl6i6TdVpVy+Dk8yumOrOUBX/aKlDBSfO2bWA/rVYst1e/mUYIHLkI7etpB9W8rWLCWPPcjpNmJMdsUUGX8w+CXrW8+4WNI3zf7eyoR7uxwYEqQGORjkCiiUEH0AklX4Duf0xML3PYUHKge+fmPmzjOBdQsfMOFlG8AqszOBitYzgLpbl8DluiRYYClNLsSEQLCUYAKHMZD1N0J07a5nKhW3OELTmTgJcKJe1njQUd+4UstIa8GYKRpajriWq1DRBd+4oeYlcnybozh0j9rc5M2phEISiMCQJayxBYpEPIxgE+/9/cPn00YOZHhnzcasPzeu99xxv/F4UNklgx5IVIEs2bIoCZFPehI0AJGwI7PymZIF9DGyOngLk6JEcJCDJgfQlAUlfJFh9U0JMsJQABUgJoEhJQIoUZVQCUkYp9DrQxUJPK6IAaUVolnQgzVLMDy8BSMdp6OwegX8G/7k4/MBbgS5zn+zhPMPLE3lr4sPRtAtAmnZkhbJkZAXCZ5WFT3tp1l48tpe37QU4Y25kEbQ3MRiLr7VZfELzOlNnBBmXtKrGGqtqfJ48UGOmnU5gtqV2n50zj21lhuT2e8sUU9euyW9nMXWb2s6VxvjUR2M83BfXTyljXLfu/+Fy4Xj9sU+rG69cf3wBGsLmw/gzw2EAAAAASUVORK5CYII=) no-repeat
}

.yule-2 {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAAh1BMVEUAAAD/qzP/qzP/qzP/qzP/qzP/qzP/qzP/qzP/qzP/qzP/qzP/qzP/qzP/qzP/qzP/qzP/qzP/qzP/qzP/qzP/qzP/qzP/qzP/qzP/qzP/qzP/qzP/qzP/qzP/qzP/qzP/qzP/qzP/qzP/qzP/qzP/qzP/qzP/qzP/qzP/qzP/qzP/qzP/qzMQqyNRAAAALHRSTlMACwf123bgbRbqSCvFlGiq79egm1kRvk75OlHtPuW4j3FSRh7RsIZdIVskib5ZomEAAANbSURBVFjDpNLJjoJAFEbhWwwFFIPYQiyjgBHnnPd/vo6ubJWxv/XN3fxHBoSHIK2XkYvdesc6DQ6hzKfWzZEPx2atZA6zcOngLoxMpPaaJ5ukmYlDJaLC2GRpYnnSezXlnR/xsDzvHHnj7M5LHiJ/9MtCA2ybWDrEzRZAFzJGWwPoTEkPlWmAupVBlxyIAkcGOEEE5JehsxVAWsoIZQrw4/RmnAB6IyNtNJD0pH71gFMpo5UnwLt2jlcBvkziA1VHDvcKbCETFRaqu3wReuAamezgghd+2TcBa2QGYyH53HoF3GSWG7D66Ll/j+Fl3gpvczjJbAvIW3lVgy5lNuVB/Wd7YCf/sAFeilO/rNRRa4MwFIbhL8YaTavFwmRrB2U3u9n7/3/f0h4GJXG50efKF0HUc0gHozYZoXOvP3UoPjgMQ6hE5m14GapLMSlzJYmVyExwczIBukaZE8lSiUzTQZCxy4wn8ZXIBej0FO1ltz7Q3SD+beVd2vLJ5g5nJc7DUdoyFHME7+z+rGTL2pgZrnbM/GgX33botBC1i09opR7enUqBJFSi1HjoFeGkFS1JW4vSCaIOMGonIxweM5m0k+kxlWV1Js3MU9tUohBh0fzfWpuvapSrPWuAXoUzmHMlCj0M8uBWF8D4phI5B17A6opykS7ARyUKgH6bM5vVhmEgCKuOY1ocG7tNG9ISSNwefND7P1/NlrIQvjGxFEN0EYOF0c9qZnc0yT4L7favO2vAP/yCJdsEDiEcLCWQgJdc0aHsop19bcQnAR/Kjw2Ae/dsA2KpAYYNB3YXbSOepq7TAAObr16c2n+vAV49I4fEHyI5MH1FX1jUAOmLCbbzre80QIJlCSg9OEoNUAJYpHYevh8aoEixjL76BXvTAGWUhX7rFHDWgISeUxHjlFMRTsYpEkAq4skS8GHbOgUigGTJ07l8xm5jrHTCeXHlkIASTp9se/W5dG3TgFNiTtr30dpeA0jaVykrfD7H7MJnzdIsjPnF47hueZtfgLNFMISENphFIEyMIdXEWMFmgVZXaUZQVUunr0+xqvrvmQEpZtrsBIpmqd3XFGG+fS4zJC93tkzHJaZuc5R716Cpm287ZxnjxftoxvgGjfF86/4RHheunj/i5qW/5fnjF09o4a97bDlMAAAAAElFTkSuQmCC) no-repeat
}

.huoguo-2 {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAAhFBMVEUAAAD9Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl7gXFZBAAAAK3RSTlMAC+zz4UcC+ZRKaQfcmxbmPNenW8aGbiPRdVEsELC8jxPCeFgfuCiBYco2043WpgAAA/JJREFUWMOczsmugkAURdFLNfQCCqIEFSLgZP///70nI6MizRreVOpsmdHa0r/tlcZT8fnml7aV7ZygOfPh3ASObODag2aCPlh3bVxpGHmFHwZ14vyfkjoI/cJjZMo1mU6leNofs0jeRNlxz5OqFn/ZjXWqqWVC3aixspMl+gHAhD/3ndAADL3MyjWgwkhmRKECdD73bAfgX2SBiw+w+zmdFIDJZKHMAEUik04xcG1lsfYKxCeZ8EiBypUV3ApIHxN9BrxcVso9MF8bkxi0ldWshjiRD1EBnpUNrAdFJO92QC6b5MDu2/EuG90/Y3oNV1e2OoDu5dUAppXNnBgGedEBmUwKUoA0kEkZ0L0M/PFVdjsKAjEULsO/AVkIuqKi0Qs1+d7//XbTgBczTL+rCYWmHXpOM6gkTofSSZwKskRWJnCGH7xYeBlO4WD6FuhgJ3EmFiaJswO3lniEzDKhB9A0wMMyvgyOohSNHqPsAaoKwHAqLavQU67FxvkAnM8AH2t0HOTrVN7FYAbK67UEZjG4w6CZU7hIFI0zioxAanVyWeJn6MVAe32LvLVzMejReAsHMWhBZfSDmorBAY03UFsmr9uy+D/ofi3E1F+jQ1Em5lvrz5i1VGsUS9hLDmPgjT471QIeQWcj1PIMfaHD51eXGD5d6BBPaQMdJ2Xkw85OqD20coPaTvg1wtrLGFx+DTfpw7EeWI3ANgyGcLR7caHk8+XGDerNV/bgJIXEH70TQJPYOwROhf8YUgG21cZgbbltHQLyV5zV8CYIQ8FQ+SgiMrI0dUyNuMSo/f//b3sryvDa10Ca7BITxVAt7bt3dy1+XoCjsQXsAZU1PX/ngMIYnJtewYgw3krTe5xy6uThL2NnnTieH8137JqwKDs3Gyrzi00J67ux3yg3I7Z2YyNyaSz6Mv9zteyNRW2vwn7rh9JD5MoMEPX1fqqq0/1aP0tFPcbD0iNyYAwGgjETRA4jfSH00ThxHNcX6Ysn2M5lbzuWYKEFgMktJvwCxhZaQLBJJZk6tKIoRHtQWRJuUthGeYTbKDZ6HnyjD0uRy26yIjosRVAsIfONaJOwWMpTRm8q84IzozjT/KnsNpVH6UK1+CZTkcoMSmL6LXMbP95AI6Ik5kU7rch6cpfZMaI9bCsa2gpTrdhwtgKND1qeeqrtmtInqd5frdk+gjWLaR51RHv7QROObcCjRwTxQwyEbpbGLI32MFW6LAhKL96kr50ZVe0PxGhM5ndaEqaxf6CSc+M+GUoaOzEnkBRd7Mh0Tqgr37zPTkKoGyN2PieLgvFerjMKxqu9/szWsodgPFZ0//+HCwO2j+MPsxItHX9sAzd8A4haytxf8D7WAAAAAElFTkSuQmCC) no-repeat
}

.zizhucan-2 {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAAh1BMVEUAAAD9Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl4V0jWiAAAALHRSTlMASAre6/NalGoG1+L6F/e8OcaGbiMOE+aXdiov7dGnnY89rk4fuKl4J7FSZfop/0IAAAOQSURBVFjDzVnXcupADNW627jSMeCYEiCg//++K5nJpGxxu8zkvCRgIeuormVowVLM/CxyXIx39j7zZ2IJw2Gd6j1K2NcnC4ZAVC5q4Fait3EzGxukxToQZWLRV0kpgnWRYgN7ZvVRt3GQEU0PIfxCeJhGyHA2nVV6EyTs6q1OYFvvWGLiQRec3xtKgWXkEDQueT93MM9lOkHYJhcGDoenzUjrDQn+Ajpg4bPsm5FJUrBrcuiInJ1dJHqBOTvmo0ctLI/s7jloUK7o8gZ6YUM/WZUa+4hA7EFPeDE5SWljQnxTMaBEU2Kt8GNYkH1iUNGTjYWcZpwvHgyCx9mj+vIKA3GVjTm7lC8wGBeqmZ9V+E6OHdGLFzbV9W/CBxiB/CdpizLQh1HwKRut7+nuLGAUFs63IrPoQ2AUnx9d9zg3igRk1KeJM4qIsf/ddk0Lvxn7I8VlBk80/5pwxAZHoxCbBQ0E3dw8b1zKgQOlmlGIHSeAUSHW0Kowb1MINeKl0UziWxhPGbZ0S2Z6QoyMVMQ0i5EQZ1NhdE2EeKI/a8SpoTddUvyG9GLocFPE9VOvVuiuOiyddNKHhmtCXDRE5hkqkc01qUhkEk6aQj/yGfba2y7DcLn11jwVDeO9YLJXIq7xCCOu8h9dpeL46Lzuc5N+09Sx/2R3k8qQ/aAxIuBRQNeFzr70AQo8Up2NgizgIJfquYNOrummDqonWslhpouJHF+X9d203Yc1unKsE/oR16ncWzPmmxs6PrPO5KLieqcrcj4j4QEGPFjiLn3NymKFwr10fyWHvVKhI1MWSCjBiBvno1BRtuWgXEi2ghZUJHRRBWUvGWOxx/Mukzi15LRpEltmbEMrbFT9MlOU3rSprFasuVwUpXeVDg0fqjJQF9OH3BwU7StCachoRghGcvtSNFgHO8NRNFiwf/s2xs6IpRGgGlIr7IyVNKRUY1R01jgR0hjVDXozzIOeK62GwZCPIpw4jtWfMWMlVIcljnMgxaR3VAIqWOnAOUihfOBsjsSDKE+EdCR+waH9FY8VTefIRz/4vO7RbPzDYyXN/XGPtxsm/NoH8PErAuv1S4zxaxYZ5WTYImhSajd9PPCOfVdV0dkgMGSZZjQg9Puu+/wQzLjv+iwkd/fXrkzNS10/1/rOVyx1x6+dr1affvS1GPefi/FwOd+KwP9ajC/+7+r+L7xceCL5fP2BrhPx648EzPgHSZHVpvXqyv0AAAAASUVORK5CYII=) no-repeat
}

.daijinquan-2 {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAAkFBMVEUAAAD/pyD/pyD/pyD/pyD/pyD/pyD/pyD/pyD/pyD/pyD/pyD/pyD/pyD/pyD/pyD/pyD/pyD/pyD/pyD/pyD/pyD/pyD/pyD/pyD/pyD/pyD/pyD/pyD/pyD/pyD/pyD/pyD/pyD/pyD/pyD/pyD/pyD/pyD/pyD/pyD/pyD/pyD/pyD/pyD/pyD/pyD/pyBrvNNzAAAAL3RSTlMAC8EPy+H7R/LqVSuUdxbGCPaBaTztuh9u3NedBadZMOVcT5AlEtGuhrKYiUE4ZJ5QA6sAAARQSURBVFjDzZkJc6owEICJFhCDHHJqUazi1Wr5///u7QZ8UYJJpPM6j5lOlYSPzZ7Jaiguz87ddOlMaitZHFI3tz1j+EW2u0MtXIfdlgzC2atJ/eSarOyXhcvN5tnQdyObegRuedSOXD9s7pv5K2IGM4c9tTzFgTAWn5Zs0JkFurw1ky7Zlc8mlLuESbnWwmUpmxwRqUoi9tI0U/M+0BROVKjmFZGD5vlQae8dX+yOdZYydnHuu1STno+rjXWVHeO6fU+ivgVMOO713WF/hAcWTxVJNzA8e81hZ/DIhvaPVcCz1q+GwNoCYtWrP1hvaA8I0RBW3aPHwgf57EFBDzL6oq3RXz6UzpdlpMd10XvEm2p7BG4IsvQQZ6IwGcTHWcEjoxqvUc/QCmLm0XlS8Oe9Fg8XJ46BQdMH28PEWI9Xf/XGDAys7yabEL86vOQNEkdlUFGPLiyR3CvVGWvw3rzAxMjosczYuTMqgS+RDg9eGjeFJhWmRCD/7TU5iFto8eCiqdWryAJkz9vPC/ioxZvOWYweOi7LxWpDB4QNdHheWM/bIHBK40I6bg91xr555U5vvVOLEQmmuVCwzK6uV+wBUDPV4XHipbHMsVMLIVzwHVuov3o8TqTnsCf2oV5v4d8n2EyTx4nG/iBa8lTXn42NbTVPIH6Dg1+LLXmMvwU4AeRVos/jlnFw7MEyAejBQ6fx1bysFIiXiZB8fFgsxrGr4pULfKkdPxKrM45/PmaIGab+SCXfHtQytsNJh7jtAiMUOAUxlfp7A98PuXsB0aLGmG1vp/wRVN8InYdKeddzTk/NJjPjepwa4zch7VB8pwOWkfFYBQpbXslt2vBG5KG0Q5AbYCsiXS9+bHnxJCUSnkEg+Ay4LddfFR2ZgyQlJteVhGcwmMWBIo9vNpAIPIfKeAyYwJLVPHML82Q8vmQTjCLlEYfp7xvvrkWeYBRwJtqf728eFk/QHq0eZTzmNoJjr1oetay/xIbnJPBHJDzm2N3Qq5iH4HrntcWj4Ij6KxNrKuOx0Osmh2lzlqs6RJKiPUo5jyWHbvoifs2Qly6xktuDpy+WYEWiI6xazSswwYolgEyLK9TJb4MT1TxeAvqLVI7a5UQZTyxSYhltM8yRcqKax8uoWOiZlyCSW0aHR7HQP9mKEJ+lwA3hRAWPb0X6N0vkYpQObu0ZMfQkPHGzZJj9dWp+O7vO5f7Mw8TkNl0U4owvQFhnVK8Or7jbZZKkV8S0iZlYyeNbYummHS2zwUwRKHh80646VpDSoDhPyePHCvXBBxWpwbtiOtc6mr2rePxopnd4HKl4/PCod7wlIzmPH291D+Ak9XPRSdUHcCP4YYvg3zcxft5mES9qDmsEmfTZaLYc0qpaZpIJQ5ppe3kn5dV2n6tqnG6TVxqSyfT3W6a8qeten+YWlzd1f7vtLDbGR21jvNhX2BgfyRvjw1v3/8OPC52fP+qJs9T5+eMP/iLf4jYTed0AAAAASUVORK5CYII=) no-repeat
}

.ktv-2 {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAAeFBMVEUAAABwZ+JwZ+JwZ+JwZ+JwZ+JwZ+JwZ+JwZ+JwZ+JwZ+JwZ+JwZ+JwZ+JwZ+JwZ+JwZ+JwZ+JwZ+JwZ+JwZ+JwZ+JwZ+JwZ+JwZ+JwZ+JwZ+JwZ+JwZ+JwZ+JwZ+JwZ+JwZ+JwZ+JwZ+JwZ+JwZ+JwZ+JwZ+JwZ+JDpLW0AAAAJ3RSTlMACpLh+Q5qBvHsSNzIWtd2F5otsUEo9TsgRr0TxU/niKhu0rihfGHwVIimAAAD6klEQVRYw5yV2ZqCMAyF0wplX1UQxN35+v5vOEldkSXAf8UMcDxJTgow7Csl6/joassLrrVU1R6WIw7yqjtc5UHAEvxzoQcozv5sc5eVNliNVH6eoieR5r6SjaUNq4uYI5d4mohPpQM/OOUp1oSXTJaMjDtP5jBALj3jMoIp7G7mYSVGa1DmR2+7CfZccqccYHAUuXQ5kyLTiLRhArbUyH20krShakuYSEl1N+lI+wJ8YD1jF/ZrfCEYbOT2iLcTmEWCrxy3A3pYgBXBTCILm9SrmGK9hQ+zqQqsOu2JQYj+/EVLjx7DbswoLxEsIsJXs75//sFCkq6ZnYt5AZ5NFlhWkG2gzRl3ph2eG46Kz9+21k/q9lztAPf6t+CSt+fqN27bZNkuWmACJe+P9D6KbY8SSxTfTfVs4AhJZ70RYrOmq7BdtPe1ZAL/UHyA9ScIf3RdtW4rNPWyeEG7DnBk+isI6070HGzbBR4EdMlCJ9HmPR86ZeDX4goMvjHLQp87+90y+iBCC2qc/0qlBB73W1B0BWnQZ3Ov0DoHnpgpGXKtC6r0oHUME7j/DuXe85OHx/RO3BeOSvVHY0OcHpMPqJfjyNDmgk2Upg0pdpeZscK3bWb1CAeDkFIlIXMmWJoUO4dDl4aKTbjQGGNPj+FLL9z2tob2OWP2mL5db0Wo8IAt4qwa7E0G9fhMHLz/UWTA9tUUnpxJHxbSTFLMKdJHnMz454dyak9RpMQcaUWHHzto4v5Q5hUFTh/wseESCpNlh1bDIJljk8SsYcHdf3NWu5MwDEX7ATZkobqJ0GXZ0MXw/o+o7VEMaQ/XVSXym9z09p7e8zGbTqWVayHgAQeh4Ia2rBPq5kHpR2AZYJFatnQoqYwNagCcG2BZHMrMYHNMp+pU8KB26AARNhTYp2SZDqqbUr0W45CBzZ7eLjmmEQshJzH+9MhyeErO5hT1aWy80ANbDuX1tfbpwakXjKN4yWR9lRcs3ArmQn0DWbCggAJlPutXPDw2DkIBJZLSsdA2Li7BZuQkRWi0OW/6USxzSaOE6Lcf9awwjpzomRTZYFsJ48ilCBVLEX7TUaBXJpbifrjLC8qSlsm5CN/GZfe7W1bPQWUySWy+Y1tyScxFe/cljGjrRLQTW2HOwsjTUXNbAePDCJ5UJMaHWjNnPgu2InpgzUTz2Bm/2s8kDhLMI5q+/5G9/WsDjoigr6nXr6IaICFGXxtikNimMmbhwU1dEGSppgi+Jqry4cofasK0qwdwZmncZyRSHJcFkuMNIlMe6h7o3ZFQ90axMy48C8bdEC6D8fXvRvf/4eMCfg/4/LF/P9bk4+cPiQ/eAK3ZpsNxuICbAAAAAElFTkSuQmCC) no-repeat
}

.xiaochi-2 {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAAhFBMVEUAAAD9Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl7gXFZBAAAAK3RSTlMA3QYK4pVa+mrqxvdJ8z0Q13eeDJBHH+66FTYq5sxTLiVuF6iGidGwY0ysyOGF7QAAA8FJREFUWMPNWeuWojAMbsv9og6KooDg3dG+//ttUnd2nTZFZDlz9vtloQ25J43sBTbL0Ft/RBMZFPyy9sLlhg2Hc8sv0sAlvzmDyC2PE2nB5Lh8l9piz6VCEnthWh0W8OhQpaEXJ1KB7xfvyJpFEvFxmgr9nZiePiQiynpL7rt4oMhb24Y2L3CH6/cit1orkUKnU4ZQqWS96sHeBMUJxat9IozQPK+YdOYS4M36iDLzcO+8U5JNjKqZsp6YorLjTYf6UDHXN2Jhc0V1WxVZ1fA6Y28hgyN1Rb/bgQCBz96EH4CSdiT7IG+SDgjRBKQm1CRi4C8dFPTAY2y6GfqLzwbBR++hHmZsIDKTmdUE/IUNxhFi5rvzrMFUs+EEFxziWhd4yv4B0+9COy7EL7nvHNeBfEJQx2fyyx6I6DwrNSIE/uSSBP8kMkX0ZNQFLEIzsLfSiq0ZviEw9VUV9vBRYUgbyQ5EhtwCxNmzB/An4f6IwrutxJM1q5tXPJS5JFjkv8/COUdPFKqEJqcZoa1TokqpnhAcECn98spc51/pj1eWNMeVHnUt5VIeFWVgptXtq4raypqIVVnUbd0C2yhpA/VXP8FR3pJZUaLUXH8K9bp5uOSZ8Ht5Yh044Y6p+dB70NXT4Bnt2xnas0JSfKCsG3AB3cax1EKRDDUZ66YERWxYar5gheyFgpmMpCwjmJE9QbCdYeoPxyIYYilYmzZhad2HnGuegzSLRq7YSKjQzBCBh7EIHqSMGATewtqxxUkRfwpz0c5r6c4NyRYQfGgA2/d+Z9j4oC/2mNuovgWJwTvTm7alKLd/87NjWQQpQTAyRC6DPwf2sym9iFv1RU6IzE2j+IlEJI190WGUC+E2u7kr6/nu1YJ2G+XYIwEdmwi94cDQU8lhWOjVKZUcyPRl0qMpUumLTLCyJ8gEi36TjkMQSwBdpLDKixcdIbo6UaToMor317KbYIkJkSijdKG/S7OZMNsEeScKPd2K+BhebRe9FmPQp1sRdJzI+W4uFwVqO+ipDcLSLDFuBEuj0kteOuQVuMxV1mmMMHHtDedZvsSZaDjtLbHwXtHzBNkS25v2hneR4w3VtHdfK4R/5wFFLOB3XxBu5DojXnxK9KKxr2ajXx7Hvt6OfQGnRwTLwSMCxzLEWI41xBh/zIKo3GGDILey3pAwVV/f8MfZFceWq44NQ4ZpGgNUlsn7jftyLevQaIp3BpJF8zMjU3qo65XW3OJpQ90fHTvTg3GHidmu1Qbjo47u/4c/F7S/P+Qk+ujz98cvn7PziGfLoBgAAAAASUVORK5CYII=) no-repeat
}

.dangao-2 {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAAe1BMVEUAAAD9Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl4hhz2jAAAAKHRSTlMASOcK3mrs4pR3+Qb08dfGLBUMmxgRJbhuWR+oj086va2HPdGwXFuEnnGndgAAAy9JREFUWMOs1OmWojAQBeAKmxD2RcAWd+2+7/+Ek8QzPW5UhPH7pR4tU7cqkEUp/HCXOQlk4J12oS9Kms/dDCc8OQ0bl+YQ6wQjkrWgiaregyFz1WbRVOqjplDt5xKG11dTeo0CaNnhGNOD+HjIoAXR252vFuYHQ0EjiiGAsljRO74605Lvsj34JpLui6wuqT6dH5NF7OtTphdbejWUcElvWIZQaraTMtfRbOlNWx12XjLx6WDOE+5CedZxjwZZOAAimiQC4IysQ6sakCuaaCWBRfvy+B6QCJpMJID3IqY4B6SgGYQE8uc10/vyTbN86+152md+HvbJXB4WJgXONNsaSO+XpwO8Jc1WeUB3N3sAR/oPWwA3G+cugNASkyXgEFi4t6EGfMMC4FdqGdwMtVJvfGKoFswBOD4QVHTVA15MnB5KT5zY+/cN85KVQ8nJdkTvN5/AJZaEIonlBoD4u5UD8RwoDvEGYG0qJ0Bhv1vWWKgAEt3pBsjIJtTX3yYDNtfHzIGsfn7I6gDU17qCPuJoei0BOT7jdp/iTrpvx1dRAiUJbsHaFE/SlltXQRH3XNjjhT03uohq7h6neCHhLktNO24mULqGfjUdFO6ZtNNDLtiCDd1o2IKFHrMDNGxByycPf+fomKpPFax0wADoUwVNMfnpgn+aM5sVhGEgCGv9aUEtXvQgtBS89P2fULqXD1wma9ulmFtoMyTZv9nJ2Y4cBUkYLhz5iFF0kMThglHewm2GsTgG5TbSsW9lwKtybEIvCJIgXAg9Sw5xkAThQnKQ6YtF4ptKX5Zg9aJ9VXHFNtOAlmCtzO81YEX5ZAagLwEUKQ3I1hQgRYoyKo9cg2QzCWhlVBR6t8gA/Tdf6KEiRUDbmgaEikCWVrsNZMnsfFoLCJ3zhNNsOoYDB4VwKkoMXBlSUGJI+zJASLtvK7BpDGd2920FjU+f0PjktmbpzWN2e5vdgGdLBId8ESNfZvHjXi8Tguq7lKraSaqa4Y+PSapqX4UflohpxQ1cmrlyXxMpjd08QbLbXjJF1G16eXcNou62srMWxg+7y+PphPFM6f4fHhe+nj/Ga9X+8vzxAdMMudeYhpgDAAAAAElFTkSuQmCC) no-repeat
}

.shenghuo-2 {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAAe1BMVEUAAABMpP5MpP5MpP5MpP5MpP5MpP5MpP5MpP5MpP5MpP5MpP5MpP5MpP5MpP5MpP5MpP5MpP5MpP5MpP5MpP5MpP5MpP5MpP5MpP5MpP5MpP5MpP5MpP5MpP5MpP5MpP5MpP5MpP5MpP5MpP5MpP5MpP5MpP5MpP5MpP6vZVBxAAAAKHRSTlMA+U/r4fCVakcJOfQMdwYffxHc1xjHuiwVSeZZJracwK+oj1xwhz3RT8F4EwAAA05JREFUWMPNmem2ojAMgAtIC7I4CogojLv2/Z9wEtRT7wUSFj1n8kel7WfSpmkaBCMbT8l14gTaclb3tVTeRowX3z7ddUPuJ9sfhfOOge6Q4OgNpYWX2WOslUlV5GkIj9K8UDKzHs9nl3CIrZGjUZLrLf7dFt+uSd3oRL0t383qAae8q0N+cmotd71wi6rurHzSBlX/abXgeWcXtVMx1y9WqKV75mbvrwaRS9FDlhL7/iUt2WRo7Vz0lDnanW2I6VtBh4NRj1fyAANWnRNZbqE5EoMkgiHbsoMHBlg7MVB2FkxSK3ED9gbeiC0agNUt8xhnoB/BI4igY9Z0M/SXsxglZ/SetoeRGClRU5mFC/4iRssR9sxP56lgqZbjgSEsaPVj7UHnm5ggcwC8eZwPHijJCLQO1nRgkWCi/z6pDmWwvQYF9n/ITei8LWoIPxTFe4Z9kqhAqdepcAF1Y5rHE2OYtsvz+wq+cjzL4ogK1HpuHVDWp3mWLeYuQ/Rh4ryXV55YnuCJJ62PNRmiRc7zeGIO0SrEMXD+srxeRDiv7YdLXjleP+IVt0e9xgXD60m8QaSFQA1jQprXlxjDgA06TUbz+hMzNDYCwxkeTzQRIsLQryieiTY8UeFRsAc1Wf3qaMPrWGCvBNyatTfAn7zVObo07MCU5BkNWWIKUUFAW8Nr9obXnENDjBpHC2w+AQ2Nf9rqh4gOeTZv2xqE9Wmg02Jy0Q9YtJo8w0VpEQ4IH+2Lcke3mQ40boOOTQ8qtvo1aQUN9NC5cOvRQOS9iDQQt14dHGigfhMaiMHBhC8KWKUw4xULxPBlAiwFBB4QCaAJsOYIoIDNL7rzCMBVuU4FmkPKHKNTgeYYDfGgnwg0B71JRSYCTSpikqUmMG0HpthGJEsYH1QrsEqbwKdDaiKdw4Rz1Ug4XU1K0HBCzDKplPhAAw+tKTGVtJekim7ZlrTT14ry4HbiDiV9ragvPvPJF58PX83WH788fvd6O/0C/ukSgf/9IgaWbcaVWajCzbhC0KzsvGcnY0pVyYLoMKaYRioQy6HlPslVGu1hBUn7eyVTvqgr551zJ01R99tlZ74wvpfKw8J4vFzknpJ7ojA+qXT/P7xc+PX6QwdO0uf1xz8e4bw8LGE6VAAAAABJRU5ErkJggg==) no-repeat
}

.gouwu-2 {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAAmVBMVEUAAAD/L2D/L2D/L2D/L2D/L2D/L2D/L2D/L2D/L2D/L2D/L2D/L2D/L2D/L2D/L2D/L2D/L2D/L2D/L2D/L2D/L2D/L2D/L2D/L2D/L2D/L2D/L2D/L2D/L2D/L2D/L2D/L2D/L2D/L2D/L2D/L2D/L2D/L2D/L2D/L2D/L2D/L2D/L2D/L2D/L2D/L2D/L2D/L2D/L2D/L2AddHyaAAAAMnRSTlMABfoM9phkLuRvXzjy4Nge66BNJwlCENTCvaeCPhjPemtHFJyQie3oy8Z0spRZVK0ztzs3ccMAAARlSURBVFjDpZiJkqJADIbDLYuKB4eoeOt4rk6//8NtAu7qQALIflVTNdqxTSd//ymEGjbr1TXpf3WVfugtkutqvYH2GKNdrErEu5EBbVhPTSVgTtcfJ+f2VIY+wWM6qYFvpQ4ef/L8lp5rfLLdcqCI/n6uFde0+b6viMOy8Za3TvaBqycFeNcDRXRu0AQ/yYJdo7ok2ZcmPtTyq4uBg5VWF6etqCzdXzVhwVAhViOxbSyKHQZVMemRGuhBQzySwjGVA8YUcI+gMdGUEhhLy84X6s6Fj3B1pb4cIT+ssjmCDxmZ2EM2R7+DTZvDx8y7KDKf6e8C88P9WuyIOS7KvUa96CNoxUhH9UABG9u1gpas8MN2oSFd+pLWbLH8PxuToLUE0JoADWjy4wJjAR/wHzywjG/X2kBF72u8oMYt9qjvlz8tUUlGhVfZlwNGXOyqGFTx8t+NxHC7wtAwNqcjmxXJpBtBzhk7oolntdQblhyHfTk//+1UJWipH1hVKXa0XOhYT008r0L0nWcY3k5XiHhqDTubX7V7RYuDLyqd87Q3KuYgqGj0PesP3u1xxTmU7vwzTF1VVGeM7kI6+I1eARIX3OH6ennFlxcxGP3qd24zMzGGZrr3NkTI8cXgWe4HOEdCMcbEHbS3wlMF5JmVfZuPJw+abmhUbqhhtE+imQiKiXXFoceSdCYknKUkVlvJ2OIlWFJPXDb/gZIZ8BfBxa5QmmteVTKScNdYPhKGw84yhbjlTIIZLcwlafdhQJ1hQL2rGDgOigTMkWIxAKfThq8HXU2OI6XO33yUIJDQBNmrHXDclXi3cCX749iKeexxZStuSEeOuLVvsVKu6BAGjgFAw0ulSvGTdYQrR6kpXxALsukooVvgkOdKKzEdbcQt6pQ+y4bus5R7QvfPZbMnkfLQc0IqVNeiGboVzvUNPLESyrSlSRryEyAUR2YugLXQyBAiXI348bmURrUwTQ092ypm9XauGMFLXDvzZkO3f0dzrcROsBTiJtzKXf72mh1kU8W50Gv2TZn3e1Ta3Jq90mKCWtOAx6fnUNZBD9lHLE44cc2GfVY0278nMEuXbEB1MuQHvEH5AnX/nXTBKERX1ehc7xcvzQ2KyZxUNaeSCAcvnWm9sgWHenWCIePwPe1tppt+ccejLm93LO3nm+/jX1swA+kz7lhB7S0dxu9FpKEbFjR08KE1/qGo5aiHjdOgJdoJOxIV7o1O/tcSC/s05zxpD63Y8945bfsIvhLMR0sY32TgrHjClj860qnbnPcYCQN3Qskb8AHGlPKLxAexCzmdA41x6DnmEgBUPsuaq8btMJknXu7nw9MDGvA4NfkBEcaxQoZ+7W0bUlw8hlqCmU4ONXQqizfMgmYBNGH8nZuyvRHUYOd+/j2GpoST3EiTs6cV2uadk9x5JyF8gjd9Gra5GM7sUTgPRzd7NlyYT8+eevApqXsSJ5SbQivSm9VXBfrWjXZrj/G4zbaXZJJcptbs9qi9mH8AaLnhsQ1O++kAAAAASUVORK5CYII=) no-repeat
}

.lvyou-2 {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAAilBMVEUAAAAz0Zgz0Zgz0Zgz0Zgz0Zgz0Zgz0Zgz0Zgz0Zgz0Zgz0Zgz0Zgz0Zgz0Zgz0Zgz0Zgz0Zgz0Zgz0Zgz0Zgz0Zgz0Zgz0Zgz0Zgz0Zgz0Zgz0Zgz0Zgz0Zgz0Zgz0Zgz0Zgz0Zgz0Zgz0Zgz0Zgz0Zgz0Zgz0Zgz0Zgz0Zgz0Zgz0Zgz0Zgz0ZjuwZk0AAAALXRSTlMACwbg+fRaauvXR9x2ED7vGMZKlJAqvZ4jp1EUuLCYbzDlh9E4HsmrYYlmgHwkVXy5AAAEgUlEQVRYw81ZCZOqMAwG5AaVe4EVXcXb5f//vZe0Lq82HIqzb15mHLG0aZJ+ORqVEfp0rThzbKPRl16dxZb7qUwnNUrqhlCdROokdm5hND1kFO7Lwm1mfK0erq0oDVQYCtLIWoc6H59t1FfY+TZb5ewWmvxOW+wc9tL2n2ZpMumWyVffhK9kyaQ0n2J3WLHJljqog8U2XR2eEA83ty1tbJ5m2aiGOTbtAzeO58+oMo9x7sfg1kGI2i6UJ2mBeodB/4TcgwnVC77wWcECL+97nW7hta+8RD4s2aY98gE/3VReJFMHjnmn+KCv4U5wUQO07jCTdgT53ElODzIe6VkjXkxlEpmInq7Bb2Ui+VSYwxLwokymE/jMoxeuAM/zN0KxB34tK9znH/v18VhtghGfeVRaBReKe/Ze3wNtMuxAMaioika1uxXWVpzfaGCZ24KTqfDDemBjFtnJQi0vP1nk5J/LQbUtEOpHxA2IKwIzOHImFzXVub678Wivgdk292cPHkXpnR8tvYx/n8nybhFnd9cB+6gPPiPR7BoNnIhoOO66RdMkYgZquig0mfDnorqkPRyTpikYZ4gWYn4rlh/nffrlhjLLQPs2mEVJyGwlMVDTEvKvaFyebtWKCOndKo8/XXH52ZTtALYv4QuQe6GwOhJ+LKLkbB8jiGr8kg5r1zRrfsYRwUAm67s76Y2OQDwxYe/Dpex/HoAOjEJQtpP44caHrDlHH7UtDEv+pQFqAwRNSLKLLuFGY/NPW2FsZUbmxXs8nxCV9XF/iS7UeGhX72HwxkKRHCF8hLElM6yJxkg3gINYMibUWXDvrONMmMZGtVo2nAqOijBV5gI6aQqKmiZD8BDos2gFo+qNG7PmJ6+hjsS0AqUIaRtPRqJtm7FKxlHXkKFKHFPKuogYWwGrqDTntGKf4VFMDyVndayMjrJFBUOhetIwW2W0ro3rd2IEwPqM677psJWiw4eQ89e9P23k0L5B6GxZxsyYo1CGNlEZKBLAvhF13v/9sWOxhao8o4eCmh2F2C5UGnGLSsVihqCHUlPYIJdEEUX8EUZdwuN9f9PBMQobDmzKUQhlBguBSFfBQUwqhwvApq5HCXO90x6JVFwS1/N7igY5y7h3EK6Gywe/M3xRFPFJNXVgGr5ogKV042ApGzqXBFiSAnp1bgx7STQmKYAmKUrqtxCpl9+SiDRJYRoduy61RC5aJI2SRE+hQMgaSPS0FKHFPFJ2zTUtv2Y0VNNSBIFj9xkmZ0nEWbT6O+x48sFiSZn1O8uJiacKy5iQp8FyDr3f07oFZPLNFVI9phSEbZVJSmK5VNxLt4I2U9OSeLRo15se0juLdnqtmM4wwWvF+MUn2nbz20YKtYP5e1ez9y+PBTh5Tj3Cf+t6+8sX8PdbBL/fxHi/zUIpnU1rBM3S3k4fOn71Ah7nFQaPw8CEKc20QQG0mJXjz7X7WK0Yj3Uay9cakuW/a5nSpm6875uwj0lT99+1nWljPLZcbIxr8/zLteKRxvj01v3/8OeC9PcHFF/OM39//AFOKPF7lpEC0wAAAABJRU5ErkJggg==) no-repeat
}

.xiyu-2 {
  background: url(data:image/png;base64,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) no-repeat
}

.jinri-2 {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAAh1BMVEUAAAD/zTT/zTT/zTT/zTT/zTT/zTT/zTT/zTT/zTT/zTT/zTT/zTT/zTT/zTT/zTT/zTT/zTT/zTT/zTT/zTT/zTT/zTT/zTT/zTT/zTT/zTT/zTT/zTT/zTT/zTT/zTT/zTT/zTT/zTT/zTT/zTT/zTT/zTT/zTT/zTT/zTT/zTT/zTT/zTSWkNHYAAAALHRSTlMAC+HpBUfs+ZUQ9cQVdwi6adySx2xZStfx0506MCyvXB6njlZPIheHgXE+KW30/zIAAAOvSURBVFjDtVnndqswDDaYnRAIZAeyClnV+z/flUJ629QLSPl+tOcYWdaWrTADxu4sSJY8At+brpNg5o5Zf1jVaQ0C1qfK6sXOPUagQHR0Owt3s5u9fh6ki/Js4dK5XKRB7jfr9q2LmJPYA8Lycp8I3+6XJRC8eNKW39x+bMgKFUFx8h5SzluxOyQP4lSrkpU+Dk0OZn77FUk3c0x0zoykXO1N1tsAIghZC4QB0W60lhznpO2WtcSW9M41oV5PkWDXIRfGO9wwrVWfP+nAmHVCTCp9KuRDfv6cdcTcR461VHzUN3J7pGiEWkvM5OQon9sr6VHGXPQ1xcue9cKeoke2GLOeiEVhDiuMF9YbR8yZ1yxM0FW69BjBSJva6NDkxfcoszY/8Ls+Z5Bg/uMAG/OXvcOQBaii9dOoPHyPYch/ONXyAFL839uGhBTA+xJxhuI63WJ5JiYGmu1rFV0kEpwSddX5ADgJiyTW8zgUdiL5vH5ydBZZzn2f59nC+eIHiVib0XBuE5Wy81xq6RZZ+8rhP7wr+Y4/DhN1Ajg+XBIBlFK1oMAI5fACjtF2k/JjBUBEIlTYf6WG8m7MCUBA4LBC3hGxX1dNSF5UnW0HBH+XbutzOd+sgLBTRcQFT2t8vFBQZEDYPNOe7InmUSfVHSstFmqUwFJFB2L1cloxpbUPRQ/G48bkzlydTbAqXhfPU1DnaU7KxkoVrgASa3yS1ldlhYjZRpXHDhcrO+FGIsr9ktKGROWTBfn3wGRJq9mSUPCUShfvVKbIpFtKCmlU7KyoWGgMRXVWFLMzGoNhsFoCJ9rAVW3BIiM+yYQvkViLaYXWfPwrvU+SDD6RSbfSPiaR0MywIRMZeqSyDKRyIY0nn1RuIFHZVjpFdTcp9E5Z68LmKL14aMNGH9hRKC97UMl7Fwa2JvU8kFbKvT71DMXBLwQ7cX1xMJUv+/DLkbmhfBkLrF2+yJfT2lzRMajAalvAo0VF349EJ+XmFsA2xibFL3fUcVLEU3OTat1Go1W7NvqXjb6kRt/mKuJ1uIoMc1li9p9c51IMsW9ppu9fODEEbgNciQe5tDfPiuw9hhk9KwZ4+Az2NGP1+4/HeoDn7aAPcDZ5c0Qw9BDj/THL8IMgwmFJFT5szy6kHrE8aAhG3YdpI60AkwwQWbtxX0NrGpxW3QaS1R+PTOsuQ91gq7RdJgx1Bxs7mwfjoyB1aTDuhHXppsEoEgbjw43uzWJWmezHhawyC2f++QPF4ss2P3/8A17wuAwDpw3kAAAAAElFTkSuQmCC) no-repeat
}

.gengduo-2 {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAAilBMVEUAAAAmyPAmyPAmyPAmyPAmyPAmyPAmyPAmyPAmyPAmyPAmyPAmyPAmyPAmyPAmyPAmyPAmyPAmyPAmyPAmyPAmyPAmyPAmyPAmyPAmyPAmyPAmyPAmyPAmyPAmyPAmyPAmyPAmyPAmyPAmyPAmyPAmyPAmyPAmyPAmyPAmyPAmyPAmyPAmyPAmyPBcv+SCAAAALXRSTlMACu/zahgnruv439V3lkgU4gbHP5EOtJ3btywfJL2oTzpZRv2HRHDEXFtYSl2HG5UhAAADhklEQVRYw81Z63qyMAxuocqxMAEPY/PEdO7E/d/el9hPUFKlgO5Z/ogBXpP0TdJG1iLxXshl4NqlZ/nBUop9zPoLX2dBSSTI1rwXXLSyyytir6LOxr376l0vkeI7H3FQjfJvIRNP6f133gUudJV3u3TSvDdJdyoObmgM+fWEL1hZzq5Inln4xNOXEdzL89ElwW/6II4heX5px/uw0B1BXCWuCxfd+GiL3hyeepNTZiBT+QYPz/lNGicYmg0zlA0GO4lvhG8BDzgdciF24IXF1UCO8QdD1klCdGmsv/cKeN6WdZStB4ivWvPBXztinaWwwetYQ4ME7It6JT3YmFCaIV8+WS/5RPYQPpP16LgyHw3CQH7MWG9ZQc5ckgfy1x9Qi6c+5PVFfYF827ABsoEsPGMcBwZKNkgksJGfB9WdXpLcscpKLKci7l4uPG8h99Rp92xROXwRl0mo4GrIsVIvT4olyTYBRvH62r8kplM2xEFtatcKO20mhl9bdbqsxSJ9jphtjamJvrqK4G6jSh7L+0hdj44tAS4S/JylnKczvEoagBi46MTKjFFAxFOICnBf1skU4nVzZbKyXB2RITK5BrD5bV6eJdNMk745RAY9XUP/ZQaAWM2rlUixUrOGQL9eK0ruTABxyzCtaIebCtaQnUqPBcTSBNA+B+Q6wPRodQx3uAlg0HTZJzUanIhZpAgwfFEUsSIWKsfbaRM1aVPoKkSIPyy0gLMTsWdGxEYRaPZSrcnw1FM5t2QBpbV5caDUDphbR6u9fCUnRULtU9F2mY3soojOuTVO9Xox9z07mBdMKxxjgwG/myCYd29Al7qs7ylUp3fZN10UqtMuijltqE5LG3NiU52W2HXqtfUUqtOmnnlxoDptcTAvX1SnK1/f5gWW6rQFtm4BwwGxBZAmNQQQmxRpo0MAsY3Wjb4fIG305lsRqtNuRRS/Xd7eU6hOu1ky385RHd3OddpwUh3ZcL532hJTHd0Sk037jZ5CddpNe32syNggyepjBcr2Lgefex/NHnt4ZD9Dj7c/jziA0xFB0QdvjyMCfmWIUfQdYjxgzPL4QRCSJ+gzqgpebjxw6D5MO9w0YJLhuC8zG/dlOO7L2iaN624DyfXvj0yRCWqoKzdXY/d/qLv9vbEzDXg1GD9IEeFgfBK/5pGQh2owPr3v6P4v/LmgJC7U3x9glot/fxRtefQP2/333RBw+5kAAAAASUVORK5CYII=) no-repeat
}

.liren-2 {
  background: url(data:image/png;base64,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) no-repeat
}

.yanchu-2 {
  background: url(http://newebapp0.nuomi.bdimg.com/static/img/8ef8b87a339619dbb6e73880fadeeb2d.png) no-repeat
}

.chuancai-2 {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAAb1BMVEUAAAD9Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl776TN0AAAAJHRSTlMAC+DmakjrlQf5Wncr9BXXOyDvxroR3KhwS5yPhlBF0bAYF2UNBJjfAAADB0lEQVRYw81Z25qiMAxOodCiFUHwwAiou33/Z9wEnc9hKpVgLzZXDMI/f5pzgDeS91LV23Rjs93hUivZ57BcRHO+WEcu50YsgkuOGzshm2PCJneK7u9mlZKNuQm8dTONVFV2vx+dBAdunVqSbVvo37/pot1aknQ9G3I1sNudDUyIOe8GlqtZcGU9PCyFVwc5/NO6nEFvR+pIDW9Ey5TUeEdSf1kUtYcZslf07Jf2unFF2hYwUwrSu8o9x3fAB66MWMiv+MKhnDRejD+vgSVrfCU2E/wQL1sBU1YZIpYv6aO+mwTY0m9Q6/yFfSvklywKeuRYubYmf1nBIlmR9zg3HXtwLOOSKXfoL7BYjhgzY8PU6M/75YACDVr/VrhgGSKORwYsxkoLDCHFohSj841uKFRR/DzUdO8h4opFGWeK9IdRBf4hPURccBcQJJL6pnhCutpD5AnuAdR4bKfH9fPSB0jXHkCiGD10QScSnwPSwSXfXnmGzwHhbO1xQMZsYUIAGsxWpGmH9RdCAALW6+7ukm0YwPYeHhiGSRjAAjMtQI55VYQB1Jhpc3KaCsIAQkXKrlHxUIAK45lSvwwFKKkU1EgzECAdX03OY0IBGnJpjMBbKMA/mMIAA0+EAhQYfEC/hAIcwLLQgGlolSOPUTTNFVyjXNBtQgGS23gdO6f+nenY3tAraLRjhp43OUh87chMDt70RS35iZe+Gl+CzWlQNMwE6ysBrSWrcUsAWaV9TXA3aMwrUr4yerRDS8Ero55CL+2TIKPQT7YiXUZOqAHYrQg5TuramfA2xJzfLEHkBksSUxh3dMlp56Ybztg+5z5+w0lkpQvYjW81cdzMa4ndpp3ezv4+LhlNu3es0J+MFfzBh/R3Bp/Qo1nw4TH8eBt+AHdXBP0SvP65InCXGH2oJUb4NQuJiZYtgiIzuara0qqK4Y/7K5Wd0vPAkmWal4BW3HWf0uCXjreQ7EKvTDlLXVVMnp1iLHX5a2f+YjyhxbjelyZhLMa5q/v/4ePC+PMH0kq3cz5//AOGHZoeSwuHIwAAAABJRU5ErkJggg==) no-repeat
}

</style>
