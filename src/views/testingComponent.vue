<template>
   <div>
       测试页面
       <gobel-component></gobel-component>
   </div> 
</template>
<script>
import GobelComponent from '_c/gobelComponent'
import { exampleHttpRquest } from 'httpLib/example'
export default {
    name:'testing',
    components:{
        GobelComponent
    },
    mounted(){
        this.$store.dispatch("testVuex",1)
        exampleHttpRquest().then(result=>{
            // eslint-disable-next-line no-console
            console.log('测试axios回调', result)
        })
    }
    
}
</script>