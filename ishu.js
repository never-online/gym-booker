import Page from './page-model';

fixture `My first fixture`
    .page `https://myfit4less.gymmanager.com/portal/login.asp`;

const page = new Page();
    
test('Book gym', async t => {
    await t
        .typeText(page.emailAddress, 'ishu22g@gmail.com')
        .typeText(page.password, 'rabrakha')
        .click(page.loginButton)
        .click(page.clubSelectButton)
        .click(page.surreyScottRoadClub)
        .click(page.dateSelectButton)
        .click(page.latestDate)
        .click(page.latestSlot)
        .click(page.agreeToSlot);
});
