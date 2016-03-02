/**
 * Disable mouse right-click on page
 *
 * @since       1.0
 * @author      Arthur "Berserkr" Gareginyan <arthurgareginyan@gmail.com>
 */
document.addEventListener("contextmenu", function(e){
    e.preventDefault();
}, false);