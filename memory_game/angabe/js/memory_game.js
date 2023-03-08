// interval id to call the increase_counter() function
var interval_id;
var NUM_CARDS = 16;
var cards_array = [];
var images = [];
var index_chosen_cards = [];
var found_cards = [];
var tries;
var play_area = document.getElementById("spielbereich");

// sets up the game
function start_game() {

    // show the current player's name
    show_player_name();

    // start the time counter
    interval_id = setInterval(increase_counter, 1000);

    // create 16 cards
    create_card_deck();

    // set tries to 0
    tries = 0;
}

function shuffle_cards() {
    var shuffled = shuffle(cards_array);
    
}

// shuffles an array
function shuffle(array) {
    let currentIndex = array.length,  randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {

      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }

    return array;
}

// asks for the player's name and sets it to the session
function set_new_player() {
    player_name = prompt("Enter your name to play:");
    document.getElementById("player_name").innerHTML = player_name;
    sessionStorage.setItem('player_name', player_name);
}

// asks for the player's name if there's no player_name set on the session
function show_player_name() {
    // get this player's name in this session
    let player_name = sessionStorage.getItem('player_name');

    // if session is not set yet, set new player
    if (player_name === null) {
        set_new_player();
    }
    // show the player's name
    else {
        document.getElementById("player_name").innerHTML = player_name;
    }
}

// creates a deck of NUM_CARDS cards and adds them to cards_array
function create_card_deck() {

    var card;

    // create NUM_CARDS cards and add them to play area
    for (let index = 0; index < NUM_CARDS; index++) {
        // get an image for this card
        var image_id = (index % 8) + 1;
        var image = "./pics/card" + (image_id) + ".png";

        // create a new card with a blank image and the index id
        card = create_card(index);

        // add corresponding image with this card's index
        images[index] = image;

        // add blank card to the play area
        play_area.append(card);

    }

    // get node list with all cards
    var node_list = document.querySelectorAll('.karte'); // returns a node list wth all elements of class "karte"

    // transform node list to array for easier manipulation
    cards_array = Array.from(node_list);

    // add click event for each card
    for(let i = 0; i < NUM_CARDS; i++) {
        //console.log("index -> " + i);
        var card = cards_array[i];
        //console.log(card);
        card.addEventListener('click', show_card);
    }

}

// creates a card with blank image
function create_card(index) {
    var unique_id = "card" + index;
    var card = document.createElement("img");
    card.className = "karte";

    // set the image as blank
    card.setAttribute("src", "./pics/memoryBg.png");

    // set a unique id for the card
    card.setAttribute("id", unique_id);

    // set a data-id attribute as the index
    card.setAttribute("data-id", index);

    return card;
}

// increases the counter element by 1
function increase_counter() {
    var counter_element = document.getElementById("counter");
    var current = parseFloat(counter_element.innerHTML);
    var next = current + 1;
    counter_element.innerHTML = next;
}

// stops the time counter
function stop_counter() {
    clearInterval(interval_id);
}

// shows the clicked card
function show_card() {

    var id = this.getAttribute("id");
    var index = this.getAttribute("data-id");

    // add this card's index to the chosen cards
    index_chosen_cards.push(index);

    // get this card's image
    var image = images[index];

    // set card to show the image
    var card = document.getElementById(id);
    card.setAttribute("src", image);

    // check if this is the second card to be chosen and if so, check if chosen cards are a match
    if (index_chosen_cards.length === 2) {
        setTimeout(is_a_match, 500);
    }
}

// checks if chosen cards match
function is_a_match() {
    // get cards' index
    var first_card_index = index_chosen_cards[0];
    var second_card_index = index_chosen_cards[1];

    // get images
    var first_image = images[first_card_index];
    var second_image = images[second_card_index];

    // get cards elements
    var first_card = document.getElementById("card" + first_card_index);
    var second_card = document.getElementById("card" + second_card_index);


    if (first_image === second_image) {
        // set both cards as found
        first_card.src = "./pics/memoryBgI.png";
        second_card.src = "./pics/memoryBgI.png";
        // add these cards to the found cards array
        found_cards.push(index_chosen_cards);
    }
    else {
        // set cards back to blank image
        first_card.src = "./pics/memoryBg.png";
        second_card.src = "./pics/memoryBg.png";
        // update tries
        tries++;
        document.getElementById("attempts").innerHTML = tries;
    }

    // clear chosen cards
    index_chosen_cards = [];
}



