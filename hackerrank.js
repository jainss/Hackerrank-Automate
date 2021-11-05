const puppeteer = require('puppeteer');
const codeobj = require('./code');
let url = "https://www.hackerrank.com/auth/login";
const email = "sj2394108@gmail.com";
const pass = "sahil@123";
const browser = puppeteer.launch({
    headless: false,
    args: ["--start-maximized"],
    defaultViewport: null
});
let page;
browser.then(function (browserobj) {
    const browserpage = browserobj.newPage();
    return browserpage;
}).then(function (newtab) {
    page = newtab;
    let openhack = newtab.goto(url);
    return openhack;
}).then(function () {
    let emailtype = page.type("input[id='input-1']", email, { delay: 50 });
    return emailtype;
}).then(function () {
    let passtype = page.type("input[type='password']", pass, { delay: 50 });
    return passtype;
}).then(function () {
    let loginclick = page.click('button[data-analytics="LoginPassword"]');
    return loginclick;
}).then(function () {
    let algopart = waitandclick('a[data-attr2="algorithms"]', page);
    return algopart;
}).then(function () {
    let forwarmup = waitandclick('input[value="warmup"]', page);
    return forwarmup;
}).then(function () {
    let waitfor3sec = page.waitFor(3000);
    return waitfor3sec;
}).then(function () {
    let allquestion = page.$$('.ui-btn.ui-btn-normal.primary-cta.ui-btn-line-primary.ui-btn-styled', { delay: 50 });
    return allquestion;
}).then(function (allquestion) {
    console.log(allquestion.length);
    let quetionclick = quetionsolver(page, allquestion[0], codeobj.answer[1]);
    return quetionclick;
})
    .catch(function (err) {
        console.log(err);
    })



function waitandclick(selector, cpage) {
    return new Promise(function (resolve, reject) {
        let waitForModePromise = cpage.waitForSelector(selector);
        waitForModePromise.then(function () {
            let clickpage = cpage.click(selector);
            return clickpage;
        }).then(function () {
            resolve();
        }).catch(function (err) {
            reject();
        })
    })
}

function quetionsolver(page, quetion, answer) {
    return new Promise(function (resolve, reject) {
        let clickonquestion = quetion.click();
        clickonquestion.then(function () {
            let cickoneditor = waitandclick('.monaco-editor.no-user-select.vs', page);
            return cickoneditor;
        }).then(function () {
            let checkboxclick = waitandclick('.checkbox-input', page);
            return checkboxclick;
        }).then(function () {
            return page.waitForSelector('textarea.custominput', page);
        }).then(function () {
            return page.type('textarea.custominput', answer, { delay: 50 });
        }).then(function () {
            let pressctrl = page.keyboard.down('Control');
            return pressctrl;
        }).then(function () {
            let pressA = page.keyboard.down('A', { delay: 10 });
            return pressA;
        }).then(function () {
            let pressX = page.keyboard.down('X', { delay: 10 });
            return pressX;
        }).then(function () {
            let realsekeyborad = page.keyboard.up('Control');
            return realsekeyborad;
        }).then(function () {
            let vitoureditor = waitandclick('.monaco-editor.no-user-select.vs', page);
            return vitoureditor;
        }).then(function () {
            let pressctrl = page.keyboard.down('Control');
            return pressctrl;
        }).then(function () {
            let pressA = page.keyboard.down('A', { delay: 10 });
            return pressA;
        }).then(function () {
            let pressV = page.keyboard.down('V', { delay: 10 });
            return pressV;
        }).then(function () {
            let realsekeyborad = page.keyboard.up('Control', { delay: 10 });
            return realsekeyborad;
        }).then(function () {
            let runclick = page.click('.hr-monaco__run-code', page);
            return runclick;
        }).then(function () {
            let delayfor10sec = page.waitFor(10000);
            return delayfor10sec;
        }).then(function () {
            let submit = page.click('.hr-monaco-submit', page);
            return submit;
        }).then(function () {
            resolve();
        }).then(function (err) {
            reject();
        })
    })
}