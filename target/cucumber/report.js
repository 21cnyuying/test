$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("demo.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#cucumber使用初探"
    }
  ],
  "line": 2,
  "name": "验证计算器计算功能",
  "description": "打开计算器进行计算",
  "id": "验证计算器计算功能",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 6,
  "name": "打开计算器进行计算1+1",
  "description": "",
  "id": "验证计算器计算功能;打开计算器进行计算1+1",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@CalculatorTest"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "打开计算器面板",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "已经输入1并按下+",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "输入 \"1\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "按下\u003d",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "等待计算",
  "keyword": "Then "
});
formatter.match({
  "location": "CalculatorDemo.openCalculator()"
});
formatter.result({
  "duration": 201292600,
  "status": "passed"
});
formatter.match({
  "location": "CalculatorDemo.alreadyInput1()"
});
formatter.result({
  "duration": 100400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 4
    }
  ],
  "location": "CalculatorDemo.input1(String)"
});
formatter.result({
  "duration": 5297500,
  "status": "passed"
});
formatter.match({
  "location": "CalculatorDemo.pressEaualButton()"
});
formatter.result({
  "duration": 398500,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.uri("parm.feature");
formatter.feature({
  "line": 1,
  "name": "365漂漂网参数化登录功能",
  "description": "",
  "id": "365漂漂网参数化登录功能",
  "keyword": "Feature"
});
formatter.background({
  "comments": [
    {
      "line": 3,
      "value": "#怎样实现重复输入账号密码操作的步骤"
    }
  ],
  "line": 4,
  "name": "用户打开360影视首页",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "用户正停留在365漂漂网后台登录页",
  "keyword": "Given "
});
formatter.match({
  "location": "ParamDemo.goToCsdn()"
});
formatter.result({
  "duration": 12996925700,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 7,
      "value": "#输入账号密码a1/a1"
    }
  ],
  "line": 8,
  "name": "",
  "description": "",
  "id": "365漂漂网参数化登录功能;",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 9,
  "name": "用户输入用户名 \"a1\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "用户输入密码 \"a1\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "登录失败提示",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "a1",
      "offset": 9
    }
  ],
  "location": "ParamDemo.enterUsername(String)"
});
formatter.result({
  "duration": 271717800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "a1",
      "offset": 8
    }
  ],
  "location": "ParamDemo.enterPassword(String)"
});
formatter.result({
  "duration": 3259304600,
  "status": "passed"
});
formatter.match({
  "location": "ParamDemo.checkFail()"
});
formatter.result({
  "duration": 588993600,
  "status": "passed"
});
formatter.background({
  "comments": [
    {
      "line": 3,
      "value": "#怎样实现重复输入账号密码操作的步骤"
    }
  ],
  "line": 4,
  "name": "用户打开360影视首页",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "用户正停留在365漂漂网后台登录页",
  "keyword": "Given "
});
formatter.match({
  "location": "ParamDemo.goToCsdn()"
});
formatter.result({
  "duration": 9253963900,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 12,
      "value": "#输入账号密码a2/a2"
    }
  ],
  "line": 13,
  "name": "",
  "description": "",
  "id": "365漂漂网参数化登录功能;",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 14,
  "name": "用户输入用户名 \"a2\"",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "用户输入密码 \"a2\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "登录失败提示",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "a2",
      "offset": 9
    }
  ],
  "location": "ParamDemo.enterUsername(String)"
});
formatter.result({
  "duration": 293421100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "a2",
      "offset": 8
    }
  ],
  "location": "ParamDemo.enterPassword(String)"
});
formatter.result({
  "duration": 3283261600,
  "status": "passed"
});
formatter.match({
  "location": "ParamDemo.checkFail()"
});
formatter.result({
  "duration": 303952000,
  "status": "passed"
});
formatter.background({
  "comments": [
    {
      "line": 3,
      "value": "#怎样实现重复输入账号密码操作的步骤"
    }
  ],
  "line": 4,
  "name": "用户打开360影视首页",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "用户正停留在365漂漂网后台登录页",
  "keyword": "Given "
});
formatter.match({
  "location": "ParamDemo.goToCsdn()"
});
formatter.result({
  "duration": 8195260500,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 19,
      "value": "#输入账号密码a3/a3"
    }
  ],
  "line": 20,
  "name": "",
  "description": "",
  "id": "365漂漂网参数化登录功能;",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 21,
  "name": "用户输入用户名 \"a3\"",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "用户输入密码 \"a3\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "登录失败提示",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "a3",
      "offset": 9
    }
  ],
  "location": "ParamDemo.enterUsername(String)"
});
formatter.result({
  "duration": 237559300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "a3",
      "offset": 8
    }
  ],
  "location": "ParamDemo.enterPassword(String)"
});
formatter.result({
  "duration": 3289873500,
  "status": "passed"
});
formatter.match({
  "location": "ParamDemo.checkFail()"
});
formatter.result({
  "duration": 357075400,
  "status": "passed"
});
formatter.uri("poDemo.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#cucumber+selenium+pageobject模式"
    }
  ],
  "line": 2,
  "name": "360登录页面演示案例及data table使用",
  "description": "360登录页面演示案例及data table使用",
  "id": "360登录页面演示案例及data-table使用",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "打开365首页",
  "description": "",
  "id": "360登录页面演示案例及data-table使用;打开365首页",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "打开chrome浏览器，进入365票票网后台登录页",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "输入 \"\u003cuserName\u003e\" and \"\u003cpassWord\u003e\" 并点击登录",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "验证登录结果 \"\u003cresult\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "comments": [
    {
      "line": 10,
      "value": "#4组测试数据"
    }
  ],
  "line": 11,
  "name": "",
  "description": "",
  "id": "360登录页面演示案例及data-table使用;打开365首页;",
  "rows": [
    {
      "cells": [
        "userName",
        "passWord",
        "result"
      ],
      "line": 12,
      "id": "360登录页面演示案例及data-table使用;打开365首页;;1"
    },
    {
      "cells": [
        "xiaoqiang",
        "1",
        "密码: 3-18个字符"
      ],
      "line": 13,
      "id": "360登录页面演示案例及data-table使用;打开365首页;;2"
    },
    {
      "cells": [
        "00000000",
        "11111111",
        "正在登录!请稍后..."
      ],
      "line": 14,
      "id": "360登录页面演示案例及data-table使用;打开365首页;;3"
    },
    {
      "cells": [
        "admin123",
        "3",
        "密码: 3-18个字符"
      ],
      "line": 15,
      "id": "360登录页面演示案例及data-table使用;打开365首页;;4"
    },
    {
      "cells": [
        "小明",
        "aa",
        "密码: 3-18个字符"
      ],
      "line": 16,
      "id": "360登录页面演示案例及data-table使用;打开365首页;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 13,
  "name": "打开365首页",
  "description": "",
  "id": "360登录页面演示案例及data-table使用;打开365首页;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "打开chrome浏览器，进入365票票网后台登录页",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "输入 \"xiaoqiang\" and \"1\" 并点击登录",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "验证登录结果 \"密码: 3-18个字符\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTest.openBrower()"
});
formatter.result({
  "duration": 9100745400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "xiaoqiang",
      "offset": 4
    },
    {
      "val": "1",
      "offset": 20
    }
  ],
  "location": "LoginTest.login(String,String)"
});
formatter.result({
  "duration": 694620800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "密码: 3-18个字符",
      "offset": 8
    }
  ],
  "location": "LoginTest.verify_result(String)"
});
formatter.result({
  "duration": 5597962400,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "打开365首页",
  "description": "",
  "id": "360登录页面演示案例及data-table使用;打开365首页;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "打开chrome浏览器，进入365票票网后台登录页",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "输入 \"00000000\" and \"11111111\" 并点击登录",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "验证登录结果 \"正在登录!请稍后...\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTest.openBrower()"
});
formatter.result({
  "duration": 8139682500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "00000000",
      "offset": 4
    },
    {
      "val": "11111111",
      "offset": 19
    }
  ],
  "location": "LoginTest.login(String,String)"
});
formatter.result({
  "duration": 581944500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "正在登录!请稍后...",
      "offset": 8
    }
  ],
  "location": "LoginTest.verify_result(String)"
});
formatter.result({
  "duration": 4990825300,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "打开365首页",
  "description": "",
  "id": "360登录页面演示案例及data-table使用;打开365首页;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "打开chrome浏览器，进入365票票网后台登录页",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "输入 \"admin123\" and \"3\" 并点击登录",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "验证登录结果 \"密码: 3-18个字符\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTest.openBrower()"
});
formatter.result({
  "duration": 7966901200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin123",
      "offset": 4
    },
    {
      "val": "3",
      "offset": 19
    }
  ],
  "location": "LoginTest.login(String,String)"
});
formatter.result({
  "duration": 712563900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "密码: 3-18个字符",
      "offset": 8
    }
  ],
  "location": "LoginTest.verify_result(String)"
});
formatter.result({
  "duration": 4952271900,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "打开365首页",
  "description": "",
  "id": "360登录页面演示案例及data-table使用;打开365首页;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "打开chrome浏览器，进入365票票网后台登录页",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "输入 \"小明\" and \"aa\" 并点击登录",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "验证登录结果 \"密码: 3-18个字符\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTest.openBrower()"
});
formatter.result({
  "duration": 8349639000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "小明",
      "offset": 4
    },
    {
      "val": "aa",
      "offset": 13
    }
  ],
  "location": "LoginTest.login(String,String)"
});
formatter.result({
  "duration": 619037600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "密码: 3-18个字符",
      "offset": 8
    }
  ],
  "location": "LoginTest.verify_result(String)"
});
formatter.result({
  "duration": 4578527200,
  "status": "passed"
});
formatter.uri("testParamDemo.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#cucumber参数化使用"
    }
  ],
  "line": 2,
  "name": "验证计算器多组数字计算功能",
  "description": "打开计算器进行计算",
  "id": "验证计算器多组数字计算功能",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "打开计算器进行计算",
  "description": "",
  "id": "验证计算器多组数字计算功能;打开计算器进行计算",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "打开计算器进行计算",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "输入 \"\u003ca1\u003e\" and \"\u003ca2\u003e\" 并计算结果",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "计算结果  \"\u003cresult\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "comments": [
    {
      "line": 10,
      "value": "#5组数字计算机结果"
    }
  ],
  "line": 11,
  "name": "",
  "description": "",
  "id": "验证计算器多组数字计算功能;打开计算器进行计算;",
  "rows": [
    {
      "cells": [
        "a1",
        "a2",
        "result"
      ],
      "line": 12,
      "id": "验证计算器多组数字计算功能;打开计算器进行计算;;1"
    },
    {
      "cells": [
        "1",
        "1",
        "1"
      ],
      "line": 13,
      "id": "验证计算器多组数字计算功能;打开计算器进行计算;;2"
    },
    {
      "cells": [
        "2",
        "2",
        "4"
      ],
      "line": 14,
      "id": "验证计算器多组数字计算功能;打开计算器进行计算;;3"
    },
    {
      "cells": [
        "3",
        "3",
        "6"
      ],
      "line": 15,
      "id": "验证计算器多组数字计算功能;打开计算器进行计算;;4"
    },
    {
      "cells": [
        "4",
        "4",
        "8"
      ],
      "line": 16,
      "id": "验证计算器多组数字计算功能;打开计算器进行计算;;5"
    },
    {
      "cells": [
        "5",
        "5",
        "7"
      ],
      "line": 17,
      "id": "验证计算器多组数字计算功能;打开计算器进行计算;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 13,
  "name": "打开计算器进行计算",
  "description": "",
  "id": "验证计算器多组数字计算功能;打开计算器进行计算;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "打开计算器进行计算",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "输入 \"1\" and \"1\" 并计算结果",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "计算结果  \"1\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "TestParamDemo.openCalc()"
});
formatter.result({
  "duration": 214200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 4
    },
    {
      "val": "1",
      "offset": 12
    }
  ],
  "location": "TestParamDemo.addition(int,int)"
});
formatter.result({
  "duration": 1428800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 7
    }
  ],
  "location": "TestParamDemo.verify_result(int)"
});
formatter.result({
  "duration": 440800,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "打开计算器进行计算",
  "description": "",
  "id": "验证计算器多组数字计算功能;打开计算器进行计算;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "打开计算器进行计算",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "输入 \"2\" and \"2\" 并计算结果",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "计算结果  \"4\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "TestParamDemo.openCalc()"
});
formatter.result({
  "duration": 382900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 4
    },
    {
      "val": "2",
      "offset": 12
    }
  ],
  "location": "TestParamDemo.addition(int,int)"
});
formatter.result({
  "duration": 485500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 7
    }
  ],
  "location": "TestParamDemo.verify_result(int)"
});
formatter.result({
  "duration": 326700,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "打开计算器进行计算",
  "description": "",
  "id": "验证计算器多组数字计算功能;打开计算器进行计算;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "打开计算器进行计算",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "输入 \"3\" and \"3\" 并计算结果",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "计算结果  \"6\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "TestParamDemo.openCalc()"
});
formatter.result({
  "duration": 163300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 4
    },
    {
      "val": "3",
      "offset": 12
    }
  ],
  "location": "TestParamDemo.addition(int,int)"
});
formatter.result({
  "duration": 199900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "6",
      "offset": 7
    }
  ],
  "location": "TestParamDemo.verify_result(int)"
});
formatter.result({
  "duration": 312700,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "打开计算器进行计算",
  "description": "",
  "id": "验证计算器多组数字计算功能;打开计算器进行计算;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "打开计算器进行计算",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "输入 \"4\" and \"4\" 并计算结果",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "计算结果  \"8\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "TestParamDemo.openCalc()"
});
formatter.result({
  "duration": 376400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 4
    },
    {
      "val": "4",
      "offset": 12
    }
  ],
  "location": "TestParamDemo.addition(int,int)"
});
formatter.result({
  "duration": 483200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8",
      "offset": 7
    }
  ],
  "location": "TestParamDemo.verify_result(int)"
});
formatter.result({
  "duration": 385400,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "打开计算器进行计算",
  "description": "",
  "id": "验证计算器多组数字计算功能;打开计算器进行计算;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "打开计算器进行计算",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "输入 \"5\" and \"5\" 并计算结果",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "计算结果  \"7\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "TestParamDemo.openCalc()"
});
formatter.result({
  "duration": 383200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 4
    },
    {
      "val": "5",
      "offset": 12
    }
  ],
  "location": "TestParamDemo.addition(int,int)"
});
formatter.result({
  "duration": 190000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "7",
      "offset": 7
    }
  ],
  "location": "TestParamDemo.verify_result(int)"
});
formatter.result({
  "duration": 217200,
  "status": "passed"
});
});