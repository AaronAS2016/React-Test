import React, {Component} from 'react'
import VideoPlayerLayout from '../components/video-player-layout'
import Video from '../components/video'
import Title from '../components/title'
import PlayPause  from '../components/play-pause'
import Timer from '../components/timmer';
import Controls from '../components/video-player-controls'
import formatterVideo from '../../utils/video-player';
import ProgressBar from '../components/progress-bar';
import Spinner from '../components/spinner';

class VideoPlayer extends Component{
    
    state = {
        pause: false,
        duration: 0,
        currentTime: 0,
        loading: false
    }
    togglePlay = () =>{
        this.setState({
            pause: !this.state.pause
        })
    }

    componentDidMount(){
        this.setState({
            pause: (!this.props.autoplay) 
        })
    }

    handleLoadedMetadata = event => {
        this.video = event.target;
        this.setState({
            duration: this.video.duration
        })
    }

    handleTimeUpdate = event => {
        this.setState({
            currentTime: this.video.currentTime
        })
    }

    handleProgressChange = event => {
        this.video.currentTime = event.target.value
    }

    handleSeeking = event =>{
        this.setState({
            loading:true
        })
    }

    handleSeeked = event =>{
        this.setState({
            loading:false
        })
    }
    
    render(){
        return (
            <VideoPlayerLayout>
                <Title 
                    title="Titulo"
                />
                <Controls>
                    <Timer 
                        duration={formatterVideo(this.state.duration)}
                        currentTime={formatterVideo(this.state.currentTime)}
                    />
                    <PlayPause
                        pause={this.state.pause}
                        handleClick={this.togglePlay}
                    />

                    <ProgressBar duration={this.state.duration} value={this.state.currentTime} handleProgressChange={this.handleProgressChange}/>
                </Controls>
                <Spinner active={this.state.loading}/>

                <Video 
                    autoplay={this.props.autoplay}
                    pause={this.state.pause}
                    handleLoadedMetadata = {this.handleLoadedMetadata}
                    handleTimeUpdate={this.handleTimeUpdate}
                    handleSeeking={this.handleSeeking}
                    handleSeeked={this.handleSeeked}
                    src="http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4"
                />
            </VideoPlayerLayout>
        )
    }
}

export default VideoPlayer;