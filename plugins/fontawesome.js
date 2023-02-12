import {library, config} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import {
  faHospital as farHospital
} from '@fortawesome/free-regular-svg-icons'
import {
//   faCircleUser as fasCircleUser,
//   faBars as fasBars,
//     faHospital as fasHospital,
    faPlus as faPlus,
   faMinus as faMinus,
    faCheck as faCheck,
    faCircleCheck as faCircleCheck,
    faAngleDown as faAngleDown,
    // faArrowTurnDownLeft as faArrowTurnDownLeft
  
} from '@fortawesome/free-solid-svg-icons'
import {faDiscord as fabDiscord} from '@fortawesome/free-brands-svg-icons'

// This is important, we are going to let Nuxt worry about the CSS
config.autoAddCss = false

// You can add your icons directly in this plugin. See other examples for how you
// can add other styles or just individual icons.
library.add(
//   farHospital,
//   fasHospital,
//   fasBars,
//     fabDiscord,
    faPlus,
   faMinus,
    faCheck,
  faAngleDown,
  faCircleCheck
    // faArrowTurnDownLeft,
)

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon, {})
})