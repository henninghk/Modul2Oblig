function createOrUpdatePoll() {
    const inputObj = model.inputs.createPoll;

    model.polls.push({
        isOpen: true,
        usersCanAddAlternatives: inputObj.usersCanAddAlternatives,
        question: inputObj.question,
        options: [...inputObj.options],
        votes: {},
    });
    updateView();
    
}

function addOption(oP){
    model.inputs.createPoll.options.push(oP)
    updateView();
}
  
function removeAlternative(id) {
    model.inputs.createPoll.options.splice(id, 1)
    document.getElementById(id).innerHTML = '';
    updateView();
}