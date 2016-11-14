/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : db_kh

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2016-11-14 17:42:21
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for t_nav
-- ----------------------------
DROP TABLE IF EXISTS `t_nav`;
CREATE TABLE `t_nav` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `pid` int(10) unsigned NOT NULL DEFAULT '0',
  `name` varchar(30) NOT NULL DEFAULT '',
  `url` varchar(75) NOT NULL DEFAULT '',
  `newtab` enum('n','y') NOT NULL DEFAULT 'n',
  `hide` enum('n','y') NOT NULL DEFAULT 'n',
  `sort` int(10) unsigned NOT NULL DEFAULT '0',
  `isdefault` enum('n','y') NOT NULL DEFAULT 'n',
  `type` tinyint(3) unsigned NOT NULL DEFAULT '0',
  `type_id` int(10) unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_nav
-- ----------------------------

-- ----------------------------
-- Table structure for t_user
-- ----------------------------
DROP TABLE IF EXISTS `t_user`;
CREATE TABLE `t_user` (
  `uid` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(32) NOT NULL DEFAULT '',
  `password` varchar(64) NOT NULL DEFAULT '',
  `nickname` varchar(20) NOT NULL DEFAULT '',
  `role` varchar(60) NOT NULL DEFAULT '',
  `ischeck` enum('n','y') NOT NULL DEFAULT 'n',
  `photo` varchar(255) NOT NULL DEFAULT '',
  `email` varchar(60) NOT NULL DEFAULT '',
  `description` varchar(255) NOT NULL DEFAULT '',
  PRIMARY KEY (`uid`),
  KEY `username` (`username`)
) ENGINE=MyISAM AUTO_INCREMENT=10002 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_user
-- ----------------------------
INSERT INTO `t_user` VALUES ('1', 'admin', 'admin', '管理员', 'admin', 'n', '/assets/admin/layout3/img/avatar9.jpg', 'haibusoi@sina.com', '追求技术的脚步永不停歇；\r\n热爱科学的激情永不毁灭；\r\n全面提高自身知识层面，\r\n努力成为科技的领导者。');
