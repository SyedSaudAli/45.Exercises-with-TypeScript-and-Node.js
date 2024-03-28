function show_magicians(magi : string[]) : void {
    for (let i = 0; i < magi.length; i++ ) {
    console.log(`Magician's Names = "${magi[i]}"`)
}
}

const magician : string[] = ['Paul Daniels','Harry Houdini','Jeff McBride','Derren Brown'];
show_magicians(magician);