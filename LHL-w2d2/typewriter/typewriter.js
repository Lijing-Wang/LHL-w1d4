const sentence = "hello there from lighthouse labs";

const typeWriter = (sentence) => {
    const interval = 100;
    let timeTrack = interval;

    [...sentence].forEach((char, index) => {
        setTimeout(() => {
            process.stdout.write(char);
            if(index === sentence.length - 1) {
                process.stdout.write('\n \n \n');
            }
        }, timeTrack);
        timeTrack = timeTrack + interval;
    });

};

typeWriter(sentence);