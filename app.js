let darkMode = localStorage.getItem('darkMode');
const darkModeToggle = document.querySelector('#btn-toggle');

const headline = document.querySelector('.headline')


const enableDarkMode = () => {
    //add darkmode
    document.body.classList.add('darkmode');
    headline.classList.add('darkmode-hl');

    //update current mode to localStorage
    localStorage.setItem('darkMode', 'enabled');
}

const disableDarkMode = () => {
    //add darkmode
    document.body.classList.remove('darkmode');
    headline.classList.remove('darkmode-hl');

    //update current mode to localStorage
    localStorage.setItem('darkMode', null);
}

if(darkMode === 'enabled'){
    enableDarkMode();
}

darkModeToggle.addEventListener('click', () => {
    darkMode = localStorage.getItem('darkMode');

    if(darkMode !== 'enabled'){
        enableDarkMode();
        darkModeToggle.innerText = 'light mode';
        console.log(darkMode);
    }else{
        disableDarkMode();
        darkModeToggle.innerText = 'dark mode';
        console.log(darkMode);
    }
});