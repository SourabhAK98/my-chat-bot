// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

const {
    ActivityHandler
} = require('botbuilder');

class MyBot extends ActivityHandler {
    // eslint-disable-next-line no-useless-constructor
    constructor() {
        super();
    }

    async getStatus() {
        
        }

    async onTurn(turnContext) {
        const text = turnContext.activity.text;
        // Check API
        if (/^Check API.*/i.test(text)) {
            // Retrieve the news
            const messages = await this.getStatus();
            for (const message of messages) {
                turnContext.sendActivity(message);
            }
        } else if (/^help$/i.test(text)) {
            // Help text
            turnContext.sendActivity('You can ask me for the news with `Check API`');
        } else {
            // Do nothing
        }
    }
}

module.exports.MyBot = MyBot;
