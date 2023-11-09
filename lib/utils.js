import dayjs from "dayjs"

export const GetDate = (date) => {
    const day = dayjs(date).toDate().getDate()
    const month = dayjs(date).toDate().getMonth()
    const year = dayjs(date).toDate().getFullYear()

    return `${day} ${month}, ${year}`
}