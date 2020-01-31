const  FIRST_NAME = 'Mohammad Zubair'
const  LAST_NAME = 'Ghani'
const  FULL_NAME = FIRST_NAME + " " + LAST_NAME

// "Mohammad Zubair Ghani"

let fullName = 'Mohammad Zubair +  Ghani'

//const myAddress = '49 via lulli,\n Torino (TO)\nItaly ';

const street = 'via Giambattista lulli';
const housenum = '49';
const zip = '10100'
const city = 'torino'
const country = 'italy'; 
const sp = ' '

const FullAddress = street + ',' +housenum + ',' + zip+','+ city + ','+ country+'.'

//via Giambattista lulli, 49 ,10100, torino, Italy. 





console.log( FullAddress)


const workExperience = '6 years in IT industry';
const Education = 'MBA International Business';
const softSkills = 'public speaking, decison making , team-work,';
const language = 'Dari, English , Italian';
const Interest = 'reading, cooking, traveling';



const myCV = `${ workExperience}  
${Education} 
${softSkills}  
${language} 
${Interest}`
