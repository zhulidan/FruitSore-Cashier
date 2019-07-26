export default{
    state:{//要设置的全局访问的state对象

        //要设置的初始属性值
        //this.$store.state.store.saleShopCarList
        saleShopCarList:[] 
    },
    getters:{ //实时监听state值的变化(最新状态)
        isSaleShopCarList(state){ //方法名随意,主要是来承载变化的saleShopCarList的值
            return state.saleShopCarList
        }
    },
    mutations:{ //自定义改变state初始值的方法，这里面的参数除了state之外还可以再传额外的参数(变量或对象)
        //this.$store.commit('newSaleShopCarList')以及 this.$store.commit('newSaleShopCarList',6) 触发
        newSaleShopCarList(state,ary){
            state.saleShopCarList = ary;
        }
    },
    actions:{ //自定义触发mutations里函数的方法，context与store 实例具有相同方法和属性
        //this.$store.dispatch('getNewSaleShopCarList')
        getNewSaleShopCarList(context,num){
            context.commit('newSaleShopCarList',num)
        }
    }
}