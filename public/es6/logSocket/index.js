/**
 * Created by Ellery1 on 16/5/24.
 */
import io from 'socket.io-client/socket.io';

var socket = io('http://127.0.0.1:3000');

socket.on('log', function (log) {

    var url = log.url;
    console.log('REQUEST:' + url);
    console.log(log);
});