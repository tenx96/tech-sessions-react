import axios from "axios"

export const getCatFacts = async () => {
    return (await axios.get("https://catfact.ninja/facts")).data
}