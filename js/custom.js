let footerToggle = $(".footer-links-wrapper h3");
console.log(footerToggle)

footerToggle.on("click", function (e) {
    e.preventDefault();
    
    $(".footer-links-wrapper ul").toggle();
    // for (i = 0; i <= footerToggle.length; i++){
    //     footerToggle[i];
    //     $(".footer-links-wrapper ul").toggle();
    // }

})
