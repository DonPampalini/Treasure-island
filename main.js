var choice1

var log = (text) => {
    const para = document.createElement("p");
    const textNode = document.createTextNode(text);
    para.appendChild(textNode);
  
    document.getElementById("entry").appendChild(para);
  };

log(`
    *******************************************************************************
              |                   |                  |                     |
     _________|________________.=""_;=.______________|_____________________|_______
    |                   |  ,-"_,=""     \`"=.|                  |
    |___________________|__"=._o\`"-._        \`"=.______________|___________________
              |                \`"=._o\`"=._      _\`"=._                     |
     _________|_____________________:=._o "=._."_.-="\`"=.__________________|_______
    |                   |    __.--" , ; \`"=._o." ,-"""-._ ".   |
    |___________________|_._"  ,. .\` \` \`\` ,  \`"-._"-._   ". '__|___________________
              |           |o\`"=._\` , "\` \`; .". ,  "-._"-._; ;              |
     _________|___________| ;\`-.o\`"=._; ." \` '\`."\ \` . "-._ /_______________|_______
    |                   | |o ;    \`"-.o\`"=._\`\`  '\` " ,__.--o;   |
    |___________________|_| ;     (#) \`-.o \`"=.\`_.--"_o.-; ;___|___________________
    ____/______/______/___|o;._    "      \`".o|o_.--"    ;o;____/______/______/____
    /______/______/______/_"=._o--._        ; | ;        ; ;/______/______/______/_ 
    ____/______/______/______/__"=._o--._   ;o|o;     _._;o;____/______/______/____ 
    /______/______/______/______/____"=._o._; | ;_.--"o.--"_/______/______/______/_ 
    ____/______/______/______/______/_____"=.o|o_.--""___/______/______/______/____ 
    /______/______/______/______/______/______/______/______/______/______/_____ / 
    *******************************************************************************
    `);
log("Welcome to Treasure Island.");
log("Your mission is to find the treasure.");

const calculateGame = () => {
    if (choice1 === "left") {
        log(`
              .-.                                    ,-.
            .-(   )-.                              ,-(   )-.
           (     __) )-.                        ,-(_      __)
            \`-(       __)                      (_    )  __)-'
              \`(____)-',                        \`-(____)-'
            - -  :   :  - -
                / \`-' \\
              ,    |   .
                   .
            `);
      
        const choice2 = prompt(
          "You walk towards a lake. Will you 'swim' or 'wait'?\n"
        ).toLowerCase();
        if (choice2 === "wait") {
          log(`
                  .-. ,-.
                '   (%%'\`.               __
                 \`-(%|%)% )             /()\\\`\`\`\\
                   (%\\K /,             /____\\____\\
                    %.\V/%.)           |n  n|.___|
                   (%\\%\`,)             | __ /_\\___\\
                     %| ,)   ____      | || |n|n_n|
                      | |  /____ "_     / |
                      | |_" .-. "_ "__,'  /
                     ,| |  |,' |  "__,...'  
                  `);
      
          const choice3 = prompt(
            "You see a house with three doors (red, blue, yellow). Which one do you choose?\n"
          ).toLowerCase();
          if (choice3 === "yellow") {
            log("You walked into the treasure room. YOU WIN!");
            log(`
                          .     '     ,
                          _________
                       _ /_|_____|_\\ _
                         '. \\   / .'
                           '.\\ /.'
                             '.'
                      `);
          } else {
            log("You slipped on a banana peel and fell into a trap. GAME OVER.");
          }
        } else {
          log("You drowned. Game over.");
        }
      } else {
        log("You walked into a trap. Game over.");
      }
}

document.getElementById('chooser').addEventListener('click', () => {
chooseFn()    
})

const chooseFn = () => {
    choice1 = prompt(
        "Which way you want to go? Type 'left' or 'right'.\n"
      ).toLowerCase();
      calculateGame()
}
