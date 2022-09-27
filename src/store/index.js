import { createStore } from "vuex";
import journalModule from '../modules/daybook/store/journal'

const store = createStore({
    // En vez de hacer una configuración básica del store
    // lo definimos en forma de módulos.
    modules: {
        journal: journalModule
    }
})


export default store