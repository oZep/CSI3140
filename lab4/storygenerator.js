function storyGenerator(){
    var article = ["the", "a", "one", "some", "any"];
    var noun = ["boy", "girl", "dog", "town", "car"];
    var verb = ["drove", "jumped", "ran", "walked", "skipped"];
    var preposition = ["to", "from", "over", "under", "on"];
    
    var sentences = "";

    for (var i = 0; i < 20; i++){
        var firstword = article[Math.floor(Math.random() * article.length)] + " "
        firstword = firstword.charAt(0).toUpperCase() + firstword.slice(1);
        sentences += firstword;
        sentences += noun[Math.floor(Math.random() * noun.length)] + " ";
        sentences += verb[Math.floor(Math.random() * verb.length)] + " ";
        sentences += preposition[Math.floor(Math.random() * preposition.length)] + " ";
        sentences += article[Math.floor(Math.random() * article.length)] + " ";
        sentences += noun[Math.floor(Math.random() * noun.length)] + ". ";
    }

    var story = "Once upon a time...<br>" + sentences;

    story += "<br>THE END";

    document.write("<p>" + story + "</p>");
}

storyGenerator();