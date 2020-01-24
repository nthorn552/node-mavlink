/*
 * index.js
 *
 * Copyright (c) 2019,
 * Institute of Flight Mechanics and Control, University of Stuttgart.
 * Pascal Groß <pascal.gross@ifr.uni-stuttgart.de>
 * All rights reserved.
 *
 * This program is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation; either
 * version 3 of the License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program; if not, write to the Free Software Foundation,
 * Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.
 */

var SerialPort = require('serialport');
var messageRegistry = require('./assets/messageRegistry');
var mavLink = require('@surely552/node-mavlink')(messageRegistry);

var serialPort = new SerialPort('COM4', {
    baudRate: 57600
});

serialPort.on('data', function (data) {
    mavLink.parse(data);
});

mavLink.on('error', function (e) {
    //console.log(e);
});

mavLink.on('message', function (message) {
    // event listener for all messages
    console.log(message);
});

mavLink.on('COMMAND_LONG', function (bytes) {
    console.log('Sending COMMAND_LONG to PX4');
    serialPort.write(bytes);
});

mavLink.on('HIGHRES_IMU', function (message) {
    // event listener for HIGHRES_IMU message
    console.log(message);
});
