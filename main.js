function createGame(player1, hour, player2) {
  return `
    <li>
      <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}">
      <button>${hour}</button>
      <img src="./assets/icon-${player2}.svg" alt="Bandeira da ${player2}"/>
    </li>
  `
}

function createCard(date, day, games) {
  return `
  <div id="card">
          <h2>${date} <span>${day}</span></h2>
          <ul>
           ${games} 
          </ul>
        </div>
  `
}

function createName(name1, name2) {
  return `
      <li class="name">
        <p>${name1}</p>
        <p>${name2}</p>
      </li> 
  `
}

document.querySelector('#app').innerHTML = `
  <header>
        <img src="./assets/logo.svg" alt="Logo da NLW">
      </header>
      <main id="cards">
      
      ${createCard("24/11", "quinta",
        createGame('switzerland', '07:00', 'cameroon') +
        createName('Suíça', 'Camarões') + 
        createGame('uruguay', '10:00', 'southkorea') +
        createName('Uruguai', 'Coréia do sul') + 
        createGame('portugal', '13:00', 'ghana') +
        createName('Portugal', 'Gana') + 
        createGame('brazil', '16:00', 'serbia') +
        createName('Brasil *', 'Sérvia') 
      )}
      ${createCard("28/11", "segunda",
      createGame('cameroon', '07:00', 'serbia') +
      createName('Camarões', 'Sérvia') + 
      createGame('southkorea', '10:00', 'ghana') +
      createName('Coréia do sul', 'Gana') + 
        createGame('switzerland', '13:00', 'brazil') +
        createName('Suíça', 'Brasil *') +  
        createGame('portugal', '16:00', 'uruguay') +
        createName('Portugal', 'Uruguai') 
      )} 
      ${createCard("02/12", "sexta",
        createGame('ghana', '12:00', 'uruguay') +
        createName('Gana', 'Uruguai') + 
        createGame('southkorea', '12:00', 'portugal') +
        createName('Coréia do sul', 'Portugal') + 
        createGame('serbia', '16:00', 'switzerland') +
        createName('Sérvia', 'Suíça') + 
        createGame('brazil', '16:00', 'cameroon') +
        createName('Brasil *', 'Camarões') 
      )} 
      </main>
`