-- phpMyAdmin SQL Dump
-- version 3.2.0.1
-- http://www.phpmyadmin.net
--
-- 主机: localhost
-- 生成日期: 2017 年 10 月 20 日 08:50
-- 服务器版本: 5.5.8
-- PHP 版本: 5.3.3

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- 数据库: `zhiwo`
--

-- --------------------------------------------------------

--
-- 表的结构 `bannerimg`
--

CREATE TABLE IF NOT EXISTS `bannerimg` (
  `sid` tinyint(2) unsigned NOT NULL AUTO_INCREMENT,
  `url` varchar(200) NOT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=6 ;

--
-- 转存表中的数据 `bannerimg`
--

INSERT INTO `bannerimg` (`sid`, `url`) VALUES
(1, 'http://images.zhiwo.com/product/2017/1010/12292405582574416346.jpg'),
(2, 'http://images.zhiwo.com/product/2017/0810/11887805101997284419.jpg'),
(3, 'http://images.zhiwo.com/product/2017/0810/9209922747564342608.jpg'),
(4, 'http://images.zhiwo.com/product/2016/0826/15900537550058584496.jpg'),
(5, 'http://images.zhiwo.com/product/2017/0105/16270930103727000139.jpg');

-- --------------------------------------------------------

--
-- 表的结构 `brandchina`
--

CREATE TABLE IF NOT EXISTS `brandchina` (
  `sid` tinyint(2) unsigned NOT NULL AUTO_INCREMENT,
  `url` varchar(200) NOT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=11 ;

--
-- 转存表中的数据 `brandchina`
--

INSERT INTO `brandchina` (`sid`, `url`) VALUES
(1, 'http://images.zhiwo.com/product/2015/0727/15730054289387884252.jpg'),
(2, 'http://images.zhiwo.com/product/2015/0727/10888247086562937457.jpg'),
(3, 'http://images.zhiwo.com/brand/new220.jpg?62'),
(4, 'http://images.zhiwo.com/product/2015/0727/5089260052217930966.jpg'),
(5, 'http://images.zhiwo.com/brand/new661.jpg?75'),
(6, 'http://images.zhiwo.com/brand/new667.jpg?52'),
(7, 'http://images.zhiwo.com/brand/new666.jpg?83'),
(8, 'http://images.zhiwo.com/product/2015/0727/14735824901568134075.jpg'),
(9, 'http://images.zhiwo.com/brand/new140.jpg?87'),
(10, 'http://images.zhiwo.com/brand/new693.jpg?59');

-- --------------------------------------------------------

--
-- 表的结构 `brandhot`
--

CREATE TABLE IF NOT EXISTS `brandhot` (
  `sid` tinyint(2) unsigned NOT NULL AUTO_INCREMENT,
  `url` varchar(200) NOT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=11 ;

--
-- 转存表中的数据 `brandhot`
--

INSERT INTO `brandhot` (`sid`, `url`) VALUES
(1, 'http://images.zhiwo.com/product/2015/0731/11633789268330446680.jpg'),
(2, 'http://images.zhiwo.com/product/2015/0731/14192958587290516872.jpg'),
(3, 'http://images.zhiwo.com/product/2015/0731/4073375999297128111.jpg'),
(4, 'http://images.zhiwo.com/product/2015/0731/14003913002687991368.jpg'),
(5, 'http://images.zhiwo.com/product/2015/0731/1595390364904776342.jpg'),
(6, 'http://images.zhiwo.com/product/2015/0731/2525174846649696561.jpg'),
(7, 'http://images.zhiwo.com/product/2015/0731/11398590373642272031.jpg'),
(8, 'http://images.zhiwo.com/product/2015/0731/3792364823031107435.jpg'),
(9, 'http://images.zhiwo.com/product/2015/0728/7982576791887213766.jpg'),
(10, 'http://images.zhiwo.com/product/2015/0731/1915325997945869361.jpg');

-- --------------------------------------------------------

--
-- 表的结构 `brandjapan`
--

CREATE TABLE IF NOT EXISTS `brandjapan` (
  `sid` tinyint(2) unsigned NOT NULL AUTO_INCREMENT,
  `url` varchar(200) NOT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=11 ;

--
-- 转存表中的数据 `brandjapan`
--

INSERT INTO `brandjapan` (`sid`, `url`) VALUES
(1, 'http://images.zhiwo.com/product/2015/0727/15052747065982275170.jpg'),
(2, 'http://images.zhiwo.com/product/2015/0727/392336696239890486.jpg'),
(3, 'http://images.zhiwo.com/product/2015/0727/4105911076429857239.jpg'),
(4, 'http://images.zhiwo.com/product/2015/0727/6588947328155612531.jpg'),
(5, 'http://images.zhiwo.com/product/2015/0731/6982554699552734744.jpg'),
(6, 'http://images.zhiwo.com/product/2015/0727/311411624111062359.jpg'),
(7, 'http://images.zhiwo.com/product/2015/0731/15339014486720805492.jpg'),
(8, 'http://images.zhiwo.com/product/2015/0731/12199088327079549182.jpg'),
(9, 'http://images.zhiwo.com/product/2015/0728/11371201596439011936.jpg'),
(10, 'http://images.zhiwo.com/product/2015/0728/16470291727021584211.jpg');

-- --------------------------------------------------------

--
-- 表的结构 `brandpic`
--

CREATE TABLE IF NOT EXISTS `brandpic` (
  `sid` tinyint(2) unsigned NOT NULL AUTO_INCREMENT,
  `url` varchar(200) NOT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=5 ;

--
-- 转存表中的数据 `brandpic`
--

INSERT INTO `brandpic` (`sid`, `url`) VALUES
(1, 'http://images.zhiwo.com/product/2015/0729/6224111724773962949.jpg'),
(2, 'http://images.zhiwo.com/product/2015/0821/4196675089301349460.jpg'),
(3, 'http://images.zhiwo.com/product/2015/0728/17983430342141412657.jpg'),
(4, 'http://images.zhiwo.com/product/2015/0728/15149004218430526764.jpg');

-- --------------------------------------------------------

--
-- 表的结构 `brandusa`
--

CREATE TABLE IF NOT EXISTS `brandusa` (
  `sid` tinyint(2) unsigned NOT NULL AUTO_INCREMENT,
  `url` varchar(200) NOT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=11 ;

--
-- 转存表中的数据 `brandusa`
--

INSERT INTO `brandusa` (`sid`, `url`) VALUES
(1, 'http://images.zhiwo.com/product/2015/0727/3561103715310174247.jpg'),
(2, 'http://images.zhiwo.com/product/2015/0728/8573329572596548349.jpg'),
(3, 'http://images.zhiwo.com/product/2015/0731/16426238961878811670.jpg'),
(4, 'http://images.zhiwo.com/product/2015/0727/13725000168060300530.jpg'),
(5, 'http://images.zhiwo.com/product/2015/0731/1012388296295508907.jpg'),
(6, 'http://images.zhiwo.com/product/2015/0731/11823942075337595152.jpg'),
(7, 'http://images.zhiwo.com/brand/new660.jpg?6'),
(8, 'http://images.zhiwo.com/product/2015/0731/10279475932190650925.jpg'),
(9, 'http://images.zhiwo.com/product/2015/0731/4069745134411820033.jpg'),
(10, 'http://images.zhiwo.com/brand/new586.jpg?84');

-- --------------------------------------------------------

--
-- 表的结构 `headlines`
--

CREATE TABLE IF NOT EXISTS `headlines` (
  `sid` tinyint(2) unsigned NOT NULL AUTO_INCREMENT,
  `text` varchar(200) CHARACTER SET utf8 NOT NULL,
  `url` varchar(200) NOT NULL,
  `price` varchar(10) NOT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=5 ;

--
-- 转存表中的数据 `headlines`
--

INSERT INTO `headlines` (`sid`, `text`, `url`, `price`) VALUES
(1, '【发芯护理 深入滋养】香气淡雅，不含硅等任何化学物质，由一百多种草药遵循古方以九蒸九曝古方秘制而成，浓缩精华，高营养深层滋养头皮及毛发，使无力的头发充满润泽，恢复健康活力，并防止脱发！', 'http://images.zhiwo.com/product/2016/0301/7097903035513818957.jpg', '40.8'),
(2, '蕴含天然库拉索芦荟提取精华，舒缓痘痘及受损肌肤，改善肌肤泛红，淡化印痕，促进肌肤新生。', 'http://images.zhiwo.com/product/2017/1013/11296446511654491362.jpg', '33'),
(3, '提高肌肤含水量，有效紧致肌肤。维持肌肤紧实及弹性，防止肌肤老化及皱纹产生。超保湿因子，可持续全天深层锁水，避免水分流失，能让肌肤水嫩、紧致有弹性，并可淡化细纹。皮肤松弛MM首选！', 'http://images.zhiwo.com/product/2016/1115/9695440753192886389.jpg', '35'),
(4, '外界刺激，佩戴隐形眼镜，面部电脑屏幕等多重因素可能会诱发眼周肌肤干燥，导致不适。持续滋润舒缓娇嫩的眼周肌肤，耐受性差的肌肤亦可使用。蕴含创新复合成分，卓效修护眼周脆弱肌肤，令其重焕柔嫩润泽。', 'http://images.zhiwo.com/product/2017/0927/17730417792328297092.jpg', '20.9');

-- --------------------------------------------------------

--
-- 表的结构 `hotdeals`
--

CREATE TABLE IF NOT EXISTS `hotdeals` (
  `sid` tinyint(2) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(100) CHARACTER SET utf8 NOT NULL,
  `url` varchar(200) NOT NULL,
  `price` varchar(10) NOT NULL,
  `people` varchar(10) NOT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=32 ;

--
-- 转存表中的数据 `hotdeals`
--

INSERT INTO `hotdeals` (`sid`, `title`, `url`, `price`, `people`) VALUES
(2, '【清仓价】国内专柜正品薇姿温泉纯净清爽洁面啫喱200ml', 'http://images.zhiwo.com/product/2015/0729/7331368196560126452.jpg ', '99.9', '249'),
(3, 'ISSY艾茜 免水洗发喷雾（染烫受损发质）150ml', 'http://images.zhiwo.com/product/2017/1016/3279144051890807987.jpg', '25', '317'),
(4, '森田药妆胜肽提升面膜（4片)', 'http://images.zhiwo.com/product/2016/0603/5496685494686690047.jpg', '48', '351'),
(5, '菲拉格慕仲夏之梦淡香水100ml简装', 'http://images.zhiwo.com/product/2017/1016/7437103210447561109.jpg', '150', '204'),
(6, '古驰狂爱女士香水一代30ml', 'http://images.zhiwo.com/product/2017/1016/13267952445435234925.jpg', '273', '188'),
(7, 'Hello Kitty植物精纯保湿润肤露100g', 'http://images.zhiwo.com/product/2016/0808/4302389350407528309.jpg', '29.9', '640'),
(8, '芭比佩玫瑰小手护手霜50ml', 'http://images.zhiwo.com/product/2016/0921/10976074518567205154.jpg', '15', '543'),
(9, 'Hello Kitty金缕梅清爽玉米热痱粉140g', 'http://images.zhiwo.com/product/2016/0628/8356179575533135099.jpg', '28', '548'),
(10, '莱素芳冰喷爽250ml', 'http://images.zhiwo.com/product/2016/0922/10071467248444157419.jpg', '99', '359'),
(11, '杰西卡的旅行备长炭负离子黑面膜25ml*3', 'http://images.zhiwo.com/product/2016/0630/268581230270074374.jpg', '25', '551'),
(12, 'ISSY艾茜 免水洗发喷雾（常规发质）150ml', 'http://images.zhiwo.com/product/2017/1016/10536972587675185014.jpg', '25', '320'),
(13, 'ISSY艾茜 免水洗发喷雾（孕妇月子专用）150m', 'http://images.zhiwo.com/product/2017/1016/13584538997900589261.jpg', '25', '351'),
(14, 'Pelican沛丽康天然马油皂成人儿童泡沫洁面超保湿香皂肥皂2个装', 'http://images.zhiwo.com/product/2017/1013/3011680304171257730.jpg', '35', '449'),
(15, '301研制京卫本草HA润白精华乳(玻尿酸)110ml', 'http://images.zhiwo.com/product/2015/0203/7378768969166059947.jpg', '45', '435'),
(16, '曼秀雷敦新碧水薄防晒露(SPF30PA++)80g', 'http://images.zhiwo.com/product/2016/0415/8314300333547415743.jpg', '45', '459'),
(17, 'Skin Nutrient/番木瓜膏（草莓）', 'http://images.zhiwo.com/product/2016/0902/12908850335413663831.jpg', '29', '539'),
(18, '阿迪达斯新鲜女士沐浴露（蓝）250ml', 'http://images.zhiwo.com/product/2016/0822/1754246531541652924.jpg', '29.9', '644'),
(19, 'revlon露华浓不脱色水润唇釉8ml  001 玫紫红', 'http://images.zhiwo.com/product/2015/0914/5287653304375006197.jpg', '59.9', '451'),
(20, '媚诗林梦寐丰盈唇膏NO.14', 'http://images.zhiwo.com/product/2016/0921/15338298629997620507.jpg', '59.9', '887'),
(21, '德国进口爱姬玛琳蜜桃香氛沐浴露150ml', 'http://images.zhiwo.com/product/2015/0128/13984384126554063232.jpg', '29.9', '548'),
(22, '【清仓价】百雀羚水能量焕颜霜50g', 'http://images.zhiwo.com/product/2015/0811/10100397195673823594.jpg', '89', '332'),
(23, 'Hello Kitty植物精纯活力沐浴露200g', 'http://images.zhiwo.com/product/2016/0727/9123694108325628932.jpg', '22', '547'),
(24, '资生堂丝蓓绮炫魅修护洗发露550ml（专柜）', 'http://images.zhiwo.com/product/2016/0414/4949802048453465932.jpg', '85', '490'),
(25, 'SNP维他命糖果果冻面膜（红色）10片', 'http://images.zhiwo.com/product/2016/0824/12225812177730218484.jpg', '79.9', '353'),
(26, '医朵矿物绿泥足部魔白SPA100g', 'http://images.zhiwo.com/product/2015/0128/3518646170976801561.jpg', '29.9', '640'),
(27, 'Hello Kitty植物精纯动感洗沐二合一200g', 'http://images.zhiwo.com/product/2016/0728/7203556295561838244.jpg', '22', '649'),
(28, 'Hello Kitty金缕梅净护洗衣香皂', 'http://images.zhiwo.com/product/2016/0630/12492527722260840317.jpg', '15', '539'),
(29, 'suki girl手霜套盒（三支装）', 'http://images.zhiwo.com/product/2015/1023/2106970894634440718.jpg', '29.9', '622'),
(30, '【两只装】ora2美白牙膏100g*2（薰衣草香薄荷）', 'http://images.zhiwo.com/product/2017/1013/6079446896482652280.jpg', '65', '351'),
(31, '【两只装】ora2美白牙膏100*2（高纯度超强薄荷脑）', 'http://images.zhiwo.com/product/2017/0926/6624457108333402284.jpg', '62', '355');

-- --------------------------------------------------------

--
-- 表的结构 `register`
--

CREATE TABLE IF NOT EXISTS `register` (
  `sid` tinyint(2) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(20) NOT NULL,
  `password` varchar(64) NOT NULL,
  `time` varchar(50) NOT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=70 ;

--
-- 转存表中的数据 `register`
--

INSERT INTO `register` (`sid`, `username`, `password`, `time`) VALUES
(7, '17858956282', 'e10adc3949ba59abbe56e057f20f883e', '2017-10-17 21:16:25'),
(8, '17858956283', '5ab5aa9299d37df591c3116cefb18c88', '2017-10-17 21:20:55'),
(9, '17858956281', '7cc1241c9f00e14904323b7c275491dd', '2017-10-17 21:33:54'),
(29, '17858956289', 'e10adc3949ba59abbe56e057f20f883e', '2017-10-17 23:58:45'),
(34, '13857349575', '5ab5aa9299d37df591c3116cefb18c88', '2017-10-18 00:12:26'),
(52, '17858956666', 'e10adc3949ba59abbe56e057f20f883e', '2017-10-20 16:12:39'),
(53, '17858956666', 'e10adc3949ba59abbe56e057f20f883e', '2017-10-20 16:12:48'),
(54, '17858956667', 'e10adc3949ba59abbe56e057f20f883e', '2017-10-20 16:13:16'),
(55, '17858954444', 'e10adc3949ba59abbe56e057f20f883e', '2017-10-20 16:14:12'),
(56, '17858954444', 'e10adc3949ba59abbe56e057f20f883e', '2017-10-20 16:14:16'),
(57, '17858952222', 'e10adc3949ba59abbe56e057f20f883e', '2017-10-20 16:15:02'),
(58, '17858952222', 'e10adc3949ba59abbe56e057f20f883e', '2017-10-20 16:15:07'),
(59, '17858952222', 'e10adc3949ba59abbe56e057f20f883e', '2017-10-20 16:15:08'),
(60, '17858952222', 'e10adc3949ba59abbe56e057f20f883e', '2017-10-20 16:15:08'),
(61, '17858952222', 'e10adc3949ba59abbe56e057f20f883e', '2017-10-20 16:15:08'),
(62, '17858952222', 'e10adc3949ba59abbe56e057f20f883e', '2017-10-20 16:15:08'),
(63, '17858952222', 'e10adc3949ba59abbe56e057f20f883e', '2017-10-20 16:15:08'),
(64, '17858952222', 'e10adc3949ba59abbe56e057f20f883e', '2017-10-20 16:15:08'),
(65, '17858954443', 'e10adc3949ba59abbe56e057f20f883e', '2017-10-20 16:17:19'),
(66, '17858954443', 'e10adc3949ba59abbe56e057f20f883e', '2017-10-20 16:17:21'),
(67, '17858954441', '71b3b26aaa319e0cdf6fdb8429c112b0', '2017-10-20 16:18:05'),
(68, '17858950000', '71b3b26aaa319e0cdf6fdb8429c112b0', '2017-10-20 16:18:47'),
(69, '17858957896', '71b3b26aaa319e0cdf6fdb8429c112b0', '2017-10-20 16:19:26');
