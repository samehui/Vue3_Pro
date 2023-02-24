import { App } from 'vue'

export default {
    install(app:App){
        const importFile = import.meta.glob('./*.vue') 
        Object.keys(importFile).forEach((item) => {
            importFile[item]().then((mod)=>{
                const component=mod.default
                app.component(component.__name,component)
            })
        });
    }
}