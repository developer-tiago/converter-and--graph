<template>
  <main class="container w-50 py-3 d-flex flex-column align-items-center">
    <h1>CONVERSOR</h1>
    <button class="btn btn-reverse mb-3" @click="invert()">
      INVERTER
      <i class="ri-loop-left-line"></i>
    </button>
    <div class="d-flex flex-column align-items-center">
      <label for="inputConversion" class="form-label">{{ title }}</label>
      <input
        v-model="value"
        class="form-control"
        type="text"
        id="inputConversion"
        :placeholder="isRoman ? 'Ex: VX' : 'Ex: 10'"
        aria-label="default input example"
      />
    </div>

    <button class="btn btn-convert my-3" @click="convert()">CONVERTER</button>

    <div>
      <span>Resultado: </span><span>{{ result }}</span>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      title: 'Algarismos arábicos para Números romanos',
      isRoman: false,
      result: 0,
      value: '',
      romanNumerals: {
        i: 1,
        v: 5,
        x: 10,
        l: 50,
        c: 100,
        d: 500,
        m: 1000
      },
      arabicNumerals: {
        i: 'i',
        v: 'v',
        x: 'x',
        l: 'l',
        c: 'c',
        d: 'd',
        m: 'm'
      }
    }
  },
  methods: {
    invert() {
      this.isRoman = !this.isRoman
      this.isRoman
        ? (this.title = 'Números romanos para algarismos arábicos')
        : (this.title = 'Algarismos arábicos para Números romanos')
    },

    convert() {
      let value = this.value
      if (this.isRoman) {
        this.result = this.romanToArabic(value)
      } else {
        this.result = this.arabicToRoman(parseInt(value))
      }
    },
    romanToArabic(roman) {
      const romanNumerals = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
      }

      let total = 0
      let prevValue = 0

      for (let i = roman.length - 1; i >= 0; i--) {
        let currentValue = romanNumerals[roman[i].toUpperCase()]
        if (currentValue < prevValue) {
          total -= currentValue
        } else {
          total += currentValue
        }
        prevValue = currentValue
      }

      return total
    },
    arabicToRoman(num) {
      if (isNaN(num)) {
        return 'Valor inválido'
      }

      let roman = ''
      let romanNumerals = [
        { value: 1000, numeral: 'M' },
        { value: 900, numeral: 'CM' },
        { value: 500, numeral: 'D' },
        { value: 400, numeral: 'CD' },
        { value: 100, numeral: 'C' },
        { value: 90, numeral: 'XC' },
        { value: 50, numeral: 'L' },
        { value: 40, numeral: 'XL' },
        { value: 10, numeral: 'X' },
        { value: 9, numeral: 'IX' },
        { value: 5, numeral: 'V' },
        { value: 4, numeral: 'IV' },
        { value: 1, numeral: 'I' }
      ]

      for (let i = 0; i < romanNumerals.length; i++) {
        while (num >= romanNumerals[i].value) {
          roman += romanNumerals[i].numeral
          num -= romanNumerals[i].value
        }
      }
      return roman
    }
  }
}
</script>

<style scoped>
button {
  border: none;
  color: #fff;
}

.btn-reverse {
  background: linear-gradient(#9198e5, #e66465);
}

.btn-convert {
  background: linear-gradient(#e66465, #9198e5);
}

input {
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  background-color: #ffffffcc;
  color: #333;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transition:
    background-color 0.3s ease,
    color 0.3s ease;
}

input:focus {
  background-color: #f3f3f3;
  color: #e66465;
  outline: none;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
}

input:hover {
  background-color: #e6e6e6;
}
</style>
