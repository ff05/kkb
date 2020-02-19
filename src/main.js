import Vue from 'vue'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import VueApollo from 'vue-apollo'

import App from './App.vue'
import router from './router'
import store from './store'

const GRAPHCMS_API =
    'https://api-euwest.graphcms.com/v1/cjng226k66qsj01dglkvtz67z/master'

const apolloClient = new ApolloClient({
    link: new HttpLink({
        uri: GRAPHCMS_API
    }),
    cache: new InMemoryCache()
})

Vue.use(VueApollo)

const apolloProvider = new VueApollo({
    defaultClient: apolloClient
})

Vue.config.productionTip = false

new Vue({
    router,
    apolloProvider,
    store,
    render: h => h(App)
}).$mount('#app')
