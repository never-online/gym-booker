import Page from './page-model';

fixture `My first fixture`
    .page `https://myfit4less.gymmanager.com/portal/login.asp`;

const page = new Page();
    
test('Book gym', async t => {
    await t
        .typeText(page.emailAddress, 'dhaliwal.js@outlook.com')
        .typeText(page.password, 'Pswrd205')
        .click(page.loginButton)
        .click(page.clubSelectButton)
        .click(page.surreyScottRoadClub)
        .click(page.dateSelectButton)
        .click(page.latestDate)
        .click(page.latestSlot)
        .click(page.agreeToSlot);
});
