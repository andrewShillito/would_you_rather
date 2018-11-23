const app = {
    App: {
        "/": {
            loggedIn: {
                nav: {
                    home,
                    newQ,
                    leaderBoard,
                    authedUserGreeting,
                    authedUserAvatar,
                    logoutLink
                },
                unansweredQs: {
                    qCard: {
                        questionAskerUsername,
                        avatar,
                        question,
                        btn: ("viewFull")
                    }, 
                    qCard,
                    qCard,
                },
                answeredQs: {
                    ansCard: {
                        questionAskerUsername,
                        avatar,
                        questionReport,
                    },
                    ansCard: {},
                },
            },
            loggedOut: {
                nav: {
                    home,
                    newQ,
                    leaderBoard,
                },
                signInComponent: {
                    welcomeMsg,
                    signInMsg,
                    appImg,
                    dropDownMenu, // or other method of selecting a user
                }, //also used as redirect from other nav if not logged in
            }, 
        },
        "/new": {
            newQComponent: {
                title,
                promptMsg,
                optionOneInput,
                optionTwoInput,
            },
        },
        "/leaderBoard": {
            userCard: {
                avatar,
                userID,
                numAnsQs,
                numCreatedQs,
                scoreComponent,
            },
            userCard: {} //etc...
        },
        "/logout": "redirect to home for signIn",
    }
}

const componentsNeeded = {
    App: {
        nav,
        "/": {
            list: {
                unAnsweredCards
            },
            list: {
                answeredCards
            }
        }
    }
}