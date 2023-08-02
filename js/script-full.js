
const swiper = new Swiper('.swiper', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    speed: 400,
    spaceBetween: 100,
    loop:true,
    slidesPerView: 1
});


let header = document.getElementById('header');
let Top = document.getElementById('top');


function toggleNav(){
    header.classList.toggle('active');
};

$('.sec').click(function(){
    if($("#header").hasClass('active')){
        header.classList.remove('active');
    }
});



window.onresize = function(){
    let innerWidth = window.innerWidth;
    innerWidth < "1024";
    let elHea = document.querySelector('#header');
    elHea.classList.remove('active');
};



new fullpage('#fullpage', {
    //options here
    scrollOverflow: false,
    sectionsColor: ['#ffedde','#2ca6dc', '#2895cb', '#2485ba', '#1c6598'],
    afterLoad: 
        function(origin, destination, direction, trigger){
            if(destination.index==0){
                header.classList.remove('acti');
                Top.classList.remove('acti');
            }else{
                header.classList.add('acti');
                Top.classList.add('acti');
            };
        },
	},
);


