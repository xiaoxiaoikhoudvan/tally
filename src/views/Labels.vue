<template>
        <Layout>
            <ol class="tags">
                <li v-for="tag in tags" :key="tag.id">
                    <span>{{tag.name}}</span>  
                    <Icon name="right"/> 
                </li> 
            </ol>
            <div class="createTag-wrapper">
                <button class="createTag" @click="createTag">新建标签</button>
            </div>

        </Layout>
</template>

<script lang="ts">
    import Vue from 'vue'
    import {Component, Watch} from 'vue-property-decorator'
    import tagListModel from '@/models/tagListModel'

    tagListModel.fetch();

    @Component
    export default class Labels extends Vue {
        tags = tagListModel.data;
        createTag(){
            const name = window.prompt('请输出标签名');
            if (name) {
                const message = tagListModel.create(name);
                if(message === 'duplicated'){
                    window.alert('标签名重复');
                }else if(message === 'success'){
                    window.alert('添加成功');
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .tags{
        background: white;
        font-size: 16px;
        padding-left: 16px; 
        > li{
            min-height: 44px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            border-bottom: 1px solid #e6e6e6;
            svg{
                width: 18px;
                height: 18px;
                color: #666;
                margin-right: 16px;
            }
        }
    }
    .createTag{
        background: #767676;
        color: white;
        border-radius: 4px;
        border: none;
        height: 40px;
        padding: 0 16px;
        &-wrapper{
            padding: 16px;
            text-align: center;
            margin-top: 44-16px;
        }
    }
</style>