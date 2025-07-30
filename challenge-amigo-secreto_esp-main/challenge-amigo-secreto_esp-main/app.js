let listFriends = []

function agregarAmigo() {
    const nameFriend = document.getElementById('amigo')
    const container = document.getElementById('listaAmigos')
    let amigo = nameFriend.value
    if (amigo.replace(/\s+/g, "") === "") {
        alert("Ingrese nombre válido")
    }
    listFriends.push(amigo)
    container.innerHTML += `<li>${amigo}</li>`
    nameFriend.value = ""
}

function sortearAmigo() {
    const result = document.getElementById('resultado')
    const id = Math.floor(Math.random() * listFriends.length)
    const friend = listFriends[id]
    result.innerHTML = `${friend}`

}