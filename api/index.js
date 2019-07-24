

export const movieData = async (text) =>{

    const response = await fetch(`http://www.omdbapi.com/?apikey=ea66382d&s=${text}`)
    const responseJson = await response.json()       
        if(responseJson.Response != "False"){
           // console.log(responseJson)
            return responseJson
        }else{  
            throw new Error(responseJson.Error)
        }

}

export const movieDetails = async (id) => {
        const response = await fetch(`http://www.omdbapi.com/?apikey=ea66382d&i=${id}`)
        const responseJson = await response.json()
        if (responseJson.Response != "False") {
            // console.log(responseJson)
            return responseJson
        } else {
            throw new Error(responseJson.Error)
        }
}