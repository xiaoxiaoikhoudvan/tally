<template>
        <Layout class-prefix="layout">
            <NumberPad @update:value="onUpdateAmount" @submit="saveRecord"/>
            <Tab :data-source="recordTypeList" :value.sync="record.type"/>
            <div class="notes">
                <FormItems fieldName="备注" 
                   placeholder="在这里输入备注"
                   :value.sync = "record.notes"/>
            </div>
            <Tags @update:value = "record.tags = $event"/>
        </Layout>
</template>

<script lang="ts">
    import Vue from 'vue'
    import NumberPad from '@/components/Money/NumberPad.vue'
    import FormItems from '@/components/Money/FormItems.vue'
    import Tags from '@/components/Money/Tags.vue'
    import Tab from '@/components/Tab.vue';
    import {Component} from 'vue-property-decorator'
    import store from '@/store/index';
    import recordTypeList from '@/contants/recordTypeList';
    // const version =  window.localStorage.getItem('version') || '0';
    //     if (version === '0.0.1') {
    //         recordList.forEach(record=>{
    //             record.createdAt = new Date(2022,0,1)
    //         });
    //         window.localStorage.setItem('recordList',JSON.stringify(recordList));
    //     }
    // window.localStorage.setItem('version','0.0.2')


    @Component({
        components:{NumberPad,FormItems,Tags,Tab},
    })
    export default class Money extends Vue {
        get recordList(){
            return this.$store.state.recordList;
        }
        recordTypeList = recordTypeList;
        record: RecordItem={
            tags:[],notes:'',type:'-',amount:0
        };
        created(){
            this.$store.commit('fetchRecords');
        }
        onUpdateNotes(value:string){
            console.log("note=>",value);
            this.record.notes = value
        }
        onUpdateAmount(value:string){
            console.log("amount=>",value);
            this.record.amount = parseFloat(value);
        }
        saveRecord(){
            if(!this.record.tags || this.record.tags.length === 0){
               return window.alert('请至少选择一个标签！');
            }
           this.$store.commit('createRecord',this.record);
           if(this.$store.state.createRecordError === null){
                window.alert('保存成功!');
                this.record.notes = '';
           } 
           
        }
    }

</script>

<style lang="scss" scoped>
    ::v-deep .layout-content{
        display: flex;
        flex-direction: column-reverse;
    }
    .notes{
        padding: 12px 0;
    }
</style>