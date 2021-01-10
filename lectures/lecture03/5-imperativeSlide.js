const SLIDE = {
  title: 'React is Declarative',
  bullets: [
    'Imperative is Declarative',
    'blablabla',
    'React allows us to write what we want, and the lib will take care of the DOM manipulation'
  ]
}

function createSlide(slide) {
  const slideElement = document.createElement('div')

  const title = document.createElement('h1')
  title.innerHTML = SLIDE.title

  return slideElement
}
