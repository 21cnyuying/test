package com.po.demo;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class LoginPage extends BaseStep{

    @FindBy(name = "username")
    WebElement userName;

    @FindBy(name = "password")
    WebElement passwd;

    @FindBy(id = "loginBut")
    WebElement loginButton;

    @FindBy(id = "stateSpan")
    WebElement checkTips;

    public WebElement getUserName() {
        return userName;
    }

    public WebElement getPasswd() {
        return passwd;
    }

    public WebElement getLoginButton() {
        return loginButton;
    }

    public WebElement getCheckTips() {
        return checkTips;
    }
}
