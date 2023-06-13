const regForName = /^[а-яёa-z]+(?:[-]{1}[а-яёa-z]*)?$/i;
const reqForEmail = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/;

const tabletResize = 1096;
const mobileResize = 684;
const defaultNumbersOfCardsFull = 12;
const defaultNumbersOfCardsTablet = 8;
const defaultNumbersOfCardsMobile = 5;
const defaultNumbersOfCardsToAddFull = 3;
const defaultNumbersOfCardsToAddTablet = 2;
const defaultNumbersOfCardsToAddMobile = 5;

export {
  regForName,
  reqForEmail,
  tabletResize,
  mobileResize,
  defaultNumbersOfCardsFull,
  defaultNumbersOfCardsTablet,
  defaultNumbersOfCardsMobile,
  defaultNumbersOfCardsToAddFull,
  defaultNumbersOfCardsToAddTablet,
  defaultNumbersOfCardsToAddMobile,
};