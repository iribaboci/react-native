const slides = [
  {
    title: 'React is Declarative',
    bullets: [
      'Imperative is Declarative',
      'blablabla',
      'React allows us to write what we want, and the lib will take care of the DOM manipulation'
    ]
  },
  {
    title: 'React',
    bullets: [
      'Imperative is Declarative',
      'blablabla',
      'React allows us to write what we want, and the lib will take care of the DOM manipulation'
    ]
  },
  {
    title: 'React is easy Componentized',
    bullets: [
      'Imperative is Declarative',
      'blablabla',
      'React allows us to write what we want, and the lib will take care of the DOM manipulation'
    ]
  }
]


// Implement SlideSHow

const slideShow = (
  <div>
    {slides.map(slide => <Slide slide={slide} />)} // Slide is the function called and slide={slide} is the argument passed into the function
  </div>
)

const Slide = slide => (
  <div>
    <h1></h1>
    <ul>
      {slide.bullets.map(bullet => <li>{bullet}</li>)}
    </ul>
  </div>
)
