/*
Choose your own adventure - branching tree
                        Choice 1            Choice 2                Choice 3                         Win/lose
Find the magic lamp     Go to attic    ->   Fight ghost - yes   ->  Search Old chest            ->      Win
                                                                ->  Search old cardboard box    ->      Lose
                                       ->   Fight ghost - no    ->  No choice                   ->      Lose       
                        
                        Go to basement ->   Fight zombie - yes  ->  Search closet               ->      Lose
                                                                ->  Search wooden crate         ->      Lose
                                            Fight zombie -no    ->  No choice                   ->      Lose

*/

let startGame = confirm("Are you ready to play?");
    while (startGame === true) {
        // Choice 1 - attic or basement?
        let choiceAtticOrBasement = prompt("Find the magic lamp hidden in the haunted house. Do you want to search the attic or the basement?").toLowerCase();
        if (choiceAtticOrBasement == "attic") {
                
            // Choice 1 Attic Choice 2 Fight ghost y/n?
                let choiceFightGhost = prompt("Do you want to fight the ghost - yes or no?").toLowerCase();
                if (choiceFightGhost == "yes"){
                   
                    // Choice 1 Attic Choice 2 Fight ghost - yes Choice 3 chest or box?
                    let choiceChestOrBox = prompt("You slayed the ghost! Do you wish to search the ornate chest or the cardboard box? Write chest or box").toLowerCase();
                    if (choiceChestOrBox == "chest"){
                        startGame = confirm("You found the magic lamp! you win! Do you want to play again?");
                    } else if (choiceChestOrBox == "box"){
                        startGame = confirm("Nothing here - you lose. Do you want to start over?");
                    } else {
                        startGame = confirm("Answer not recognized. Do you want to start over?");
                    }
                
                    // Choice 1 Attic Choice 2 fight ghost - no
                } else if (choiceFightGhost == "no"){
                    startGame = confirm("The ghost chased you down the stairs. Do you want to start over?");
                } else {
                    startGame = confirm("Answer not recognized. Do you want to start over?");
                }

            // Choice 1 basement
            }else if (choiceAtticOrBasement == "basement") {
                
                // Choice 1 basement Choice 2 fight zombie y/n?
                let choiceFightZombie = prompt("Do you want to fight the zombie - yes or no?").toLowerCase();
                if (choiceFightZombie == "yes"){
                    
                    // Choice 1 basement Choice 2 fight zombie - yes Choice 3 crate or closet?
                    let choiceClosetOrCrate = prompt("You slayed the zombie! Do you want to search the closet or the crate? Write closet or crate").toLowerCase();
                    if (choiceClosetOrCrate == "closet"){
                        startGame = confirm("Only skeletons in the closet - you lose. Do you want to start over?");
                    } else if (choiceClosetOrCrate == "crate"){
                        startGame = confirm("Nothing but old halloween costumes - you lose. Do you want to start over?");
                    } else {
                        startGame = confirm("Answer not recognized. Do you want to start over?");
                    }
                
                // Choice 1 basement Choice 2 fight zombie - no
                } else if (choiceFightZombie == "no"){
                    startGame = confirm("The zombie eats you. Do you want to start over?");
                } else {
                    startGame = confirm("Answer not recognized. Do you want to start over?");
                }

            // Choice 1 - misspelling/input not recognized
            } else {
                startGame = confirm("Answer not recognized. Do you want to start over?");
             }


} 
// startGame = false
alert("Game Over");


    