import { Selector } from 'testcafe';

export default class Page {
    constructor () {
        this.emailAddress          = Selector('#emailaddress');
        this.password              = Selector('#password');
        this.loginButton           = Selector('#loginButton');


        this.clubSelectButton      = Selector('#btn_club_select');
        this.surreyScottRoadClub   = Selector('#club_5B914C6F-487A-46FB-8D25-897F0DB110DB');

        this.dateSelectButton       = Selector('#btn_date_select');
        this.latestDate             = Selector('[id^="date_2020"]')
                                        .nth(-1);
        
        this.latestSlot             = Selector('[id^="book_"]')
                                        .nth(0);
        this.agreeToSlot            = Selector('#dialog_book_yes');
    }
}