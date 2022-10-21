import { navbar, openMenu, closeMenu ,checklogin} from '../component/navbar.js';
console.log(navbar);
document.querySelector("header").innerHTML=navbar();
document.querySelector("#openmenu").addEventListener('click',openMenu);
document.querySelector("#closemenu").addEventListener('click',closeMenu);

import footer from '../component/footer.js';
console.log('footer:', footer);
document.querySelector("footer").innerHTML = footer();

document.getElementById('orange').addEventListener('click',()=>{
    window.location.href='index.html';
})

document.getElementById('black').addEventListener('click',()=>{
    window.location.href='index.html';
})

checklogin();

let container = document.querySelector('#container');
let container2 = document.querySelector('#container2');
let container3 = document.querySelector('#container3');
let container4 = document.querySelector('#container4');
let container5 = document.querySelector('#container5');
let container6 = document.querySelector('#container6');
let container7 = document.querySelector('#container7');
let container8 = document.querySelector('#container8');
let container9 = document.querySelector('#container9');
let container10 = document.querySelector('#container10');

let trackData = [{
    image: 'https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/features/illo-nav-time.svg',
    para: 'Time tracking',
    arrow: 'https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/icons/arrow-down-24.svg'
},
{
    image: 'https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/features/illo-nav-report.svg',
    para: 'Reports & analysis',
    arrow: 'https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/icons/arrow-down-24.svg'
},
{
    image: 'https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/features/illo-nav-invoice.svg',
    para: 'Invoicing & payments',
    arrow: 'https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/icons/arrow-down-24.svg'
}
];

let sectionfun1 = (dataa) => {
    let wrapper1 = document.createElement("div");
    let heading = document.createElement("h1");
    heading.setAttribute('class', 'head');
    heading.innerText = "Everything your team needs to keep ticking";
    let para = document.createElement('h3');
    para.setAttribute('class', 'para');
    para.innerText = 'Intuitive time tracking and powerful insights that help your team thrive.'

    let div1 = document.createElement('div');
    div1.setAttribute('id', 'features-navigation');

    dataa.forEach(elem => {

        let child1Div = document.createElement('div');
        child1Div.setAttribute('class', 'childDiv');
        child1Div.style.border = "1px solid red";
        child1Div.addEventListener('click',myfun);
        function myfun(){
        if(elem.para == 'Time tracking'){
            window.location.href="#container2";
        }else if(elem.para == 'Reports & analysis'){
            window.location.href="#container5";
        }else if(elem.para == 'Invoicing & payments'){
            window.location.href="#container8";
        }
        }
        let littleSec1 = document.createElement('div');
        littleSec1.setAttribute('class', 'littlesec');
        let image1 = document.createElement("img");
        image1.setAttribute('class', 'imag');
        image1.setAttribute('src', elem.image);
        let content1 = document.createElement("h3");
        content1.setAttribute('class', 'content');
        content1.innerText = elem.para;
        let littleSec2 = document.createElement('div');
        littleSec2.setAttribute('class', 'littlesec2');
        let arrowImg1 = document.createElement('img');
        arrowImg1.setAttribute('src', elem.arrow);
        littleSec1.append(image1, content1);
        littleSec2.append(arrowImg1);
        child1Div.append(littleSec1, littleSec2);
        div1.append(child1Div);

        wrapper1.append(heading, para, div1);
        container.append(wrapper1);
    });
}
sectionfun1(trackData);

let sectionfun2 = () => {
    let wrapper2 = document.createElement('div');
    wrapper2.setAttribute('class', 'wrapper2');
    let childsec1 = document.createElement('div');
    childsec1.setAttribute('class', 'childsec1');
    let head = document.createElement('h2');
    head.innerText = 'Time tracking';
    head.setAttribute('class', 'headh2');
    let p2 = document.createElement('p');
    p2.innerText = 'An intuitive, lightweight time tracking experience that’s easy to adopt and use every day.';
    p2.setAttribute('class', 'p2');
    let btn2 = document.createElement('button');
    btn2.innerText = 'Start your free trial';
    btn2.addEventListener('click',funbtn);
    function funbtn(){
        window.location.href="signup.html";
    }
    btn2.setAttribute('class', 'btn2');
    childsec1.append(head, p2, btn2);
    let childsec2 = document.createElement('div');
    let image = document.createElement('img');
    image.setAttribute('src', 'https://www.getharvest.com/hs-fs/hubfs/screenshot-features-timesheets.png?width=787&name=screenshot-features-timesheets.png');
    image.setAttribute('class', 'image');
    childsec2.append(image);
    wrapper2.append(childsec1, childsec2);
    container2.append(wrapper2);
}
sectionfun2();

