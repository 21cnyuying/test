#cucumber+selenium+pageobject模式
Feature: 360登录页面演示案例及data table使用
  360登录页面演示案例及data table使用

  Scenario Outline: 打开365首页
    Given 打开chrome浏览器，进入365票票网后台登录页
    When 输入 "<userName>" and "<passWord>" 并点击登录
    Then 验证登录结果 "<result>"

    #4组测试数据
    Examples:
      | userName  | passWord | result   |
      | xiaoqiang | 1        | 密码: 3-18个字符 |
      | 00000000  | 11111111 | 正在登录!请稍后... |
      | admin123  | 3        | 密码: 3-18个字符 |
      | 小明        | aa       | 密码: 3-18个字符 |

