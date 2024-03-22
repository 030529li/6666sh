/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wxba5a647a529a7c2e',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '877a4fd2da58af8ff608b10eb839ae4a',

  PROVINCE: '山西',
  CITY: '晋中',

  USERS: [
    {
      // 想要发送的人的名字
      name: '马欣语',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oOIN_6ALpwW3PdxIaJcQa3iWpV4g',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: '今天是{{date.DATA}}     地区：{{region.DATA}}    天气：{{weather.DATA}}     最低气温：{{min_temp.DATA}}   最高气温：{{max_temp.DATA}} 当前气温：{{temp.DATA}} 日出时间：{{sunrise.DATA}}   日落时间：{{sunset.DATA}}     {{birthday1.DATA}}    今日建议：{{proposal.DATA}}    {{chp.DATA}}    {{note_en.DATA}}    {{note_ch.DATA}}',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '02-20',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '马欣语', year: '2005', date: '02-20',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '李新博', year: '2003', date: '05-29',
        },
        {
          type: '节日', name: '在一起', year: '2023', date: '11-26',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2023-11-26' },
        // 相识
        { keyword: 'acquaintance_day', date: '2023-10-28' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'cGnLWE9QEdBZledtxaikBVml4UQ84MPOmDINGT92rFo',

  CALLBACK_USERS: [
    {
      name: '李新博',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oOIN_6AyKxNc1Tj4fgx01rToGSi8',
    }
  ],

}

module.exports = USER_CONFIG

