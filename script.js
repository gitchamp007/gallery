const img_box = document.getElementById("click_img_box");
const clicked_img = document.getElementById("clicked_img");
const download_link = document.getElementById("download");
const gallery = document.getElementById("img_gal");

var count = 0;

var img = [
    'images/img1.jpg',
    'images/1.jpg',
    'images/2.jpg',
    'images/img2.jpg',
    'images/img3.jpg',
    'images/3.jpg',
    'images/img4.jpg',
    'images/4.jpg',
    'images/5.jpg',
    'images/img5.jpg',
    'images/6.jpg',
    'images/img6.jpg',
    'images/img7.jpg',
    'images/7.jpg',
    'images/img8.jpg',
    'images/8.jpg'
  ];


for (let i = 0; i < img.length; i++) {
  const image = document.createElement("img");
  image.src = img[i];
  image.setAttribute("data-index", i);
  image.addEventListener("click", function() {
    openimg(this);
  });
  gallery.appendChild(image);
}

function openimg(image) {
  img_box.style.display = "flex";
  clicked_img.src = image.src;
  count = parseInt(image.getAttribute("data-index"));
  updateDownloadLink();
}

function closeimg() {
  img_box.style.display = "none";
  clicked_img.src = "";
}

function prev() {
  count = (count - 1 + img.length) % img.length;
  setImg();
  updateDownloadLink();
}

function next() {
  count = (count + 1) % img.length;
  setImg();
  updateDownloadLink();
}

function updateDownloadLink() {
  download_link.href = img[count];
}

function setImg() {
  console.log(count);
  clicked_img.src = img[count];
}

document.addEventListener('keydown', (event) => {
  var name = event.key;

  if (name == 'ArrowLeft') {
    prev();
  } else if (name == 'ArrowRight') {
    next();
  } else if (name == 'Escape') {
    closeimg();
  }
}, false);
