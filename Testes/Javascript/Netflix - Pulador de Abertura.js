setInterval(() => {
    const skip = document.querySelector('.watch-video--skip-content-button');
    if ( skip ){
        skip.click();
        clearInterval()
    }
}, 250);

/*ou

var interval = setInterval(() => {
    const skip = document.querySelector('.watch-video--skip-content-button');
    if ( skip ){
        skip.click();
        clearInterval(interval)
    }
}, 250);
*/




