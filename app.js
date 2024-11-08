
const playList = [
    {
        title: 'Dream On',
        artist: 'Aerosmith',
        img: '../Img/Dream On.jpeg',
        song: '../Audios/Aerosmith - Dream On (Audio).mp3',
        keywords: ['dream', 'fly', 'life', 'music'] // Palabras clave relacionadas con la canción
    },
    {
        title: 'Caballero',
        artist: 'Alejandro Fernández',
        img: '../Img/Caballero.jpeg',
        song: '../Audios/Alejandro Fernández - Caballero (Video Oficial).mp3',
        keywords: ['honor', 'amor', 'caballero', 'mexico']
    },
    {
        title: 'Sin miedo a nada',
        artist: 'Alex Ubago',
        img: '../Img/Sin miedo a nada.jpeg',
        song: '../Audios/Alex Ubago - Sin miedo a nada  (videoclip oficial).mp3',
        keywords: ['miedo', 'nada', 'amor', 'vida']
    },
    {
        title: 'Enamorado',
        artist: 'Alexander Stewart',
        img: '../Img/Enamorado.jpeg',
        song: '../Audios/Alexander Stewart - Enamorado (Official Lyric Video).mp3',
        keywords: ['amor', 'corazon', 'latidos', 'vida']
    },
    {
        title: 'Locked Out Of Heaven',
        artist: 'Bruno Mars',
        img: '../Img/Locked Out Of HEaven.jpeg',
        song: '../Audios/Bruno Mars - Locked Out Of Heaven (Official Music Video).mp3',
        keywords: ['heaven', 'locked', 'love', 'feeling']
    },
    {
        title: 'Calimenio',
        artist: 'Bip',
        img: '../Img/Calimenio.jpeg',
        song: '../Audios/CALIMENIO- BIP.mp3',
        keywords: ['calimenio', 'baila', 'ritmo', 'alegría']
    },
    {
        title: 'Azul',
        artist: 'Cristian Castro',
        img: '../Img/Azul.jpeg',
        song: '../Audios/Cristian Castro - Azul.mp3',
        keywords: ['azul', 'cielo', 'mar', 'amor']
    },
    {
        title: 'Believer',
        artist: 'Imagine Dragons',
        img: '../Img/Beliver.jpeg',
        song: '../Audios/Imagine Dragons - Believer (Official Music Video).mp3',
        keywords: ['believe', 'pain', 'power', 'fire']
    },
    {
        title: 'Birds',
        artist: 'Imagine Dragons',
        img: '../Img/Birds.jpeg',
        song: '../Audios/Imagine Dragons - Birds (Animated Video).mp3',
        keywords: ['birds', 'fly', 'sky', 'dreams']
    },
    {
        title: 'Bones',
        artist: 'Imagine Dragons',
        img: '../Img/Bones.jpeg',
        song: '../Audios/Imagine Dragons - Bones (Official Music Video).mp3',
        keywords: ['bones', 'fear', 'truth', 'alive']
    },
    {
        title: 'Demons',
        artist: 'Imagine Dragons',
        img: '../Img/Demos.jpeg',
        song: '../Audios/Imagine Dragons - Demons (Official Music Video).mp3',
        keywords: ['demons', 'inside', 'dark', 'soul']
    },
    {
        title: 'Natural',
        artist: 'Imagine Dragons',
        img: '../Img/Natural.jpeg',
        song: '../Audios/Imagine Dragons - Natural.mp3',
        keywords: ['natural', 'survivor', 'fight', 'strength']
    },
    {
        title: 'Radioactive',
        artist: 'Imagine Dragons',
        img: '../Img/Radioactive.jpeg',
        song: '../Audios/Imagine Dragons - Radioactive.mp3',
        keywords: ['radioactive', 'wake', 'new', 'revolution']
    },
    {
        title: 'Sharks',
        artist: 'Imagine Dragons',
        img: '../Img/Sharks.jpeg',
        song: '../Audios/Imagine Dragons - Sharks (Official Music Video).mp3',
        keywords: ['sharks', 'ocean', 'hunt', 'deep']
    },
    {
        title: 'Whatever It Takes',
        artist: 'Imagine Dragons',
        img: '../Img/Whatever It takes.jpeg',
        song: '../Audios/Imagine Dragons - Whatever It Takes (Official Music Video).mp3',
        keywords: ['whatever', 'rise', 'challenge', 'heart']
    },
    {
        title: 'En tu Pelo',
        artist: 'Javier Solis',
        img: '../Img/En tu Pelo.jpeg',
        song: '../Audios/Javier Solis - EN TU PELO.mp3',
        keywords: ['pelo', 'beso', 'amor', 'mirada']
    },
    {
        title: 'Americano',
        artist: 'Lady Gaga',
        img: '../Img/Americano.jpeg',
        song: '../Audios/Lady Gaga - Americano (Official Audio).mp3',
        keywords: ['americano', 'freedom', 'dream', 'love']
    },
    {
        title: 'Die With A Smile',
        artist: 'Lady Gaga, Bruno Mars',
        img: '../Img/Die With A Smile.jpeg',
        song: '../Audios/Lady Gaga, Bruno Mars - Die With A Smile (Official Music Video).mp3',
        keywords: ['smile', 'die', 'love', 'forever']
    },
    {
        title: 'Sway',
        artist: 'Michael Bublé',
        img: '../Img/Sway.jpeg',
        song: '../Audios/Michael Bublé - Sway (Official Lyric Video).mp3',
        keywords: ['sway', 'dance', 'move', 'rhythm']
    },
    {
        title: 'No Me Rendiré -- Spirit',
        artist: 'Miki Martz',
        img: '../Img/No Me Rendire.jpeg',
        song: '../Audios/Miki Martz - No Me Rendiré  Spirit (cover).mp3',
        keywords: ['spirit', 'fight', 'dream', 'freedom']
    },
    {
        title: 'Tattoo',
        artist: 'Miki Martz',
        img: '../Img/Tatto.jpeg',
        song: '../Audios/Miki Martz - TATTOO  Spanish Version (Loreen Cover).mp3',
        keywords: ['tattoo', 'skin', 'mark', 'forever']
    },
    {
        title: 'Bohemian Rhapsody',
        artist: 'Queen',
        img: '../Img/Queen.jpeg',
        song: '../Audios/Queen  Bohemian Rhapsody (Official Video Remastered).mp3',
        keywords: ['bohemian', 'queen', 'life', 'reality']
    },
    {
        title: 'Unholy',
        artist: 'Sam Smith, Kim Petras',
        img: '../Img/Unholy.jpeg',
        song: '../Audios/Sam Smith, Kim Petras - Unholy (Official Music Video).mp3',
        keywords: ['unholy', 'love', 'dark', 'truth']
    },
    {
        title: 'Shinzou wo Sasageyo',
        artist: 'Linked Horizon',
        img: '../Img/Shinzow wo Sasageyo.jpeg',
        song: '../Audios/Shinzou wo Sasageyo!  by Linked Horizon - Shingeki no Kyojin S2 OP - Lyrics.mp3',
        keywords: ['heart', 'fight', 'sacrifice', 'freedom']
    },
    {
        title: 'The Rumbling',
        artist: 'SiM',
        img: '../Img/The Rumbling.jpeg',
        song: '../Audios/SiM  The Rumbling (OFFICIAL VIDEO).mp3',
        keywords: ['rumbling', 'giant', 'power', 'fear']
    }
]

