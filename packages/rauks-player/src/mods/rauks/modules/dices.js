const faces = {
  echec: {
    name: 'echec',
    description: '',
    image: ''
  },
  sucess: {
    name: 'sucess',
    description: '',
    image: ''
  }
}

const blueDice = {
  name: 'Dés bleu',
  description: '',
  image: '',
  backgroundColor: '#2b78e4',
  color: '#ffffff',
  faces: [faces.echec, faces.sucess],
  min: 1,
  max: 1
}

const dices = [blueDice]
export default dices
