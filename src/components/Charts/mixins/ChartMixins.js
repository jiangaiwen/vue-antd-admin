export const ChartEventMixins = {
    mehods: {
        handleClick(event, chart) {
            this.handleEvent('click', event, chart)
        },
        handleEvent(eventName, event, chart) {
            this.$emit(eventName, event, chart)
        }
    }
}