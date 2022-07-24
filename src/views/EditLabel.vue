<template>
    <Layout>
        编辑标签
    </Layout>
</template>

<script lang="ts">
    import tagListModel from '@/models/tagListModel';
import Vue from 'vue';
    import {Component} from 'vue-property-decorator'

    @Component
    export default class EditLabel extends Vue{
        created(){
            const id = this.$route.params.id;
            tagListModel.fetch();
            const tags = tagListModel.data;
            const tag = tags.filter(tag => tag.id === id)[0];
            console.log("tags=>",tags);
            console.log("tag11=>",tag);
            
            if (tag) {
                console.log("tag=>",tag);
            }else{
                this.$router.replace('/404');
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>