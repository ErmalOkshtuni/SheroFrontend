new Glide('.glide', {
    type: 'carousel',
    perView: 3,
    focusAt: 'center',
    gap: 20,
    breakpoints: {
      1024: {
        perView: 2,
      },
      768: {
        perView: 1,
      }
    }
  }).mount();
  