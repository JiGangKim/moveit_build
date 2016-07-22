// Auto-generated. Do not edit!

// (in-package household_objects_database_msgs.srv)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------


//-----------------------------------------------------------

class TranslateRecognitionIdRequest {
  constructor() {
    this.recognition_id = '';
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type TranslateRecognitionIdRequest
    // Serialize message field [recognition_id]
    bufferInfo = _serializer.string(obj.recognition_id, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type TranslateRecognitionIdRequest
    let tmp;
    let len;
    let data = new TranslateRecognitionIdRequest();
    // Deserialize message field [recognition_id]
    tmp = _deserializer.string(buffer);
    data.recognition_id = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'household_objects_database_msgs/TranslateRecognitionIdRequest';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '4d95610f63ed69a670a8f8aaa3c6aa36';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    string recognition_id
    
    `;
  }

};

class TranslateRecognitionIdResponse {
  constructor() {
    this.household_objects_id = 0;
    this.ID_NOT_FOUND = 0;
    this.DATABASE_ERROR = 0;
    this.OTHER_ERROR = 0;
    this.result = 0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type TranslateRecognitionIdResponse
    // Serialize message field [household_objects_id]
    bufferInfo = _serializer.int32(obj.household_objects_id, bufferInfo);
    // Serialize message field [ID_NOT_FOUND]
    bufferInfo = _serializer.int32(obj.ID_NOT_FOUND, bufferInfo);
    // Serialize message field [DATABASE_ERROR]
    bufferInfo = _serializer.int32(obj.DATABASE_ERROR, bufferInfo);
    // Serialize message field [OTHER_ERROR]
    bufferInfo = _serializer.int32(obj.OTHER_ERROR, bufferInfo);
    // Serialize message field [result]
    bufferInfo = _serializer.int32(obj.result, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type TranslateRecognitionIdResponse
    let tmp;
    let len;
    let data = new TranslateRecognitionIdResponse();
    // Deserialize message field [household_objects_id]
    tmp = _deserializer.int32(buffer);
    data.household_objects_id = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [ID_NOT_FOUND]
    tmp = _deserializer.int32(buffer);
    data.ID_NOT_FOUND = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [DATABASE_ERROR]
    tmp = _deserializer.int32(buffer);
    data.DATABASE_ERROR = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [OTHER_ERROR]
    tmp = _deserializer.int32(buffer);
    data.OTHER_ERROR = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [result]
    tmp = _deserializer.int32(buffer);
    data.result = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'household_objects_database_msgs/TranslateRecognitionIdResponse';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'b4afd505fbee150bf06acaffa82e84cf';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    int32 household_objects_id
    
    int32 SUCCESS=0
    int32 ID_NOT_FOUND
    int32 DATABASE_ERROR
    int32 OTHER_ERROR
    int32 result
    
    
    `;
  }

};

// Constants for message
TranslateRecognitionIdResponse.Constants = {
  SUCCESS: 0,
}

module.exports = {
  Request: TranslateRecognitionIdRequest,
  Response: TranslateRecognitionIdResponse
};
