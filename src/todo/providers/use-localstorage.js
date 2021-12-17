export const useLocalStorageProvider = () => {

    const GetValue = (key) => {
        return JSON.parse(localStorage.getItem(key))
    }

    const SetValue = (key, value) => {
        localStorage.setItem(key, JSON.stringify(value))
    }

    return {
        GetValue,
        SetValue
    }
}