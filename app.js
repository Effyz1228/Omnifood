const button = document.querySelector('.btn-mobile-nav');
const mainNav=document.querySelector('.header');

//add year update
const yearEl=document.querySelector('.year');
let currentYear=new Date().getFullYear();
yearEl.textContent=currentYear;

//open the mobile nav-link
button.addEventListener('click',()=>{
mainNav.classList.toggle('nav-open');
})

//add a smooth scroll function
const links=document.querySelectorAll('a:link');
links.forEach(link=>{
    link.addEventListener('click',e=>{
        e.preventDefault();

        const href =link.getAttribute('href');
        // console.log(href);

        if(href==="#"){
            window.scrollTo({
                top:0,
                behavior:'smooth'
            });
        }

        if(href!=="#" && href.startsWith('#')){
            const sectionEl=document.querySelector(href);
            sectionEl.scrollIntoView({behavior:"smooth"});
        }

        //close the mobile nav once it's clicked
        if(link.classList.contains('main--nav--link')){
            if(mainNav.classList.contains('nav-open'))
                mainNav.classList.remove('nav-open');
            }
    })   
})

const heroSectionEl= document.querySelector('.section-hero');
const obs= new IntersectionObserver(entries =>{
    const ent = entries[0];
    console.log(ent);

    ent.isIntersecting ? document.body.classList.remove('sticky') : document.body.classList.add('sticky');
},
    {
        root:null,
        threshold:0,
        rootMargin:"-80px"
    }
);

obs.observe(heroSectionEl);