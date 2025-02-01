import"./assets/styles-CNmqzHeO.js";import{S as o}from"./assets/vendor-CgTBfC_f.js";const p=[{url:"https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",alt:"White and Black Long Fur Cat"},{url:"https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",alt:"Orange and White Koi Fish Near Yellow Koi Fish"},{url:"https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",alt:"Group of Horses Running"},{url:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",alt:"Alpine Spring Meadows"},{url:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",alt:"Nature Landscape"},{url:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",alt:"Lighthouse Coast Sea"},{url:"https://images.pexels.com/photos/355747/pexels-photo-355747.jpeg?dpr=2&h=750&w=1260",alt:"Green Pine Trees in Fog"},{url:"https://images.pexels.com/photos/302743/pexels-photo-302743.jpeg?dpr=2&h=750&w=1260",alt:"Winter Mountains"},{url:"https://images.pexels.com/photos/34950/pexels-photo.jpg?dpr=2&h=750&w=1260",alt:"Sunset over the Ocean"}],a=document.querySelector(".gallery"),s=p.map(({url:e,alt:t})=>`
    <li class="gallery-item">
        <a class="gallery-link" href="${e}">
            <img 
                class="gallery-image" 
                src="${e}" 
                alt="${t}" 
            />
        </a>
    </li>`).join("");a.innerHTML=s;new o(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});
//# sourceMappingURL=1-gallery.js.map
