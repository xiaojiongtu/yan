import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../api/axios'
Vue.use(Vuex)
export default new Vuex.Store({
     state:{
         catalogs:{

         },
      },
      mutations:{
          setCatalogs(state,{index,data}){
              state.catalogs[index]=data
          }
      },
     actions: {
         async getCatalogs({commit}, index) {
             let {data} = await axios(`/catalog`, {
                 method: 'get',
                 params: {index}
             })
             console.log(data);
             if(data.err){
                 console.log(data.err)
             }else {
                 commit('setCatalogs',{index,data:data.data})
             }
         }
     }
})