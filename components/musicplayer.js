const MusicPlayer = {

    render:()=>{
        return `
        <div class="music-player">
        <div class="track-details">
            <div class="track-cover rotate-anim">
            <img src="./img/3babies.png" alt="3babies">
            </div>
            <div class="track-name">
                track name
            </div>
            <div class="track-artist">
        track artist
            </div>
        </div>
    
        <div class="slider-container">
            <div class="current-time">
                00:00
            </div>
            <input type="range" min="1" max="100" value="0" class="slider">
            <div class="total-duration">
                00:00
            </div>
        </div>
    
        <div class="buttons">
            <div class="shuffle">
                <i class="fas fa-random fa" title="shuffle"></i>
            </div>
            <div class="prev-track">
                <i class="fa-solid fa-backward-step fa" title="previous"></i>
            </div>
            <div class="play-pause">
                <i class="fa-solid fa-circle-play fa" title="play"></i>
            </div>
            <div class="next-track">
                <i class="fa-solid fa-forward-step fa" title="next"></i>
            </div>
            <div class="repeat">
                <i class="fa fa-repeat fa" title="repeat"></i>
            </div>
        </div>
    </div>
        `
    }
}
export default MusicPlayer;