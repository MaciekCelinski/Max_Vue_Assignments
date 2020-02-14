<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Directives Exercise</h1>
                <!-- Exercise -->
                <!-- Build a Custom Directive which works like v-on (Listen for Events) -->
                <button v-myOn:click="clicked" class="btn btn-primary">Click Me</button>
                <hr>
                <div v-myOn:mouseleave="mouseLeft" style="width: 100px; height: 100px; background-color: lightcoral"></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        directives: {
            'myOn' : {
                bind(el, binding){
                   // el.onclick = ()=>{
                   //     binding.value()
                   // }
                    // type is a type of event like 'click', 'keyUp','mouseLeave'
                    const type = binding.arg;
                    console.log(type)
                    // fn is a reference to assigned function like 'clicked'
                    const fn = binding.value;
                    console.log(fn)
                    el.addEventListener(type, fn)
                }
            }
        },
        methods: {
            clicked(){
                alert('I was clicked')
            },
            mouseLeft(){
                alert('She really did')
            }
        }
    }
</script>

<style>
</style>
