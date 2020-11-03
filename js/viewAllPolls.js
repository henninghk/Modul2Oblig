function updateAllVotePage(){


const modelPolls = model.polls;
    
    
    document.getElementById('app').innerHTML = `<h1>Undersøkelser</h1>`
    

    if (modelPolls === null) {
        document.getElementById('app').innerHTML = `
        Ingen undersøkelser funnet. Klikk "lag ny" for å lage en.`
    } else {
        modelPolls.forEach(poll => {

            document.getElementById('app').innerHTML += `
            <br/>
            <h3>${poll.question}</h3>
            <button id="${poll.id+1}"onclick="pollDetails(${poll.id})">Vis/Endre</button>

            Klikk her for å redigere
            `  
        });
    }
}

