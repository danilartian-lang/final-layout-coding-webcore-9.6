import '../scss/style.scss'
import './swiper.js';


const menuBtn = document.querySelector('.header__button--open')
const closeBtn = document
  .querySelector('.sidebar__icon--close')
  .closest('.sidebar__btn')

const sidebar = document.querySelector('.sidebar')
const overlay = document.querySelector('.overlay')

const tabletQuery = window.matchMedia('(min-width:768px)')
const desktopQuery = window.matchMedia('(min-width: 1120px)')

function openSidebar() {
  if (!desktopQuery.matches){
  sidebar.classList.add('sidebar--active')
  overlay.classList.add('overlay--active')
}}

function closeSidebar() {
    sidebar.classList.remove('sidebar--active')
    overlay.classList.remove('overlay--active')
  }


menuBtn.addEventListener('click', openSidebar)
closeBtn.addEventListener('click', closeSidebar)
overlay.addEventListener('click', closeSidebar)

tabletQuery.addEventListener('change', closeSidebar)
desktopQuery.addEventListener('change', closeSidebar)


const mainInfo = document.querySelector ('.main__info');
const btnExpand = document.querySelector ('.btn-expand')
const btnExpandText = document.querySelector ('.btn-expand__text')

btnExpand.addEventListener ('click', () => {
  const isExpanded = mainInfo.classList.toggle ('main__info--expanded');
  if (isExpanded) {
    btnExpandText.textContent = 'Скрыть';
  } else {
    btnExpandText.textContent = 'Показать всё';
  }
})

const brandsSection = document.querySelector('.brands');

const brands = brandsSection.querySelector('.swiper-wrapper--expand');
const btnExpandBrands = brandsSection.querySelector('.btn-expand');
const expandText = btnExpandBrands.querySelector('.btn-expand__text');

btnExpandBrands.addEventListener('click', () => {
  const isBrandsExpanded = brands.classList.toggle(
    'swiper-wrapper--expanded'
  );

  if (isBrandsExpanded) {
    expandText.textContent = 'Скрыть';
  } else {
    expandText.textContent = 'Показать всё';
  }
});


const devicesSection = document.querySelector('.devices')

const devices = devicesSection.querySelector('.swiper-wrapper')
const devicesExpandBtn = devicesSection.querySelector('.btn-expand')
const devicesExpandText = devicesSection.querySelector('.btn-expand__text')

devicesExpandBtn.addEventListener('click', ()=> {
  const isDevicesExpanded = devices.classList.toggle('swiper-wrapper--expanded')
  if (isDevicesExpanded) {
    devicesExpandText.textContent = 'Скрыть';
  } else {
    devicesExpandText.textContent = 'Показать всё';
  }
})
