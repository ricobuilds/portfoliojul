import { colorType } from "ruskelui/dist/utils"

type tags = 'Databases' | 'Security' | 'Reactjs' | 'Robotics' | 'Testing' | 'Python' | 'Web3' | 'GraphQL' | 'TailwindCSS3' | 'Nextjs' | 'APIs' | 'Typescript' | 'GSAP'

export const variant: { [key in string]: colorType } = {
    'Databases': 'green',
    'Security': 'cyan',
    'Reactjs': 'jasper',
    'Robotics': 'kunzite',
    'Testing': 'orange',
    'Python': 'blue',
    'Web3': 'ruby',
    'GraphQL': 'fuchsia',
    'TailwindCSS3': 'teal',
    'Nextjs': 'scarlet',
    'APIs': 'peridot',
    'Typescript': 'azure',
    'GSAP': 'jade'
  }