let currentSongIndex = 0;

const audio = document.getElementById('audio');
const play = document.getElementById('play');
const pause = document.getElementById('pause');
const forward = document.getElementById('forward');
const rewind = document.getElementById('rewind');
const stop = document.getElementById('stop');
const next = document.getElementById('next');
const previous = document.getElementById('previous');

const playerImage = document.querySelector('.player__img');
const playerArtist = document.querySelector('.player__artist');
const playerSongTitle = document.querySelector('.player__song');


let foundWords = new Set(); // Para registrar las palabras encontradas

function loadAndPlaySong(index) {
    currentSongIndex = index;
    const song = playList[currentSongIndex];
    audio.src = song.song;
    playerImage.src = song.img;
    playerArtist.textContent = song.artist;
    playerSongTitle.textContent = song.title;
    audio.play();

    // Resetear las palabras encontradas y generar la nueva sopa
    foundWords.clear();
    generateWordSearch(song.keywords);
}

function generateWordSearch(keywords) {
    const wordSearchContainer = document.getElementById('word-search-container');
    wordSearchContainer.innerHTML = ''; // Limpiar cualquier sopa existente

    const grid = Array.from({ length: 10 }, () => Array(10).fill(' '));
    keywords.forEach((word, index) => {
        let row = index % 10, col = index % 10;
        for (let i = 0; i < word.length; i++) {
            if (col + i < 10) grid[row][col + i] = word[i].toUpperCase();
        }
    });

    grid.forEach(row => {
        row.forEach(letter => {
            const cell = document.createElement('div');
            cell.className = 'letter';
            cell.innerText = letter !== ' ' ? letter : randomLetter();
            cell.addEventListener('click', () => selectLetter(cell)); // Agregar el evento de selección
            wordSearchContainer.appendChild(cell);
        });
    });

    checkCompletion();
}

function randomLetter() {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return letters[Math.floor(Math.random() * letters.length)];
}


let selectedLetters = []; // Almacena las letras seleccionadas

function selectLetter(cell) {
    cell.classList.toggle('selected'); // Resalta o desmarca la letra
    if (cell.classList.contains('selected')) {
        selectedLetters.push(cell);
    } else {
        selectedLetters = selectedLetters.filter(letter => letter !== cell);
    }
    checkWord();
}

function checkWord() {
    const word = selectedLetters.map(cell => cell.innerText).join('').toLowerCase();
    const keywords = playList[currentSongIndex].keywords;

    if (keywords.includes(word) && !foundWords.has(word)) {
        foundWords.add(word);
        selectedLetters.forEach(cell => cell.classList.add('found')); // Marcar como encontrada
        selectedLetters = []; // Limpiar selección
        checkCompletion(); // Verificar si todas las palabras fueron encontradas
    }
}

function checkCompletion() {
    const keywords = playList[currentSongIndex].keywords;
    if (foundWords.size === keywords.length) {
        alert("¡Felicitaciones! Has encontrado todas las palabras.");
    }
}



// Reproducir la canción actual
play.addEventListener('click', () => audio.play());

// Pausar la canción
pause.addEventListener('click', () => audio.pause());

// Retroceder 10 segundos
rewind.addEventListener('click', () => audio.currentTime -= 10);

// Avanzar 10 segundos
forward.addEventListener('click', () => audio.currentTime += 10);

// Detener la canción
stop.addEventListener('click', () => {
    audio.pause();
    audio.currentTime = 0;
});

// Reproducir la siguiente canción
function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % playList.length;
    loadAndPlaySong(currentSongIndex);
}

// Reproducir la canción anterior
function previousSong() {
    currentSongIndex = (currentSongIndex - 1 + playList.length) % playList.length;
    loadAndPlaySong(currentSongIndex);
}

// Cambiar canciones automáticamente cuando termina la actual
audio.addEventListener('ended', nextSong);

// Botones para cambiar canciones manualmente
next.addEventListener('click', nextSong);
previous.addEventListener('click', previousSong);

// Cargar la primera canción al iniciar
loadAndPlaySong(currentSongIndex);
