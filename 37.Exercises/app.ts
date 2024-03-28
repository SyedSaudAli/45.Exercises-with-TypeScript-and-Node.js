function make_shirt( size : string = 'Large' , message : string = 'I love TypeScript' ): void {
    console.log(`The size of shirt "${size}" Message "${message}"`)
}

make_shirt()
make_shirt('Medium')
make_shirt('Small', 'Hello Saud')