let data1 = [{
    image: "https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/features/illo-80-stopwatch.svg",
    head: "Track time from browser, desktop, and mobile",
    para: 'Make it as easy as possible for your team to capture their time with dedicated apps across devices.',
},
{
    image: "https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/features/illo-80-integrations.svg",
    head: "Integrated with your workflow",
    para: 'Harvest integrates with the tools your team knows and loves — capture time the way your team already works.',
},
{
    image: "https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/features/illo-80-reminder.svg",
    head: "Custom reminders for consistent time tracking",
    para: 'Create automated reminders to help your team track time regularly and accurately.',
}];
let sectionfun3 = (data) => {
    let wrapper3 = document.createElement('div');
    wrapper3.setAttribute('class', 'wrapper3');
    data.forEach(elem => {
        let childsec = document.createElement('div');
        childsec.setAttribute('class', 'childsec');
        let smallchild = document.createElement('div');
        smallchild.setAttribute('class', 'smallchild');
        // childsec.style.border='1px solid red';
        let image4 = document.createElement('img');
        image4.setAttribute('src', elem.image);
        let headh4 = document.createElement('h4');
        headh4.setAttribute('class', 'headh4');
        headh4.innerText = elem.head;
        let p3 = document.createElement('p');
        p3.setAttribute('class', 'p3');
        p3.innerText = elem.para;
        smallchild.append(image4, headh4);
        childsec.append(smallchild, p3);
        wrapper3.append(childsec);
        container3.append(wrapper3);
    });
}
sectionfun3(data1);

let sectionfun4 = () => {
    let wrapper4 = document.createElement('div');
    wrapper4.setAttribute('class', 'wrapper4');
    let portfoliosec1 = document.createElement('div');
    portfoliosec1.setAttribute('class', 'portsec1');
    let image6 = document.createElement('img');
    image6.setAttribute('class', 'image6');
    image6.setAttribute('src', 'https://www.getharvest.com/hs-fs/hubfs/site-images/features-quote-1.jpg?width=375&name=features-quote-1.jpg');
    portfoliosec1.append(image6);
    let portfoliosec2 = document.createElement('div');
    portfoliosec2.setAttribute('class', 'portsec2');
    let comment = document.createElement('p');
    comment.setAttribute('class', 'comment');
    comment.innerText = 'Harvest’s easy, clean time tracking allows us to focus on the tough engineering problems where we bring value to our clients.';
    let author_name = document.createElement('h3');
    author_name.setAttribute('class', 'authorName');
    author_name.innerText = 'Genevieve Laing';
    let occupation = document.createElement('p');
    occupation.setAttribute('class', 'occup');
    occupation.innerText = 'Director of Engineering, Cooper Perkins';
    portfoliosec2.append(comment, author_name, occupation);
    wrapper4.append(portfoliosec1, portfoliosec2);
    container4.append(wrapper4);
}
sectionfun4();

