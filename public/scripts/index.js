// MIT License
//
// Copyright (c) 2012 Universidad Politécnica de Madrid
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.

// Copyright (C) <2018> Intel Corporation
//
// SPDX-License-Identifier: Apache-2.0

// This file is borrowed from lynckia/licode with some modifications.

'use strict';
var conference;
var publicationGlobal;
var socket;

const runSocketIOSample = function() {

    let localStream;
    let showedRemoteStreams = [];
    let myId;
    let subscriptionForMixedStream;
    let myRoom;

    function getParameterByName(name) {
        name = name.replace(/[\[]/, '\\\[').replace(/[\]]/, '\\\]');
        var regex = new RegExp('[\\?&]' + name + '=([^&#]*)'),
            results = regex.exec(location.search);
        return results === null ? '' : decodeURIComponent(results[1].replace(
            /\+/g, ' '));
    }

    var subscribeForward = getParameterByName('forward') === 'true'?true:false;
    var isSelf = getParameterByName('self') === 'false'?false:true;
    conference = new Owt.Conference.ConferenceClient(
        {
            audioEncodings: true,
            videoEncodings: [{codec:{name: 'h264'}}, {codec: {name: 'vp9'}}, {codec: {name: 'vp8'}}],
            rtcConfiguration:{
              iceServers: [{
                urls: "stun:stun.l.google.com:19302" // STUN
              }, {
                urls: [
                    "turn:xrmeet.app:3478", // TURN UDP
                    "turn:xrmeet.app:3478?transport=tcp" // TURN TCP
                ],
                credential: "1bnw3brtc", // Password
                username: "ibnwebrtc" // user name
              }]
            },
        }
    );
    function createResolutionButtons(stream, subscribeResolutionCallback) {
        let $p = $(`#${stream.id}resolutions`);
        if ($p.length === 0) {
            $p = $(`<div id=${stream.id}resolutions> </div>`);
            $p.appendTo($('body'));
        }
        // Resolutions from settings.
        for (const videoSetting of stream.settings.video) {
            const resolution = videoSetting.resolution;
            if (resolution) {
                const button = $('<button/>', {
                    text: resolution.width + 'x' +
                        resolution.height,
                    click: () => {
                        subscribeResolutionCallback(stream, resolution);
                    }
                });
                button.prependTo($p);
            }
        }
        // Resolutions from extraCapabilities.
        for (const resolution of stream.extraCapabilities.video.resolutions.reverse()) {
            const button = $('<button/>', {
                text: resolution.width + 'x' +
                    resolution.height,
                click: () => {
                    subscribeResolutionCallback(stream, resolution);
                }
            });
            button.prependTo($p);
        };
        return $p;
    }
    function subscribeAndRenderVideo(stream){
        console.log('subscribeAndRenderVideo');
        let subscirptionLocal=null;
        function subscribeDifferentResolution(stream, resolution){
            subscirptionLocal && subscirptionLocal.stop();
            subscirptionLocal = null;
            const videoOptions = {};
            videoOptions.resolution = resolution;
            conference.subscribe(stream, {
                audio: true,
                video: videoOptions
            }).then((
                subscription) => {
                    subscirptionLocal = subscription;
                $(`#${stream.id}`).get(0).srcObject = stream.mediaStream;
            });
        }
        let $p = createResolutionButtons(stream, subscribeDifferentResolution);
        conference.subscribe(stream)
        .then((subscription)=>{
            console.log('Subscribe function')
            subscirptionLocal = subscription;
            let $video = $(`<video controls autoplay id=${stream.id} style="display:block" >this browser does not supported video tag</video>`);
           $video.get(0).srcObject = stream.mediaStream;
           $p.append($video);
        }, (err)=>{ console.log('subscribe failed', err);
        });
        stream.addEventListener('ended', () => {
            removeUi(stream.id);
            $(`#${stream.id}resolutions`).remove();
        });
        stream.addEventListener('updated', () => {
            // Update resolution buttons
            $p.children('button').remove();
            createResolutionButtons(stream, subscribeDifferentResolution);
        });
    }
    function removeUi(id){
        $(`#${id}`).remove();
    }


    function subscribeToStream(stream){
        console.log('subscribeToStream');
        let subscirptionLocal=null;
            subscirptionLocal && subscirptionLocal.stop();
            subscirptionLocal = null;
            const videoOptions = {};
            // videoOptions.resolution = resolution;
            conference.subscribe(stream, {
                audio: true,
                video: videoOptions
            }).then((
                subscription) => {
                    subscirptionLocal = subscription;
                    let $video = $(`<video controls autoplay id=${stream.id} style="display:block" >this browser does not supported video tag</video>`);
                    $video.get(0).srcObject = stream.mediaStream;
                    $video.appendTo($('body'));
            }, (err)=>{ console.log('subscribe failed', err); });
    }


    conference.addEventListener('streamadded', (event) => {
        console.log('A new stream is added ', event.stream.id);
        isSelf = isSelf?isSelf:event.stream.id != publicationGlobal.id;
        subscribeForward && isSelf && subscribeAndRenderVideo(event.stream);
        subscribeToStream(event.stream);
        mixStream(myRoom, event.stream.id, 'common');
        event.stream.addEventListener('ended', () => {
            console.log(event.stream.id + ' is ended.');
        });
    });


    window.onload = function() {
        var simulcast = getParameterByName('simulcast') || false; // true;
        var shareScreen = getParameterByName('screen') || true;
        myRoom = getParameterByName('room');
        var isHttps = (location.protocol === 'https:');
        var mediaUrl = getParameterByName('url');
        var isPublish =  getParameterByName('publish');
        createToken(myRoom, 'user', 'presenter', function(response) {
            var token = response;
            conference.join(token).then(resp => {
                console.log('conference.join(token)');
                myId = resp.self.id;
                myRoom = resp.id;
                socket = io.connect('http://localhost:3001', { query: {roomID: myRoom, sTime: Date.now() } });
                if(mediaUrl){
                     startStreamingIn(myRoom, mediaUrl);
                }
                if (isPublish !== 'false') {
                    // audioConstraintsForMic
                    let audioConstraints = new Owt.Base.AudioTrackConstraints(Owt.Base.AudioSourceInfo.MIC);
                    // videoConstraintsForCamera
                    let videoConstraints = new Owt.Base.VideoTrackConstraints(Owt.Base.VideoSourceInfo.CAMERA);
                    if (shareScreen) {
                        // audioConstraintsForScreen
                        audioConstraints = new Owt.Base.AudioTrackConstraints(Owt.Base.AudioSourceInfo.SCREENCAST);
                        // videoConstraintsForScreen
                        videoConstraints = new Owt.Base.VideoTrackConstraints(Owt.Base.VideoSourceInfo.SCREENCAST);
                    }

                    let mediaStream;
                    Owt.Base.MediaStreamFactory.createMediaStream(new Owt.Base.StreamConstraints(
                        audioConstraints, videoConstraints)).then(stream => {
                        let publishOption;
                        if (true) {
                            publishOption = {video:[
                                {rid: 'q', active: true, scaleResolutionDownBy: 4.0},
                                {rid: 'h', active: true, scaleResolutionDownBy: 2.0},
                                {rid: 'f', active: true, scaleResolutionDownBy: 1.0}
                            ]};
                        }
                        mediaStream = stream;
                        const codecs = ['vp8', 'h264'];
                        localStream = new Owt.Base.LocalStream(
                            mediaStream, new Owt.Base.StreamSourceInfo(
                                'mic', 'camera'));
                        $('.local video').get(0).srcObject = stream;
                        console.log(mediaStream, localStream);
                        conference.publish(localStream, publishOption, codecs).then(publication => {
                            console.log('Publish function');
                            startRecordingSes(myRoom);
                            publicationGlobal = publication;
                            mixStream(myRoom, publication.id, 'common')
                            publication.addEventListener('error', (err) => {
                                console.log('Publication error: ' + err.error.message);
                            });
                        },  err => {
                                console.error('ERROR during publish ' +
                                    err);
                            });
                    }, err => {
                        console.error('Failed to create MediaStream, ' +
                            err);
                    });
                }
                var streams = resp.remoteStreams;
                console.log('streams', streams);
                for (const stream of streams) {
                    console.log('stream loop', stream);
                    if(!subscribeForward){
                      if (stream.source.audio === 'mixed' || stream.source.video ===
                        'mixed') {
                        subscribeAndRenderVideo(stream);
                      }
                    } else if (stream.source.audio !== 'mixed') {
                        subscribeAndRenderVideo(stream);
                    }
                }
                console.log('Streams in conference:', streams.length);
                var participants = resp.participants;
                console.log('Participants in conference: ' + participants.length);
            }, function(err) {
                console.error('server connection failed:', err);
                if (err.message.indexOf('connect_error:') >= 0) {
                    const signalingHost = err.message.replace('connect_error:', '');
                    const signalingUi = 'signaling';
                    removeUi(signalingUi);
                    let $p = $(`<div id=${signalingUi}> </div>`);
                    const anchor = $('<a/>', {
                        text: 'Click this for testing certificate and refresh',
                        target: '_blank',
                        href: `${signalingHost}/socket.io/`
                    });
                    anchor.appendTo($p);
                    $p.appendTo($('body'));
                }
            });
        });
    };
};

$('.endRec').on('click', function (params) {
    console.log('stop');
    stopRecordingSes();
});

$('.showRec').on('click', function (params) {
    console.log('stop');
    getRecordingsSes();
});


window.onbeforeunload = function(event){
    conference.leave()
    publicationGlobal.stop();
}
