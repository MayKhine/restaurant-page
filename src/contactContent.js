import { createDiv } from "./createFunctions";
const contactContent = () => {
  const contactPage = createDiv("contactPage");

  const contactHeader = createDiv("header");
  const contactText = createDiv("header2");
  contactText.textContent = "Contact Us";
  contactHeader.appendChild(contactText);

  const contactBody = createDiv("body");

  const address = createDiv("address");
  const address1 = document.createElement("a");
  address1.href =
    "https://www.google.com/maps/place/My+Place+Hotel,+Bagan/@21.1911972,94.8914581,16z/data=!4m18!1m8!3m7!1s0x30b5e50393d8ca61:0x371a4717c3e89981!2sOld+Bagan,+Myanmar+(Burma)!3b1!8m2!3d21.1717271!4d94.8585458!16zL20vMDFnZzR2!3m8!1s0x30b5fbd700c47919:0xd1159d8d72762308!5m2!4m1!1i2!8m2!3d21.1913049!4d94.901842!16s%2Fg%2F11h5834wyt?entry=ttu";

  // const address2 = document.createElement("p");
  address1.textContent =
    "Corner of Anawrahta Road & Thiri Pyitsaya 4th St, Old Bagan 05232, Myanmar (Burma)";
  // address2.textContent = "Yoe Min Gyi tsp, Bagan, Myanmar";

  const time = createDiv("time");
  const time1 = document.createElement("p");
  const time2 = document.createElement("p");
  time1.textContent = "Monday - Friday: 11am - 8pm";
  time2.textContent = "Saturday - Sunday: 8am - 10pm";

  const ph = document.createElement("p");
  ph.textContent = "+1 001 002";

  address.appendChild(address1);
  // address.appendChild(address2);
  address.appendChild(ph);

  time.appendChild(time1);
  time.appendChild(time2);

  contactBody.appendChild(address);
  contactBody.appendChild(time);

  contactPage.appendChild(contactHeader);
  contactPage.appendChild(contactBody);

  return contactPage;
};

export default contactContent;
