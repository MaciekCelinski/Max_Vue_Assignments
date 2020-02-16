<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters and Mixins</h1>
                <!-- Exercise 1 -->
<!--                <p>{{ firstText | reverseText}}</p>-->
                <!-- Exercise 2 -->
<!--                <p>{{ firstText | counter}}</p>-->
                <!-- Exercise 3 -->
                <p>{{reversedComputed}}</p>
                <p>{{calculateLength}}</p>
                <!-- Exercise 4 -->
                <p>{{reversedComputed}}</p>
                <p>{{calculateLength}}</p>
            </div>
        </div>
    </div>
</template>

<script>
import {lengthMixin} from './lengthMixin.js'

    export default {
        mixins: [lengthMixin],
        data(){
            return {
                firstText: "SOME TEXT",
                secondText: "Maciek C"
            }

        },
        filters: {
            reverseText(value){
                return value.split('').reverse().join("")
            }
        },
        // computed: {
        //     reversedComputed(){
        //         return this.firstText.split('').reverse().join("")
        //     },
        //     calculateLength(){
        //         return this.firstText.length
        //     }
        // }
    }

</script>

<style>
</style>