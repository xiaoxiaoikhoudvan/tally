import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export  class TagHelper extends Vue{
    createTag(){
        const name = window.prompt('请输入标签名');
        if (!name) {
            return window.alert('标签名不能为空')
        }
        this.$store.commit('createTag',name);
        console.log("state=>",this.$store.state);
        if(this.$store.state.createTagError){
            console.log("进来");
            window.alert(this.$store.state.createTagError.message);
        }
        
    }
}
export default TagHelper;