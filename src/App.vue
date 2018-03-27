<template>
  <div id="timeScroll" class="timeScroll"></div>
</template>

<script>
import {TimeScroll} from '../static/SJZ/js/timeScroll.js'
export default {
  name: 'App',
  data(){
    return{

    }
  },
  methods : {
    createSXT(){
        var data_SJZSJ = {
            "2012年": [{
                "title": "2012-06-27 18:13:10\n新城车站西马路27号\n021501020268\n京华宾馆有限责任公司\n",
                "time": "2012-06-27 18:13:10",
                "type": "Car",
                "PZID": "b2ae6ba3afba402f86a1d7a80732de91",
                "SJZD": "入住时间",
                "SFJDDG": false
            }],
            "2011年": [{
                "title": "2011-10-13 20:12:00\n新建大街中段\n011505021070\n华腾宾馆\n",
                "time": "2011-10-13 20:12:00",
                "type": "Case",
                "PZID": "b2ae6ba3afba402f86a1d7a80732de91",
                "SJZD": "入住时间",
                "SFJDDG": false
            }, {
                "title": "2011-10-09 08:45:00\n建设南街\n011525270041\n金凯瑞宾馆\n",
                "time": "2011-10-09 08:45:00",
                "type": "Hotel",
                "PZID": "b2ae6ba3afba402f86a1d7a80732de91",
                "SJZD": "入住时间",
                "SFJDDG": false
            }, {
                "title": "2011-09-01 19:40:07\n友谊路中段\n021523020088\n霍林河金洋宾馆(原霍林河市金祥宾馆)\n",
                "time": "2011-09-01 19:40:07",
                "type": "HC",
                "PZID": "b2ae6ba3afba402f86a1d7a80732de91",
                "SJZD": "入住时间",
                "SFJDDG": false
            }, {
                "title": "2011-08-30 15:31:00\n建国路人民公园东侧\n011505020351\n花园宾馆(施介)\n",
                "time": "2011-08-30 15:31:00",
                "type": "FQ",
                "PZID": "b2ae6ba3afba402f86a1d7a80732de91",
                "SJZD": "入住时间",
                "SFJDDG": false
            }, {
                "title": "2011-08-29 18:18:52\n友谊路中段\n021523020088\n霍林河金洋宾馆(原霍林河市金祥宾馆)\n",
                "time": "2011-08-29 18:18:52",
                "type": "FW",
                "PZID": "b2ae6ba3afba402f86a1d7a80732de91",
                "SJZD": "入住时间",
                "SFJDDG": false
            }, {
                "title": "2011-08-27 15:40:00\n民族幼儿园西侧\n011525260143\n碧水云天宾馆\n",
                "time": "2011-08-27 15:40:00",
                "type": "GXT",
                "PZID": "b2ae6ba3afba402f86a1d7a80732de91",
                "SJZD": "入住时间",
                "SFJDDG": false
            }, {
                "title": "2011-07-21 19:00:00\n民族幼儿园西侧\n011525260143\n碧水云天宾馆\n",
                "time": "2011-07-21 19:00:00",
                "type": "Flat",
                "PZID": "b2ae6ba3afba402f86a1d7a80732de91",
                "SJZD": "入住时间",
                "SFJDDG": false
            }, {
                "title": "2011-07-20 16:56:50\n平庄宝山路中段\n021504030001\n赤峰市元宝山区蓝天宾馆\n",
                "time": "2011-07-20 16:56:50",
                "type": "house",
                "PZID": "b2ae6ba3afba402f86a1d7a80732de91",
                "SJZD": "入住时间",
                "SFJDDG": false
            }, {
                "title": "2011-07-15 21:19:35\n金太广场\n021501020651\n3号楼4单元303\n",
                "time": "2011-07-15 21:19:35",
                "type": "Hotel",
                "PZID": "b2ae6ba3afba402f86a1d7a80732de91",
                "SJZD": "入住时间",
                "SFJDDG": false
            }, {
                "title": "2011-07-14 16:44:21\n车站西街路东口大庆路东口路南\n021501030353\n回民区大庆路裕新宾馆\n",
                "time": "2011-07-14 16:44:21",
                "type": "Hotel",
                "PZID": "b2ae6ba3afba402f86a1d7a80732de91",
                "SJZD": "入住时间",
                "SFJDDG": false
            }, {
                "title": "2011-07-13 17:27:00\n建设南街\n011525270041\n金凯瑞宾馆\n",
                "time": "2011-07-13 17:27:00",
                "type": "Hotel",
                "PZID": "b2ae6ba3afba402f86a1d7a80732de91",
                "SJZD": "入住时间",
                "SFJDDG": false
            }, {
                "title": "2011-07-12 12:57:19\n021501020287\n哈鲁招待所（圣金元宾馆）\n",
                "time": "2011-07-12 12:57:19",
                "type": "Hotel",
                "PZID": "b2ae6ba3afba402f86a1d7a80732de91",
                "SJZD": "入住时间",
                "SFJDDG": false
            }, {
                "title": "2011-07-10 19:12:00\n新汽车站2号楼\n011525310089\n如春宾馆\n",
                "time": "2011-07-10 19:12:00",
                "type": "Hotel",
                "PZID": "b2ae6ba3afba402f86a1d7a80732de91",
                "SJZD": "入住时间",
                "SFJDDG": false
            }, {
                "title": "2011-07-09 19:59:06\n新城金太广场3-4-301-302-303-602\n021501020214\n川妹旅店\n",
                "time": "2011-07-09 19:59:06",
                "type": "Hotel",
                "PZID": "b2ae6ba3afba402f86a1d7a80732de91",
                "SJZD": "入住时间",
                "SFJDDG": false
            }, {
                "title": "2011-07-09 10:40:00\n新汽车站东侧路东\n011525310087\n皇朝商务宾馆\n",
                "time": "2011-07-09 10:40:00",
                "type": "Hotel",
                "PZID": "b2ae6ba3afba402f86a1d7a80732de91",
                "SJZD": "入住时间",
                "SFJDDG": false
            }, {
                "title": "2011-07-08 14:08:00\n建设南街\n011525270041\n金凯瑞宾馆\n",
                "time": "2011-07-08 14:08:00",
                "type": "Hotel",
                "PZID": "b2ae6ba3afba402f86a1d7a80732de91",
                "SJZD": "入住时间",
                "SFJDDG": false
            }, {
                "title": "2011-06-30 19:16:00\n建国路人民公园东侧\n011505020351\n花园宾馆(施介)\n",
                "time": "2011-06-30 19:16:00",
                "type": "Hotel",
                "PZID": "b2ae6ba3afba402f86a1d7a80732de91",
                "SJZD": "入住时间",
                "SFJDDG": false
            }, {
                "title": "2011-06-28 15:49:00\n建设南街\n011525270041\n金凯瑞宾馆\n",
                "time": "2011-06-28 15:49:00",
                "type": "Hotel",
                "PZID": "b2ae6ba3afba402f86a1d7a80732de91",
                "SJZD": "入住时间",
                "SFJDDG": false
            }, {
                "title": "2011-06-13 12:43:00\n建设南街\n011525270041\n金凯瑞宾馆\n",
                "time": "2011-06-13 12:43:00",
                "type": "Hotel",
                "PZID": "b2ae6ba3afba402f86a1d7a80732de91",
                "SJZD": "入住时间",
                "SFJDDG": false
            }, {
                "title": "2011-06-11 14:47:00\n民族幼儿园西侧\n011525260143\n碧水云天宾馆\n",
                "time": "2011-06-11 14:47:00",
                "type": "Hotel",
                "PZID": "b2ae6ba3afba402f86a1d7a80732de91",
                "SJZD": "入住时间",
                "SFJDDG": false
            }, {
                "title": "2011-06-04 19:08:00\n建设南街\n011525270041\n金凯瑞宾馆\n",
                "time": "2011-06-04 19:08:00",
                "type": "Hotel",
                "PZID": "b2ae6ba3afba402f86a1d7a80732de91",
                "SJZD": "入住时间",
                "SFJDDG": false
            }, {
                "title": "2011-05-31 21:54:00\n建设南街\n011525270041\n金凯瑞宾馆\n",
                "time": "2011-05-31 21:54:00",
                "type": "Hotel",
                "PZID": "b2ae6ba3afba402f86a1d7a80732de91",
                "SJZD": "入住时间",
                "SFJDDG": false
            }, {
                "title": "2011-05-11 22:30:00\n建国路人民公园东侧\n011505020351\n花园宾馆(施介)\n",
                "time": "2011-05-11 22:30:00",
                "type": "Hotel",
                "PZID": "b2ae6ba3afba402f86a1d7a80732de91",
                "SJZD": "入住时间",
                "SFJDDG": false
            }, {
                "title": "2011-04-28 14:27:00\n民族幼儿园西侧\n011525260143\n碧水云天宾馆\n",
                "time": "2011-04-28 14:27:00",
                "type": "Hotel",
                "PZID": "b2ae6ba3afba402f86a1d7a80732de91",
                "SJZD": "入住时间",
                "SFJDDG": false
            }, {
                "title": "2011-04-24 17:51:49\n霍林河友谊金街东段\n021523020558\n东郡便捷旅馆\n",
                "time": "2011-04-24 17:51:49",
                "type": "Hotel",
                "PZID": "b2ae6ba3afba402f86a1d7a80732de91",
                "SJZD": "入住时间",
                "SFJDDG": false
            }, {
                "title": "2011-04-20 17:36:00\n赤峰克旗应昌路蓝天宾馆对面\n011504250005\n鹰昌宾馆\n",
                "time": "2011-04-20 17:36:00",
                "type": "Hotel",
                "PZID": "b2ae6ba3afba402f86a1d7a80732de91",
                "SJZD": "入住时间",
                "SFJDDG": false
            }, {
                "title": "2011-04-19 18:38:00\n查干沐沦街中段巴林路东\n011504231006\n社会保险宾馆\n",
                "time": "2011-04-19 18:38:00",
                "type": "Hotel",
                "PZID": "b2ae6ba3afba402f86a1d7a80732de91",
                "SJZD": "入住时间",
                "SFJDDG": false
            }, {
                "title": "2011-04-16 11:21:00\n民族幼儿园西侧\n011525260143\n碧水云天宾馆\n",
                "time": "2011-04-16 11:21:00",
                "type": "Hotel",
                "PZID": "b2ae6ba3afba402f86a1d7a80732de91",
                "SJZD": "入住时间",
                "SFJDDG": false
            }, {
                "title": "2011-04-12 18:14:47\n锡盟东乌旗乌镇库伦南路51号\n021525250012\n锡盟东乌旗杰达招待所\n",
                "time": "2011-04-12 18:14:47",
                "type": "Hotel",
                "PZID": "b2ae6ba3afba402f86a1d7a80732de91",
                "SJZD": "入住时间",
                "SFJDDG": false
            }, {
                "title": "2011-04-10 21:32:00\n民族幼儿园西侧\n011525260143\n碧水云天宾馆\n",
                "time": "2011-04-10 21:32:00",
                "type": "Hotel",
                "PZID": "b2ae6ba3afba402f86a1d7a80732de91",
                "SJZD": "入住时间",
                "SFJDDG": false
            }, {
                "title": "2011-04-09 19:40:00\n民族幼儿园西侧\n011525260143\n碧水云天宾馆\n",
                "time": "2011-04-09 19:40:00",
                "type": "Hotel",
                "PZID": "b2ae6ba3afba402f86a1d7a80732de91",
                "SJZD": "入住时间",
                "SFJDDG": false
            }, {
                "title": "2011-03-31 15:05:00\n建国路人民公园东侧\n011505020351\n花园宾馆(施介)\n",
                "time": "2011-03-31 15:05:00",
                "type": "Hotel",
                "PZID": "b2ae6ba3afba402f86a1d7a80732de91",
                "SJZD": "入住时间",
                "SFJDDG": false
            }, {
                "title": "2011-03-27 19:19:28\n021501020287\n哈鲁招待所（圣金元宾馆）\n",
                "time": "2011-03-27 19:19:28",
                "type": "Hotel",
                "PZID": "b2ae6ba3afba402f86a1d7a80732de91",
                "SJZD": "入住时间",
                "SFJDDG": false
            }, {
                "title": "2011-01-26 21:02:01\n松山区新长途汽车站\n021504090139\n华洋旅社\n",
                "time": "2011-01-26 21:02:01",
                "type": "Hotel",
                "PZID": "b2ae6ba3afba402f86a1d7a80732de91",
                "SJZD": "入住时间",
                "SFJDDG": false
            }, {
                "title": "2011-01-21 20:08:23\n汽车站\n021523020106\n霍林河双龙旅店\n",
                "time": "2011-01-21 20:08:23",
                "type": "Hotel",
                "PZID": "b2ae6ba3afba402f86a1d7a80732de91",
                "SJZD": "入住时间",
                "SFJDDG": false
            }, {
                "title": "2011-01-20 00:00:00\n松山区新长途汽车站\n021504090139\n华洋旅社\n",
                "time": "2011-01-20 00:00:00",
                "type": "Hotel",
                "PZID": "b2ae6ba3afba402f86a1d7a80732de91",
                "SJZD": "入住时间",
                "SFJDDG": false
            }, {
                "title": "2011-01-18 14:58:29\n二连浩特市\n021525010094\n二连浩特市华夏时尚宾馆\n",
                "time": "2011-01-18 14:58:29",
                "type": "Hotel",
                "PZID": "b2ae6ba3afba402f86a1d7a80732de91",
                "SJZD": "入住时间",
                "SFJDDG": false
            }]
        };
        var arg ={
            data : data_SJZSJ,
            clickEvt : function (msg) {
                console.log(msg);
            }
        }
        var timescroll = new TimeScroll(arg);
    }
  },
  created(){},
  mounted(){
    this.createSXT();
  }
}
</script>

<style>
@import '../static/SJZ/css/timeScroll.css';
#timeScroll{width: 1000px;}
</style>
