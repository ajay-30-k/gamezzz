const smallimage=(imagepath,size)=>{
    const images =imagepath.match(/media\/screenshots/)?
    imagepath.replace("media/screenshots", `media/resize${size}/-/screenshots`)
    :imagepath.replace('media/games',`media/resize${size}/-/games`)
    return images
    }
    export default smallimage