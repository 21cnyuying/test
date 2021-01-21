package com.po.demo;

public class LoginAct extends LoginPage{

    public void inputUserName(String str) {
        sendKeys(getUserName(),str);
    }

    public void inputPassWord(String str) {
        sendKeys(getPasswd(),str);
    }

    public void clickButton() {
        click(getLoginButton());
    }

    public String checkTip() {
        return getText(getCheckTips());
    }

}
