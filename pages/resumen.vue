<template>
  <div>
    <h2 class="graphics-title">{{ $t('weightSummary') }}</h2>
    <div v-if="!!d3" class="mb-8 flex justify-center">
      <weight-graphics :d3="d3" :weight-data="weightData"/>
    </div>
    <div class="grid-info">
      <info-card :title="$t('petName')" content="Catire">
        <template v-slot:icon>
          <img src="~/static/icons/pets/id-card-solid.svg" alt="ícono">
        </template>
      </info-card>
      <info-card :title="$t('lastWeight')" :content="`${lastWeight} Kg`">
        <template v-slot:icon>
          <img src="~/static/icons/pets/weight-solid.svg" alt="ícono">
        </template>
      </info-card>
      <info-card :title="$t('gender')" content="Macho">
        <template v-slot:icon>
          <img src="~/static/icons/pets/venus-mars-solid.svg" alt="ícono">
        </template>
      </info-card>
      <info-card :title="$t('age')" content="5 años">
        <template v-slot:icon>
          <img src="~/static/icons/pets/birthday-cake-solid.svg" alt="ícono">
        </template>
      </info-card>
      <info-card :title="$t('specie')" content="Canino">
        <template v-slot:icon>
          <img src="~/static/icons/pets/paw-solid.svg" alt="ícono">
        </template>
      </info-card>
      <info-card :title="$t('breed')" content="Catumpi">
        <template v-slot:icon>
          <img src="~/static/icons/pets/dog-solid.svg" alt="ícono">
        </template>
      </info-card>
      <info-card :title="$t('color')" content="Catire">
        <template v-slot:icon>
          <img src="~/static/icons/pets/palette-solid.svg" alt="ícono">
        </template>
      </info-card>
      <info-card :title="$t('condition')" content="">
        <template v-slot:icon>
          <img src="~/static/icons/pets/heartbeat-solid.svg" alt="ícono">
        </template>
      </info-card>
    </div>
  </div>
</template>
<script>
import weightGraphics from '~/components/resumen/WeightGraphics'
import InfoCard from '~/components/resumen/InfoCard'

function mounted () {
  this.d3 = window.d3;
  if (!this.d3) {
    window.addEventListener('load', this.mountingD3);
  } else {
    this.formatDates();
  }
}

function mountingD3 () {
  this.d3 = window.d3;
  this.formatDates();
}

function formatDates () {
  this.weightData = this.weightData.map((d) => {
    const newD = d;
    newD.date = new Date(d.date);
    return newD;
  });
}

function lastWeight () {
  return this.weightData[this.weightData.length - 1].weight;
}

function data () {
  return {
    d3: null,
    weightData: [
      { date: '2019-05-16', weight: 28 },
      { date: '2019-06-12', weight: 30 },
      { date: '2019-11-16', weight: 28 },
      { date: '2019-12-12', weight: 30 },
      { date: '2020-01-15', weight: 24 },
      { date: '2020-02-09', weight: 27 },
      { date: '2020-03-20', weight: 25 },
      { date: '2020-04-18', weight: 29 },
      { date: '2020-07-15', weight: 24 },
      { date: '2020-08-09', weight: 27 },
      { date: '2020-09-20', weight: 25 },
      { date: '2020-10-18', weight: 29 }
    ]
  };
}

export default {
  name: 'resumen',
  components: {
    InfoCard,
    weightGraphics
  },
  computed: {
    lastWeight
  },
  data,
  head () {
    return {
      title: 'Resumen'
    }
  },
  layout: 'mainLayout',
  metaInfo: {
    title: 'Resumen'
  },
  methods: {
    formatDates,
    mountingD3
  },
  mounted
}
</script>
<style lang="scss" scoped>
.graphics-title {
  @apply text-$textPrimary text-2xl font-bold pt-4 text-center;
}
.grid-info {
  @apply grid gap-4;
  grid-template-columns: repeat(auto-fit, minmax(21rem, 1fr));
}
.summary-data-title,
.summary-data-content {
  @apply text-$textPrimary text-5xl;
}

.summary-data-content {
  @apply text-$textSecondary text-6xl;
}
</style>
