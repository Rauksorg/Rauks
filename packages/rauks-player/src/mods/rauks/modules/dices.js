const faces = {
  const faces = [
    {
      name: 'réussite critique',
      description: `Réussite de l'action, et le joueur propose un fait supplémentaire au MJ`,
      image: '/'
    },
    {
      name: 'échec simple',
      description: `Echec de l'action`,
      image: '/'
    }
    {
      name: 'réussite compétence',
      description: `Réussite de l'action si le personnage peut justifier d'une compétence lors du jet ou éventuellement d'un trait ou d'une circonstance`,
      image: '/'
    }
    {
      name: 'échec critique',
      description: `Echec de l'action, en cas de relance l'échec deviendra critique ne sera plus relançable et provoquera des conséquences supplémentaires.`,
      image: '/'
    }
    {
      name: '2',
      description: `Réussite de l'action si le personnage dispose de 2 ou plus dans sa caractéristiques`,
      image: '/'
    },
    {
      name: '3',
      description: `Réussite de l'action si le personnage dispose de 3 ou plus dans sa caractéristiques`,
      image: '/'
    },
    {
      name: '4',
      description: `Réussite de l'action si le personnage dispose de 4 ou plus dans sa caractéristiques`,
      image: '/'
    },
}

const blueDice = {
  name: 'Dés bleu',
  description: 'Dés correspondant aux actions relativement simples',
  image: '',
  backgroundColor: '#2b78e4',
  color: '#ffffff',
  faces: [faces.réussite critique,faces.réussite compétence,faces.4, faces.3,faces.2,faces.échec critique],
  min: 1,
  max: 1
}
const orangeDice = {
  name: 'Dés orange',
  description: 'Dés correspondant aux actions difficiles',
  image: '',
  backgroundColor: '#2b78e4',
  color: '#ffffff',
  faces: [faces.réussite critique,faces.réussite compétence,faces.4, faces.3,faces.échec simple,faces.échec critique],
  min: 1,
  max: 1
}
const redDice = {
  name: 'Dés rouge',
  description: 'Dés correspondant aux actions les plus difficiles et risquées',
  image: '',
  backgroundColor: '#cf2a27',
  color: '#ffffff',
  faces: [faces.réussite critique,faces.réussite compétence,faces.4, faces.échec simple,faces.échec critique,faces.échec critique],
  min: 1,
  max: 1
}

const dices = [blueDice, redDice]
export default dices
