const printDelay = () => {
    const source = '4311o th3r3 w0r1d';
    let timeTrack = 1000;
    source.split(' ').forEach(word => {
        setTimeout(() => {
            console.log(word)
        }, timeTrack);
        timeTrack = timeTrack + 1000;
    });
};


printDelay();