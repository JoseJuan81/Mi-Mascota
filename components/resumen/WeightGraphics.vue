<template>
  <div ref="wg" class="w-full"></div>
</template>
<script>
const width = 768;
const height = 200;
const margin = { top: 10, right: 20, bottom: 20, left: 20 };

function mounted () {
  this.setScales();
  this.setSvgObject();
  this.setLine();
  this.setCircles();
  this.setAxisBottom();
  this.setAxisLeft();
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

function setLine () {
  const line = this.d3.line().x(d => this.xScale(d.date)).y(d => this.yScale(d.weight));
  const g = this.svg.append('g');
  this.line = g.append('path')
    .attr('d', line(this.weightData))
    .attr('fill', 'none')
    .attr('stroke', 'steelblue')
    .attr('stroke-width', '2');
}

function setCircles () {
  this.circles = this.svg
    .append('g')
    .selectAll('circle')
    .data(this.weightData)
    .enter().append('circle')
    .attr('cx', d => this.xScale(d.date))
    .attr('cy', d => this.yScale(d.weight))
    .attr('r', 3)
    .attr('fill', 'steelblue');
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
  this.xScale = this.d3.scaleUtc()
    .domain(this.d3.extent(this.weightData, d => d.date))
    .range([margin.left, width - margin.right]);
}

function data () {
  return {
    circles: null,
    line: null,
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
    setCircles,
    setLine,
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
