<template>
    <button class="button" :class="buttonClass" :type="type" @click="executeAction()" >{{ label }}</button>
</template>
<script>
export default {

   props: {
       type: {
           type: String,
           required: true
       },
       label: {
           type: String,
           required: true
       },
       confirm: {
           type: Boolean,
           default: false,
           required: false
       },
       buttonStyle: {
           type: String,
           default: 'default',
           required: false
       }
   },

   methods: {
        executeAction() {
            if(this.confirm) {
                if(confirm('Confirma remoção?')) {
                    this.$emit('activeButton');
                }
                return;
            }
            this.$emit('activeButton');
        }
   },

   computed: {
       buttonClass() {
           if(this.buttonStyle == 'default') return 'button-default';

           if(this.buttonStyle == 'danger') return 'button-danger';
       }
   }
}
</script>    

<style scoped>
    .button {
        display: inline-block;
        padding: 10px;
        border-radius: 3px;
        margin: 10px;
        font-size: 1.2em;
    }

    .button-danger {
        background: firebrick;
        color: white;
    }

    .button-default {
        background: darkcyan;
        color: white;
    }

</style>