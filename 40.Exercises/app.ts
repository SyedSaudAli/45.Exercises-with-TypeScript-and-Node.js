function make_album(artist : string , title : string , tracks? : number ) {
    let object : {artist : string , title : string , tracks? : number} = {
        artist : artist , title : title}
    if (tracks) {
        object.tracks = tracks
    }
    return object;
}
console.log(make_album('Taylor Swift', 'Fearless'));
console.log(make_album('Ed Sheeran', 'Divide', 12));
console.log(make_album('Adele', '25', 10));
