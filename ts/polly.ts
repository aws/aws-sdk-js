import Polly = require('../clients/polly');

const client: Polly = new Polly(<Polly.ClientConfiguration>{
    signatureVersion: 'v4',
    region: 'us-east-1'
});

const params: Polly.SynthesizeSpeechInput = {
    Text: 'foo',
    OutputFormat: 'mp3',
    VoiceId: 'Kimberly'
};

client.synthesizeSpeech(params, (err, data) => {
    if (err) {
        console.log(err.code);
    } else if (data) {
        if (data.AudioStream instanceof Buffer) {
            console.log(data.AudioStream.toString());
        }
    }
});

var presigner: Polly.Presigner = new Polly.Presigner(<Polly.Presigner.PresignerOptions>{
    service: client
});

var params2: Polly.Presigner.GetSynthesizeSpeechUrlInput = params;
const url = presigner.getSynthesizeSpeechUrl(params2);
console.log(url.length);

presigner.getSynthesizeSpeechUrl(params, (err, url) => {});

presigner.getSynthesizeSpeechUrl(params, 1000, (err, url) => {});
const url2 = presigner.getSynthesizeSpeechUrl(params, 100);
