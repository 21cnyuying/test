package com.cucumber.demo;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;

public class ParamDemo {

    WebDriver driver;

    @Given("^用户正停留在365漂漂网后台登录页$")
    public void goToCsdn() {
        System.setProperty("webdriver.chrome.driver", "chromedriver.exe");
        driver = new ChromeDriver();
        driver.navigate().to("http://manage.365pp.com/");
        driver.manage().window().maximize();
    }

    @When("^用户输入用户名 \"(.*)\"$")
    public void enterUsername(String arg1) {
        driver.findElement(By.name("username")).sendKeys(arg1);
    }

    @When("^用户输入密码 \"(.*)\"$")
    public void enterPassword(String arg1) throws InterruptedException {
        driver.findElement(By.name("password")).sendKeys(arg1);
        driver.findElement(By.id("loginBut")).click();
        Thread.sleep(3000);
    }

    @Then("^登录失败提示$")
    public void checkFail() {
        String msg=driver.findElement(By.id("stateSpan")).getText();
        Assert.assertEquals("用户名: 3-18个字符",msg);
        driver.close();
    }
}
