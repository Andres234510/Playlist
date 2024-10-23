
const playList = [
    {
        title: 'Dream On',
        artist: 'Aerosmith',
        img: '../Img/Dream On.jpeg',
        song: '../Audios/Aerosmith - Dream On (Audio).mp3'
    },
    {
        title: 'Caballero',
        artist: 'Alejandro Fernández',
        img: '../Img/Caballero.jpeg',
        song: '../Audios/Alejandro Fernández - Caballero (Video Oficial).mp3'
    },
    {
        title: 'Sin miedo a nada',
        artist: 'Alex Ubago',
        img: '../Img/Sin miedo a nada.jpeg',
        song: '../Audios/Alex Ubago - Sin miedo a nada  (videoclip oficial).mp3'
    },
    {
        title: 'Enamorado',
        artist: 'Alexander Stewart',
        img: '../Img/Enamorado.jpeg',
        song: '../Audios/Alexander Stewart - Enamorado (Official Lyric Video).mp3'
    },
    {
        title: 'Locked Out Of Heaven',
        artist: 'Bruno Mars',
        img: '../Img/Locked Out Of HEaven.jpeg',
        song: '../Audios/Bruno Mars - Locked Out Of Heaven (Official Music Video).mp3'
    },
    {
        title: 'Calimenio',
        artist: 'Bip',
        img: '../Img/Calimenio.jpeg',
        song: '../Audios/CALIMENIO- BIP.mp3'
    },
    {
        title: 'Azul',
        artist: 'Cristian Castro',
        img: '../Img/Azul.jpeg',
        song: '../Audios/Cristian Castro - Azul.mp3'
    },
    {
        title: 'Beliver',
        artist: 'Imagine Dragons',
        img: '../Img/Beliver.jpeg',
        song: '../Audios/Imagine Dragons - Believer (Official Music Video).mp3'
    },
    {
        title: 'Birds',
        artist: 'Imagine Dragons',
        img: '../Audios/Imagine Dragons - Birds (Animated Video).mp3',
        song: '../Img/Birds.jpeg'
    },
    {
        title: 'Bones',
        artist: 'Imagine Dragons',
        img: '../Img/Bones.jpeg',
        song: '../Audios/Imagine Dragons - Bones (Official Music Video).mp3'
    },
    {
        title: 'Demons',
        artist: 'Imagine Dragons',
        img: '../Img/Demos.jpeg',
        song: '../Audios/Imagine Dragons - Demons (Official Music Video).mp3'
    },
    {
        title: 'Natural',
        artist: 'Imagine Dragons',
        img: '../Img/Natural.jpeg',
        song: '../Audios/Imagine Dragons - Natural.mp3'
    },
    {
        title: 'Radioactive',
        artist: 'Imagine Dragons',
        img: '../Img/Radioactive.jpeg',
        song: '../Audios/Imagine Dragons - Radioactive.mp3'
    },
    {
        title: 'Sharks',
        artist: 'Imagine Dragons',
        img: '../Img/Sharks.jpeg',
        song: '../Audios/Imagine Dragons - Sharks (Official Music Video).mp3'
    },
    {
        title: 'Whatever It Takes',
        artist: 'Imagine Dragons',
        img: '../Img/Whatever It takes.jpeg',
        song: '../Audios/Imagine Dragons - Whatever It Takes (Official Music Video).mp3'
    },
    {
        title: 'En tu Pelo',
        artist: 'Javier Solis',
        img: '../Img/En tu Pelo.jpeg',
        song: '../Audios/Javier Solis - EN TU PELO.mp3'
    },
    {
        title: 'Americano',
        artist: 'Ledy Gaga',
        img: '../Img/Americano.jpeg',
        song: '../Audios/Lady Gaga - Americano (Official Audio).mp3'
    },
    {
        title: 'Sway',
        artist: 'Michael Bublé',
        img: '../Img/Sway.jpeg',
        song: '../Audios/Michael Bublé - Sway (Official Lyric Video).mp3'
    },
    {
        title: 'No Me Rendiré -- Sprit',
        artist: 'Miki Martz',
        img: '../Img/No Me Rendire.jpeg',
        song: '../Audios/Miki Martz - No Me Rendiré  Spirit (cover).mp3'
    },
    {
        title: 'Tattoo',
        artist: 'Miki Martz',
        img: '../Img/Tatto.jpeg',
        song: '../Audios/Miki Martz - TATTOO  Spanish Version (Loreen Cover).mp3'
    },
    {
        title: 'Bohemian Rhapsody',
        artist: 'Queen',
        img: '../Img/Queen.jpeg',
        song: '../Audios/Queen  Bohemian Rhapsody (Official Video Remastered).mp3'
    },
    {
        title: 'Unholy',
        artist: 'Sam Smith, Kim Petras',
        img: '../Img/Unholy.jpeg',
        song: '../Audios/Sam Smith, Kim Petras - Unholy (Official Music Video).mp3'
    },
    {
        title: 'Shinzou wo Sasageyo',
        artist: 'Linked Horizon',
        img: '../Img/Shinzow wo Sasageyo.jpeg',
        song: '../Audios/Shinzou wo Sasageyo!  by Linked Horizon - Shingeki no Kyojin S2 OP - Lyrics.mp3'
    },
    {
        title: 'The RUmbling',
        artist: 'Sim',
        img: '../Img/The Rumbling.jpeg',
        song: '../Audios/SiM  The Rumbling (OFFICIAL VIDEO).mp3'
    },
]


const audio = document.getElementById('audio')
const play = document.getElementById('play')
const pause = document.getElementById('pause')
const forward = document.getElementById('forward')
const rewind = document.getElementById('rewind')
const stop = document.getElementById('stop')

play.addEventListener('click', () => audio.play())

pause.addEventListener('click', () => audio.pause())

rewind.addEventListener('click', () => audio.currentTime -= 10)

forward.addEventListener('click', () => audio.currentTime += 10)

stop.addEventListener('click', () =>{
    audio.pause()
    audio.currentTime = 0
})
