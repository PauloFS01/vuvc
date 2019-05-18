<template>
    <div class="wrapper">
        <table 
            :data-title-table="tableTitle" 
            :style="myStyle"
        >
            <thead>
                <tr>
                    <th v-for="(head, index) in tableHead" :key="index"> {{ head }} </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(head, index) in tableBody" :key="index">
                    <td  v-for="(data, index) in head" :key="index"> {{ data }} </td>
                </tr>                                              
            </tbody>
        </table>
    </div>
</template>
<script>
export default {
    props: {
        tableTitle: {
            type:String,
            default:'Table Title Here'
        },
        tableHead: {
            type:Array,     
        },
        tableBody: {
            type:Array
        },
        color: {
            type:String,
            default:'#47c485'
        }
    },
    data () {
        return {
            myStyle: '--color-title: ' + this.color
        }
    }

}
</script>
<style lang="scss" scoped>
.wrapper {
    box-shadow: 5px 10px 28px #888888;
    background-color:transparent;
    border:0;
    border-radius:5px;    
    padding:3rem 1rem 0 1rem;
    font-family:arial, sans-serif!important;
    color:#8395a7;
}
table {
    border-collapse: collapse;
    width:100%;
    position:relative;
    box-sizing:border-box;
    td {
        border-top: 1px solid #dfe6e9;
        padding: 15px;
        text-align: left;
        &:last-child{
            text-align:right;
        }           
    }
    th {
        text-transform: uppercase;
        padding:1rem;
        text-align: left;
        color:#47c485;
        &:last-child{
            text-align:right;
        }        
    }
    &::before {
        content:attr(data-title-table);
        position:absolute;
        top: -5rem;
        background:var(--color-title);
        width:95%;
        margin-left:2.5%;
        height:4rem;
        text-align:left;
        font-size:1.5rem;
        padding:1rem;
        box-sizing:border-box;
        border-radius:5px;
        box-shadow: 2px 3px 10px #47c485;
        color:white;
    }
}
</style>
