let socket = io()

//main
$(document).ready(() => {
    console.log('page ready');
    $("#nav_bar").load('../components/navbar.html', () => {
        $('.scrollspy').scrollSpy()
    })
    $("#footer").load('../components/footer.html')
})