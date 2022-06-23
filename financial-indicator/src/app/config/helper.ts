
export function dateSeparator(date: string): {day: string, month: string, year: string} {

    const listDate = date.split('-');

    return {
        day: listDate[2],
        month: listDate[1],
        year: listDate[0]
    };
}
