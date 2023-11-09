import dayjs from "dayjs"

export const GetDate = (date) => {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

    const day = dayjs(date).toDate().getDate()
    const month = dayjs(date).toDate().getMonth()
    const year = dayjs(date).toDate().getFullYear()

    return `${day} ${months[month]}, ${year}`
}