import * as handTrack from 'handtrackjs';

async function startHands() {

    const video = document. getElementById('video_id')
    const canvas = document. getElementById('canvas_id')
    const context = canvas.getContext("2d")
    const mediasource = video

    async function detect(){
        const predictions = await model.detect(video)
        model.renderPredictions(predictions, canvas, context, mediasource); 
        //console.log(predictions)
        requestAnimationFrame(detect)
    }

    
/* 
canvas: reference to html canvas element where predictions are rendered.
context: canvas 2D context
mediasource: prediction input (img/video/canvas element) 
*/



    const model = await handTrack.load()

    handTrack.startVideo(video)
        .then((status)=>{
            if(status){
                detect()    
            }
        })
}

export { startHands }
