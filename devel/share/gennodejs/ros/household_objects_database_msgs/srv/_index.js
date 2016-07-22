
"use strict";

let GetModelList = require('./GetModelList.js')
let GetModelDescription = require('./GetModelDescription.js')
let SaveScan = require('./SaveScan.js')
let TranslateRecognitionId = require('./TranslateRecognitionId.js')
let GetModelMesh = require('./GetModelMesh.js')
let GetModelScans = require('./GetModelScans.js')

module.exports = {
  GetModelList: GetModelList,
  GetModelDescription: GetModelDescription,
  SaveScan: SaveScan,
  TranslateRecognitionId: TranslateRecognitionId,
  GetModelMesh: GetModelMesh,
  GetModelScans: GetModelScans,
};
