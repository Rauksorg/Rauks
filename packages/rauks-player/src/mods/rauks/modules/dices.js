import epicFailImg from './dices/efail.svg'
import fourImg from './dices/four.svg'
import skillImg from './dices/skill.svg'
import successImg from './dices/success.svg'
import threeImg from './dices/three.svg'
import twoImg from './dices/two.svg'
import failImg from './dices/fail.svg'
import doubleSuccessImg from './dices/dsuccess.svg'

const faces = {
  epicSuccess: {
    name: 'réussite critique',
    description: `Réussite de l'action, et le joueur propose un fait supplémentaire au MJ`,
    image: successImg
  },
  fail: {
    name: 'échec simple',
    description: `Echec de l'action`,
    image: failImg
  },
  skill: {
    name: 'réussite compétence',
    description: `Réussite de l'action si le personnage peut justifier d'une compétence lors du jet ou éventuellement d'un trait ou d'une circonstance`,
    image: skillImg
  },
  epicFail: {
    name: 'échec critique',
    description: `Echec de l'action, en cas de relance l'échec deviendra critique ne sera plus relançable et provoquera des conséquences supplémentaires`,
    image: epicFailImg
  },
  two: {
    name: '2',
    description: `Réussite de l'action si le personnage dispose de 2 ou plus dans sa caractéristiques`,
    image: twoImg
  },
  three: {
    name: '3',
    description: `Réussite de l'action si le personnage dispose de 3 ou plus dans sa caractéristiques`,
    image: threeImg
  },
  four: {
    name: '4',
    description: `Réussite de l'action si le personnage dispose de 4 ou plus dans sa caractéristiques`,
    image: fourImg
  },
  damage: {
    name: '!',
    description: `Le dé occasionne un point de dégâts`,
    image: doubleSuccessImg
  },
  resist: {
    name: 'x',
    description: `Le dé n'occasionne pas de dégâts`,
    image: successImg
  }
}

const blueDice = {
  name: 'Dés bleu',
  description: 'Dés correspondant aux actions classiques',
  image: '',
  backgroundColor: '#2b78e4',
  color: '#ffffff',
  faces: [
    faces.epicSuccess,
    faces.skill,
    faces.four,
    faces.three,
    faces.two,
    faces.epicFail
  ],
  min: 1,
  max: 1
}
const orangeDice = {
  name: 'Dés orange',
  description: 'Dés correspondant aux actions difficiles',
  image: '',
  backgroundColor: '#ff9900',
  color: '#ffffff',
  faces: [
    faces.epicSuccess,
    faces.skill,
    faces.four,
    faces.three,
    faces.fail,
    faces.epicFail
  ],
  min: 1,
  max: 1
}
const redDice = {
  name: 'Dés rouge',
  description: 'Dés correspondant aux actions les plus difficiles et risquées',
  image: '',
  backgroundColor: '#cf2a27',
  color: '#ffffff',
  faces: [
    faces.epicSuccess,
    faces.skill,
    faces.four,
    faces.fail,
    faces.epicFail,
    faces.epicFail
  ],
  min: 1,
  max: 1
}
const damageDice = {
  name: 'Dés dé dégâts',
  description: `Dés lancés lors d'un jet de dégâts`,
  image: '',
  backgroundColor: '#333333',
  color: '#ffffff',
  faces: [faces.damage, faces.resist],
  min: 2,
  max: 9
}

const dices = [blueDice, orangeDice, redDice, damageDice]
export default dices
