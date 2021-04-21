const body = document.querySelector("body");
    const navbar = document.querySelector(".navbar");
    const menu = document.querySelector(".menu-list");
    const menuBtn = document.querySelector(".menu-btn");
    const cancelBtn = document.querySelector(".cancel-btn");
    menuBtn.onclick = ()=>{
      menu.classList.add("active");
      menuBtn.classList.add("hide");
      cancelBtn.classList.add("show");
      body.classList.add("disabledScroll");
    }
    cancelBtn.onclick = ()=>{
      menu.classList.remove("active");
      menuBtn.classList.remove("hide");
      cancelBtn.classList.remove("show");
      body.classList.remove("disabledScroll");
    }

    window.onscroll = ()=>{
      this.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
    }

    mapboxgl.accessToken = 'pk.eyJ1IjoiYnJlYWR3aXRobGVncyIsImEiOiJja245MjBla24wOXlqMnBtdXJtc2wwM2g1In0.Jfn9R6UVTcT83wQPgIjUzg';
    var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/breadwithlegs/cknocxve4028a17n245jc8bmy'
    });
   