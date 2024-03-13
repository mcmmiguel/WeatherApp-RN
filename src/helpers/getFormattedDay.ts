
export const getFormattedDay = (timestamp: number) => {
    const date = new Date(timestamp * 1000);

    const day = ('0' + date.getUTCDate()).slice(-2);
    const month = ('0' + (date.getUTCMonth() + 1)).slice(-2);

    return `${day}/${month}`;
};