let sectionfun5 = () => {
    let wrapper2 = document.createElement('div');
    wrapper2.setAttribute('class', 'wrapper2');
    let childsec1 = document.createElement('div');
    childsec1.setAttribute('class', 'childsec1');
    let head = document.createElement('h2');
    head.innerText = 'Reports & analysis';
    head.setAttribute('class', 'headh2');
    let p2 = document.createElement('p');
    p2.innerText = 'A wide selection of visual reports keep projects running smoothly and your team supported.';
    p2.setAttribute('class', 'p2');
    let btn2 = document.createElement('button');
    btn2.innerText = 'Start your free trial';
    btn2.addEventListener('click',funbtn);
    function funbtn(){
        window.location.href="signup.html";
    }
    btn2.setAttribute('class', 'btn2');
    childsec1.append(head, p2, btn2);
    let childsec2 = document.createElement('div');
    let image = document.createElement('img');
    image.setAttribute('src', 'https://www.getharvest.com/hs-fs/hubfs/screenshot-features-projects.png?width=787&name=screenshot-features-projects.png');
    image.setAttribute('class', 'image');
    childsec2.append(image);
    wrapper2.append(childsec1, childsec2);
    container5.append(wrapper2);
}
sectionfun5();

let data12 = [{
    image: "https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/features/illo-80-budget.svg",
    head: "Keep budgets on target",
    para: 'Harvest updates budgets as your team tracks time, so you can keep your projects on track and profitable.',
},
{
    image: "https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/features/illo-80-capacity.svg",
    head: "Visualize team capacity",
    para: 'See who’s overworked and who’s under-utilized at a glance with capacity reporting.',
},
{
    image: "https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/features/illo-80-costs.svg",
    head: "Understand costs",
    para: 'Keep track of internal costs and review past project data to inform future project scope and estimates.',
},
{
    image: "https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/features/illo-80-analyze.svg",
    head: "Analyze time spent",
    para: 'See which projects and tasks are consuming your team’s time and impacting costs.',
},
{
    image: "https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/features/illo-80-details.svg",
    head: "Dive into the details",
    para: 'Powerful filters give you the detailed data needed to understand where your time goes and plan what’s next.',
},
{
    image: "https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/features/illo-80-data.svg",
    head: "Do more with your data",
    para: 'It’s easy to export data from Harvest into the reporting tools you already use to gain additional insights.',
},
];
let sectionfun6 = (data12) => {
    let wrapper3 = document.createElement('div');
    wrapper3.setAttribute('class', 'wrapper3');
    data12.forEach(elem => {
        let childsec = document.createElement('div');
        childsec.setAttribute('class', 'childsec');
        let smallchild = document.createElement('div');
        smallchild.setAttribute('class', 'smallchild');
        // childsec.style.border='1px solid red';
        let image4 = document.createElement('img');
        image4.setAttribute('src', elem.image);
        let headh4 = document.createElement('h4');
        headh4.setAttribute('class', 'headh4');
        headh4.innerText = elem.head;
        let p3 = document.createElement('p');
        p3.setAttribute('class', 'p3');
        p3.innerText = elem.para;
        smallchild.append(image4, headh4);
        childsec.append(smallchild, p3);
        wrapper3.append(childsec);
        container6.append(wrapper3);
    });
}
sectionfun6(data12);

let sectionfun7 = () => {
    let wrapper4 = document.createElement('div');
    wrapper4.setAttribute('class', 'wrapper4');
    let portfoliosec1 = document.createElement('div');
    portfoliosec1.setAttribute('class', 'portsec1');
    let image6 = document.createElement('img');
    image6.setAttribute('class', 'image6');
    image6.setAttribute('src', 'https://www.getharvest.com/hs-fs/hubfs/site-images/features-quote-2.jpg?width=375&name=features-quote-2.jpg');
    portfoliosec1.append(image6);
    let portfoliosec2 = document.createElement('div');
    portfoliosec2.setAttribute('class', 'portsec2');
    let comment = document.createElement('p');
    comment.setAttribute('class', 'comment');
    comment.innerText = 'We really focus on work-life balance in remote work… Time tracking reveals if somebody is overburdened and that becomes an immediate conversation.';
    let author_name = document.createElement('h3');
    author_name.setAttribute('class', 'authorName');
    author_name.innerText = 'Noah Gedrich';
    let occupation = document.createElement('p');
    occupation.setAttribute('class', 'occup');
    occupation.innerText = 'CTO, Zehner';
    portfoliosec2.append(comment, author_name, occupation);
    wrapper4.append(portfoliosec1, portfoliosec2);
    container7.append(wrapper4);
}
sectionfun7();
let sectionfun8 = () => {
    let wrapper2 = document.createElement('div');
    wrapper2.setAttribute('class', 'wrapper2');
    let childsec1 = document.createElement('div');
    childsec1.setAttribute('class', 'childsec1');
    let head = document.createElement('h2');
    head.innerText = 'Invoicing & payments';
    head.setAttribute('class', 'headh2');
    let p2 = document.createElement('p');
    p2.innerText = 'Turn your team’s tracked time and expenses into invoices and collect payment quickly with integrated online payments.';
    p2.setAttribute('class', 'p2');
    let btn2 = document.createElement('button');
    btn2.innerText = 'Start your free trial';
    btn2.addEventListener('click',funbtn);
    function funbtn(){
        window.location.href="signup.html";
    }
    btn2.setAttribute('class', 'btn2');
    childsec1.append(head, p2, btn2);
    let childsec2 = document.createElement('div');
    let image = document.createElement('img');
    image.setAttribute('src', 'https://www.getharvest.com/hs-fs/hubfs/screenshot-features-invoices-1.png?width=787&name=screenshot-features-invoices-1.png');
    image.setAttribute('class', 'image');
    childsec2.append(image);
    wrapper2.append(childsec1, childsec2);
    container8.append(wrapper2);
}
sectionfun8();

