import '../scss/style.scss'
import './swiper.js';


const menuBtn = document.querySelector('.header__button--open')
const closeBtn = document
  .querySelector('.sidebar__icon--close')
  .closest('.sidebar__btn')

const sidebar = document.querySelector('.sidebar')
const overlay = document.querySelector('.overlay')

const tabletQuery = window.matchMedia('(min-width:768px)')
const desktopQuery = window.matchMedia('(min-width: 1440px)')

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
const mainInfoQuery = window.matchMedia ('(min-width: 768px)')
const mainInfoQueryDesktop = window.matchMedia ('(min-width:1440px)')

btnExpand.addEventListener ('click', () => {
  const isExpanded = mainInfo.classList.toggle ('main__info--expanded');
  if (isExpanded) {
    btnExpandText.textContent = 'Скрыть';
  } else {
    btnExpandText.textContent = 'Читать далее';
  }
})

mainInfoQuery.addEventListener('change', ()=> {
  mainInfo.classList.remove('main__info--expanded');
  btnExpandText.textContent = 'Читать далее';
})
mainInfoQueryDesktop.addEventListener('change', ()=>{
  mainInfo.classList.remove('main__info--expanded');
  btnExpandText.textContent = 'Читать далее';
})

const brandsSection = document.querySelector('.brands');

const brands = brandsSection.querySelector('.swiper-wrapper--expand');
const btnExpandBrands = brandsSection.querySelector('.btn-expand');
const expandText = btnExpandBrands.querySelector('.btn-expand__text');
const brandsInfoQuery = window.matchMedia ('(min-width: 768px)')
const brandsInfoQueryDesktop = window.matchMedia ('(min-width:1440px)')

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

brandsInfoQuery.addEventListener('change', ()=> {
  brands.classList.remove('swiper-wrapper--expanded');
  expandText.textContent = 'Показать всё';
})
brandsInfoQueryDesktop.addEventListener('change', ()=>{
  brands.classList.remove('swiper-wrapper--expanded');
  expandText.textContent = 'Показать всё';
})


const devicesSection = document.querySelector('.devices')

const devices = devicesSection.querySelector('.swiper-wrapper--exp')
const devicesExpandBtn = devicesSection.querySelector('.btn-expand')
const devicesExpandText = devicesSection.querySelector('.btn-expand__text')
const devicesInfoQuery = window.matchMedia ('(min-width: 768px)')
const devicesInfoQueryDesktop = window.matchMedia ('(min-width:1440px)')

devicesExpandBtn.addEventListener('click', ()=> {
  const isDevicesExpanded = devices.classList.toggle('swiper-wrapper--expanded')
  if (isDevicesExpanded) {
    devicesExpandText.textContent = 'Скрыть';
  } else {
    devicesExpandText.textContent = 'Показать всё';
  }
})

devicesInfoQuery.addEventListener('change', ()=> {
  devices.classList.remove('swiper-wrapper--expanded');
  devicesExpandText.textContent = 'Показать всё';
})
devicesInfoQueryDesktop.addEventListener('change', ()=>{
  devices.classList.remove('swiper-wrapper--expanded');
  devicesExpandText.textContent = 'Показать всё';
})
