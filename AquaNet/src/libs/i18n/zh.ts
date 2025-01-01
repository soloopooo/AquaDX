import {
  EN_REF_GENERAL,
  EN_REF_HOME,
  EN_REF_LEADERBOARD,
  EN_REF_SETTINGS,
  EN_REF_USER,
  EN_REF_USERBOX,
  type EN_REF_Welcome
} from "./en_ref";

const zhUser: typeof EN_REF_USER = {
  'UserHome.ServerRank': '服务器排名',
  'UserHome.DXRating': 'DX B50',
  'UserHome.Rating': '评分',
  'UserHome.Statistics': '统计数据',
  'UserHome.Accuracy': '准确率',
  'UserHome.MaxCombo': '最大连击',
  'UserHome.FullCombo': '全连曲目',
  'UserHome.AllPerfect': '完美曲目',
  'UserHome.DXScore': 'DX 总分',
  'UserHome.Score': '总分',
  'UserHome.PlayActivity': '游戏活动',
  'UserHome.Plays': '出勤次数',
  'UserHome.PlayTime': '游玩时间',
  'UserHome.FirstSeen': '发现新大陆',
  'UserHome.LastSeen': '上次出勤',
  'UserHome.Version': '游戏版本',
  'UserHome.RecentScores': '成绩',
  'UserHome.NoData': '过去 ${days} 天内没有玩过',
  'UserHome.UnknownSong': "(未知曲目)",
  'UserHome.Settings': '设置',
  'UserHome.NoValidGame': "用户还没有玩过游戏",
  'UserHome.ShowRanksDetails': "点击显示评分详细",
  'UserHome.RankDetail.Title': '评分详细',
  'UserHome.RankDetail.Level': "等级",
  'UserHome.B50': "B50",
  'UserHome.AddRival': "添加劲敌",
  'UserHome.RemoveRival': "移除劲敌",
  'UserHome.InvalidGame': "游戏 ${game} 还不支持网页端查看。我们目前只支持舞萌、中二、Wacca 和音击。",
}

const zhWelcome: typeof EN_REF_Welcome = {
  'back': '返回',
  'email': '邮箱',
  'password': '密码',
  'username': '用户名',
  'welcome.btn-login': '登录',
  'welcome.btn-signup': '注册',
  'welcome.email-password-missing': '邮箱和密码必须填哦',
  'welcome.username-missing': '用户名/邮箱必须填哦',
  'welcome.waiting-turnstile': '正在验证网络环境...',
  'welcome.turnstile-error': '验证网络环境出错了，请关闭VPN后重试',
  'welcome.turnstile-timeout': '验证网络环境超时了，请重试',
  'welcome.verification-sent': '验证邮件已发送至 ${email}，请翻翻收件箱',
  'welcome.verify-state-0': '您还没有验证邮箱哦！验证邮件一分钟内刚刚发到您的邮箱，请翻翻收件箱',
  'welcome.verify-state-1': '您还没有验证邮箱哦！我们在过去的24小时内已经发送了3封验证邮件，所以我们不会再发送了，请翻翻收件箱',
  'welcome.verify-state-2': '您还没有验证邮箱哦！我们刚刚又发送了一封验证邮件，请翻翻收件箱',
  'welcome.verifying': '正在验证邮箱...请稍等',
  'welcome.verified': '您的邮箱已经验证成功！您现在可以登录了',
  'welcome.verification-failed': '验证失败：${message}。请重试',
}

const zhLeaderboard: typeof EN_REF_LEADERBOARD = {
  'Leaderboard.Title': '排行榜',
  'Leaderboard.Rank': '排名',
  'Leaderboard.Rating': '评分',
  'Leaderboard.Accuracy': '准确率',
  'Leaderboard.FC': 'FC',
  'Leaderboard.AP': 'AP',
}

const zhGeneral: typeof EN_REF_GENERAL = {
  'game.mai2': "舞萌",
  'game.chu3': "中二",
  'game.ongeki': "音击",
  'game.wacca': "Wacca",
  "status.error": "发生错误",
  "status.error.hint": "出了一些问题，请稍后刷新重试或者",
  "status.error.hint.link": "加我们的 Discord 群问一问",
  "status.detail": "详细信息：${detail}",
  "action.refresh": "刷新",
  "action.cancel": "取消",
  "action.confirm": "确认",
}

