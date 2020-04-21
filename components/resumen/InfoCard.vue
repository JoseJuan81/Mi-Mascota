<template>
    <div class="info-card-container flex items-center justify-start">
        <div class="icon flex items-center justify-center">
            <slot name="icon"></slot>
        </div>
        <h3 class="title">{{title}}:</h3>
        <span class="content">{{content}}</span>
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
    box-shadow: 0 10px 30px -15px rgba(0,64,128,.2);
    height: 3.5rem;
    margin: 1rem auto;
    transition: all 100ms ease-in;
    width: 18rem;

    &.info-card-container:hover {
        box-shadow: 0 10px 30px -5px rgba(0,64,128,.2);
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
    }

    .title {
        color: $textSecondary;
        font-size: 1rem;
        margin: 0 0.75rem;
    }

    .content {
        color: $primary;
        font-size: 1.5rem;
        font-weight: bold;
        margin-right: 1rem;
    }
}
</style>