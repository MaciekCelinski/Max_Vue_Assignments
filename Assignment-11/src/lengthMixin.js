export const lengthMixin = {
    reversedComputed(){
        return this.firstText.split('').reverse().join("")
    },
    calculateLength(){
        return this.firstText.length
    }
}