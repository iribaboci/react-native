const SLIDE = {
  title: 'React is Declarative',
  bullets: [
    'Imperative is Declarative',
    'blablabla',
    'React allows us to write what we want, and the lib will take care of the DOM manipulation'
  ]
}

function createSlide() {
  return (
    <Slide>
      <Title title={SLIDE.title} />
      <ul>
        {SLIDE.bullets.map(bullet => <li>{bullet}</li>)}
      </ul>
    </Slide>
  )
}
