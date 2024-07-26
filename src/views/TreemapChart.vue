<template>
  <main v-if="brasilHabitants.length > 0" class="container d-flex flex-column align-items-center py-3">
    <h1 class="text-center">TREEMAP</h1>

    <div class="graphic-treemap">
      <div v-for="(region, index) in brasilHabitants" :key="index">
        <div class="child d-flex justify-content-between" :style="calHeight(region.percentage)">
          <span class="region cursor-pointer" :title="`${region.percentage.toFixed(2)}%`"
            >{{ region.region }}, {{ region.populationRegion }}</span
          >
          <div
            v-for="(state, i) in region.states"
            :key="i"
            style="background-color: green; border: dashed 0.5px #c6c6c6"
            :style="calArea(state.percentage, region.region)"
            class="d-flex justify-content-end align-items-end"
          >
            <span class="state cursor-pointer" :title="`${state.percentage.toFixed(2)}%`"
              >{{ state.population }}, {{ state.name }}</span
            >
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      brasil: [
        {
          region: 'Norte',
          states: [
            { name: 'Acre', population: 906876 },
            { name: 'Amapá', population: 861773 },
            { name: 'Amazonas', population: 4280730 },
            { name: 'Pará', population: 8777124 },
            { name: 'Rondônia', population: 1805866 },
            { name: 'Roraima', population: 652713 },
            { name: 'Tocantins', population: 1590248 }
          ]
        },
        {
          region: 'Nordeste',
          states: [
            { name: 'Alagoas', population: 3351543 },
            { name: 'Bahia', population: 14812617 },
            { name: 'Ceará', population: 9240580 },
            { name: 'Maranhão', population: 7114598 },
            { name: 'Paraíba', population: 4059905 },
            { name: 'Pernambuco', population: 9616621 },
            { name: 'Piauí', population: 3281480 },
            { name: 'Rio Grande do Norte', population: 3560903 },
            { name: 'Sergipe', population: 2318822 }
          ]
        },
        {
          region: 'Centro-Oeste',
          states: [
            { name: 'Distrito Federal', population: 3094325 },
            { name: 'Goiás', population: 7206589 },
            { name: 'Mato Grosso', population: 3671401 },
            { name: 'Mato Grosso do Sul', population: 2839181 }
          ]
        },
        {
          region: 'Sudeste',
          states: [
            { name: 'Espírito Santo', population: 4108508 },
            { name: 'Minas Gerais', population: 21411923 },
            { name: 'Rio de Janeiro', population: 17463349 },
            { name: 'São Paulo', population: 46289333 }
          ]
        },
        {
          region: 'Sul',
          states: [
            { name: 'Paraná', population: 11687804 },
            { name: 'Rio Grande do Sul', population: 11422973 },
            { name: 'Santa Catarina', population: 7335587 }
          ]
        }
      ],
      brasilHabitants: []
    }
  },

  mounted() {
    this.loadPage()
  },

  methods: {
    loadPage() {
      let brasilPopulation = 0

      this.brasil.forEach((region) => {
        region.populationRegion = 0
        region.percentage = 0

        region.states.forEach((state) => {
          region.populationRegion += state.population
          region.states.sort((a, b) => b.population - a.population)
          brasilPopulation += state.population
        })
      })

      this.brasil.forEach((region) => {
        region.percentage = 0

        region.states.forEach((state) => {
          region.percentage = (region.populationRegion * 100) / brasilPopulation
          state.percentage = (state.population * 100) / region.populationRegion
        })
      })

      this.brasilHabitants = this.brasil
    },

    calHeight(percentage) {
      const height = 500

      let result = (height * percentage) / 100

      result = `height: ${result}px`

      return result
    },

    calArea(percentageChild, region) {
      const width = 900

      let widthChildren = (width * percentageChild) / 100

      let colorBackground

      let opacity = 0.1 + (percentageChild / 100) * 0.9

      switch (region) {
        case 'Norte':
          colorBackground = `background: rgba(0, 255, 0, ${opacity})`
          break
        case 'Nordeste':
          colorBackground = `background: rgba(255, 0, 0, ${opacity})`
          break
        case 'Centro-Oeste':
          colorBackground = `background: rgba(255, 165, 0, ${opacity})`
          break
        case 'Sudeste':
          colorBackground = `background: rgba(255, 255, 0, ${opacity})`
          break
        case 'Sul':
          colorBackground = `background: rgba(238, 130, 238, ${opacity})`
          break
        default:
          colorBackground = `background: rgba(0, 0, 0, 0)`
      }

      let style = colorBackground

      style += `; width: ${widthChildren}px`

      return style
    }
  }
}
</script>

<style lang="scss" scoped>
.graphic-treemap {
  background-color: #FFF;
  width: 900px;
  height: 500px;
}

.child {
  .region {
    position: absolute;
  }
}

.state {
  font-size: 9px;
  text-align: end;

  &:hover {
    transform-origin: bottom right;
    transform: scale(1.5);
    font-weight: 600;
  }
}
</style>
