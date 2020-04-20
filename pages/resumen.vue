<template>
    <div>
        <div v-if="!!d3">
            <weight-graphics :d3="d3" :weight-data="weightData"/>
        </div>
        <h3>Último peso: {{lastWeight}} Kg</h3>
    </div>
</template>
<script>
import weightGraphics from '~/components/resumen/WeightGraphics';

function mounted() {
    this.d3 = window.d3;
    const self = this;
    if (!this.d3) {
        window.addEventListener('load', this.mountingD3);
    } else {
        this.formatDates();
    }
}

function mountingD3() {
    this.d3 = window.d3;
    this.formatDates();
}

function formatDates() {
     const formatTime = this.d3.timeFormat('%b %d, %Y');
    this.weightData = this.weightData.map(d => {
        const newD = d;
        newD.date = formatTime(new Date(d.date));
        return newD;
    });
}

function lastWeight() {
    return this.weightData[this.weightData.length - 1].weight;
}

function data() {
    return {
        d3: null,
        weightData: [
            { date: '2019-11-16', weight: 28 },
            { date: '2019-12-12', weight: 30 },
            { date: '2020-01-15', weight: 24 },
            { date: '2020-02-09', weight: 27 },
            { date: '2020-03-20', weight: 25 },
            { date: '2020-04-18', weight: 29 },
        ]
    };
}

export default {
    name: 'resumen',
    components: {
        weightGraphics,
    },
    computed: {
        lastWeight,
    },
    data,
    head () {
        return {
            title: 'Resumen',
            script: [
                { src: 'https://d3js.org/d3.v4.min.js' },
                { src: 'https://d3js.org/d3-color.v1.min.js' },
                { src: 'https://d3js.org/d3-interpolate.v1.min.js' },
                { src: 'https://d3js.org/d3-scale-chromatic.v1.min.js' },
            ],
        }
    },
    layout: 'mainLayout',
    methods: {
        formatDates,
        mountingD3,
    },
    metaInfo: {
        title: 'Resumen',
    },
    mounted,
}
</script>