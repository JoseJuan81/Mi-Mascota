<template>
  <div ref="wg" class="w-full"></div>
</template>
<script>
const width = 768;
const height = 200;
const margin = { top: 10, right: 20, bottom: 20, left: 20 };

function mounted () {
  this.setBarHeight();
  this.setScales();
  this.setSvgObject();
  this.setBars();
  this.setAxisBottom();
  this.setAxisLeft();
}

function setBarHeight () {
  this.widthBar = 15;
}

function setAxisLeft () {
  this.yAxis = this.d3.axisLeft().scale(this.yScale);
  this.svg.append('g')
    .attr('transform', 'translate(' + [margin.left, 0] + ')')
    .call(this.yAxis);
}

function setAxisBottom () {
  this.xAxis = this.d3.axisBottom().scale(this.xScale);
  this.svg.append('g')
    .attr('transform', 'translate(' + [0, height - margin.bottom] + ')')
    .call(this.xAxis);
}

function setBars () {
  this.bars = this.svg.append('g')
    .selectAll('rect')
    .data(this.weightData)
    .enter().append('rect')
    .attr('height', d => height - this.yScale(d.weight) - margin.bottom)
    .attr('width', this.xScale.bandwidth())
    .attr('fill', (d, i) => this.d3.schemeDark2[i])
    .attr('stroke', 'white')
    .attr('stroke-width', 2)
    .attr('opacity', 1)
    .attr('y', d => this.yScale(d.weight))
    .attr('x', d => this.xScale(d.date));
}

function setSvgObject () {
  this.svg = this.d3.select(this.$refs.wg)
    .append('svg')
    .attr('viewBox', `0 0 ${width} ${height}`);
}

function setScales () {
  this.yScale = this.d3.scaleLinear()
    .domain([0, this.d3.max(this.weightData, d => d.weight)])
    .range([height - margin.bottom, margin.top]);
  this.xScale = this.d3.scaleBand()
    .domain(this.weightData.map(d => d.date))
    .range([margin.left, width - margin.right]);
}

function data () {
  return {
    bars: null,
    widthBar: 0,
    svg: null,
    xAxis: null,
    xScale: null,
    yAxis: null,
    yScale: null,
  }
}

export default {
  name: 'weight-graphics',
  data,
  methods: {
    setAxisLeft,
    setAxisBottom,
    setBars,
    setBarHeight,
    setScales,
    setSvgObject,
  },
  mounted,
  props: {
    d3: {
      required: true,
      type: Object,
    },
    weightData: {
      required: true,
      type: Array,
    },
  },
}
</script>
<style lang="scss" scoped>

</style>