const zhHome: typeof EN_REF_HOME = {
  'home.nav.portal': "主页",
  'home.nav.link-card': "绑卡",
  'home.nav.game-setup': "连接设置",
  'home.manage-cards': '管理游戏卡',
  'home.manage-cards-description': '绑定、解绑、管理游戏数据卡',
  'home.link-card': '绑定游戏卡',
  'home.link-cards-description':'绑定游戏数据卡 (Amusement IC 或 Aime 卡) 后才可以访问游戏存档哦',
  'home.join-community': '加入群组',
  'home.join-community-description': '加入我们的聊天群组，与其他玩家聊天、获取帮助',
  'home.setup': '连接到 AquaDX',
  'home.setup-description': '如果您有街机框体或者手台，点击这里设置服务器的连接',
  'home.import': '导入玩家数据',
  'home.import-description': '如果你来自其他在线服，可以点击这里导入从其他服务器导出的数据',
  'home.linkcard.cards': "已绑卡片",
  'home.linkcard.description': "这些是您绑定到帐户的卡",
  'home.linkcard.account-card': "账户卡",
  'home.linkcard.registered': "注册于",
  'home.linkcard.lastused': "上次使用",
  'home.linkcard.enter-info': "请输入以下信息",
  'home.linkcard.access-code': "卡背面的20位卡号 (如果没有, 请尝试在游戏中扫描您的卡, 并输入屏幕上显示的卡号)",
  'home.linkcard.enter-sn1': "在您的手机",
  'home.linkcard.enter-sn2': "上下载 NFC Tools 并扫描您的卡。然后输入显示的 SN 号。",
  'home.linkcard.link': "绑定",
  'home.linkcard.data-conflict': "卡号冲突",
  'home.linkcard.name': "名称",
  'home.linkcard.rating': "Rating",
  'home.linkcard.last-login': "上次登录",
  'home.linkcard.linked-own': "此卡已链接到您的帐户",
  'home.linkcard.linked-another': "此卡已链接到其他用户",
  'home.linkcard.notfound': "找不到卡",
  'home.linkcard.unlink': "取消链接",
  'home.linkcard.unlink-notice': "你确定要取消此卡的链接吗?",
  'home.setup.welcome': "欢迎! 如果您有街机框体或者手台, 请按照以下说明设置以连接到 AquaDX.",
  'home.setup.blockquote': "我们假设您已经拥有所需的文件, 并且可以启动机台或手台附带的游戏 (例如 ROM 和 segatools )。如果没有, 请联系您设备的卖家以获取所需的文件, 因为出于版权原因, 我们不会提供这些文件。",
  'home.setup.get': "开始",
  'home.setup.edit': "请打开您的 segatools.ini 文件并修改以下行",
  'home.setup.test': "在您重新启动游戏后, 应该能够连接到 AquaDX。可以验证测试菜单中的网络测试测试连接是否全部良好。",
  'home.setup.ask': "如果您有任何问题, 请加入我们的",
  'home.setup.support': "以获取支持",
  'home.setup.keychip-tips': "这是你的狗号, 不要与任何人分享",
  'home.import.unknown-game': '未知游戏类型 (目前导入只支持舞萌和中二)',
  'home.import.new-data': '要导入的数据',
  'home.import.data-conflict': '继续导入将覆盖现有数据',
}

const zhSettings: typeof EN_REF_SETTINGS = {
  'settings.title': '用户设置',
  'settings.tabs.profile': '个人资料',
  'settings.tabs.game': '游戏设置',
  'settings.tabs.chu3': '中二',
  'settings.tabs.mai2': '舞萌',
  'settings.tabs.wacca': 'Wacca',
  'settings.fields.unlockMusic.name': '解锁谱面',
  'settings.fields.unlockMusic.desc': '在游戏中解锁所有曲目和大师难度谱面。',
  'settings.fields.unlockChara.name': '解锁角色',
  'settings.fields.unlockChara.desc': '在游戏中解锁所有角色、语音和伙伴。',
  'settings.fields.unlockCollectables.name': '解锁收藏品',
  'settings.fields.unlockCollectables.desc': '在游戏中解锁所有收藏品（名牌、称号、图标、背景图）。',
  'settings.fields.unlockTickets.name': '解锁游戏券',
  'settings.fields.unlockTickets.desc': '无限跑图券/解锁券（注：maimai 客户端仍限制一些券不能使用）。',
  'settings.fields.waccaInfiniteWp.name': 'Wacca: 无限 WP',
  'settings.fields.waccaInfiniteWp.desc': '将 WP 设置为 999999',
  'settings.fields.waccaAlwaysVip.name': 'Wacca: 永久会员',
  'settings.fields.waccaAlwaysVip.desc': '将 VIP 到期时间设置为 2077-01-01',
  'settings.fields.chusanTeamName.name': '中二: 队伍名称',
  'settings.fields.chusanTeamName.desc': '自定义显示在个人资料顶部的文本。',
  'settings.fields.chusanInfinitePenguins.name': '中二: 无限企鹅',
  'settings.fields.chusanInfinitePenguins.desc': '将角色界限突破的企鹅雕像数量设置为 999。',
  'settings.fields.rounding.name': '分数舍入',
  'settings.fields.rounding.desc': '把分数四舍五入到一位小数',
  'settings.fields.optOutOfLeaderboard.name': '不参与排行榜',
  'settings.fields.optOutOfLeaderboard.desc': '登录之后还是可以在排行榜上看到自己',
  'settings.mai2.name': '玩家名字',
  'settings.profile.picture': '头像',
  'settings.profile.upload-new': '上传',
  'settings.profile.save': '保存',
  'settings.profile.name': '昵称',
  'settings.profile.username': '用户名',
  'settings.profile.password': '密码',
  'settings.profile.location': '位置',
  'settings.profile.bio': '简介',
  'settings.profile.unset': '未设置',
  'settings.profile.unchanged': '未更改',
  'settings.export': '导出玩家数据',
}

export const zhUserbox: typeof EN_REF_USERBOX = {
  'userbox.header.general': '游戏设置',
  'userbox.header.userbox': 'UserBox 设置',
  'userbox.header.preview': 'UserBox 预览',
  'userbox.nameplateId': '名牌',
  'userbox.frameId': '边框',
  'userbox.trophyId': '称号',
  'userbox.mapIconId': '地图图标',
  'userbox.voiceId': '系统语音',
  'userbox.avatarWear': '企鹅服饰',
  'userbox.avatarHead': '企鹅头饰',
  'userbox.avatarFace': '企鹅面部',
  'userbox.avatarSkin': '企鹅皮肤',
  'userbox.avatarItem': '企鹅物品',
  'userbox.avatarFront': '企鹅前景',
  'userbox.avatarBack': '企鹅背景',
  'userbox.preview.url': '图床 URL',
  'userbox.error.nodata': '未找到中二数据',
};

export const ZH = { ...zhUser, ...zhWelcome, ...zhGeneral,
  ...zhLeaderboard, ...zhHome, ...zhSettings, ...zhUserbox }
