

// Function to toggle "Read more" and "Read less" for individual blocks
function myFunction(btnId) {
    var dots = document.getElementById("dots-" + btnId);
    var moreText = document.getElementById("more-" + btnId);
    var btnText = document.getElementById("myBtn-" + btnId);
  
    if (dots.style.display === "none" || !dots.style.display) {
      dots.style.display = "inline";
      moreText.style.display = "none";
      btnText.innerHTML = "Read more";
    } else {
      dots.style.display = "none";
      moreText.style.display = "inline";
      btnText.innerHTML = "Read less";
    }
    adjustBoxHeight(btnId);
}


function adjustBoxHeight(btnId) {
    var moreText = document.getElementById("more-" + btnId);
    var worksDiv = moreText.closest('.works');
  
    // Get the height of the extended content
    var extendedContentHeight = moreText.scrollHeight;
  
    // Set the height of the works div to accommodate the extended content
    worksDiv.style.height = (worksDiv.scrollHeight + extendedContentHeight) + 'px';
  }

  