<template>
        <Layout class-prefix="layout">
            {{recordList}}
            <NumberPad @update:value="onUpdateAmount" @submit="saveRecord"/>
            <Types :value.sync="record.type" />
            <Notes @update:value="onUpdateNotes"/>
            <Tags :data-source.sync="tags" @update:value="onUpdateTags"/>
        </Layout>
</template>

<script lang="ts">
    import Vue from 'vue'
    import NumberPad from '@/components/Money/NumberPad.vue'
    import Types from '@/components/Money/Types.vue'
    import Notes from '@/components/Money/Notes.vue'
    import Tags from '@/components/Money/Tags.vue'
    import {Component, Watch} from 'vue-property-decorator'
    import model from '@/model'
    // const version =  window.localStorage.getItem('version') || '0';
    const recordList = model.fetch()
    //     if (version === '0.0.1') {
    //         recordList.forEach(record=>{
    //             record.createdAt = new Date(2022,0,1)
    //         });
    //         window.localStorage.setItem('recordList',JSON.stringify(recordList));
    //     }
    // window.localStorage.setItem('version','0.0.2')


    @Component({
        components:{NumberPad,Types,Notes,Tags}
    })
    export default class Money extends Vue {
        tags = ['衣','食','住','行'];  
        recordList:RecordItem[] = recordList
        record: RecordItem={
            tags:[],notes:'',type:'-',amount:0
        };
        onUpdateTags(value:string[]){
            console.log("tags=>",value);
            this.record.tags = value
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
            const record2:RecordItem = model.clone(this.record);
            record2.createdAt = new Date();
            this.recordList.push(record2);
        }
        @Watch('recordList')
        onRecordListChange(){
            model.save(this.recordList);
        }
    }

</script>

<style lang="scss">
    .layout-content{
        display: flex;
        flex-direction: column-reverse;
    }
</style>