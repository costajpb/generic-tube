type action = () => void

let debounced: undefined | ReturnType<typeof setTimeout> = undefined

export default function debounce(action: action) {
    if (debounced) clearTimeout(debounced)
    
    debounced = setTimeout(() => {
        action()
    }, 500)
}