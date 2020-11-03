function getCurrentPoll() {
    const pollId = model.app.currentPoll;

    for (let poll of model.polls) {
        if (poll.id === pollId) return poll;
    }
    return null;
}
function checkIfUserCanAddOption() {
    model.inputs.createPoll.usersCanAddAlternatives === true ? model.inputs.createPoll.usersCanAddAlternatives = false : model.inputs.createPoll.usersCanAddAlternatives = true;
    updateView();}
    function checkVotes() {


        model.polls[0].votes.reduce(function(sums, entry) {
            sums[entry]
            } )
    
            updateView()}
