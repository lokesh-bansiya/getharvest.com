let container1 = document.getElementById("first-wrapper");

let headline1 = document.createElement("h1");
headline1.innerText = "See how Harvest helps teams like yours thrive";
headline1.setAttribute("class","headline1");

let headline2 = document.createElement("h3");
headline2.innerText = "Teams of all sizes, across industries, and around the world track time with Harvest.";
headline2.setAttribute("class","headline2");

let trackList = [
    {
        num:"70,000+",
        cus:"customers",
        image:"https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/icons/illo-70-person.svg",
    },
    {
        num:"2 billion",
        cus:"hours tracked",
        image:"https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/icons/illo-70-keep.svg",
    },
    {
        num:"19.6 million",
        cus:"invoices paid",
        image:"https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/icons/illo-70-money.svg",
    }
];

let trackDiv = document.createElement("div");
trackDiv.setAttribute("class","trackDiv");


let upperData = (data) => {

    data.forEach(({num,cus,image}) => {

        let factMain = document.createElement("div");
        factMain.setAttribute("class","factMain");

        let factdiv = document.createElement("div");
        factdiv.setAttribute("class","factdiv");

        let imgdiv = document.createElement("div");
        imgdiv.setAttribute("class","imgdiv");

        let factnum = document.createElement("h2");
        factnum.innerText = num;
        factnum.setAttribute("class","factnum");

        let factcus = document.createElement("h4");
        factcus.innerText = cus;
        factcus.setAttribute("class","factcus");

        let factimg = document.createElement("img");
        factimg.src = image;
        factimg.setAttribute("class","factimg");

        factdiv.append(factnum,factcus);
        imgdiv.append(factimg);

        factMain.append(factdiv,imgdiv);

        trackDiv.append(factMain);

    })

}

upperData(trackList);

let storyDiv = document.createElement("div");
storyDiv.setAttribute("class","storyDiv");

let storyDivMain = document.createElement("div");
storyDivMain.setAttribute("class","storyDivMain");

let storyImageDiv = document.createElement("div");
storyImageDiv.setAttribute("class","storyImageDiv");

let storyFeatureDiv = document.createElement("div");
storyFeatureDiv.setAttribute("class","storyFeatureDiv");

let storyImageDiv_img = document.createElement("img");
storyImageDiv_img.src = "https://www.getharvest.com/hs-fs/hubfs/customer-profile.jpg?width=1181&name=customer-profile.jpg";
storyImageDiv_img.setAttribute("class","storyImageDivimg");

storyImageDiv.append(storyImageDiv_img);

let storyFeatureDiv_p = document.createElement("p");
storyFeatureDiv_p.innerText = "Featured Story";
storyFeatureDiv_p.setAttribute("class","storyFeatureDiv_p");

let storyFeatureDiv_h = document.createElement("h3");
storyFeatureDiv_h.innerText = "Startup studio Dovetail tracks time with Harvest to build trust with clients.";
storyFeatureDiv_h.setAttribute("class","storyFeatureDiv_h");

let storyFeatureDiv_a = document.createElement("button");
storyFeatureDiv_a.innerText = "Read customer story";
storyFeatureDiv_a.setAttribute("class","storyFeatureDiv_a");

storyFeatureDiv.append(storyFeatureDiv_p,storyFeatureDiv_h,storyFeatureDiv_a);

storyDivMain.append(storyImageDiv,storyFeatureDiv);
storyDiv.append(storyDivMain);

let logoDiv = document.createElement("div");
logoDiv.setAttribute("class","logoDiv");

let resource = document.createElement("div");
resource.setAttribute("data-global-resource-path","harvest-theme/templates/partials/customer-logos.html");

let customerLogo = document.createElement("div");
customerLogo.setAttribute("class","customerLogo");

let logo = document.createElement("div");
logo.setAttribute("class","logo");

let logoArr = [
    {
        img:"https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/customer-logos/featured-vw.svg?noresize",
    },
    {
        img:"https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/customer-logos/featured-aclu.svg?noresize",
    },
    {
        img:"https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/customer-logos/featured-conde.svg?noresize",
    },
    {
        img:"https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/customer-logos/featured-dell.svg?noresize",
    },
    {
        img:"https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/customer-logos/featured-amnesty.svg?noresize",
    },
    {
        img:"https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/customer-logos/featured-deloitte.svg?noresize",
    },
    {
        img:"https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/customer-logos/featured-lululemon.svg?noresize",
    },
    {
        img:"https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/customer-logos/featured-yale.svg?noresize",
    }
];

let AppendLogo = (data) => {

    data.forEach(({img}) => {
       
        let image = document.createElement("img");
        image.height = "60";
        image.src = img;


        logo.append(image);
    });

}

AppendLogo(logoArr);

customerLogo.append(logo);
resource.append(customerLogo);
logoDiv.append(resource);

container1.append(headline1,headline2,trackDiv,storyDiv,logoDiv);