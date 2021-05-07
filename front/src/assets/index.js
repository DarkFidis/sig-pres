import restoLogo from './restaurant.svg'
import boutiqueLogo from './boutique.svg'
import barLogo from './bar.svg'
import hotelLogo from './hotel.svg'
import caveLogo from './caviste.svg'
import gastroLogo from './gastronomique.svg'
import tgvLogo from './tgv.svg'

const imageStrategies = {
  "a": "https://static.wixstatic.com/media/80ddee_7e9d138c4b13426b907b6d841368e92a~mv2.png/v1/fill/w_1328,h_890,al_c/80ddee_7e9d138c4b13426b907b6d841368e92a~mv2.png",
  "b": "https://www.petitscommerces.fr/wp-content/uploads/2015/12/Epicerie-du-terroir-Epicerie-fine-75018-boutique-petitscommerces.fr_-scaled.jpg",
  "c": "https://www.lepoint.fr/images/2018/09/06/16795706lpw-16795776-libre-jpg_5557393.jpg",
  "g": "https://media-cdn.tripadvisor.com/media/photo-s/1a/18/3a/cb/restaurant-le-47.jpg",
  "gare": "https://cdn.radiofrance.fr/s3/cruiser-production/2019/02/3483a4d8-0697-4294-8e68-e8a986527cd5/1200x680_53355810_768917113489412_5026123540420624384_n.jpg",
  "r": "https://www.lecoindesentrepreneurs.fr/wp-content/uploads/2016/04/ouvrir-un-restaurant-1.png",
  "tgv": "https://www.tourmag.com/photo/art/default/3321370-4765329.jpg?v=1317632520"
}

const iconUrlStrategies = {
  "a": barLogo,
  "b": boutiqueLogo,
  "c": caveLogo,
  "g": gastroLogo,
  "h": hotelLogo,
  "r": restoLogo,
  "tgv": tgvLogo,
}

export {
  iconUrlStrategies,
  imageStrategies
}
