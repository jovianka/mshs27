import { generateClasses } from '@formkit/themes'
import { genesisIcons } from '@formkit/icons'
import genesis from '@formkit/themes/tailwindcss/genesis'
import { en, id } from '@formkit/i18n'

export default {
  icons: {
    ...genesisIcons,
  },
  config: {
    classes: generateClasses(genesis),
  },
  locales: { en, id },
  locale: "id"
}