import { getElements, makeElements } from "./elements.js";

const body = getElements("body");
const header = makeElements("header");
const main = makeElements("main", { class: "main-content" });
const footer = makeElements("footer");
const leftbar = makeElements("aside", { class: "left-side" });
const rightbar = makeElements("aside", { class: "right-side" });

// Header and Navigation Bar
let title = makeElements("h1", { innerText: "Kevin Tucker", id: "title" });
let nav = makeElements("nav", { listStyle: "none" });
let navList = makeElements("ul", { id: "nav-list" });
const pages = ["Who Am I", "Projects", "Goals", "Contact"];
for (let i = 0; i < pages.length; i++) {
  let link = makeElements("a");
  let listItem = makeElements("li");
  link.append(pages[i]);
  if (pages[i] === "Who Am I") {
    link.href = "./pages/whoami.html";
  } else {
    link.href = `./pages/${pages[i].toLowerCase()}.html`;
  }
  listItem.append(link);
  navList.append(listItem);
}
nav.append(navList);
header.append(title, nav);
body.append(header);

// Footer
const linkedin = makeElements("img", {
  id: "linkedin",
  href: "https://www.linkedin.com/in/ktuck18",
  src: "https://img.icons8.com/ios/50/000000/linkedin-2--v2.png",
  alt: "Kevin's LinkedIn",
});
const instagram = makeElements("img", {
  id: "insta",
  href: "https://www.instagram.com/kevin__tucker",
  src: "https://img.icons8.com/ios/50/000000/instagram-new--v3.png",
  alt: "Kevin's Instagram",
});
const twitter = makeElements("img", {
  id: "twitter",
  href: "https://twitter.com/k5tuck",
  src: "https://img.icons8.com/ios/50/000000/twitter--v2.png",
  alt: "Kevin's Twitter",
});
let socialIcons = makeElements("div", { id: "icons" });
socialIcons.append(linkedin, instagram, twitter);

let copyContainer = makeElements("div", { id: "copy-container" });
let copyright = makeElements("p", {
  innerText: "Copyright 2020 Kevin Tucker.",
});
copyContainer.append(copyright);

// Sponsor
let socialIconSponsor = makeElements("div", { id: "icon-sponsor" });
const sponsorlink = {
  Instagram: {
    name: "Instagram",
    href: "https://icons8.com/icon/eRJfQw0Zs44S/instagram",
  },
  LinkedIn: {
    name: "Linkedin",
    href: "https://icons8.com/icon/EPGwLJfY346B/linkedin-2",
  },
  Twitter: {
    name: "Twitter",
    href: "https://icons8.com/icon/z6gJ8gyjaapn/twitter",
  },
};
let sponsor1 = makeElements("a", {
  innerHTML: sponsorlink.Instagram.name,
});
sponsor1.href = sponsorlink.Instagram.href;
let sponsor2 = makeElements("a", {
  innerHTML: sponsorlink.LinkedIn.name,
});
sponsor2.href = sponsorlink.LinkedIn.href;
let sponsor3 = makeElements("a", {
  innerHTML: sponsorlink.Twitter.name,
});
sponsor3.href = sponsorlink.Twitter.href;

// let sponsorInsta = makeElements("a", { href: sponsorlink.Instagram });
// sponsorInsta.append(sponsor[0]);
// let sponsorLinked = makeElements("a", { href: sponsorlink.LinkedIn });
// sponsorLinked.append(sponsor[1]);
// let sponsorTweet = makeElements("a", { href: sponsorlink.Twitter });
// sponsorTweet.append(sponsor[2]);
let sponsorMessage = makeElements("p");
sponsorMessage.append(
  `Icons Provided By Icons8: ${sponsor1}, ${sponsor2}, ${sponsor3}`
);
// socialIconSponsor.append(sponsorMessage);

footer.append(socialIcons, copyContainer, socialIconSponsor);
body.append(footer);
