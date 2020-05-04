<template>
    <div
        class="info-card-container flex items-center justify-start">
        <div
            :class="[
                'icon flex items-center justify-center',
                { 'no-content-icon': !content },
            ]">
            <slot name="icon"></slot>
        </div>
        <h3
            :class="[
                'title',
                { 'no-content-title': !content },
            ]">{{title}}:</h3>
        <span class="content" v-if="content">{{content}}</span>
        <span
            :class="[
                'content',
                { 'no-content': !content },
            ]" v-else>(O.O)</span>
    </div>
</template>
<script>
export default {
    name: 'info-card',
    props: {
        content: {
            required: true,
            type: String,
        },
        title: {
            required: true,
            type: String,
        },
    }
}
</script>
<style lang="scss" scoped>
.info-card-container {
    border-top-left-radius: 2.75rem;
    border-bottom-left-radius: 2.75rem;
    box-shadow: 0 0.1rem 3rem -1.5rem rgba(0,64,128,.2);
    height: 4.5rem;
    margin: 1rem auto;
    transition: all 100ms ease-in;
    width: 20rem;

    &.info-card-container:hover {
        box-shadow: 0 1rem 1rem 3rem -0.5rem rgba(0,64,128,.2);
        transform: translateX(2px);
    }

    .icon {
        background-color: $primary;
        border-top-left-radius: 2.75rem;
        border-bottom-left-radius: 2.75rem;
        height: 100%;
        width: 3rem;

        img {
            padding: 0 0.8rem;
            width: 100%;
        }

        &.no-content-icon {
            background-color: $disabled;
        }
    }

    .title {
        color: $textSecondary;
        font-size: 1.5rem;
        margin: 0 0.75rem;

        &.no-content-title {
            color: $disabled;
        }
    }

    .content {
        color: $primary;
        font-size: 2rem;
        font-weight: bold;
        margin-right: 1rem;

        &.no-content {
            color: $disabled;
        }
    }
}
</style>