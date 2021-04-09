const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let intro = '{person} loves listening to {music} while {activity}, devouring {food} for {meal}, perfers {sport} over any other sport, and is amazing at {superpower}.';

rl.question('What\'s your name? Nicknames are also acceptable :)? ', (answer) => {
    intro = intro.replace('{person}', answer);

    rl.question('What\'s an activity you like doing? ', (answer) => {
        intro = intro.replace('{activity}', answer); 

        rl.question('What do you listen to while doing that? ', (answer) => {
            intro = intro.replace('{music}', answer); 
    
            rl.question('Which meal is your favourite (eg: dinner, brunch, etc.)', (answer) => {
                intro = intro.replace('{meal}', answer); 
        
                rl.question('What\'s your favourite thing to eat for that meal?', (answer) => {
                    intro = intro.replace('{food}', answer); 
            
                    rl.question('Which sport is your absolute favourite?', (answer) => {
                        intro = intro.replace('{sport}', answer); 
                
                        rl.question('What is your superpower? In a few words, tell us what you are amazing at!', (answer) => {
                            intro = intro.replace('{superpower}', answer); 
                            
                            console.log(intro);
                            rl.close();
                            
                        });
                    });
                    
                });
            });
            
        });

    });

});


// Tennis over any other sport, and is amazing at dropping mad puns at inopportune times