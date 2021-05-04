export const convertTempToCel = (temp : number) => {
    return `${Math.round(temp - 273.15)}°C`;
}