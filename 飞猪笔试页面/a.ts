import 'vue@3/dist/vue.global.prod.js';

interface ITags {
  /** 标签图片 */
  icon?: string;
  /** 标签文案 */
  text?: string;
  /** 标签背景色 */
  bgColor?: string;
  /** 标签字体颜色 */
  textColor?: string;
}
  
interface ICardData {
  /** 商品名 */
  title: string;
  /** 商品描述 */
  des?: string;
  /** 商品图片 */
  img: string;
  /** 商品类型 */
  type?: string;
  /** 营销标签列表 */
  tags?: string | ITags[];
  /** 价格 */
  price: string;
  /** 原价 */
  originalPrice: string;
}
  
interface ICardList {
  /** tab名称 */
  tabName: string;
  /** tab下的卡片列表数据 */
  data?: ICardData[]
}

const cardListData: ICardList[] = [
  {
    tabName: '爆款清单',
    data: [{
      title: '丽江爱必侬酒店2晚',
      des: '入住雪山景酒店',
      img: 'https://gw.alicdn.com/imgextra/O1CN01eNQPHX1n6pPImSWNZ_!!6000000005041-0-yinhe.jpg',
      type: '丽江·酒店',
      price: '784',
      tags: 'https://img.alicdn.com/imgextra/i3/O1CN012KFvkF1Zm8Vm7pc5b_!!6000000003236-2-tps-399-90.png'
    }, {
      title: '温德姆全国39家2晚',
      des: '畅行无忧 随心住',
      img: 'https://gw.alicdn.com/imgextra/O1CN01WoAKNA1lUz46DsVma_!!6000000004823-0-yinhe.jpg',
      type: '多地通用·酒店',
      price: '584',
      originalPrice: '599',
      tags: [{
        icon: 'https://img.alicdn.com/imgextra/i3/O1CN012KFvkF1Zm8Vm7pc5b_!!6000000003236-2-tps-399-90.png'
      }, {
        text: '不约可退',
        bgColor: '#FFEEEE',
        textColor: '#FF401A'
      }]
    }, {
      title: '西双版纳万达颐华2-3晚',
      des: '沉浸式体验傣族风情度假,开心度假',
      img: 'https://gw.alicdn.com/imgextra/O1CN01OEPnEL1gVNKGnc2ZG_!!6000000004147-0-yinhe.jpg',
      price: '1484',
      originalPrice: '1499',
      tags: [{
        text: '不约可退',
        bgColor: '#FFEEEE',
        textColor: '#FF401A'
      }, {
        text: '多店通用',
        bgColor: '#FFEEEE',
        textColor: '#FF401A'
      }]
    }, {
      title: '环球影城大酒店小黄人主题房1晚房券',
      img: 'https://gw.alicdn.com/imgextra/O1CN01zdguST22GBjvVSGy8_!!6000000007092-0-yinhe.jpg',
      type: '北京·酒店',
      price: '1873',
      originalPrice: '1888',
      tags: 'https://img.alicdn.com/imgextra/i3/O1CN012KFvkF1Zm8Vm7pc5b_!!6000000003236-2-tps-399-90.png'
    }]
  },
  {
    tabName: '精选好货',
    data: [{
      title: '西双版纳万达颐华2-3晚套餐',
      des: '沉浸式体验傣族风情度假',
      img: 'https://gw.alicdn.com/imgextra/O1CN01OEPnEL1gVNKGnc2ZG_!!6000000004147-0-yinhe.jpg',
      price: '1484',
      originalPrice: '1499',
      tags: [{
        text: '不约可退',
        bgColor: '#FFEEEE',
        textColor: '#FF401A'
      }, {
        text: '多店通用',
        bgColor: '#FFEEEE',
        textColor: '#FF401A'
      }]
    }, {
      title: '丽江爱必侬酒店2晚亲子套餐',
      des: '入住雪山景酒店',
      img: 'https://gw.alicdn.com/imgextra/O1CN01eNQPHX1n6pPImSWNZ_!!6000000005041-0-yinhe.jpg',
      type: '丽江·酒店',
      price: '784',
      tags: 'https://img.alicdn.com/imgextra/i3/O1CN012KFvkF1Zm8Vm7pc5b_!!6000000003236-2-tps-399-90.png'
    }, {
      title: '温德姆全国39家2晚可拆分套餐',
      des: '畅行无忧 随心住',
      img: 'https://gw.alicdn.com/imgextra/O1CN01WoAKNA1lUz46DsVma_!!6000000004823-0-yinhe.jpg',
      type: '多地通用·酒店',
      price: '584',
      originalPrice: '599',
      tags: [{
        icon: 'https://img.alicdn.com/imgextra/i3/O1CN012KFvkF1Zm8Vm7pc5b_!!6000000003236-2-tps-399-90.png'
      }, {
        text: '不约可退',
        bgColor: '#FFEEEE',
        textColor: '#FF401A'
      }]
    }, {
      title: '环球影城大酒店',
      img: 'https://gw.alicdn.com/imgextra/O1CN01zdguST22GBjvVSGy8_!!6000000007092-0-yinhe.jpg',
      type: '北京·酒店',
      price: '1873',
      originalPrice: '1888'
    }]
  }
];

const CardList = {
  components: {  },
  data() {
    return {
      cardListData,
    };
  },
  template: `
      <div className="tab-container">
         Tab区域
      </div>
      <div className="card-container">
         卡片区域
      </div>
`,
};

Vue.createApp(CardList).mount('#app');

