// Copyright (C) <2018> Intel Corporation
//
// SPDX-License-Identifier: Apache-2.0

// REST samples. It sends HTTP requests to sample server, and sample server sends requests to conference server.
// Both this file and sample server are samples.
'use strict';
var send = function (method, path, body, onRes, host) {
    // host = 'https://xrmeet.app:3004';  // custom server host HARD CODED 
    var req = new XMLHttpRequest()
    req.onreadystatechange = function () {
        if (req.readyState === 4) {
            onRes(req.responseText);
        }
    };
    let url = generateUrl(host, path);
    console.log(url);
    req.open(method, url, true);
    req.setRequestHeader('Content-Type', 'application/json');
    if (body !== undefined) {
        req.send(JSON.stringify(body));
        console.log('body', JSON.stringify(body))
    } else {
        req.send();
    }
};

var generateUrl = function(host, path) {
    console.log(host, path);
    let url;
    if (host !== undefined) {
        url = host + path;  // Use the host user set.
    }else {
        let u = new URL(document.URL);
        url = u.origin + path;  // Get the string before last '/'.
    }
    return url;
}

var onResponse = function (result) {
    if (result) {
        try {
            console.info('Result:', JSON.parse(result));
        } catch (e) {
            console.info('Result:', result);
        }
    } else {
        console.info('Null');
    }
};

var mixStream = function (room, stream, view, host) {
    console.log('mixStream')
    var jsonPatch = [{
        op: 'add',
        path: '/info/inViews',
        value: view
    }];
    send('PATCH', '/rooms/' + room + '/streams/' + stream, jsonPatch,
        onResponse, host);
};

var startStreamingIn = function (room, inUrl, host) {
    console.log(room, inUrl, host);
    var options = {
        url: inUrl,
        media: {
            audio: 'auto',
            video: true
        },
        transport: {
            protocol: 'udp',
            bufferSize: 2048
        }
    };
    send('POST', '/rooms/' + room + '/streaming-ins', options, onResponse, host);
};


let recID;
let roomID;
var startRecordingSes = function (room, host) {
    roomID = room;
    console.log(room, host);
    var options = {
        container: 'mkv',
        media: {
            audio: {
                from: room+'-common'
            },
            video: {
                from: room+'-common',
                parameters: {
                  keyFrameInterval: 2
                }
            }
        }
    };
    send('POST', '/rooms/' + room + '/recordings', options, function(recordingRtn) {
        var result = JSON.parse(recordingRtn);
        recID = result.id;
        console.log(recordingRtn, recID);
    }, host);
};


var stopRecordingSes = function(room, id, callback, callbackError) {
    // if (typeof id !== 'string' || id.trim().length === 0) {
    //   return callbackError('Invalid recording ID');
    // }
    send('DELETE', '/rooms/' + roomID + '/recordings/' + recID, undefined, function(result) {
    //   callback(result);
      console.log(result);
    }, callbackError);
  };


var getRecordingsSes = function(room, callback, callbackError) {
    send('GET', '/rooms/' + roomID + '/recordings/', undefined, function(recordingList) {
      var result = JSON.parse(recordingList);
      console.log(result);
    //   callback(result);
    }, callbackError);
};

var createToken = function (room, user, role, callback, host) {
    // var body = {
    //     room: room,
    //     user: user,
    //     role: role
    // };
    var body = {
        "role": "presenter",
        "username": "admin",
        "room": "5f7eed50d0165f063ad5f07c",
        // "user": "admin",
        // "options": {}
    };
    // send('POST', '/tokens/', body, callback, host);
    // send('POST', '/createRoom/', body, callback, host);
    send('POST', '/createToken/', body, callback, host);
};
