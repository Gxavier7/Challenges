const index = document.querySelectorAll(".index")

index.forEach( (index) => {
  index.style.transform = `rotate(${30*index.dataset.calc})`;
});