let data3 = [{
    image: "https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/features/illo-80-invoice.svg",
    head: "Streamline your invoicing",
    para: 'Easily create and send accurate invoices using your team’s time and expenses already tracked in Harvest.',
},
{
    image: "https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/features/illo-80-payments.svg",
    head: "Get paid fast with online payments",
    para: 'PayPal and Stripe integrations let your clients quickly and conveniently pay invoices online.',
},
{
    image: "https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/features/illo-80-books.svg",
    head: "Keep your books up to date",
    para: 'Automatically copy your Harvest invoices and payments to QuickBooks Online or Xero for simplified accounting.',
}];
let sectionfun9 = (data) => {
    let wrapper3 = document.createElement('div');
    wrapper3.setAttribute('class', 'wrapper3')
    data.forEach(elem => {
        let childsec = document.createElement('div');
        childsec.setAttribute('class', 'childsec');
        let smallchild = document.createElement('div');
        smallchild.setAttribute('class', 'smallchild');
        // childsec.style.border='1px solid red';
        let image4 = document.createElement('img');
        image4.setAttribute('src', elem.image);
        let headh4 = document.createElement('h4');
        headh4.setAttribute('class', 'headh4');
        headh4.innerText = elem.head;
        let p3 = document.createElement('p');
        p3.setAttribute('class', 'p3');
        p3.innerText = elem.para;
        smallchild.append(image4, headh4);
        childsec.append(smallchild, p3);
        wrapper3.append(childsec);
        container9.append(wrapper3);
    });
}
sectionfun9(data3);

let sectionfun10 = () => {
    let wrapper2 = document.createElement('div');
    wrapper2.setAttribute('class', 'wrapper2');
    let childsec1 = document.createElement('div');
    childsec1.setAttribute('class', 'childsec_1');
    let head = document.createElement('h2');
    head.innerText = 'Start tracking time today';
    head.setAttribute('class', 'headh2');
    head.style.color = 'black';
    let p2 = document.createElement('p');
    p2.innerText = 'Join 70,000+ companies spending their time wisely with Harvest.';
    p2.setAttribute('class', 'p2content');
    let btn2 = document.createElement('button');
    btn2.innerText = 'Try Harvest free';
    btn2.addEventListener('click',funbtn);
    function funbtn(){
        window.location.href="signup.html";
    }
    btn2.setAttribute('class', 'btn2');
    childsec1.append(head, p2, btn2);
    let childsec_2 = document.createElement('div');
    childsec_2.setAttribute('class', 'childsec_2')
    let image = document.createElement('img');
    image.setAttribute('src', 'https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/illoglyphs/footer-illo-comp.svg');
    image.setAttribute('class', 'imagelast');
    childsec_2.append(image);
    wrapper2.append(childsec1, childsec_2);
    container10.append(wrapper2);
}
sectionfun10();
