function vote(option) {
    const poll = getCurrentPoll();
    const user = model.app.loggedInUser;
    poll.votes[user] = option;
    updateView();
}function pollDetails(id) {
    model.inputs.createPoll = model.polls[id];
    updateViewCreateVotePage();
}