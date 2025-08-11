import { ref, defineComponent } from 'vue'

export default defineComponent({
  setup() {
    const counter = ref(5)

    const increment = () => {
      counter.value++
    }

    return {
      counter,
      increment,
    }
  },
})
