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
              // state.catalogs[index]=data
             Vue.set(state.catalogs,index,data)  //这样设置有效，因为现在不在vue身上，$不写
          }
      },
     actions: {
         async getCatalogs({state,commit}, index) {
             //如果有数据就不用请求
             if (!state.catalogs[index]){
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
     },
    getters:{

    }
})
