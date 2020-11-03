const model = {
    app: {
        currentPoll: 1,
        loggedInUser: 'per',
        currentPage: 'createPoll',
        chosenPoll: null,
    },

    users: [
        { username: 'per', name: 'Per', password: '123' },
        { username: 'pål', name: 'Pål', password: '123' },
        { username: 'espen', name: 'Espen', password: '123', isAdmin: true },
    ],

    inputs: {
        createPoll: {
            pollId: null,
            newAlternative: '',
            question: 'Hvem er den tøffeste læreren ved GET Academy?',
            options: ['Geir', 'Eskil', 'Terje'],
            usersCanAddAlternatives: true,
        },
    },

    polls: [
        {
            id: 0,
            createdPollsBy: 'Henning',
            openPoll: true,
            usersCanAddAlternatives: false,
            question: 'hva heter mannen til Therese?',
            options: ['Geir', 'Eskil', 'Henning', 'Terje'],
            votes:{
                per: 'Henning',
                pål: 'Geir',
                espen: 'Eskil',
            }
        },
        {
            id: 1,
            createdBy: 'per',
            isOpen: true,
            usersCanAddAlternatives: true,
            question: 'Liker du å spise is?',
            options: ['Ja', 'Nei'],
            votes: {
                per: 'Ja',
                pål: 'Ja',
                espen: 'Nei',
            }
        }]
    };

