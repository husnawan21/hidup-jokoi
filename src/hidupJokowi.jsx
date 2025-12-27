import hidupJokowiAudio from './assets/hidup-jokowi.mp3';

function HidupJokowi() {
    return (
        <div>
            <img src="./assets/hidup-jokowi.jpeg" alt="" />
            <p>Listen to some music:</p>
            <audio src={hidupJokowiAudio} controls /> {/* The 'controls' attribute adds play/pause buttons etc. */}
        </div>
    );
}

export default HidupJokowi;