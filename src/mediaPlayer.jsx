import React, { useState, useRef } from 'react';

// 1. Import your assets here
import hidupJokowiAudio from './assets/hidup-jokowi.mp3';
import hidupJokowiImg from './assets/hidup-jokowi.jpeg';

const MediaPlayer = () => {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false); // State untuk status play/pause

    // Fungsi untuk menangani klik pada gambar
    const handleImageClick = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play();
            }
            setIsPlaying(!isPlaying); // Ubah status true/false
        }
    };

    return (
        <div style={{ textAlign: 'center', padding: '20px' }}>
            <h1>Hidup Jokowi!</h1>
            <p style={{ fontSize: '14px', color: '#666' }}>
            </p>

            {/* IMAGE */}
            <img
                src={hidupJokowiImg}
                alt="Display"
                onClick={handleImageClick} // Tambahkan event click di sini
                style={{
                    width: '300px',
                    borderRadius: '10px',
                    cursor: 'pointer', // Mengubah kursor jadi telunjuk tangan
                    border: isPlaying ? '5px solid #af4c4cff' : 'none', // (Opsional) Efek visual saat main
                    transition: '0.3s'
                }}
            />

            <br /><br />

            {/* AUDIO */}
            <audio
                ref={audioRef}
                src={hidupJokowiAudio}
                loop // Audio akan berulang terus
            // controls // Boleh dihapus jika ingin menyembunyikan player bawaan
            />
        </div>
    );
};

export default MediaPlayer;