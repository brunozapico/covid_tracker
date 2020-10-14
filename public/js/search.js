window.addEventListener('load', () => {
    let search_input = document.getElementById('country_input');
    let search_btn = document.getElementById('search_btn');
    let search_btn_small = document.getElementById('search_btn_small');

    search_btn.addEventListener('click', function(event) {
        if(search_input.value.length === 0) {
            event.preventDefault()
        };
    });

    search_btn_small.addEventListener('click', function(event) {
        if(search_input.value.length === 0) {
            event.preventDefault()
        };
    });
});