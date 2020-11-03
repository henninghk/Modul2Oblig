function updateViewVotePage() {

    document.getElementById('app').innerHTML = `        

        <h3>Stem</h3>
        ${createVoteButtonsHtml()}

    `;
}

function createVoteButtonsHtml() {
    const poll = getCurrentPoll();
    const user = model.app.loggedInUser;
    const currentVote = poll.votes[user];

    let html = '';
    for (let option of poll.options) {
        const currentVoteInfo = option === currentVote ? `Du har stemt på <b>${option}</b>` : '';
        html += `<button onclick="vote('${option}')">${option}</button> ${currentVoteInfo}<br/>`;
    }
    return html;
}
function createVotesHtml() {
    let html = '';
    let i = 0;
    for (option of model.inputs.createPoll.options) {
        html += `<li id="${i}">${option} <button class="far fa-times-circle" onclick="removeAlternative(${i})"></button> </li> <br>`
        i++
    }
    return html
}