<template>
    <div :class="['user-layout-wrapper', device]">
        22
    </div>
</template>
<script>
import { mixinDevice } from '@/utils/mixin'
export default {
    mixins: [mixinDevice],
}
</script>