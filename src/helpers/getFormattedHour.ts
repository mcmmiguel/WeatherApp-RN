
export const getFormattedHour = (timestamp: number) => {
    const date = new Date(timestamp * 1000);

    const hour = ('0' + date.getUTCHours()).slice(-2);
    const minute = ('0' + date.getUTCMinutes()).slice(-2);

    return `${hour}:${minute}`;
};
