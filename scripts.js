// SLIDER

var sliderItems = document.getElementsByClassName("mySlider-item");
var slideIndex = 0;
sliderItems[slideIndex].classList.toggle("active");

function nextFunc() {
  slideIndex++;
  sliderItems[slideIndex].classList.toggle("active");
  if (slideIndex >= 2 || slideIndex <= 0) {
    slideIndex = 0;
  }
}

function prevFunc() {
  if (slideIndex <= 0 || slideIndex >= 2) {
    slideIndex = 2;
  }
  sliderItems[slideIndex--].classList.toggle("active");
}

// DATE AND TIME

var fullDate = new Date();
var date = fullDate.getDate(); //28
var year = fullDate.getFullYear(); //2021
var day = fullDate.getDay(); //0-6
var hour = fullDate.getHours(); //21
var utHour = fullDate.getUTCHours(); //17
var utDate = fullDate.getUTCDate(); //28
var datePlace = document.getElementById("myDate");
var timePlace = document.getElementById("myTime");

console.log(hour);

function daySwitch() {
  switch (day) {
    case 0: {
      return "1شنبه";
      break;
    }
    case 1: {
      return "2شنبه";
      break;
    }
    case 2: {
      return "3شنبه";
      break;
    }
    case 3: {
      return "4شنبه";
      break;
    }
    case 4: {
      return "5شنبه";
      break;
    }
    case 5: {
      return "جمعه";
      break;
    }
    case 6: {
      return "شنبه";
      break;
    }
  }
}
datePlace.innerHTML = "امروز" + daySwitch() + " " + "است ";

if (hour >= 5 && hour <= 11) {
  timePlace.innerHTML = "صبح بخیر";
} else if (hour >= 12 && hour <= 16) {
  timePlace.innerHTML = "ظهر بخیر";
} else if (hour >= 17 && hour <= 19) {
  timePlace.innerHTML = "عصر بخیر";
} else if(hour>=19 || hour<5) {
  timePlace.innerHTML = "شب بخیر";
}
