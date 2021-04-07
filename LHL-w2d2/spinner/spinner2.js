const printSpinner = (maxRepeat, interval) => {
    const writings = ['\r|   ', '\r/   ', '\r-   ', '\r\\   '];
    let repeated = 1;
    let timeTrack = interval;

    while (repeated <= maxRepeat) {
        writings.forEach(writing => {
            setTimeout(() => {
                process.stdout.write(writing);
              }, timeTrack);
              timeTrack = timeTrack + interval;
        });
        repeated = repeated + 1;
    }
};

printSpinner(5, 200);