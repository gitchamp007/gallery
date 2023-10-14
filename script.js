const img_box = document.getElementById("click_img_box");
const clicked_img = document.getElementById("clicked_img");
const download_link = document.getElementById("download");
const gallery = document.getElementById("img_gal");

var img = [
    'Images/img1.jpg',
    'Images/1.jpg',
    'Images/2.jpg',
    'Images/img2.jpg',
    'Images/img3.jpg',
    'Images/3.jpg',
    'Images/img4.jpg',
    'Images/4.jpg',
    'Images/5.jpg',
    'Images/img5.jpg',
    'Images/6.jpg',
    'Images/img6.jpg',
    'Images/img7.jpg',
    'Images/7.jpg',
    'Images/img8.jpg',
    'Images/8.jpg'
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
