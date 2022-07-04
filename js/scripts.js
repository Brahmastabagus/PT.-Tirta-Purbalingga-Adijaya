// $(function () {
//     $(document).scroll(function () {
//         var $nav = $(".sticky-top");
//         $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
//     });
// });

//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
    ) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


// Navbar link
const lists = document.querySelectorAll('.navbar-nav a');

lists.forEach((list) => {
    list.addEventListener("click",
        function () {
            var current = document
                .getElementsByClassName("active");

            current[0].className = current[0]
                .className.replace(" active", "");

            this.className += " active";
        });
})

// const rows = document.querySelectorAll(".produk .container .content .row")

// rows.forEach((row) => {
//     const headlist = row.querySelector(".Headlist")
//     const bodylist = row.querySelector(".Bodylist")
//     row.addEventListener('click', () => {
//         if (headlist.className == "Headlist d-flex align-items-center active") {
//             headlist.classList.remove("active")
//             bodylist.classList.add("d-none")
//         } else {
//             headlist.classList.add("active")
//             bodylist.classList.remove("d-none")
//         }
//         console.log(row.querySelector(".Headlist"))
//     })
// })
