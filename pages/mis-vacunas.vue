<template>
  <div>
    <responsive-table-dl
      class="responsive-table mt-16"
      :break-point="900"
      :columns="columns"
      :rows="rows"
    >
      <template v-slot:caption>
        <h2 class="text-left italic text-xl font-bold">
          {{$t('vaccines.tableTile')}}
        </h2>
      </template>
      <template v-slot:row="{ row }">
          <td class="cell1 flex">
            <component class="icon" :is="selectingIcon(row)"></component>
            {{row.name}}
          </td>
          <td class="cell2">
            <span class="type-label">{{$t('vaccines.col.type')}}: </span>{{row.type}}
          </td>
          <td class="cell3">{{row.applyDate || '--'}}</td>
          <td class="cell4">
            <span class="next-date-label">{{$t('vaccines.col.nextVaccine')}}: </span>{{row.nextDate || '--'}}
          </td>
          <td class="cell5">
            <span class="batch-label">{{$t('vaccines.col.batch')}}: </span>{{row.batch || '--'}}
          </td>
          <td class="cell6">{{row.expiration || '--'}}</td>
      </template>
    </responsive-table-dl>
  </div>
</template>
<script>
import closeIcon from '~/components/shared/icons/closeIcon';
import successIcon from '~/components/shared/icons/checkIcon';
import warningIcon from '~/components/shared/icons/warningIcon';

function selectingIcon ({ status }) {
  const iconObject = {
    error: 'closeIcon',
    success: 'successIcon',
    warning: 'warningIcon',
  }
  return iconObject[status];
}

function data () {
  return {
    columns: [
      { id: 1, title: this.$t('vaccines.col.name'), movil: true },
      { id: 2, title: this.$t('vaccines.col.type'), movil: false },
      { id: 3, title: this.$t('vaccines.col.applyDate'), movil: true },
      { id: 4, title: this.$t('vaccines.col.nextVaccine'), movil: false },
      { id: 5, title: this.$t('vaccines.col.batch'), movil: false },
      { id: 5, title: this.$t('vaccines.col.expiration'), movil: true },
    ],
    rows: [
      {
        id: 1,
        applyDate: '2020-01-12',
        batch: Math.random().toString(32).slice(2),
        expiration: '2020-10-22',
        name: 'Influenza',
        nextDate: '2020-05-18',
        status: 'success',
        type: 'SARS',
      },
      {
        id: 2,
        applyDate: '2020-01-12',
        batch: Math.random().toString(32).slice(2),
        expiration: '2020-08-01',
        name: 'Pentavalente',
        nextDate: '2020-05-18',
        status: 'success',
        type: 'SARS',
      },
      {
        id: 3,
        applyDate: null,
        batch: Math.random().toString(32).slice(2),
        expiration: null,
        name: 'Hexavalente',
        nextDate: '2021-02-08',
        status: 'error',
        type: 'SARS',
      },
      {
        id: 4,
        applyDate: '2019-11-22',
        batch: Math.random().toString(32).slice(2),
        expiration: '2020-01-01',
        name: 'Rabia',
        nextDate: null,
        status: 'warning',
        type: 'RABIA',
      },
    ],
  };
}
export default {
  name: 'mis-vacunas',
  components: {
    closeIcon,
    successIcon,
    warningIcon,
  },
  data,
  layout: 'mainLayout',
  methods: {
    selectingIcon,
  },
}
</script>
<style lang="scss">
.responsive-table.table-main-container {
  @apply text-$textPrimary;
  table.wm-table-dl {
    thead {
      @apply border-t border-$primary border-solid;
      th {
        @apply p-4;
      }
    }
    tbody[data-cy="table-body"] {
      tr.row-table-dl:hover {
        @apply border-solid border-$primary border-2 font-bold;
      }
      tr.row-table-dl:nth-child(odd) {
        @apply bg-$primary bg-opacity-25;
      }
    }
    td {
      @apply p-4 text-center;
    }
  }

  .icon {
    @apply mx-3;
    min-width: 2rem;
    [data-color="close"] {
      @apply fill-error;
    }
    [data-color="check"] {
      @apply fill-success;
    }
    [data-color="warning"] {
      @apply fill-warning;
    }
  }
}
.type-label, .next-date-label, .batch-label {
  @apply hidden;
}
.table-movil-dl {
  @apply text-xl;
  td {
    @apply whitespace-no-wrap;
  }
  .type-label, .next-date-label, .batch-label {
    @apply inline mr-2;
    @apply text-xl font-bold italic text-$textPrimary;
  }
  .cell1, .cell3, .cell6 {
    @apply border-b border-$primary border-solid;
  }

  .cell1 {
    grid-column: 1/2;
    grid-row: 1;
  }
  .cell2 {
    @apply flex justify-center items-start flex-col;
    @apply ml-12;
    grid-column: 1/2;
    grid-row: 2;
  }
  .cell3 {
    grid-column: 2/3;
    grid-row: 1;
  }
  .cell4 {
    @apply flex justify-center items-center flex-col;
    grid-column: 2/3;
    grid-row: 2;
  }
  .cell5 {
    @apply flex justify-center items-center flex-col;
    grid-column: 3/4;
    grid-row: 2;
  }
  .cell6 {
    grid-column: 3/4;
    grid-row: 1;
  }
}
</style>
